import { StoreService, TOptions as TStoreOptions } from '../store'

import { ApolloService, TOptions as TApolloOptions } from '../apollo'
import { AppService, TOptions as TAppOptions } from '../app'
import { CookiesService, TOptions as TCookiesOptions } from '../cookies'
import { GraphqlAPIService, TOptions as TGraphqlAPIOptions } from '../graphqlAPI'
import { RouterService, TOptions as TRouterOptions } from '../router'

export type TServiceConfigTemplate<TName, TService, TOptions> = {
  name: TName
  service: TService
  options: Omit<TOptions, 'root'>
}
export type TServiceConfig =
  | TServiceConfigTemplate<'app', typeof AppService, TAppOptions>
  | TServiceConfigTemplate<'apollo', typeof ApolloService, TApolloOptions>
  | TServiceConfigTemplate<'cookies', typeof CookiesService, TCookiesOptions>
  | TServiceConfigTemplate<'graphqlAPI', typeof GraphqlAPIService, TGraphqlAPIOptions>
  | TServiceConfigTemplate<'store', typeof StoreService, TStoreOptions>
  | TServiceConfigTemplate<'router', typeof RouterService, TRouterOptions>

export type TServices =
  | AppService
  | ApolloService
  | CookiesService
  | GraphqlAPIService
  | StoreService
  | RouterService
export type TStorage = {
  app?: AppService
  apollo?: ApolloService
  cookies?: CookiesService
  graphqlAPI?: GraphqlAPIService
  store?: StoreService
  router?: RouterService
}
export type TOptions = {
  services: TServiceConfig[]
}
