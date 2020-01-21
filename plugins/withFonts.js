module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    const { isServer } = options

    if (!options.defaultLoaders) {
      throw new Error(
        'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
      )
    }

    const assetPrefix = nextConfig.assetPrefix || ''

    let testPattern = /\.(woff|woff2|eot|ttf|otf)$/

    config.module.rules.push({
      test: testPattern,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: `${assetPrefix}/_next/static/chunks/fonts/`,
            outputPath: `${isServer ? '../' : ''}static/chunks/fonts/`,
            name: '[name]-[hash].[ext]'
          }
        }
      ]
    })

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  }
})
