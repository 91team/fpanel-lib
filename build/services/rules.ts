import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'
import { Options } from 'ts-loader'
import { RuleSetLoader, RuleSetRule } from 'webpack'

import { ConfigParams } from './configurator'
import EnvService from './env'

class RulesService {
  private env: EnvService
  private browserlist = {
    LATEST: [
      'last 2 versions and opera > 0',
      'last 2 versions and chrome > 0',
      'last 2 versions and safari > 0',
      'last 2 versions and firefox > 0',
      'last 2 versions and edge > 0',
    ],
    SPEC: ['last 3 versions', 'ie 11', 'ios 9'],
  }

  constructor(env: EnvService) {
    this.env = env
  }

  private getBabelLoader({
    isDev,
    isServer,
    withHMR,
  }: ConfigParams): RuleSetLoader {
    const { LATEST } = this.browserlist
    const loader = {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        cacheDirectory: true,
        presets: [
          [
            '@babel/env',
            {
              loose: false,
              modules: false,
              useBuiltIns: 'usage',
              corejs: '3',
              targets: { browsers: LATEST },
            },
          ],
          ['@babel/react', { development: isDev }],
        ],
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            { decoratorsBeforeExport: true },
          ],
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: '3',
              helpers: true,
              regenerator: true,
              useESModules: false,
            },
          ],
          '@babel/plugin-proposal-optional-chaining',
          '@babel/proposal-class-properties',
          '@babel/transform-spread',
          '@babel/syntax-dynamic-import',
          'lodash',
          'universal-import',
          'polished',
          'date-fns',
        ],
      },
    }

    if (!isServer && withHMR) {
      loader.options.plugins.push('react-hot-loader/babel')
    }

    return loader
  }

  private getTSLoader({ isSG }: ConfigParams): RuleSetLoader {
    const { WEBPACK_CONTEXT, TS_CONFIG } = this.env.paths
    const loader = {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        happyPackMode: true,
        onlyCompileBundledFiles: true,
        allowTsInNodeModules: true,
        experimentalFileCaching: true,
        configFile: 'tsconfig.json',
      } as Options,
    }

    if (!isSG) {
      return {
        ...loader,
        options: {
          ...loader.options,
          configFile: TS_CONFIG,
          // We have a common tsconfig. So: "In this case the configFile should point to the
          // tsconfig.json and context to the project root." (https://github.com/TypeStrong/ts-loader#configfile)
          context: WEBPACK_CONTEXT,
        },
      }
    }

    return loader
  }

  private getImageLoaders({ isDev }: ConfigParams): RuleSetLoader[] {
    const loaders = [
      {
        loader: 'file-loader',
        options: this.getFileLoaderOptions('images', isDev),
      },
    ]

    if (!isDev) {
      loaders.push({
        loader: 'img-loader',
        options: {
          plugins: [
            require('imagemin-gifsicle')({ interlaced: false }),
            require('imagemin-jpegtran')({
              progressive: true,
              arithmetic: false,
            }),
            require('imagemin-optipng')({ optimizationLevel: 3 }),
            require('imagemin-pngquant')({
              floyd: 0.5,
              speed: 2,
            }),
            require('imagemin-svgo')({
              plugins: [{ removeTitle: true }, { convertPathData: false }],
            }),
          ],
        },
      })
    }

    return loaders
  }

  private getCSSLoader({
    isServer,
    withHMR,
  }: ConfigParams): RuleSetRule['use'] {
    return [
      {
        loader: ExtractCssChunks.loader,
        options: {
          hot: !isServer && withHMR,
          reloadAll: true,
        },
      },
      'css-loader',
    ]
  }

  private getFileLoaderOptions(
    fileType: string,
    isDev: boolean
  ): RuleSetLoader['options'] {
    return {
      name: `assets/${fileType}/${isDev ? '[name].[ext]' : '[hash].[ext]'}`,
    }
  }

  public getList(params: ConfigParams) {
    const { isDev, isServer, withHMR } = params
    const babelLoader = this.getBabelLoader(params)
    const TSLoader = this.getTSLoader(params)
    const imageLoaders = this.getImageLoaders(params)
    const CSSLoader = this.getCSSLoader(params)
    const excludeRegExp = /(node_modules|bower_compontents)\/(?!bi-client)/

    const rules: RuleSetRule[] = [
      {
        test: /\.(ts|tsx)$/,
        exclude: excludeRegExp,
        use: [babelLoader, TSLoader],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: excludeRegExp,
        use: babelLoader,
      },
      {
        test: /\.worker(\.(js|ts))?$/,
        exclude: excludeRegExp,
        use: [
          {
            loader: 'worker-file-loader',
          },
          babelLoader,
          TSLoader,
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /sprite/,
        use: imageLoaders,
      },
      {
        test: /[^\/]+\/sprite(?:\/?[^\/]+)*\/?(?:\/[\w+])?.svg$/,
        use: {
          loader: 'svg-sprite-loader',
          options: {
            plainSprite: true,
            symbolId: '[name]-[hash:5]',
          },
        },
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        exclude: excludeRegExp,
        use: {
          loader: 'file-loader',
          options: this.getFileLoaderOptions('fonts', isDev),
        },
      },
      {
        test: /\.(css)$/,
        include: excludeRegExp,
        use: CSSLoader,
      },
    ]

    if (!isServer && withHMR) {
      rules.push({
        test: /\.(jsx|tsx)$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      })
    }

    return rules
  }
}

export default RulesService
