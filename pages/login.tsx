import React, { PureComponent } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

import compose from 'utils/compose'
import withServices, { TWithServicesProps } from 'lib/HOCs/withServices'

type TOuterProps = {}
type TStateProps = {
  user: App.TStore['user']
  token: string
}
type TProps = TOuterProps & TStateProps & TWithServicesProps

class LoginPage extends PureComponent<TProps> {
  static async getInitialProps({ servicesManager }: App.TPageContext) {
    await servicesManager
      .getServices()
      .store.getRootStore()
      .user.createSession()

    return {}
  }

  render() {
    return (
      <div>
        Login (token: {this.props.user.token})
        <Link href="/">
          <a href="/">Home</a>
        </Link>
      </div>
    )
  }
}

export default compose(
  withServices,
  inject('user'),
  observer
)(LoginPage)
