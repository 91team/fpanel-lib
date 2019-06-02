import React, { Component } from 'react'
import { NextContext } from 'next'

interface Props {
	url: string
}

class IndexPage extends Component<Props> {
	static async getInitialProps(ctx: NextContext) {
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
