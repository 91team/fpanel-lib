import { Config } from 'next-seo'

export const defaultSeoConfig: Config = {
	title: 'App',
	titleTemplate: '%s | Application',
	openGraph: {
		type: 'website',
		url: '',
		title: '',
		description: ''
	}
}
