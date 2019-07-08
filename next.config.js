const path = require('path')
const withCss = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { configs } = require('./config')

module.exports = withPlugins([withCss, [withOptimizedImages, configs.images]], {
	webpack(config, options) {
		config.resolve.plugins = [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, './tsconfig.json')
			})
		]

		return config
	}
})
