import createRouter, { PluginFactory, Route, Router, cloneRouter, constants } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { MiddlewareFactory } from 'router5/types/types/router'

import { getService, getStore } from '../../utils/global'

import { StoreName } from 'lib/store/constants'

import { BASE_URL } from 'lib/constants/api'

import { ServiceName } from '../types/constants'

import { ICustomRoute, UNKNOWN_ROUTE, routes } from 'constants/routes'

export type IRouter = Router

export class RouterService {
  protected static instance: IRouter

  constructor() {
    const formattedRoutes = RouterService.getFormattedRoutes(routes)

    RouterService.instance = createRouter(formattedRoutes, {
      allowNotFound: true,
    })

    this.setPlugins([this.getBrowserPlugin()])
  }

  private traverseRoutes(routes: ICustomRoute[]) {
    let result: ICustomRoute[] = []

    routes.forEach((route) => {
      result.push(route)

      if (route.children) {
        result = result.concat(this.traverseRoutes(route.children))
      }
    })

    return result
  }

  public static getFormattedRoutes(routes: ICustomRoute[]): Route[] {
    return routes.map(RouterService.getFormattedRoute)
  }

  public static getFormattedRoute({ children, component, ...route }: ICustomRoute): Route {
    if (children) {
      return {
        ...route,
        children: RouterService.getFormattedRoutes(children),
      }
    }

    return route
  }

  public getInstance(): IRouter {
    return RouterService.instance
  }

  public getClonedInstance(): IRouter {
    return cloneRouter(this.getInstance())
  }

  public getBrowserPlugin(): PluginFactory {
    return browserPlugin({
      base: BASE_URL === '/' ? '' : BASE_URL,
    })
  }

  public getRouteConfig({
    route,
    isModule = false,
  }: {
    route: Route | undefined
    isModule?: boolean
  }) {
    if (!route) {
      return UNKNOWN_ROUTE
    }

    let routeName = route.name
    let routeConfig = this.getRouteByName(routeName)

    if (routeConfig) {
      if (isModule) {
        if (routeName.includes('.')) {
          routeName = routeName.split('.')[0]
          routeConfig = this.getRouteByName(routeName)
        }

        // @ts-expect-error
        if (!routeConfig.isModule) {
          return UNKNOWN_ROUTE
        }
      }

      return routeConfig
    }

    return UNKNOWN_ROUTE
  }

  public getAuthorizationMiddleware: () => MiddlewareFactory = () => () => (
    toState,
    fromState,
    done
  ) => {
    const userStore = getStore(StoreName.USER)
    const routeConfig = this.getRouteConfig({ route: toState })
    const isUnknownRoute = this.getIsUnknownRoute(routeConfig)

    if (isUnknownRoute || routeConfig.withAuth) {
      if (userStore.isAuthorized) {
        done()
      } else {
        userStore
          .refreshSession()
          .then(() => done())
          .catch((error) => {
            console.error(error)

            if (!isUnknownRoute) {
              this.getInstance().navigate('login')
            } else {
              done()
            }
          })
      }
    } else {
      done()
    }

    // avoid transition state mutation
    return undefined
  }

  public setPlugins(plugins: PluginFactory[]) {
    const instance = this.getInstance()

    plugins.forEach((plugin) => instance.usePlugin(plugin))
  }

  public setMiddlewares(middlewares: MiddlewareFactory[]) {
    const instance = this.getInstance()

    middlewares.forEach((middleware) => instance.useMiddleware(middleware))
  }

  public getRouteByName(routeName: string): ICustomRoute | undefined {
    const routePath = routeName.split('.')

    let currentRoutes = routes

    for (let index = 0; index < routePath.length; index += 1) {
      const name = routePath[index]
      const buffer = currentRoutes.find((routeConfig) => routeConfig.name === name)

      if (buffer) {
        if (index === routePath.length - 1) {
          return buffer
        }

        if (buffer.children) {
          currentRoutes = buffer.children
        } else {
          return undefined
        }
      } else {
        return undefined
      }
    }
  }

  public getRouteComponent(routeName: string): ICustomRoute['component'] | null {
    const route = this.getRouteByName(routeName)

    if (route) {
      return route.component
    }

    return UNKNOWN_ROUTE.component
  }

  public getIsUnknownRoute(route: { name: string }): boolean {
    return route.name === constants.UNKNOWN_ROUTE
  }

  public isRouteWithMenu(route: Route): boolean {
    if (route && route.name) {
      const section = this.getRouteByName(route.name)

      if (section) {
        return section.withMenu
      }

      return false
    }
  }

  public getMenuRoutes(): ICustomRoute[] {
    const flattenRoutes = this.traverseRoutes(routes)

    return flattenRoutes.filter((route) => route.inMenu)
  }

  public getPathWithoutBaseURL(): string {
    const { pathname } = window.location

    if (BASE_URL === '/') {
      return pathname
    }

    return pathname.replace(BASE_URL, '')
  }
}
