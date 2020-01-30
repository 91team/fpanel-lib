import React, { PureComponent } from 'react'

type TProps = {
  url: string
}

class IndexPage extends PureComponent<TProps> {
  static async getInitialProps(ctx: App.TPageContext) {
    const { url } = await fetch('https://api.github.com/orgs/ninenone').then(
      res => res.json()
    )

    return { url }
  }

  render() {
    return <div>{this.props.url}</div>
  }
}

export default IndexPage
