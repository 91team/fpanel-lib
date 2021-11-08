import React, { FC } from 'react'
import { useRoute } from 'react-router5'
import { constants } from 'router5'

import { ServiceName } from 'src/lib/services/types/constants'
import { getService } from 'src/lib/utils/global'

const AppRouter: FC<{}> = () => {
  const router = getService(ServiceName.ROUTER)
  const { route, previousRoute } = useRoute()
  const CurrentRoute = router.getRouteComponent(route ? route.name : constants.UNKNOWN_ROUTE)!

  return <CurrentRoute route={route} previousRoute={previousRoute} />
}

export { AppRouter }
