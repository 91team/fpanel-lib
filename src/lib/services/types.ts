import StoreService, { TOptions as TStoreOptions } from './store'

import ApolloService, { TOptions as TApolloOptions } from './apollo'
import AppService, { TOptions as TAppOptions } from './app'
import CookiesService, { TOptions as TCookiesOptions } from './cookies'

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
export type TServices =
  | AppService
  | ApolloService
  | CookiesService
  | StoreService
export type TStorage = {
  app?: AppService
  apollo?: ApolloService
  cookies?: CookiesService
  store?: StoreService
}
export type TOptions = {
  services: TServiceConfig[]
}
