import gql from 'graphql-tag'

export const SessionDataFragment = gql`
  fragment SessionData on Session {
    token
    refreshToken
    expireAt
  }
`
