import React, { Fragment } from 'react'
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext
} from 'next/document'
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'
import sprite from 'svg-sprite-loader/runtime/sprite.build'

import ApolloService from 'services/apollo'
import StoreService from 'services/store'

type TProps = DocumentProps & {
  spriteContent: string
  storeInitialState: string
  apolloInitialState: string
}

class AppDocument extends Document<TProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <JssProvider registry={registry} generateId={createGenerateId}>
            <App {...props} />
          </JssProvider>
        )
      })

    // In that place rendered <Main /> component
    const initialProps = await Document.getInitialProps(ctx)

    // Awaiter for Apollo requests
    // await new Promise(resolve => setTimeout(resolve, 2000))

    const spriteContent = sprite.stringify() as string
    const storeInitialState = StoreService.convertToJSON()
    const apolloInitialState = ApolloService.convertToJSON()

    console.log('taked state', apolloInitialState)

    return {
      ...initialProps,
      styles: [
        <Fragment key="ssr-styles">
          {initialProps.styles}
          <style id="jss-server-side">{registry.toString()}</style>
        </Fragment>
      ],
      spriteContent,
      storeInitialState,
      apolloInitialState
    }
  }

  render() {
    const { spriteContent, storeInitialState, apolloInitialState } = this.props
    console.log('render dom')

    return (
      <Html>
        <Head>
          <script
            id="store-server-side"
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__ = '${storeInitialState}'`
            }}
          />
          <script
            id="apollo-server-side"
            dangerouslySetInnerHTML={{
              __html: `window.__APOLLO_INITIAL_STATE__ = '${apolloInitialState}'`
            }}
          />
        </Head>
        <body>
          <div
            style={{ display: 'none' }}
            aria-hidden="true"
            dangerouslySetInnerHTML={{
              __html: spriteContent
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
