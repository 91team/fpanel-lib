import { App } from '@bi-client/container/src/types/app'

import {
  
} from '@bi-client/container/src/lib/gql/generated/typesOriginal'
import { 
   
} from '../defaults'
import { TMutations, TQueries } from '../graphqlTypes'

const mutations: {
  [key in keyof TMutations]: App.TGraphqlConfig
} = {}

const queries: {
  [key in keyof TQueries]: App.TGraphqlConfig
} = {}

export { mutations, queries }
