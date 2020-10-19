import { NextPageContext } from 'next'
import { State, SubscribeState } from 'router5'

import Store from 'lib/store'

import { defaultTheme } from 'lib/theme'

import { IApollo } from 'services/apollo'
import { ServicesManager } from 'services/index'

declare namespace App {
  type TBaseServicesManager = ServicesManager<TBaseStorage>
  type TServices = ReturnType<ServicesManager['getServices']>
  type TApollo = IApollo
  type TTheme = typeof defaultTheme
  type TStore = Store
  type TPageContext = NextPageContext & {
    servicesManager: ServicesManager
  }

  type TRouteProps = Partial<SubscribeState>
}

export = App
export as namespace App
