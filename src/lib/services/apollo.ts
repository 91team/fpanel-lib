import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import loggerLink from 'apollo-link-logger'
import { createLink as createUploadLink } from 'apollo-absinthe-upload-link'
import universalFetch from 'isomorphic-unfetch'

import BaseService, { TOptions as TBaseOptions } from './base'
import { GRAPHQL_API_URL } from 'constants/api'

export type IApollo = ApolloClient<NormalizedCacheObject>
export type TInitialState = NormalizedCacheObject
export type TOptions = TBaseOptions & {
  cacheState?: TInitialState
}

class ApolloService extends BaseService {
  private client: IApollo

  constructor({ cacheState: initialApolloState = {}, root }: TOptions) {
    super({ root })

    const appService = root.getServices().app

    this.client = new ApolloClient<NormalizedCacheObject>({
      connectToDevTools: !appService.isServer,
      ssrMode: false,
      link: this.getClientLink(),
      cache: this.getClientCache(initialApolloState)
    })
  }

  private getClientLink = () => {
    const appService = this.getRoot().getServices().app
    const linkOptions = { uri: GRAPHQL_API_URL, credentials: 'same-origin' }
    // HTTP-link is a part of upload link
    const uploadLink = createUploadLink({
      ...linkOptions,
      fetch: universalFetch
    })

    const authLink = setContext((_, { headers }) => {
      const token = this.getToken()

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

  public getToken: () => string | undefined = () => {
    throw new Error(`Apollo getter for token isn't initializes`)
  }

  public convertToJSON(): Object {
    return this.getClient().extract()
  }
}

export default ApolloService
