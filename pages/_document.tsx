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

type TProps = DocumentProps & {
  spriteContent: string
}

class AppDocument extends Document<TProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const originalRenderPage = ctx.renderPage
    const generateId = createGenerateId()

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        )
      })

    // In that place rendered <Main /> component
    const initialProps = await Document.getInitialProps(ctx)

    // Awaiter for Apollo requests
    // await new Promise(resolve => setTimeout(resolve, 2000))

    const spriteContent = sprite.stringify() as string

    return {
      ...initialProps,
      styles: [
        <Fragment key="ssr-styles">
          {initialProps.styles}
          <style id="jss-server-side">{registry.toString()}</style>
        </Fragment>
      ],
      spriteContent
    }
  }

  render() {
    const { spriteContent } = this.props

    return (
      <Html>
        <Head />
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
