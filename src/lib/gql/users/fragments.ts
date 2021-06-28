import gql from 'graphql-tag'

export const UserFragment = gql`
  fragment User on User {
    id
    email
    phone
    firstName
    middleName
    lastName
    agencyId
    roleId
  }
`
