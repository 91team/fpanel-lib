import 'isomorphic-unfetch'
import 'modern-normalize'
import React from 'react'
import { Provider, useStaticRendering } from 'mobx-react'
import App, { Container, AppProps, AppContext } from 'next/app'
import NextSEO from 'next-seo'
import { ThemeProvider } from 'react-jss'

import AppService from 'services/app'
import StoreService from 'services/store'
import { defaultTheme } from 'lib/theme'
import { defaultSeoConfig } from 'lib/constants/seo'
import Layout from 'containers/PageLayout'
import { CStore } from 'lib/store/types'

declare global {
  interface Window {
    __INITIAL_STATE__?: string
  }
}

type TProps = AppProps & {
  isServer: boolean
  initialState: any
  pageProps: any
  styles?: React.ReactNode
}

class Application extends App<TProps> {
  private stores: Record<string, CStore>

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
  }

  public static async getInitialProps({ Component, ctx }: AppContext) {
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
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
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
    )
  }
}

export default Application
