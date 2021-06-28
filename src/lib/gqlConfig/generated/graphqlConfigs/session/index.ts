import {
  SessionCreateDocument,
  SessionDeleteDocument,
  SessionRefreshDocument
} from 'lib/gql/generated/types'
import { TGraphqlConfig } from 'lib/services/graphqlAPI'

import { TMutations, TQueries } from '../../graphqlTypes/session'

const mutations: {
  [key in keyof TMutations]: TGraphqlConfig
} = {
  sessionCreate: {
    GQLDocument: SessionCreateDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось создать сессию'
      }
    }
  },
  sessionRefresh: {
    GQLDocument: SessionRefreshDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось обновить сессию'
      }
    }
  },
  sessionDelete: {
    GQLDocument: SessionDeleteDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось удалить сессию'
      }
    }
  }
}

const queries: {
  [key in keyof TQueries]: TGraphqlConfig
} = {}

export { mutations, queries }
