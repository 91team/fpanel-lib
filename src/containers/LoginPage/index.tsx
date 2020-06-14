import React, { PureComponent } from 'react'

import { inject, observer } from 'mobx-react'
import Link from 'next/link'

import compose from 'utils/compose'

import withServices, { TWithServicesProps } from 'HOCs/withServices'
import withStyles, { WithStylesProps } from 'HOCs/withStyles'

import styles from './styles'

type TOuterProps = {}
type TStateProps = {
  user: App.TStore['user']
  token: string
}
type TProps = TOuterProps &
  TStateProps &
  TWithServicesProps &
  WithStylesProps<typeof styles>

class LoginPage extends PureComponent<TProps> {
  static async getInitialProps({ servicesManager }: App.TPageContext) {
    await servicesManager
      .getServices()
      .store.getRootStore()
      .user.createSession()

    return {}
  }

  // componentDidMount() {
  //   this.props.services.store.getRootStore().user.createSession()
  // }

  render() {
    const { classes } = this.props

    return (
      <div>
        Login (token: {this.props.user.token})
        <br />
        <Link href="/">
          <a href="/">Home</a>
        </Link>
        <button className={classes.button} type="button">
          Войти
        </button>
      </div>
    )
  }
}

export default compose(
  withStyles(styles),
  withServices,
  inject('user'),
  observer
)(LoginPage)
