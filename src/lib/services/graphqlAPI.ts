import { MutationResult, QueryResult } from 'react-apollo'
import { DocumentNode } from 'graphql'
import { flow } from 'mobx'
import { CancellablePromise } from 'mobx/lib/api/flow'

import { STATE } from 'src/lib/constants/api'
import { mutations, queries } from 'src/lib/gqlConfig/generated/graphqlConfigs'
import { TMutations, TQueries } from 'src/lib/gqlConfig/generated/graphqlTypes'
import { StoreName } from 'src/lib/store/constants'
import { TNotification } from 'src/lib/store/notifications'
import { getService, getStore } from 'src/lib/utils/global'

import { IApollo } from './apollo'
import { ServiceName } from './types/constants'

type TGraphqlActionType = 'query' | 'mutation'
type TSetState = (state: STATE) => void
type TCallGraphqlActionParams<
  TGraphqlResult extends MutationResult | QueryResult,
  TParams extends {}
> = {
  GQLVariables?: TParams
  onSuccess?: (data: TGraphqlResult['data']) => void
  onError?: (erorr: any) => void
  setState?: TSetState
  notifications?: {
    [key in TNotification['type']]?: Omit<TNotification, 'id' | 'type'>
  }
}
export type TGraphqlAction<
  TGraphqlResult extends MutationResult | QueryResult,
  TParams extends {}
> = (
  params?: TCallGraphqlActionParams<TGraphqlResult, TParams>
) => CancellablePromise<TGraphqlResult['data']>
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

  constructor() {
    this.addConfigs({ mutations, queries })
  }

  private get apolloClient() {
    const apollo = getService(ServiceName.APOLLO)

    return apollo.getClient()
  }

  private createGraphqlAction = <
    TGraphqlResult extends MutationResult | QueryResult,
    TParams extends {}
  >({
    GQLDocument,
    type,
    notifications = {},
  }: TCreateGraphqlActionParams): TGraphqlAction<any, any> => {
    const self = this
    const notificationsStore = getStore(StoreName.NOTIFICATIONS)

    // @ts-expect-error
    return flow(function* ({
      GQLVariables,
      onSuccess,
      onError,
      setState,
      notifications: { ERROR, SUCCESS } = notifications,
    }: TCallGraphqlActionParams<TGraphqlResult, TParams>) {
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
          if (SUCCESS) {
            notificationsStore.pushNotification({
              type: 'SUCCESS',
              ...SUCCESS,
            })
          }

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
        if (ERROR) {
          notificationsStore.pushNotification({
            type: 'ERROR',
            ...ERROR,
          })
        }

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
