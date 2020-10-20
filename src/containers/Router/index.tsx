import React, { PureComponent } from 'react'

import { WithRouterProps, withRoute } from 'react-router5'
import { Route, Router, SubscribeState, constants } from 'router5'

import compose from 'utils/compose'

import withServices, { TWithServicesProps } from 'HOCs/withServices'

import Layout from 'containers/Layout'

type TOuterProps = {}
type TProps = WithRouterProps & TOuterProps & TWithServicesProps & {}

class AppRouter extends PureComponent<TProps> {
  getSectionRouteComponent(route: Route) {
    const {
      services: { router },
    } = this.props

    return router.getSectionComponent(
      route ? route.name : constants.UNKNOWN_ROUTE
    )
  }

  render() {
    const { route, previousRoute } = this.props

    const CurrentRoute = this.getSectionRouteComponent(route)

    return (
      <Layout>
        <CurrentRoute route={route} previousRoute={previousRoute} />
      </Layout>
    )
  }
}

export default compose<TOuterProps>(
  withRoute,
  withServices
)(AppRouter)
