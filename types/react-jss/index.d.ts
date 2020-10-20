import { Classes, Jss, StyleSheetFactoryOptions } from 'jss'
import { Theming } from 'theming'

declare module 'react-jss' {
  interface BaseOptions extends StyleSheetFactoryOptions {
    index?: number
    theming?: Theming<object>
  }

  export interface WithStylesOptions extends BaseOptions {
    injectTheme?: boolean
    jss?: Jss
  }
}
