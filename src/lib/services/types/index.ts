import { ApolloService, TOptions as TApolloOptions } from '../apollo'
import { GraphqlAPIService } from '../graphqlAPI'

import { ServiceName } from './constants'

export type TServiceConfigTemplate<TName, TService, TOptions = {}> = {
  name: TStorageKeys
  service: TService
  options: Omit<TOptions, 'root'>
}
export type TServiceConfig =
  | TServiceConfigTemplate<'apollo', typeof ApolloService, TApolloOptions>
  | TServiceConfigTemplate<'graphqlAPI', typeof GraphqlAPIService>

export type TServices = ApolloService | GraphqlAPIService

export type TStorage = {
  [ServiceName.APOLLO]: ApolloService
  [ServiceName.GRAPHQL_API]: GraphqlAPIService
}

export type TStorageKeys = keyof TStorage

export type TOptions = {
  services: TServiceConfig[]
}
