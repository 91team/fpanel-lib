import {
  ProfileGetDocument,
  SessionCreateDocument,
  SessionDeleteDocument,
  SessionUpdateDocument
} from 'lib/gql/generated/types'

import { TMutations, TQueries } from '../../graphqlTypes/session'

const mutations: {
  [key in keyof TMutations]: App.TGraphqlConfig
} = {
  sessionCreate: {
    GQLDocument: SessionCreateDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось создать сессию'
      }
    }
  },
  sessionUpdate: {
    GQLDocument: SessionUpdateDocument,
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
  [key in keyof TQueries]: App.TGraphqlConfig
} = {
  profileGet: {
    GQLDocument: ProfileGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить профиль'
      }
    }
  }
}

export { mutations, queries }
