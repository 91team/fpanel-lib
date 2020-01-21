/* eslint-disable max-classes-per-file */
import { Styles, StyleSheet, CreateGenerateId } from 'jss'

declare module 'react-jss' {
  type ComponentStyles = Styles | StyleSheet<any>
  // JSS
  export type JSSClasses<S> = { [K in keyof ReturnType<S>]: string }
  export interface JSSPropsWithoutTheme<S> {
    classes: JSSClasses<S>
  }
  export interface JSSProps<S> {
    /**
     * @ignore
     */
    classes: JSSClasses<S>
    /**
     * @ignore
     */
    theme: App.Theme
  }

  // eslint-disable-next-line @typescript-eslint/class-name-casing
  interface injectStylesOptions {}

  interface InjectStyles<P> {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    (Component: React.ComponentType<P>): React.ComponentType<P>
  }

  function injectStyles<P extends {}>(
    styles: ComponentStyles,
    options?: { inject?: string[] }
  ): InjectStyles<P>

  export const createGenerateId: CreateGenerateId

  export function withTheme<P extends {}>(
    Component: React.ComponentType<P>
  ): React.ComponentType<P>

  export class SheetsRegistry {
    toString(): string
  }
  export class JssProvider extends React.Component<{ registry: Object }> {}
  export class ThemeProvider extends React.Component<{ theme: Object }> {}

  export default injectStyles
}
