import { TMutations, TQueries } from '../graphqlTypes'
import { mutations as sessionMutations, queries as sessionQueries } from './session'

export const mutations: { [key in keyof TMutations]: App.TGraphqlConfig } = {
  ...sessionMutations
}

export const queries: { [key in keyof TQueries]: App.TGraphqlConfig } = {
  ...sessionQueries
}
