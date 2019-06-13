const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withOffline = require('next-offline')
const withManifest = require('next-manifest')
const withPlugins = require('next-compose-plugins')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { swConfig } = require('./config/sw')

module.exports = withPlugins(
	[
		withCss,
		withTypescript,
		[
			withOffline,
			{
				workboxOpts: swConfig,
				dontAutoRegisterSw: true,
				generateInDevMode: true,
				registerSwPrefix: '/static',
				scope: '/'
			}
		]
	],
	{
		webpack(config, options) {
			config.resolve.plugins = [
				new TsconfigPathsPlugin({
					configFile: path.resolve(__dirname, './tsconfig.json')
				})
			]

			// Do not run type checking twice:
			if (options.isServer)
				config.plugins.push(
					new ForkTsCheckerWebpackPlugin({
						tsconfig: path.resolve(__dirname, './tsconfig.json'),
						tslint: path.resolve(__dirname, './tslint.json'),
						checkSyntacticErrors: true,
						tslint: true,
						tslintAutoFix: true,
						memoryLimit: 1024,
						workers: ForkTsCheckerWebpackPlugin.ONE_CPU,
						async: true
					})
				)

			return config
		}
	}
)
