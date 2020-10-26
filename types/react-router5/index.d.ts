declare module 'react-router5' {
  import { Ref } from 'react'

  import { Router, SubscribeState } from 'router5'
  export {
    RouterProvider,
    BaseLink,
    ConnectedLink,
    Link,
    withRouter,
    withRoute,
    routeNode,
    routeContext,
    routerContext,
    Router,
    Route,
    RouteNode,
    useRouter,
    useRoute,
    useRouteNode,
  } from 'react-router5/types'
  // eslint-disable-next-line import/order
  import { BaseLinkProps, BaseLinkProps } from 'react-router5/types/BaseLink'

  export interface LinkOuterProps
    extends Omit<BaseLinkProps, 'router' | 'route' | 'previousRoute'> {
    innerRef?: Ref<HTMLAnchorElement>
    routeName: BaseLinkProps['routeName']
  }

  export interface WithRouterProps extends SubscribeState {
    router: Router
  }
  export { BaseLinkProps }
  export { RouteContext } from 'react-router5/types/types'
}
