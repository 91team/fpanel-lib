import React, { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { Provider, useStaticRendering } from 'mobx-react'
import App, { AppProps, AppContext } from 'next/app'
import NextSEO from 'next-seo'
import { ThemeProvider } from 'react-jss'

import 'isomorphic-unfetch'
import 'modern-normalize'

import {
  ServicesBuilder,
  ApolloService,
  AppService,
  StoreService
} from 'services/index'
import Layout from 'containers/PageLayout'
import { defaultTheme } from 'lib/theme'
import { defaultSeoConfig } from 'constants/seo'
import { CStore } from 'lib/store/types'

type TProps = AppProps & {
  initialStoreState?: Object
  initialApolloState?: Object
  ssrServices?: ServicesBuilder
  styles?: ReactNode
}

class Application extends App<TProps> {
  private stores: Record<string, CStore>
  private apolloClient: App.TApollo

  constructor(props: TProps) {
    super(props)

    const { ssrServices, initialApolloState, initialStoreState } = props

    if (ssrServices) {
      const { apollo, store } = ssrServices.getServices()

      this.stores = store.getChildStores()
      this.apolloClient = apollo.getClient()
    } else {
      const services = new ServicesBuilder({})
      const appService = new AppService({ root: services })
      const apolloService = new ApolloService({
        initialState: initialApolloState,
        root: services
      })
      const storeService = new StoreService({
        initialState: initialStoreState,
        root: services
      })

      this.stores = storeService.getChildStores()
      this.apolloClient = apolloService.getClient()

      if (appService.isDev && !appService.isServer) {
        StoreService.makeLogger()
      }
    }
  }

  public static async getInitialProps({ ctx, Component, AppTree }: AppContext) {
    useStaticRendering(true)

    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our services and store
    const services = new ServicesBuilder({})
    const appService = new AppService({ root: services })
    const apolloService = new ApolloService({ root: services })
    const storeService = new StoreService({ root: services })

    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    let pageProps: { [key: string]: any } = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
        services
      } as App.TPageContext)
    }

    await getDataFromTree(
      <AppTree ssrServices={services} pageProps={pageProps} />
    )

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
    )
  }
}

export default Application
