import {
  ProfileGetQueryResult,
  ProfileGetQueryVariables,
  SessionCreateMutationResult,
  SessionCreateMutationVariables,
  SessionDeleteMutationResult,
  SessionDeleteMutationVariables,
  SessionUpdateMutationResult,
  SessionUpdateMutationVariables
} from 'lib/gql/generated/types'

export type TMutations = {
  sessionCreate: App.TGraphqlAction<SessionCreateMutationResult, SessionCreateMutationVariables>
  sessionUpdate: App.TGraphqlAction<SessionUpdateMutationResult, SessionUpdateMutationVariables>
  sessionDelete: App.TGraphqlAction<SessionDeleteMutationResult, SessionDeleteMutationVariables>
}

export type TQueries = {
  profileGet: App.TGraphqlAction<ProfileGetQueryResult, ProfileGetQueryVariables>
}
