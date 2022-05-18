import {
  GetSeedDocument
} from '../original/types'
import { 
   
} from '../defaults'
import { TMutations, TQueries } from '../graphqlTypes'
import { TGraphqlConfig } from 'src/lib/services/graphqlAPI'

const mutations: {
  [key in keyof TMutations]: TGraphqlConfig
} = {}

const queries: {
  [key in keyof TQueries]: TGraphqlConfig
} = {
  getSeed: {
    GQLDocument: GetSeedDocument,
    notifications: {}
  }
}

export { mutations, queries }
