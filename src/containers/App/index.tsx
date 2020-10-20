import React, { PureComponent } from 'react'

import { Provider } from 'mobx-react'
import { ApolloProvider } from 'react-apollo'
import { hot } from 'react-hot-loader/root'
import { JSSProviderProps, JssProvider, ThemeProvider } from 'react-jss'
import { RouterProvider } from 'react-router5'
import { Router as Router5 } from 'router5'

import { ServicesManager } from 'lib/services'

import { CStore } from 'lib/store/types'

import { defaultTheme } from 'lib/theme'

import ServicesContext from 'lib/contexts/services'

import { createGenerateID } from 'utils/createGenerateJSSID'

import { withHMRContainer } from 'HOCs/withHMRContainer'

import Router from 'containers/Router'

export type TOuterProps = {
  servicesManager: ServicesManager
  isDisableStylesGeneration?: boolean
}
type TProps = TOuterProps
type TState = {}

class App extends PureComponent<TProps, TState> {
  private apolloClient: App.TApollo
  private servicesManager: ServicesManager
  private stores: Record<string, CStore>
  private router: Router5
  private JSSProps: Omit<JSSProviderProps, 'children'>

  static defaultProps: Partial<TProps> = {
    isDisableStylesGeneration: false,
  }

  constructor(props: TProps) {
    super(props)

    const { servicesManager, isDisableStylesGeneration } = props
    const {
      apollo: apolloService,
      app: appService,
      router: routerService,
    } = servicesManager.getServices()
    const isProd = !appService.isDev

    this.servicesManager = servicesManager
    this.apolloClient = apolloService.getClient()
    this.router = routerService.getInstance()
    this.JSSProps = {
      generateId: createGenerateID({ withID: !isProd, minify: isProd }),
      disableStylesGeneration: isDisableStylesGeneration,
    }
  }

  render() {
    return (
      <ServicesContext.Provider value={this.servicesManager}>
        <JssProvider {...this.JSSProps}>
          <ApolloProvider client={this.apolloClient}>
            <ThemeProvider theme={defaultTheme}>
              <Provider {...this.stores}>
                <RouterProvider router={this.router}>
                  <Router />
                </RouterProvider>
              </Provider>
            </ThemeProvider>
          </ApolloProvider>
        </JssProvider>
      </ServicesContext.Provider>
    )
  }
}

export default withHMRContainer<TOuterProps>(hot(App))
