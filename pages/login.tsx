import React, { PureComponent, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '@apollo/react-hoc'

import ApolloService from 'services/apollo'
import compose from 'utils/compose'
import {
  SessionCreateDocument,
  SessionCreateMutationResult,
  SessionCreateMutation,
  SessionCreateMutationVariables
} from 'gql/generated/types'

type TOuterProps = {}
type TStateProps = {
  user: App.TStore['user']
}
type TProps = TOuterProps &
  TStateProps & {
    client: App.TApollo
  }

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`
export const allPostsQueryVars = {
  skip: 0,
  first: 10
}
// const LoginPage = () => {
//   const { loading, error, data, fetchMore, networkStatus } = useQuery(
//     ALL_POSTS_QUERY,
//     {
//       variables: allPostsQueryVars,
//       // Setting this value to true will make the component rerender when
//       // the "networkStatus" changes, so we are able to know if it is fetching
//       // more data
//       notifyOnNetworkStatusChange: true
//     }
//   )

//   return <div />
// }

class LoginPage extends PureComponent<TProps> {
  constructor(props: TProps) {
    super(props)

    this.createSession()
  }

  async createSession() {
    const { client } = this.props
    // @ts-ignore
    console.log(client.id)
    const { data } = await client.query({
      query: ALL_POSTS_QUERY,
      variables: allPostsQueryVars
    })
    // const { data } = await client.mutate<
    //   SessionCreateMutation,
    //   SessionCreateMutationVariables
    // >({
    //   mutation: SessionCreateDocument,
    //   variables: {
    //     email: 'admin@ecor.dev',
    //     password: 'password91'
    //   }
    // })

    // this.props.user.setToken(data.sessionCreate.token)
  }

  render() {
    console.log('render login')
    this.props.user.setToken('123')

    return (
      <div>
        Login
        <Link href="/">
          <a href="/">Home</a>
        </Link>
      </div>
    )
  }
}

export default compose(
  withApollo,
  inject('user'),
  observer
)(LoginPage)
