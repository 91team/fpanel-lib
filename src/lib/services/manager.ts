import { TInitialState as TApolloInitialState } from './apollo'
import { ApolloService, GraphqlAPIService } from './index'
import { TServices, TStorage } from './types'
import { ServiceName } from './types/constants'

export class ServicesManager {
  // @ts-expect-error
  public services: TStorage = {}

  public initialize({
    initialApolloState,
  }: {
    initialApolloState?: TApolloInitialState
  } = {}) {
    this.addService(ServiceName.APOLLO, new ApolloService({ cacheState: initialApolloState }))
    this.addService(ServiceName.GRAPHQL_API, new GraphqlAPIService(this.services))

    console.log('this.services', this.services)
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
