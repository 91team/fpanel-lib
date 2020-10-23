import StoreService, { TOptions as TStoreOptions } from './store'

import ApolloService, { TOptions as TApolloOptions } from './apollo'
import AppService, { TOptions as TAppOptions } from './app'
import CookiesService, { TOptions as TCookiesOptions } from './cookies'
import GraphqlAPIService, { TOptions as TGraphqlAPIOptions } from './graphqlAPI'

export type TServiceConfigTemplate<TName, TService, TOptions> = {
  name: TName
  service: TService
  options: Omit<TOptions, 'root'>
}
export type TServiceConfig =
  | TServiceConfigTemplate<'app', typeof AppService, TAppOptions>
  | TServiceConfigTemplate<'apollo', typeof ApolloService, TApolloOptions>
  | TServiceConfigTemplate<'cookies', typeof CookiesService, TCookiesOptions>
  | TServiceConfigTemplate<'store', typeof StoreService, TStoreOptions>
  | TServiceConfigTemplate<
      'graphqlAPI',
      typeof GraphqlAPIService,
      TGraphqlAPIOptions
    >
export type TServices =
  | AppService
  | ApolloService
  | CookiesService
  | StoreService
  | GraphqlAPIService
export type TStorage = {
  app?: AppService
  apollo?: ApolloService
  cookies?: CookiesService
  store?: StoreService
  graphqlAPI?: GraphqlAPIService
}
export type TOptions = {
  services: TServiceConfig[]
}
