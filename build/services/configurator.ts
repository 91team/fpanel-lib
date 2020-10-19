import CompressionPlugin from 'compression-webpack-plugin'
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'
import ForkTSCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import IgnoreNotFound from 'ignore-not-found-export-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import { join } from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack, { Configuration, Plugin } from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import { StatsWriterPlugin } from 'webpack-stats-plugin'

import EnvService from './env'
import RulesService from './rules'

interface EntryParams {
  name?: string
  path?: string
}
export interface ConfigParams {
  /**
   * Custom entries config
   */
  entry?: Partial<EntryParams>
  /**
   * Is development environment
   */
  isDev: boolean
  /**
   * Is server-side
   */
  isServer: boolean
  /**
   * Is config for react-styleguidist
   */
  isSG: boolean
  /**
   * With HMR or not
   */
  withHMR: boolean
  /**
   * Is bundling for deployment
   */
  isExtract?: boolean
}

class ConfiguratorService {
  private envService: EnvService
  private rulesService: RulesService

  constructor({ env, rules }: { env: EnvService; rules: RulesService }) {
    this.envService = env
    this.rulesService = rules
  }

  private get default(): Configuration {
    const { WEBPACK_CONTEXT, TS_CONFIG, NODE_MODULES } = this.envService.paths

    return {
      context: WEBPACK_CONTEXT,
      target: 'node',
      performance: { hints: false },
      cache: true,
      resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: [NODE_MODULES],
        plugins: [new TSConfigPathsPlugin({ configFile: TS_CONFIG })],
      },
    }
  }

  private getOptimizations({
    isDev,
  }: ConfigParams): Configuration['optimization'] {
    const optimization: Configuration['optimization'] = {
      noEmitOnErrors: false,
      minimize: false,
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    }

    if (!isDev) {
      optimization.minimize = true
      optimization.minimizer = [
        new TerserPlugin({
          sourceMap: false,
          cache: true,
          parallel: true,
          terserOptions: {
            safari10: true,
            compress: false,
            mangle: false,
            module: false,
            keep_classnames: true,
            keep_fnames: true,
          },
        }),
      ]
    }

    return optimization
  }

  private getOutput({ isSG, isServer }: ConfigParams): Configuration['output'] {
    const {
      paths: { PUBLIC_PATH, OUTPUT_PATH },
    } = this.envService

    interface OutputConfig {
      content: Configuration['output']
      condition?: boolean[]
    }

    const commonConfig: Partial<Configuration['output']> = {
      chunkFilename: `[name].[contenthash].js`,
      publicPath: PUBLIC_PATH,
      path: OUTPUT_PATH,
    }
    const configs: OutputConfig[] = [
      {
        content: {
          ...commonConfig,
          filename: '[name].[hash].js',
          hotUpdateChunkFilename: '[id].[hash].hot-update.js',
          hotUpdateMainFilename: '[hash].hot-update.json',
        },
        condition: [!isSG, !isServer],
      },
      {
        content: {
          ...commonConfig,
          filename: '[name].js',
          libraryTarget: 'commonjs2',
        },
        condition: [!isSG, isServer],
      },
      {
        content: {},
        condition: [isSG],
      },
    ]
    const outputConfig = configs.find(
      config => !config.condition || config.condition.every(Boolean)
    )

    return outputConfig ? outputConfig.content : {}
  }

  private getEntries({
    entry,
    isServer,
    isSG,
    withHMR,
  }: ConfigParams): Configuration['entry'] {
    const {
      paths: { SRC },
    } = this.envService
    const entryName = entry && entry.name
    const entryPath = entry && entry.path
    const serverEntry = entryPath || join(SRC, 'startup/server')
    const clientEntry = entryPath || join(SRC, 'startup/client')

    interface EntryConfig {
      content: Configuration['entry']
      condition?: boolean[]
    }

    const configs: EntryConfig[] = [
      {
        content: {
          [entryName]: [serverEntry],
        },
        condition: [isServer],
      },
      {
        content: {
          [entryName]: [
            `webpack-hot-middleware/client?reload=true&timeout=1000`,
            clientEntry,
          ],
        },
        condition: [!isServer, !isSG, withHMR],
      },
      {
        content: {
          [entryName]: [clientEntry],
        },
        condition: [!isServer, !isSG, !withHMR],
      },
    ]
    const entryConfig = configs.find(
      config => !config.condition || config.condition.every(Boolean)
    )

    if (entryConfig) {
      return entryConfig.content
    }

    return {}
  }

  private getPlugins = ({
    isDev,
    isServer,
    isSG,
    isExtract,
    withHMR,
  }: ConfigParams): Configuration['plugins'] => {
    const {
      clientAppConfig,
      paths: {
        HTML_TEMPLATE_PATH,
        TS_CONFIG,
        PUBLIC_PATH,
        ESLINT_CONFIG,
        ESLINT_IGNORE,
      },
    } = this.envService

    interface PluginConfig {
      content: Plugin
      condition?: boolean[]
    }

    const definePluginOptions = clientAppConfig
    const configs: PluginConfig[] = [
      {
        content: new webpack.DefinePlugin(
          Object.entries(definePluginOptions).reduce(
            (result, [key, value]) => {
              result[`process.env.${key}`] = JSON.stringify(value)

              return result
            },
            {
              'WEBPACK_CONSTANTS.APP.IS_SERVER': isServer,
            }
          )
        ),
      },
      {
        content: new LodashModuleReplacementPlugin({
          shorthands: isSG,
        }),
      },
      {
        content: new ExtractCssChunks({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      },
      {
        content: new HTMLWebpackPlugin({
          template: HTML_TEMPLATE_PATH,
          alwaysWriteToDisk: true,
        }),
        condition: [!isSG, !isServer],
      },
      // {
      //   content: new BundleAnalyzerPlugin(),
      //   condition: [!isServer, !isSG]
      // },
      {
        content: new ForkTSCheckerWebpackPlugin({
          tsconfig: TS_CONFIG,
          async: isDev,
          eslint: true,
          eslintOptions: {
            configFile: ESLINT_CONFIG,
            ignorePath: ESLINT_IGNORE,
          },
          checkSyntacticErrors: true,
          memoryLimit: 2048,
          measureCompilationTime: true,
        }),
        condition: [isDev, !isServer, !isSG],
      },
      {
        content: new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
        condition: [!isDev, !isServer, !isSG],
      },
      {
        content: new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
        condition: [isServer],
      },
      {
        content: new ManifestPlugin({
          publicPath: PUBLIC_PATH,
          writeToFileEmit: true,
        }),
        condition: [!isServer, !isSG],
      },
      {
        content: new webpack.HotModuleReplacementPlugin(),
        condition: [withHMR],
      },
      {
        // Bug: https://github.com/TypeStrong/ts-loader/issues/653
        content: new IgnoreNotFound({
          include: [/\.tsx?$/],
        }),
      },
      {
        content: new StatsWriterPlugin({
          filename: 'client-stats.json',
          fields: [
            'assetsByChunkName',
            'namedChunkGroups',
            'chunks',
            'modules',
            'publicPath',
            'outputPath',
          ],
        }),
        condition: [isExtract, !isServer],
      },
    ]

    return configs
      .filter(config => !config.condition || config.condition.every(Boolean))
      .map(config => config.content)
  }

  private getRules = (params: ConfigParams): Configuration['module']['rules'] =>
    this.rulesService.getList(params)

  private getExternals = (params: ConfigParams): Configuration['externals'] => {
    interface PluginConfig {
      content: Configuration['externals']
      condition?: boolean[]
    }

    const configs: PluginConfig[] = []

    const entryConfig = configs.find(
      config => !config.condition || config.condition.every(Boolean)
    )

    return entryConfig ? entryConfig.content : {}
  }

  public getConfig({ entry, ...customParams }: ConfigParams): Configuration {
    const params: ConfigParams = { ...customParams, entry: entry || {} }
    const { isDev, isServer, isExtract, withHMR } = params
    const config = this.default

    if (isDev) {
      config.mode = 'development'

      // eslint-disable-next-line @typescript-eslint/tslint/config
      if (!isExtract) {
        config.devtool = 'inline-cheap-source-map'
      } else {
        config.devtool = false
      }
    } else {
      config.mode = 'production'
    }

    if (isServer) {
      if (!params.entry.name) {
        params.entry.name = 'server'
      }

      config.target = 'node'
      config.node = {
        __dirname: true,
      }
    } else {
      if (!params.entry.name) {
        params.entry.name = 'client'
      }

      config.target = 'web'
    }

    config.name = params.entry.name

    if (withHMR) {
      config.resolve.alias = {
        'react-dom': '@hot-loader/react-dom',
      }
    }

    config.entry = this.getEntries(params)
    config.output = this.getOutput(params)
    config.optimization = this.getOptimizations(params)
    config.plugins = this.getPlugins(params)
    config.module = {
      rules: this.getRules(params),
    }
    config.externals = this.getExternals(params)

    return config
  }
}

export default ConfiguratorService
