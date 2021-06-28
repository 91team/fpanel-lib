import gql from 'graphql-tag'

import { UserFragment } from '../users/fragments'

export const SessionDataFragment = gql`
  ${UserFragment}
  fragment SessionData on UserSession {
    token
    refreshToken
    expireAt
    user {
      ...User
    }
  }
`
