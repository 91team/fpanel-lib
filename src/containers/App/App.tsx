import React, { FC } from 'react'
import { ApolloProvider } from 'react-apollo'
import { RouterProvider } from 'react-router5'

import { AppRouter } from 'src/containers/Router/Router'
import { ServiceName } from 'src/lib/services/types/constants'
import { getService } from 'src/lib/utils/global'

// Global styles and variables
import 'src/lib/styles/global.scss'
// App themes
import 'src/lib/styles/theme/index.scss'

export type TProps = {}

const App: FC<TProps> = ({}) => {
  const apollo = getService(ServiceName.APOLLO)
  const router = getService(ServiceName.ROUTER)

  return (
    <ApolloProvider client={apollo.getClient()}>
      <RouterProvider router={router.getInstance()}>
        <AppRouter />
      </RouterProvider>
    </ApolloProvider>
  )
}

export { App }
