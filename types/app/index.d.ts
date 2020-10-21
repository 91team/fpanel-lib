import { TCreateGraphqlActionParams } from '@bi-client/container/src/lib/services/graphqlAPI'
import { CancellablePromise } from 'mobx/lib/api/flow'
import { NextPageContext } from 'next'
import { MutationResult, QueryResult } from 'react-apollo'

import Store from 'lib/store'

import { defaultTheme } from 'lib/theme'

import { IApollo } from 'services/apollo'
import { ServicesManager } from 'services/index'

import { STATE } from 'constants/api'

declare namespace App {
  type TServices = ReturnType<ServicesManager['getServices']>
  type TApollo = IApollo
  type TTheme = typeof defaultTheme
  type TStore = Store
  type TPageContext = NextPageContext & {
    servicesManager: ServicesManager
  }

  // GQL
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
      [key in Data.TNotification['type']]?: Omit<
        Data.TNotification,
        'id' | 'type'
      >
    }
  }
  type TGraphqlAction<
    TGraphqlResult extends MutationResult | QueryResult,
    TParams extends {}
  > = (
    params?: TCallGraphqlActionParams<TGraphqlResult, TParams>
  ) => CancellablePromise<TGraphqlResult['data']>
  type TCreateGraphqlActionParams = {
    GQLDocument: DocumentNode
    type: TGraphqlActionType
    notifications?: {
      [key in Data.TNotification['type']]?: Omit<
        Data.TNotification,
        'id' | 'type'
      >
    }
  }

  type TGraphqlConfig = Pick<
    TCreateGraphqlActionParams,
    'GQLDocument' | 'notifications'
  >
  type TGraphqlConfigs = {
    [key: string]: TGraphqlConfig
  }
  type TGraphqlRequests = {
    [key in ['queries', 'mutations'][number]]: TGraphqlConfigs
  }

  // type TGraphqlConfigs = {
  //   [key in ['queries', 'mutations'][number]]?: TGraphqlConfigs
  //   }
}

export = App
export as namespace App
