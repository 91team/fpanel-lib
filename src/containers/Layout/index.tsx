import React, { Fragment, PureComponent } from 'react'

import withStyles, { TWithStylesProps } from 'HOCs/withStyles'

import styles from './styles'

type TOuterProps = App.TRouteProps
type TProps = TOuterProps & TWithStylesProps<typeof styles>
type TState = {}

class Layout extends PureComponent<TProps, TState> {
  componentDidMount() {
    console.log('layout mounted')
  }

  render() {
    const { children } = this.props

    return <Fragment>{children}</Fragment>
  }
}

export default withStyles<TOuterProps, typeof styles>(styles)(Layout)
