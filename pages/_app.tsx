import 'isomorphic-unfetch'
import 'modern-normalize'
import React from 'react'
import { Provider } from 'mobx-react'
import App, { Container, AppProps, AppContext } from 'next/app'
import NextSEO from 'next-seo'
import { ThemeProvider } from 'react-jss'

import { initializeStore } from 'lib/store'
import { defaultTheme } from 'lib/theme'
import { defaultSeoConfig } from 'lib/constants/seo'
import Layout from 'containers/PageLayout'

type TProps = AppProps & {
  isServer: boolean
  initialState: any
  pageProps: any
  styles?: React.ReactNode
}

class Application extends App<TProps> {
  public static async getInitialProps({ Component, ctx }: AppContext) {
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    const store = initializeStore()

    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    let pageProps: { [key: string]: any } = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      initialState: {},
      pageProps
    }
  }

  private store: App.Store

  constructor(props: TProps) {
    super(props)

    this.store = initializeStore(props.initialState) as App.Store
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
          <Provider store={this.store}>
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
