import gql from 'graphql-tag'

import { UserFragment } from './fragments'

export const ProfileGetQuery = gql`
  ${UserFragment}
  query profileGet {
    profileGet {
      ...User
    }
  }
`
