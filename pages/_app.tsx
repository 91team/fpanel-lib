import React from 'react'
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
import { TInitialState as TStoreInitialState } from 'services/store'
import { CStore } from 'lib/store/types'

type TProps = AppProps & {
  initialStoreState?: TStoreInitialState
  servicesManager?: ServicesManager
}

class Application extends App<TProps> {
  private servicesManager: ServicesManager
  private stores: Record<string, CStore>

  constructor(props: TProps) {
    super(props)

    const { servicesManager, initialStoreState } = props

    if (servicesManager) {
      this.servicesManager = servicesManager
    } else {
      this.servicesManager = ServicesManager.build({
        initialStoreState
      })
    }

    const {
      app: appService,
      store: storeService
    } = this.servicesManager.getServices()

    if (appService.isDev && !appService.isServer) {
      storeService.makeLogger()
    }

    this.stores = storeService.getChildStores()
  }

  public static async getInitialProps({ ctx, Component, AppTree }: AppContext) {
    useStaticRendering(true)

    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our services and store
    const servicesManager = ServicesManager.build({ ctx })
    const {
      store: storeService,
      cookies: cookiesService
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

    // We only forward the state of services,
    // because they have circular links
    return {
      initialStoreState: storeService.convertToJSON(),
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
        <ThemeProvider theme={defaultTheme}>
          <Provider {...this.stores}>
            <Layout>
              <NextSEO config={defaultSeoConfig} />
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </ServicesContext.Provider>
    )
  }
}

export default Application
