// @ts-expect-error
import { createLink as createUploadLink } from 'apollo-absinthe-upload-link'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
// @ts-expect-error
import loggerLink from 'apollo-link-logger'
import universalFetch from 'isomorphic-unfetch'

export type IApollo = ApolloClient<NormalizedCacheObject>
export type TInitialState = NormalizedCacheObject
export type TOptions = {
  cacheState?: TInitialState
  isDev: boolean
  hostname: string
}

export class ApolloService {
  private client: IApollo

  constructor({ cacheState: initialApolloState = {}, isDev, hostname }: TOptions) {
    this.client = new ApolloClient<NormalizedCacheObject>({
      connectToDevTools: true,
      ssrMode: false,
      link: this.getClientLink(hostname, isDev),
      cache: this.getClientCache(initialApolloState),
    })
  }

  private getClientLink = (hostname: string, isDev: boolean) => {
    const linkOptions = { uri: `${hostname}/api/graphql`, credentials: 'same-origin' }
    // HTTP-link is a part of upload link
    const uploadLink = createUploadLink({
      ...linkOptions,
      fetch: universalFetch,
    })

    const authLink = setContext((_, { headers }) =>
      // const token = this.getToken()

      ({
        headers: {
          ...headers,
          // Authorization: token ? `Bearer ${token}` : '',
        },
      })
    )

    return ApolloLink.from([isDev && loggerLink, authLink, uploadLink].filter(Boolean))
  }

  private getClientCache = (initialState: TInitialState) =>
    new InMemoryCache({
      dataIdFromObject: (object) => {
        switch (object.__typename) {
          case 'PublicScheduleRoute':
            // @ts-ignore
            return object.arrivalTime
          default:
            // @ts-ignore
            return object.id || object._id
        }
      },
    }).restore(initialState)

  public getClient(): IApollo {
    if (!this.client) {
      throw new Error(`Apollo client isn't initialized`)
    }

    return this.client
  }

  public getToken: () => string | undefined = () => {
    throw new Error(`Apollo getter for token isn't initializes`)
  }

  public convertToJSON(): NormalizedCacheObject {
    return this.getClient().extract()
  }
}
