import 'isomorphic-unfetch'
import 'modern-normalize'
import React from 'react'
import { Provider, useStaticRendering } from 'mobx-react'
import App, { Container, AppProps, AppContext } from 'next/app'
import NextSEO from 'next-seo'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'react-jss'

import ApolloService from 'services/apollo'
import AppService from 'services/app'
import StoreService from 'services/store'
import { defaultTheme } from 'lib/theme'
import { defaultSeoConfig } from 'lib/constants/seo'
import Layout from 'containers/PageLayout'
import { CStore } from 'lib/store/types'

declare global {
  interface Window {
    __INITIAL_STATE__?: string
    __APOLLO_INITIAL_STATE__?: string
  }
}

type TProps = AppProps & {
  initialState: any
  pageProps: any
  styles?: React.ReactNode
  isServer: boolean
}

class Application extends App<TProps> {
  private stores: Record<string, CStore>
  private apolloClient: App.TApollo

  constructor(props: TProps) {
    super(props)

    useStaticRendering(AppService.isServer)

    if (!AppService.isServer) {
      StoreService.rehydrate()

      if (AppService.isDev) {
        StoreService.makeLogger()
      }
    }

    this.stores = StoreService.getChildStores()
    this.apolloClient = ApolloService.createClient(
      AppService.isServer ? undefined : ApolloService.convertFromJSON()
    )
  }

  public static async getInitialProps({ ctx, Component }: AppContext) {
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    StoreService.initialize()

    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    let pageProps: { [key: string]: any } = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS
    this.removeElementByID('jss-server-side')

    // Remove the server-side injected store state
    this.removeElementByID('store-server-side')

    // Remove the server-side injected apollo state
    this.removeElementByID('apollo-server-side')
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
          <Container>
            <Provider {...this.stores}>
              <Layout>
                <NextSEO config={defaultSeoConfig} />
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </Container>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default Application
