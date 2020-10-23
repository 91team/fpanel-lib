import createRouter, {
  Dependencies,
  NavigationOptions,
  PluginFactory,
  Route,
  Router,
  State,
  cloneRouter,
} from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { MiddlewareFactory } from 'router5/types/types/router'

import { ICustomRoute, UNKNOWN_ROUTE, routes } from 'constants/routes'

import { BaseService, TOptions as TBaseOptions } from '../base'

export type IRouter = Router
export type TOptions = TBaseOptions

export class RouterService extends BaseService {
  private appService: App.TServices['app']

  protected static instance: IRouter

  constructor({ root }: TOptions) {
    super({ root })

    this.appService = root.getServices().app

    const formattedRoutes = RouterService.getFormattedRoutes(routes)

    RouterService.instance = createRouter(formattedRoutes, {
      allowNotFound: true,
    })
  }

  private traverseRoutes(routes: ICustomRoute[]) {
    let result: ICustomRoute[] = []

    routes.forEach(route => {
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

  public static getFormattedRoute({
    children,
    component,
    ...route
  }: ICustomRoute): Route {
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
      base: this.appService.baseURL === '/' ? '' : this.appService.baseURL,
    })
  }

  // public getAuthorizationMiddleware: () => MiddlewareFactory = () => (
  //   router,
  //   { routerStore }: { routerStore: App.TStore['router5'] }
  // ) => (toState, fromState, done) => {
  //   routerStore.checkAbilityNavigateToPage(toState, done)

  //   // avoid transition state mutation
  //   return undefined
  // }

  public setPlugins(plugins: PluginFactory[]) {
    const instance = this.getInstance()

    plugins.forEach(plugin => instance.usePlugin(plugin))
  }

  public setMiddlewares(middlewares: MiddlewareFactory[]) {
    const instance = this.getInstance()

    middlewares.forEach(middleware => instance.useMiddleware(middleware))
  }

  public getRouteByName(routeName: string): ICustomRoute | undefined {
    const routePath = routeName.split('.')

    let currentRoutes = routes

    for (let index = 0; index < routePath.length; index += 1) {
      const name = routePath[index]
      const buffer = currentRoutes.find(
        routeConfig => routeConfig.name === name
      )

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

  public getRouteComponent(
    routeName: string
  ): ICustomRoute['component'] | null {
    const route = this.getRouteByName(routeName)

    if (route) {
      return route.component
    }

    return UNKNOWN_ROUTE.component
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

    return flattenRoutes.filter(route => route.inMenu)
  }

  public getPathWithoutBaseURL(): string {
    const { baseURL } = this.appService
    const { pathname } = window.location

    if (baseURL === '/') {
      return pathname
    }

    return pathname.replace(baseURL, '')
  }
}
