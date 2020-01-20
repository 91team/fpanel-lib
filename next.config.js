const path = require('path')
const withCss = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { configs } = require('./config')
const TS_CONFIG_PATH = path.resolve(__dirname, './tsconfig.json')

module.exports = withPlugins([withCss, [withOptimizedImages, configs.images]], {
  webpack(config, options) {
    const { plugins: resolvePlugins } = config.resolve
    const plugins = [
      new TSConfigPathsPlugin({
        configFile: TS_CONFIG_PATH
      })
    ]

    config.resolve.plugins = resolvePlugins
      ? resolvePlugins.concat(plugins)
      : plugins

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new LodashModuleReplacementPlugin())
    } else {
      // Must be changed from default, because default not working in first render on client
      config.devtool = 'cheap-module-eval-source-map'
    }

    return config
  }
})
