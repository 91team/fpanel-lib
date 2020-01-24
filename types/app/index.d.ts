import { IApollo } from 'services/apollo'

import { defaultTheme } from 'lib/theme'
import Store from 'lib/store'

declare namespace App {
  type TApollo = IApollo
  type TTheme = typeof defaultTheme
  type TStore = Store
}

export = App
export as namespace App
