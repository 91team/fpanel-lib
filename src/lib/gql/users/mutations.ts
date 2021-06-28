import gql from 'graphql-tag'

import { UserFragment } from './fragments'

export const UserCreateMutation = gql`
  ${UserFragment}
  mutation userCreate($user: UserInput!) {
    userCreate(user: $user) {
      ...User
    }
  }
`
export const UserUpdateMutation = gql`
  ${UserFragment}
  mutation userUpdate($user: UserUpdateInput!) {
    userUpdate(user: $user) {
      ...User
    }
  }
`

export const UserDeleteMutation = gql`
  mutation userDelete($userId: UUID!) {
    userDelete(userId: $userId) {
      id
    }
  }
`
