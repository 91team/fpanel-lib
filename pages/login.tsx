import React, { PureComponent } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import { withApollo } from '@apollo/react-hoc'

import compose from 'utils/compose'

type TOuterProps = {}
type TStateProps = {
  user: App.TStore['user']
}
type TProps = TOuterProps &
  TStateProps & {
    client: App.TApollo
  }

class LoginPage extends PureComponent<TProps> {
  static async getInitialProps({ services }: App.TPageContext) {
    await services
      .getServices()
      .store.getRootStore()
      .user.createSession()

    return {}
  }

  render() {
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
