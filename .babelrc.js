const isProduction = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

const config = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: 'usage',
          corejs: 3
        },
        'preset-react': {
          useBuiltIns: true,
          development: isDev
        }
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'polished'
  ]
}

if (isProduction) {
  config.plugins.push('lodash')
}

module.exports = config
