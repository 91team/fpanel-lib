import gql from 'graphql-tag'

export const SessionDataFragment = gql`
  fragment SessionData on Session {
    token
    refreshToken
    expireAt
  }
`

export const UserFragment = gql`
  fragment User on User {
    avatar
    email
    firstName
    id
    lastName
    name
  }
`
