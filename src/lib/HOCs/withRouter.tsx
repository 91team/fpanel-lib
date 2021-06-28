import React, { ComponentType } from 'react'

import hoistNonReactStatics from 'hoist-non-react-statics'
import { routerContext } from 'react-router5'
import { Router } from 'router5'

import { getDisplayName } from '../utils/getDisplayName'

export type TWithRouterProps = {
  router: Router
}
type TWithRouterHOC = <
  TOuterProps extends {} = {},
  TProps extends TWithRouterProps = TWithRouterProps
>(
  WrappedComponent: ComponentType<TProps>
) => (props: TOuterProps) => JSX.Element

export const withRouter: TWithRouterHOC = (WrappedComponent) => {
  const displayName = getDisplayName(WrappedComponent)

  const WithRouter = (props: any) => {
    const { Consumer } = routerContext

    return <Consumer>{(value) => <WrappedComponent {...props} router={value} />}</Consumer>
  }

  WithRouter.defaultProps = { ...WrappedComponent.defaultProps }
  WithRouter.displayName = `WithRouter(${displayName})`

  return hoistNonReactStatics(WithRouter, WrappedComponent)
}
