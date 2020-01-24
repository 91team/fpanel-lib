import React, { PureComponent, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

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
    url: string
  }

class LoginPage extends PureComponent<TProps> {
  constructor(props: TProps) {
    super(props)

    this.createSession()
  }

  async createSession() {
    const client = ApolloService.getClient()
    const { data } = await client.mutate<
      SessionCreateMutation,
      SessionCreateMutationVariables
    >({
      mutation: SessionCreateDocument,
      variables: {
        email: 'admin@ecor.dev',
        password: 'password91'
      }
    })

    this.props.user.setToken(data.sessionCreate.token)
  }

  render() {
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
  inject('user'),
  observer
)(LoginPage)
