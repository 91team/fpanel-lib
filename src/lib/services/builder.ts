import { AppService, ApolloService, StoreService } from './index'

type TServices = AppService | ApolloService | StoreService
type TOptions = {
  app?: AppService
  apollo?: ApolloService
  store?: StoreService
}

class ServicesBuilder {
  private services: TOptions = {}

  constructor(options: TOptions) {
    this.services = options
  }

  public addService<
    TServiceName extends keyof TOptions,
    TService extends TServices
  >(serviceName: TServiceName, service: TService) {
    // @ts-ignore
    this.services[serviceName] = service
  }

  public getService<TService extends TServices>(
    serviceName: keyof TOptions
  ): TService {
    // @ts-ignore
    return this.services[serviceName]
  }

  public getServices() {
    return this.services
  }
}

export default ServicesBuilder
