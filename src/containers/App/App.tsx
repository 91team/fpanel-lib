import React, { FC } from 'react'

import { ApolloProvider } from 'react-apollo'
import { RouterProvider } from 'react-router5'

import { ServiceName } from 'lib/services/types/constants'

import { getService } from 'lib/utils/global'

import { AppRouter } from 'containers/Router/Router'

// Global styles and variables
import 'lib/styles/global.scss'
// App themes
import 'lib/styles/theme/index.scss'

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
