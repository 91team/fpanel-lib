import {
  
} from '../typesOriginal'
import { 
   
} from '../defaults'
import { TMutations, TQueries } from '../graphqlTypes'
import { TGraphqlConfig } from 'src/lib/services/graphqlAPI'

const mutations: {
  [key in keyof TMutations]: TGraphqlConfig
} = {}

const queries: {
  [key in keyof TQueries]: TGraphqlConfig
} = {}

export { mutations, queries }
