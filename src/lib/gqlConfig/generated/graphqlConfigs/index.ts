import { TMutations, TQueries } from '../graphqlTypes'
import { TGraphqlConfig } from 'lib/services/graphqlAPI'



export const mutations: { [key in keyof TMutations]: TGraphqlConfig } = {}

export const queries: { [key in keyof TQueries]: TGraphqlConfig } = {}
