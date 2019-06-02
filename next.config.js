const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withPlugins([withCss, withTypescript], {
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
					memoryLimit: 1024,
					workers: ForkTsCheckerWebpackPlugin.ONE_CPU,
					async: true
				})
			)

		return config
	}
})
