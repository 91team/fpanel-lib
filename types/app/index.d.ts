import { defaultTheme } from 'lib/theme'
import { Store } from 'lib/store'

declare namespace App {
  type Theme = typeof defaultTheme
  type Store = Store
}

export = App
export as namespace App
