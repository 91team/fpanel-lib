import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext
} from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build'

interface Props extends DocumentProps {
  spriteContent: string
}

class AppDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const spriteContent = sprite.stringify() as string

    return {
      spriteContent,
      ...initialProps
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.spriteContent
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
