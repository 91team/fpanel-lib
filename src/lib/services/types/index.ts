import { ServiceName } from './constants'

import { ApolloService, TOptions as TApolloOptions } from '../apollo'
import { CookiesService } from '../cookies'
import { GraphqlAPIService } from '../graphqlAPI'
import { RouterService } from '../router'

export type TServiceConfigTemplate<TName, TService, TOptions = {}> = {
  name: TStorageKeys
  service: TService
  options: Omit<TOptions, 'root'>
}
export type TServiceConfig =
  | TServiceConfigTemplate<'apollo', typeof ApolloService, TApolloOptions>
  | TServiceConfigTemplate<'cookies', typeof CookiesService>
  | TServiceConfigTemplate<'graphqlAPI', typeof GraphqlAPIService>
  | TServiceConfigTemplate<'router', typeof RouterService>

export type TServices = ApolloService | CookiesService | GraphqlAPIService | RouterService

export type TStorage = {
  [ServiceName.APOLLO]: ApolloService
  [ServiceName.ROUTER]: RouterService
  [ServiceName.COOKIES]: CookiesService
  [ServiceName.GRAPHQL_API]: GraphqlAPIService
}

export type TStorageKeys = keyof TStorage

export type TOptions = {
  services: TServiceConfig[]
}
