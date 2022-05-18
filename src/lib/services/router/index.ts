import createRouter, { cloneRouter, constants, PluginFactory, Route, Router } from 'router5'
import { MiddlewareFactory } from 'router5/types/types/router'
import browserPlugin from 'router5-plugin-browser'

import { BASE_URL } from 'src/lib/constants/api'
import { ICustomRoute, routes, UNKNOWN_ROUTE } from 'src/lib/constants/routes'
import { StoreName } from 'src/lib/store/constants'
import { getService, getStore } from '../../utils/global'
import { ServiceName } from '../types/constants'

export type IRouter = Router

export class RouterService {
  protected static instance: IRouter

  constructor() {
    const formattedRoutes = RouterService.getFormattedRoutes(routes, { baseName: BASE_URL })

    RouterService.instance = createRouter(formattedRoutes, {
      trailingSlashMode: 'never',
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

  public static getFormattedRoutes(
    routes: ICustomRoute[],
    options: {
      baseName?: string
    }
  ): Route[] {
    return routes.map((route) => RouterService.getFormattedRoute(route, options))
  }

  public static getFormattedRoute(
    { children, component, ...route }: ICustomRoute,
    { baseName }: { baseName?: string } = {}
  ): Route {
    if (baseName) {
      route.path = baseName + route.path
    }

    if (children) {
      return {
        ...route,
        children: RouterService.getFormattedRoutes(children, {}),
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
    return browserPlugin()
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
        return !!section.withMenu
      }

      return false
    }

    return false
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

    return pathname.replace(BASE_URL!, '')
  }
}
