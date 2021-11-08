import {} from 'src/lib/gql/generated/types'
import { TGraphqlConfig } from 'src/lib/services/graphqlAPI'

import { TMutations, TQueries } from '../../graphqlTypes/session'

const mutations: {
  [key in keyof TMutations]: TGraphqlConfig
} = {}

const queries: {
  [key in keyof TQueries]: TGraphqlConfig
} = {}

export { mutations, queries }
