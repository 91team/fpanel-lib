import React from 'react'

import 'isomorphic-unfetch'
import 'modern-normalize'

import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { Provider, useStaticRendering } from 'mobx-react'
import NextSEO from 'next-seo'
import App, { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'react-jss'

import { CStore } from 'lib/store/types'

import { defaultTheme } from 'lib/theme'

import ServicesContext from 'lib/contexts/services'

import { TInitialState as TApolloInitialState } from 'services/apollo'
import { ServicesManager, AppService } from 'services/index'
import { TInitialState as TStoreInitialState } from 'services/store'

import Layout from 'containers/PageLayout'

import { defaultSeoConfig } from 'constants/seo'

type TProps = AppProps & {
  initialStoreState?: TStoreInitialState
  initialApolloState?: TApolloInitialState
  servicesManager?: ServicesManager
}

class Application extends App<TProps> {
  private servicesManager: ServicesManager
  private stores: Record<string, CStore>
  private apolloClient: App.TApollo

  public static clientServicesManager: ServicesManager

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
      // Duplicate instance to avoid services recreation in
      // getInitialProps method on client side, when we changing a route
      Application.clientServicesManager = this.servicesManager
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

    if (!appService.isServer) {
      apolloService.getToken = () => storeService.getRootStore().user.token
    }
  }

  public static async getInitialProps({ ctx, Component, AppTree }: AppContext) {
    // It's a fake manager for creating the app service
    let servicesManager = new ServicesManager()

    const appService = new AppService({ root: servicesManager })

    if (appService.isServer) {
      // Use getInitialProps as a step in the lifecycle when
      // we can initialize our services and store
      servicesManager = ServicesManager.build({ ctx })

      // Disable memory-leak for observer
      useStaticRendering(true)

      const {
        apollo: apolloService,
        cookies: cookiesService
      } = servicesManager.getServices()
      const cookies = cookiesService.getCookies()

      apolloService.getToken = () => cookies && cookies.token
    } else {
      servicesManager = Application.clientServicesManager
    }

    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    let pageProps: { [key: string]: any } = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
        servicesManager
      } as App.TPageContext)
    }

    const result: Pick<
      TProps,
      'pageProps' | 'initialApolloState' | 'initialStoreState'
    > = {
      pageProps
    }

    if (appService.isServer) {
      // We only forward the state of services,
      // because they have circular links
      const {
        store: storeService,
        apollo: apolloService
      } = servicesManager.getServices()

      await getDataFromTree(
        <AppTree ssrServices={servicesManager} pageProps={pageProps} />
      )

      result.initialApolloState = apolloService.convertToJSON()
      result.initialStoreState = storeService.convertToJSON()
    }

    return result
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
