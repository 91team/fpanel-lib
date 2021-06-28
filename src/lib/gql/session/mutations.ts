import gql from 'graphql-tag'

import { SessionDataFragment } from './fragments'

export const SessionCreateMutation = gql`
  ${SessionDataFragment}
  mutation sessionCreate($email: String!, $password: String!) {
    sessionCreate(email: $email, password: $password) {
      ...SessionData
    }
  }
`
export const SessionRefreshMutation = gql`
  ${SessionDataFragment}
  mutation sessionRefresh($refreshToken: String!) {
    sessionRefresh(refreshToken: $refreshToken) {
      ...SessionData
    }
  }
`
export const SessionDeleteMutation = gql`
  mutation sessionDelete {
    sessionDelete
  }
`
