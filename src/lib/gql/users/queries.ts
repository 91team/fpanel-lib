import gql from 'graphql-tag'

import { UserFragment } from './fragments'

export const UsersGetQuery = gql`
  ${UserFragment}
  query usersGet(
    $emails: [String]
    $ids: [UUID]
    $phones: [Int]
    $rolesIds: [Int]
    $search: String
    $orderBy: String
    $orderDirection: OrderDirection
  ) {
    usersGet(
      emails: $emails
      ids: $ids
      phones: $phones
      rolesIds: $rolesIds
      search: $search
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...User
    }
  }
`
