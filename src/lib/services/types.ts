import AppService, { TOptions as TAppOptions } from './app'
import ApolloService, { TOptions as TApolloOptions } from './apollo'
import StoreService, { TOptions as TStoreOptions } from './store'

export type TServiceConfigTemplate<TName, TService, TOptions> = {
  name: TName
  service: TService
  options: Omit<TOptions, 'root'>
}
export type TServiceConfig =
  | TServiceConfigTemplate<'app', typeof AppService, TAppOptions>
  | TServiceConfigTemplate<'apollo', typeof ApolloService, TApolloOptions>
  | TServiceConfigTemplate<'store', typeof StoreService, TStoreOptions>
export type TServices = AppService | ApolloService | StoreService
export type TStorage = {
  app?: AppService
  apollo?: ApolloService
  store?: StoreService
}
export type TOptions = {
  services: TServiceConfig[]
}
