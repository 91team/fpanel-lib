import { TGraphqlAction } from 'src/lib/services/graphqlAPI'

import {
  GetSeedQuery,
  GetSeedQueryVariables
} from '../original/types'
import {
  
 } from '../types'

export type TMutations = {}

export type TQueries = {
  getSeed: TGraphqlAction<GetSeedQuery, GetSeedQueryVariables>
}
