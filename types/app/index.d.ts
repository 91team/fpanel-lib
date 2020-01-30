import { NextPageContext } from 'next'

import { ServicesBuilder } from 'services/index'
import { IApollo } from 'services/apollo'
import { defaultTheme } from 'lib/theme'
import Store from 'lib/store'

declare namespace App {
  type TApollo = IApollo
  type TTheme = typeof defaultTheme
  type TStore = Store
  type TPageContext = NextPageContext & {
    services: ServicesBuilder
  }
}

export = App
export as namespace App
