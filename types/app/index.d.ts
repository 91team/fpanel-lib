import { NextPageContext } from 'next'

import { ServicesManager } from 'services/index'
import { defaultTheme } from 'lib/theme'
import Store from 'lib/store'

declare namespace App {
  type TServices = ReturnType<ServicesManager['getServices']>
  type TTheme = typeof defaultTheme
  type TStore = Store
  type TPageContext = NextPageContext & {
    servicesManager: ServicesManager
  }
}

export = App
export as namespace App
