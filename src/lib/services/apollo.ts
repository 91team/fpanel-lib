// @ts-expect-error
import { createLink as createUploadLink } from 'apollo-absinthe-upload-link'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
// @ts-expect-error
import loggerLink from 'apollo-link-logger'
import universalFetch from 'isomorphic-unfetch'

import { StoreName } from 'lib/store/constants'

import { isDev } from 'lib/constants/env'

import { getStore } from '../utils/global'

import { GRAPHQL_API_URL } from 'constants/api'

export type IApollo = ApolloClient<NormalizedCacheObject>
export type TInitialState = NormalizedCacheObject
export type TOptions = {
  cacheState?: TInitialState
}

export class ApolloService {
  private client: IApollo

  constructor({ cacheState: initialApolloState = {} }: TOptions) {
    this.client = new ApolloClient<NormalizedCacheObject>({
      connectToDevTools: true,
      ssrMode: false,
      link: this.getClientLink(),
      cache: this.getClientCache(initialApolloState),
    })
  }

  private getClientLink = () => {
    const linkOptions = { uri: GRAPHQL_API_URL, credentials: 'same-origin' }
    // HTTP-link is a part of upload link
    const uploadLink = createUploadLink({
      ...linkOptions,
      fetch: universalFetch,
    })

    const authLink = setContext((_, { headers }) => {
      const token = this.getToken()

      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : '',
        },
      }
    })

    return ApolloLink.from([isDev && loggerLink, authLink, uploadLink].filter(Boolean))
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
    const userStore = getStore(StoreName.USER)

    return userStore.getTokens().token
  }

  public convertToJSON(): NormalizedCacheObject {
    return this.getClient().extract()
  }
}
