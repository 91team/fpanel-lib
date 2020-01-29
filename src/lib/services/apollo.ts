import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import loggerLink from 'apollo-link-logger'
import { createLink as createUploadLink } from 'apollo-absinthe-upload-link'
import universalFetch from 'isomorphic-unfetch'

import BaseService, { TOptions as TBaseOptions } from './base'
import ServiceBuilder from './builder'
import AppService from 'services/app'
import { GRAPHQL_API_URL } from 'constants/api'
// import AuthPersistService from 'services/authPersist'

export type IApollo = ApolloClient<NormalizedCacheObject>
export type TInitialState = any
type TOptions = TBaseOptions & {
  initialState?: TInitialState
}

class ApolloService extends BaseService {
  private client: IApollo

  constructor({ initialState = {}, root }: TOptions) {
    super({ root })

    const appService = root.getServices().app as AppService

    this.client = new ApolloClient<NormalizedCacheObject>({
      connectToDevTools: !appService.isServer,
      ssrMode: false,
      link: this.getClientLink(),
      cache: this.getClientCache(initialState)
    })
    this.getRoot().addService('apollo', this)
  }

  private getClientLink = () => {
    const appService = this.getRoot().getServices().app as AppService
    const linkOptions = { uri: GRAPHQL_API_URL, credentials: 'same-origin' }
    // HTTP-link is a part of upload link
    const uploadLink = createUploadLink({
      ...linkOptions,
      fetch: universalFetch
    })

    const authLink = setContext((_, { headers }) => {
      // const token = AuthPersistService.getData().token
      const token = '60f41ab0-46b5-4224-971e-a88effb7d9e6'

      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : ''
        }
      }
    })

    return ApolloLink.from(
      [appService.isDev && loggerLink, authLink, uploadLink].filter(Boolean)
    )
  }

  private getClientCache = (initialState: TInitialState) =>
    new InMemoryCache().restore(initialState)

  public getClient(): IApollo {
    if (!this.client) {
      throw new Error(`Apollo client isn't initialized`)
    }

    return this.client
  }

  public static convertToJSON(apolloService: ApolloService): string {
    return JSON.stringify(apolloService.getClient().extract())
  }

  public static convertFromJSON(state: string): TInitialState {
    return JSON.parse(state || '{}')
  }
}

export default ApolloService
