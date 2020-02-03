import AppService, { TOptions as TAppOptions } from './app'
import CookiesService, { TOptions as TCookiesOptions } from './cookies'
import StoreService, { TOptions as TStoreOptions } from './store'

export type TServiceConfigTemplate<TName, TService, TOptions> = {
  name: TName
  service: TService
  options: Omit<TOptions, 'root'>
}
export type TServiceConfig =
  | TServiceConfigTemplate<'app', typeof AppService, TAppOptions>
  | TServiceConfigTemplate<'cookies', typeof CookiesService, TCookiesOptions>
  | TServiceConfigTemplate<'store', typeof StoreService, TStoreOptions>
export type TServices = AppService | CookiesService | StoreService
export type TStorage = {
  app?: AppService
  cookies?: CookiesService
  store?: StoreService
}
export type TOptions = {
  services: TServiceConfig[]
}
