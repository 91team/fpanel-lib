import {
  
} from 'lib/gql/generated/types'
import { TGraphqlConfig } from 'lib/services/graphqlAPI'

import { TMutations, TQueries } from '../../graphqlTypes/session'

const mutations: {
  [key in keyof TMutations]: TGraphqlConfig
} = {}

const queries: {
  [key in keyof TQueries]: TGraphqlConfig
} = {}

export { mutations, queries }
