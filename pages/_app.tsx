import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { Provider, useStaticRendering } from 'mobx-react'
import App, { AppProps, AppContext } from 'next/app'
import NextSEO from 'next-seo'
import { ThemeProvider } from 'react-jss'

import 'isomorphic-unfetch'
import 'modern-normalize'

import { ServicesManager } from 'services/index'
import ServicesContext from 'lib/contexts/services'
import Layout from 'containers/PageLayout'
import { defaultTheme } from 'lib/theme'
import { defaultSeoConfig } from 'constants/seo'
import { TInitialState as TApolloInitialState } from 'services/apollo'
import { TInitialState as TStoreInitialState } from 'services/store'
import { CStore } from 'lib/store/types'

type TProps = AppProps & {
  initialStoreState?: TStoreInitialState
  initialApolloState?: TApolloInitialState
  servicesManager?: ServicesManager
}

class Application extends App<TProps> {
  private servicesManager: ServicesManager
  private stores: Record<string, CStore>
  private apolloClient: App.TApollo

  constructor(props: TProps) {
    super(props)

    const { servicesManager, initialApolloState, initialStoreState } = props

    if (servicesManager) {
      this.servicesManager = servicesManager
    } else {
      this.servicesManager = ServicesManager.build({
        initialApolloState,
        initialStoreState
      })
    }

    const {
      apollo: apolloService,
      app: appService,
      store: storeService
    } = this.servicesManager.getServices()

    if (appService.isDev && !appService.isServer) {
      storeService.makeLogger()
    }

    this.stores = storeService.getChildStores()
    this.apolloClient = apolloService.getClient()
  }

  public static async getInitialProps({ ctx, Component, AppTree }: AppContext) {
    useStaticRendering(true)

    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our services and store
    const servicesManager = ServicesManager.build()
    const {
      apollo: apolloService,
      store: storeService
    } = servicesManager.getServices()

    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    let pageProps: { [key: string]: any } = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
        servicesManager
      } as App.TPageContext)
    }

    await getDataFromTree(
      <AppTree ssrServices={servicesManager} pageProps={pageProps} />
    )

    // We only forward the state of services,
    // because they have circular links
    return {
      initialStoreState: storeService.convertToJSON(),
      initialApolloState: apolloService.convertToJSON(),
      pageProps
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS
    this.removeElementByID('jss-server-side')
  }

  removeElementByID(id: string) {
    const element = document.querySelector('#' + id)

    if (element) {
      element.parentNode!.removeChild(element)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ServicesContext.Provider value={this.servicesManager}>
        <ApolloProvider client={this.apolloClient}>
          <ThemeProvider theme={defaultTheme}>
            <Provider {...this.stores}>
              <Layout>
                <NextSEO config={defaultSeoConfig} />
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </ThemeProvider>
        </ApolloProvider>
      </ServicesContext.Provider>
    )
  }
}

export default Application
