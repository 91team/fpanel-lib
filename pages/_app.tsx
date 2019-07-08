import 'isomorphic-unfetch'
import React from 'react'
import { Provider } from 'mobx-react'
import App, { Container, AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import NextSEO from 'next-seo'

import { initializeStore } from 'lib/store'
import { theme } from 'lib/theme'
import { defaultSeoConfig } from 'lib/constants/seo'
import Layout from 'containers/PageLayout'

interface Props extends AppProps {
	isServer: boolean
	initialState: any
	pageProps: any
	styles?: React.ReactNode
}

class MyApp extends App<Props, {}> {
	public static async getInitialProps({ Component, ctx }: AppContext) {
		//
		// Use getInitialProps as a step in the lifecycle when
		// we can initialize our store
		//
		const store = initializeStore()
		//
		// Check whether the page being rendered by the App has a
		// static getInitialProps method and if so call it
		//
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

	constructor(props: Props) {
		super(props)

		this.store = initializeStore(props.initialState) as App.Store
	}

	public render() {
		const { Component, pageProps } = this.props
		return (
			<>
				<NextSEO config={defaultSeoConfig} />
				<Container>
					<ThemeProvider theme={theme}>
						<Provider store={this.store}>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</Provider>
					</ThemeProvider>
				</Container>
			</>
		)
	}
}

export default MyApp
