import {
  SessionCreateMutationResult,
  SessionCreateMutationVariables,
  SessionDeleteMutationResult,
  SessionDeleteMutationVariables,
  SessionRefreshMutationResult,
  SessionRefreshMutationVariables
} from 'lib/gql/generated/types'
import { TGraphqlAction } from 'lib/services/graphqlAPI'

export type TMutations = {
  sessionCreate: TGraphqlAction<SessionCreateMutationResult, SessionCreateMutationVariables>
  sessionRefresh: TGraphqlAction<SessionRefreshMutationResult, SessionRefreshMutationVariables>
  sessionDelete: TGraphqlAction<SessionDeleteMutationResult, SessionDeleteMutationVariables>
}

export type TQueries = {}
