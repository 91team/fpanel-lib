import React, { Component } from 'react'
import { NextPageContext } from 'next'

interface Props {
	url: string
}

class IndexPage extends Component<Props> {
	static async getInitialProps(ctx: NextPageContext) {
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
