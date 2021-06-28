import { TOptions, TServices, TStorage } from './types'

import { ServiceName } from './types/constants'

import { TInitialState as TApolloInitialState } from './apollo'
import { ApolloService, CookiesService, GraphqlAPIService, RouterService } from './index'

export class ServicesManager {
  // @ts-expect-error
  private services: TStorage = {}

  public initialize({
    initialApolloState,
  }: {
    initialApolloState?: TApolloInitialState
  } = {}) {
    this.addService(ServiceName.APOLLO, new ApolloService({ cacheState: initialApolloState }))
    this.addService(ServiceName.COOKIES, new CookiesService())
    this.addService(ServiceName.GRAPHQL_API, new GraphqlAPIService())
    this.addService(ServiceName.ROUTER, new RouterService())
  }

  public addService<TServiceName extends keyof TStorage, TService extends TServices>(
    serviceName: TServiceName,
    service: TService
  ) {
    // @ts-ignore
    this.services[serviceName] = service
  }

  public getService<TService extends TServices>(serviceName: keyof TStorage): TService {
    // @ts-ignore
    return this.services[serviceName]
  }

  public getServices() {
    return this.services
  }
}
