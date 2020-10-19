import createRouter, {
  PluginFactory,
  Route,
  Router,
  cloneRouter,
  constants,
} from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { MiddlewareFactory } from 'router5/types/types/router'

// import { AuthorizationError, SessionStore } from '../../store/session'

import { StoreService } from '../store'

import {
  ICustomRoute,
  ICustomUnknownRoute,
  TCustomAnyRoute,
  UNKNOWN_ROUTE,
  routes,
} from 'constants/routes'

import { CService } from '../types'

import { AppService } from '../app'
import { BaseService, TOptions } from '../base'

export const NAME = 'ROUTER' as const

export class RouterService extends BaseService implements CService {
  static NAME = NAME

  private routes: ICustomRoute[]
  private router: Router
  private isSharedMode = false

  // перегружается в shared модуле
  public static checkIsShared = (base: string) => false

  constructor(options: TOptions) {
    super(options)

    const { baseURL } = this.getRoot().getService<AppService>(AppService.NAME)

    this.isSharedMode = RouterService.checkIsShared(
      window.location.pathname.slice(baseURL.length)
    )

    this.routes = []
    this.router = createRouter([], {
      trailingSlashMode: 'never',
      allowNotFound: true,
    })

    this.setPlugins([this.getBrowserPlugin()])

    if (!this.isSharedMode) {
      this.setMiddlewares([this.getAuthorizationMiddleware()])
    }

    this.addRoutes(routes)
  }

  static getFormattedRoutes(
    routes: TCustomAnyRoute[],
    options: {
      baseName?: string
    } = {}
  ): Route[] {
    return routes.map(route => RouterService.getFormattedRoute(route, options))
  }

  static getFormattedRoute(
    { children, component, ...route }: TCustomAnyRoute,
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

  static traverseRoutes(routes: TCustomAnyRoute[]): TCustomAnyRoute[] {
    let result: TCustomAnyRoute[] = []

    routes.forEach(route => {
      result.push(route)

      if (route.children) {
        result = result.concat(this.traverseRoutes(route.children))
      }
    })

    return result
  }

  public getInstance(): Router {
    return this.router
  }

  public getRoutes(): ICustomRoute[] {
    return this.routes
  }

  public getRouteByName(routeName: string): TCustomAnyRoute | undefined {
    const routePath = routeName.split('.')

    let currentRoutes: TCustomAnyRoute[] = [...this.routes]

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
  ): TCustomAnyRoute['component'] | null {
    const route = this.getRouteByName(routeName)

    if (route) {
      return route.component
    }

    return null
  }

  public getRoutePageComponent(
    routeName: string
  ): TCustomAnyRoute['component'] | null {
    if (routeName === constants.UNKNOWN_ROUTE) {
      return UNKNOWN_ROUTE.component
    }

    const nameArray = routeName.split('.')

    while (nameArray.length) {
      const route = this.getRouteByName(nameArray.join('.'))

      if (route && route.component) {
        return route.component
      }

      nameArray.pop()
    }

    return null
  }

  public getRouteConfig({
    route,
    isModule = false,
  }: {
    route: Route | undefined
    isModule?: boolean
  }): TCustomAnyRoute | ICustomUnknownRoute {
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
    const storeService = this.getRoot().getService<StoreService>(
      StoreService.NAME
    )
    // const sessionStore = storeService.getChildStore<SessionStore>(
    //   SessionStore.NAME
    // )
    // const routeConfig = this.getRouteConfig({ route: toState })
    // const isUnknownRoute = this.getIsUnknownRoute(routeConfig)

    // if (isUnknownRoute || routeConfig.withAuth) {
    //   if (sessionStore.isAuthorized) {
    //     done()
    //   } else {
    //     sessionStore
    //       .refreshSession()
    //       .then(() => done())
    //       .catch((error: Error | AuthorizationError) => {
    //         if (!(error instanceof AuthorizationError)) {
    //           console.error(error)
    //         }

    //         if (!isUnknownRoute) {
    //           this.router.navigate('login')
    //         } else {
    //           done()
    //         }
    //       })
    //   }
    // } else {
    //   done()
    // }

    // avoid transition state mutation
    return undefined
  }

  public getBrowserPlugin(): PluginFactory {
    return browserPlugin()
  }

  public getPathWithoutBaseURL(pathname: string): string {
    const { baseURL } = this.getRoot().getService<AppService>(AppService.NAME)

    if (!baseURL) {
      return pathname
    }

    return pathname.replace(baseURL, '')
  }

  public getIsUnknownRoute(
    route: TCustomAnyRoute | ICustomUnknownRoute
  ): boolean {
    return route.name === constants.UNKNOWN_ROUTE
  }

  public getIsRouteWithMenu(params: {
    route: Route
    isModule?: boolean
  }): boolean {
    return this.getRouteConfig(params).withMenu
  }

  private static getSharedRoutes(routes: ICustomRoute[]) {
    return routes
      .filter(route => route.isShared)
      .map(route => ({
        ...route,
        children:
          route.children && RouterService.getSharedRoutes(route.children),
      }))
  }

  public addRoutes(rawRoutes: ICustomRoute[]) {
    const routes = this.isSharedMode
      ? RouterService.getSharedRoutes(rawRoutes)
      : rawRoutes
    const { baseURL } = this.getRoot().getService<AppService>(AppService.NAME)

    const formattedRoutes = RouterService.getFormattedRoutes(routes, {
      baseName: baseURL,
    })

    this.routes = this.routes.concat(routes)
    this.router.add(formattedRoutes)
  }

  public setMiddlewares(middlewares: MiddlewareFactory[]) {
    const instance = this.getInstance()

    middlewares.forEach(middleware => instance.useMiddleware(middleware))
  }

  public setPlugins(plugins: PluginFactory[]) {
    const instance = this.getInstance()

    plugins.forEach(plugin => instance.usePlugin(plugin))
  }

  public clone() {
    this.router = cloneRouter(this.router)
  }
}
