import {
  ApolloClient,
  ApolloLink,
  NormalizedCacheObject,
  InMemoryCache
} from '@apollo/client'
import { setContext } from 'apollo-link-context'
import loggerLink from 'apollo-link-logger'
import { createLink as createUploadLink } from 'apollo-absinthe-upload-link'
import universalFetch from 'isomorphic-unfetch'

import AppService from 'services/app'
import { GRAPHQL_API_URL } from 'constants/api'
// import AuthPersistService from 'services/authPersist'

export type IApollo = ApolloClient<NormalizedCacheObject>
export type TInitialState = any

class ApolloManager {
  private getClientLink = () => {
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
      [AppService.isDev && loggerLink, authLink, uploadLink].filter(Boolean)
    )
  }

  private getClientCache = (initialState: TInitialState) =>
    new InMemoryCache().restore(initialState)

  public createClient(initialState: TInitialState = {}): IApollo {
    const client = new ApolloClient<NormalizedCacheObject>({
      connectToDevTools: !AppService.isServer,
      ssrMode: AppService.isServer, // Disables forceFetch on the server (so queries are only run once)
      link: this.getClientLink(),
      cache: this.getClientCache(initialState)
    })
    // @ts-ignore
    client.id = Math.random()

    this.getClient = () => client

    return client
  }

  public getClient(): IApollo {
    throw new Error(
      `You're trying to access Apollo client before it's intialized`
    )
  }

  public convertToJSON(): string {
    return JSON.stringify(this.getClient().extract())
  }

  public convertFromJSON(): TInitialState {
    return JSON.parse(window.__APOLLO_INITIAL_STATE__ || '{}')
  }
}

export default new ApolloManager()
