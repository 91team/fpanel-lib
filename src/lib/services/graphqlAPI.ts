import { DocumentNode } from 'graphql'
import { flow } from 'mobx'
import { CancellablePromise } from 'mobx/lib/api/flow'
import { MutationResult, QueryResult } from 'react-apollo'

import NotificationsStore from 'lib/store/notifications'

import { STATE } from 'lib/constants/api'

import { mutations, queries } from 'lib/gqlConfig/generated/graphqlConfigs'
import { TMutations, TQueries } from 'lib/gqlConfig/generated/graphqlTypes'

import { StoreService } from '.'
import { BaseService, TOptions as TBaseOptions } from './base'

export type TOptions = TBaseOptions

export class GraphqlAPIService extends BaseService {
  private apolloClient: App.TApollo
  private notificationsStore: NotificationsStore
  public mutations: TMutations
  public queries: TQueries

  constructor(options: TOptions) {
    super(options)

    const { apollo } = this.getRoot().getServices()

    this.apolloClient = apollo.getClient()

    this.addConfigs({ mutations, queries })
  }

  private createGraphqlAction = <
    TGraphqlResult extends MutationResult | QueryResult,
    TParams extends {}
  >({
    GQLDocument,
    type,
    notifications = {},
  }: App.TCreateGraphqlActionParams): App.TGraphqlAction<any, any> => {
    const self = this

    return flow(function*({
      GQLVariables,
      onSuccess,
      onError,
      setState,
      notifications: { ERROR, SUCCESS } = notifications,
    }: App.TCallGraphqlActionParams<TGraphqlResult, TParams>) {
      if (!self.notificationsStore) {
        self.notificationsStore = self
          .getRoot()
          .getService<StoreService>('store')
          .getChildStores().notifications as NotificationsStore
      }

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
            self.notificationsStore.pushNotification({
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
          self.notificationsStore.pushNotification({
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

  private createGraphqlActions = <T extends App.TGraphqlConfigs>(
    configs: T,
    type: App.TGraphqlActionType
  ): { [key in keyof T]: App.TGraphqlAction<any, any> } => {
    const result = {}

    Object.keys(configs).map(key => {
      result[key] = this.createGraphqlAction({ type, ...configs[key] })
    })

    return result as { [key in keyof T]: App.TGraphqlAction<any, any> }
  }

  private addConfigs = ({ mutations, queries }: App.TGraphqlRequests) => {
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
