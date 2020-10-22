import { NextPageContext } from 'next'

import { TInitialState as TStoreInitialState } from './store'

import { TOptions, TServices, TStorage } from './types'

import { TInitialState as TApolloInitialState } from './apollo'
import {
  ApolloService,
  AppService,
  CookiesService,
  RouterService,
  StoreService,
} from './index'

export class ServicesManager {
  private services: TStorage = {}

  constructor({ services }: TOptions = { services: [] }) {
    if (services) {
      services.forEach(({ service: Service, name, options }) => {
        const serviceInstance = new Service({ ...options, root: this })

        this.addService(name, serviceInstance)
      })
    }
  }

  static build({
    initialApolloState,
    initialStoreState,
    ctx,
  }: {
    initialStoreState?: TStoreInitialState
    initialApolloState?: TApolloInitialState
    ctx?: NextPageContext
  } = {}): ServicesManager {
    return new ServicesManager({
      services: [
        {
          name: 'app',
          service: AppService,
          options: {},
        },
        {
          name: 'apollo',
          service: ApolloService,
          options: {
            cacheState: initialApolloState,
          },
        },
        {
          name: 'cookies',
          service: CookiesService,
          options: {
            ctx,
          },
        },
        {
          name: 'store',
          service: StoreService,
          options: {
            initialState: initialStoreState,
          },
        },
        {
          name: 'router',
          service: RouterService,
          options: {},
        },
      ],
    })
  }

  public addService<
    TServiceName extends keyof TStorage,
    TService extends TServices
  >(serviceName: TServiceName, service: TService) {
    // @ts-ignore
    this.services[serviceName] = service
  }

  public getService<TService extends TServices>(
    serviceName: keyof TStorage
  ): TService {
    // @ts-ignore
    return this.services[serviceName]
  }

  public getServices() {
    return this.services
  }
}
