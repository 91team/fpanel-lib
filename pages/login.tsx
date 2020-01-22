import React, { PureComponent } from 'react'
import { inject, observer } from 'mobx-react'

import compose from 'utils/compose'
import Link from 'next/link'

type TOuterProps = {}
type TStateProps = {
  user: App.TStore['user']
}
type TProps = TOuterProps &
  TStateProps & {
    url: string
  }

class LoginPage extends PureComponent<TProps> {
  componentDidMount() {
    this.props.user.setToken('123')
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
  inject('user'),
  observer
)(LoginPage)
