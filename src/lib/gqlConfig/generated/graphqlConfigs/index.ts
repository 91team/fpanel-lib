import { TMutations, TQueries } from '../graphqlTypes'
import { TGraphqlConfig } from 'lib/services/graphqlAPI'

import { mutations as sessionMutations, queries as sessionQueries } from './session'

export const mutations: { [key in keyof TMutations]: TGraphqlConfig } = {
  ...sessionMutations
}

export const queries: { [key in keyof TQueries]: TGraphqlConfig } = {
  ...sessionQueries
}
