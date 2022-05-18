import { MutationResult, QueryResult } from 'react-apollo'
import { DocumentNode } from 'graphql'
import { flow } from 'mobx'
import { CancellablePromise } from 'mobx/lib/api/flow'

import { STATE } from 'src/lib/constants/api'
import { mutations, queries } from 'src/lib/gql/generated/graphqlConfigs'
import { TMutations, TQueries } from 'src/lib/gql/generated/graphqlTypes'

import { ApolloService, ServicesManager } from '.'
import { IApollo } from './apollo'
import { TStorage } from './types'
import { ServiceName } from './types/constants'

export type TNotification = {
  id: string
  type: 'ERROR' | 'SUCCESS'
  message?: string
}

type TGraphqlActionType = 'query' | 'mutation'
type TSetState = (state: STATE) => void
type TCallGraphqlActionParams<TData, TParams extends {}> = {
  GQLVariables?: TParams
  onSuccess?: (data: TData) => void
  onError?: (erorr: any) => void
  setState?: TSetState
}

type Required2<NullableT, T = NonNullable<NullableT>> = {
  [P in keyof T]-?: NonNullable<T[P]>
}

export type TGraphqlAction<TData, TParams extends {}, TDataStrict = Required2<TData>> = (
  params?: TCallGraphqlActionParams<TDataStrict, TParams>
) => CancellablePromise<TDataStrict>

type TCreateGraphqlActionParams = {
  GQLDocument: DocumentNode
  type: TGraphqlActionType
  notifications?: {
    [key in TNotification['type']]?: Omit<TNotification, 'id' | 'type'>
  }
}

export type TGraphqlConfig = Pick<TCreateGraphqlActionParams, 'GQLDocument' | 'notifications'>
type TGraphqlConfigs = {
  [key: string]: TGraphqlConfig
}
type TGraphqlRequests = {
  [key in ['queries', 'mutations'][number]]: TGraphqlConfigs
}

export class GraphqlAPIService {
  public mutations!: TMutations
  public queries!: TQueries
  private services!: TStorage

  constructor(services: TStorage) {
    this.services = services

    this.addConfigs({ mutations, queries })
  }

  private get apolloClient() {
    const apollo = this.services.APOLLO

    return apollo.getClient()
  }

  private createGraphqlAction = <
    TGraphqlResult extends MutationResult | QueryResult,
    TParams extends {}
  >({
    GQLDocument,
    type,
  }: TCreateGraphqlActionParams): TGraphqlAction<any, any> => {
    const self = this

    // @ts-expect-error
    return flow(function* ({
      GQLVariables,
      onSuccess,
      onError,
      setState,
    }: TCallGraphqlActionParams<TGraphqlResult['data'], TParams>) {
      if (setState) {
        setState(STATE.LOADING)
      }

      try {
        let result: TGraphqlResult

        if (type === 'mutation') {
          result = yield self.apolloClient.mutate({
            mutation: GQLDocument,
            variables: GQLVariables,
          })
        } else {
          result = yield self.apolloClient.query({
            query: GQLDocument,
            variables: GQLVariables,
          })
        }

        const { data } = result

        if (data) {
          if (setState) {
            setState(STATE.SUCCESS)
          }

          if (onSuccess) {
            onSuccess(data)
          } else {
            return data
          }
        } else {
          throw new Error('Graphql answer doesn`t contents data')
        }
      } catch (error) {
        if (setState) {
          setState(STATE.FAILED)
        }

        if (onError) {
          onError(error)
        } else {
          throw error
        }
      }
    })
  }

  private createGraphqlActions = <T extends TGraphqlConfigs>(
    configs: T,
    type: TGraphqlActionType
  ): { [key in keyof T]: TGraphqlAction<any, any> } => {
    const result = {} as { [key in keyof T]: TGraphqlAction<any, any> }

    Object.keys(configs).map((keyString) => {
      const key = keyString as keyof T

      result[key] = this.createGraphqlAction({ type, ...configs[key] })
    })

    return result
  }

  private addConfigs = ({ mutations, queries }: TGraphqlRequests) => {
    if (mutations) {
      this.mutations = {
        ...this.mutations,
        ...this.createGraphqlActions(mutations, 'mutation'),
      }
    }

    if (queries) {
      this.queries = {
        ...this.queries,
        ...this.createGraphqlActions(queries, 'query'),
      }
    }
  }
}
