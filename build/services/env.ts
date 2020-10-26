import { join, resolve } from 'path'

import { Build } from '../types'

export enum Enviroment {
  production = 'production',
  development = 'development',
}

export type TOptions = {
  ROOT_PATH?: string
}

class EnvService {
  private NODE_ENV: string = Enviroment.development
  private SERVER_HOST: string
  private SERVER_PORT: string
  private DEV_SERVER_HOST: string
  private DEV_SERVER_PORT: string
  private DEV_SERVER_IS_HTTPS: boolean
  private PUBLIC_PATH: string
  private OUTPUT_PATH: string
  private WITH_HMR: boolean
  private WITH_SERVER_RENDERING: boolean
  private BASE_URL: string
  private HOSTNAME_APP: string
  private HOSTNAME_API: string
  private HOSTNAME_CDN: string
  // Options
  private ROOT_PATH: string
  // Configs path (bi root)
  private CONFIGS_PATH: string = resolve(__dirname, '../../')
  // Modules names (for deployment)
  private MODULES_NAMES: string[] = []

  constructor(
    {
      NODE_ENV,
      SERVER_HOST,
      SERVER_PORT,
      DEV_SERVER_HOST,
      DEV_SERVER_PORT,
      DEV_SERVER_IS_HTTPS,
      PUBLIC_PATH,
      OUTPUT_PATH,
      WITH_SERVER_RENDERING,
      WITH_HMR,
      BASE_URL,
      HOSTNAME_APP,
      HOSTNAME_API,
      HOSTNAME_CDN,
      MODULES_NAMES,
    }: Partial<Build.CommonEnv>,
    { ROOT_PATH }: TOptions = {}
  ) {
    this.ROOT_PATH = ROOT_PATH || process.cwd()
    this.MODULES_NAMES = JSON.parse(MODULES_NAMES || '[]')

    this.setNodeParams({ NODE_ENV })
    this.setBuildParams({ PUBLIC_PATH, OUTPUT_PATH })
    this.setCommonConfigParams({ WITH_SERVER_RENDERING, WITH_HMR })
    this.setClientParams({ BASE_URL, HOSTNAME_API, HOSTNAME_APP, HOSTNAME_CDN })

    this.setServerParams({
      SERVER_HOST,
      SERVER_PORT,
    })

    if (this.isDev) {
      this.setDevServerParams({
        DEV_SERVER_HOST,
        DEV_SERVER_PORT,
        DEV_SERVER_IS_HTTPS,
      })
    }
  }

  private checkParamsIsNotEmpty(params: Record<string, string | number | Object>) {
    Object.keys(params).forEach(paramName => {
      if (typeof params[paramName] === 'undefined') {
        throw new Error(`'${paramName}' parameter is not set`)
      }
    })
  }

  private logError(error: Error) {
    console.error(error)
  }

  private setBuildParams({ PUBLIC_PATH, OUTPUT_PATH }: Partial<Build.OutputEnv>) {
    try {
      this.checkParamsIsNotEmpty({ PUBLIC_PATH, OUTPUT_PATH })
    } catch (error) {
      this.logError(error)

      return
    }

    this.PUBLIC_PATH = PUBLIC_PATH
    this.OUTPUT_PATH = OUTPUT_PATH
  }

  private setNodeParams({ NODE_ENV }: Partial<Build.NodeEnv>) {
    try {
      this.checkParamsIsNotEmpty({ NODE_ENV })
    } catch (error) {
      this.logError(error)

      return
    }

    this.NODE_ENV = NODE_ENV
  }

  private setServerParams({
    SERVER_HOST = '0.0.0.0',
    SERVER_PORT = '3000',
  }: Partial<Build.ServerEnv>) {
    this.SERVER_HOST = SERVER_HOST
    this.SERVER_PORT = SERVER_PORT
  }

  private setClientParams({
    BASE_URL = '',
    HOSTNAME_APP,
    HOSTNAME_API,
    HOSTNAME_CDN,
  }: Partial<Build.ClientEnv>) {
    this.BASE_URL = BASE_URL

    try {
      this.checkParamsIsNotEmpty({
        HOSTNAME_APP,
        HOSTNAME_CDN,
      })
    } catch (error) {
      this.logError(error)

      return
    }

    this.HOSTNAME_APP = HOSTNAME_APP
    this.HOSTNAME_API = HOSTNAME_API
    this.HOSTNAME_CDN = HOSTNAME_CDN
  }

  private setDevServerParams({
    DEV_SERVER_HOST = '0.0.0.0',
    DEV_SERVER_PORT = '8000',
    DEV_SERVER_IS_HTTPS = 'false',
  }: Partial<Build.DevServerEnv>) {
    this.DEV_SERVER_HOST = DEV_SERVER_HOST
    this.DEV_SERVER_PORT = DEV_SERVER_PORT
    this.DEV_SERVER_IS_HTTPS = JSON.parse(DEV_SERVER_IS_HTTPS)
  }

  private setCommonConfigParams({
    WITH_SERVER_RENDERING = 'false',
    WITH_HMR = 'false',
  }: Partial<Build.CommonEnv>) {
    this.WITH_SERVER_RENDERING = JSON.parse(WITH_SERVER_RENDERING)
    this.WITH_HMR = JSON.parse(WITH_HMR)
  }

  public get nodeConfig(): Build.NodeConfig {
    const { NODE_ENV } = this

    return {
      env: NODE_ENV,
      isDev: this.isDev,
    }
  }

  public get devServerConfig(): Build.DevServerConfig {
    const { DEV_SERVER_HOST, DEV_SERVER_PORT, DEV_SERVER_IS_HTTPS, PUBLIC_PATH, withHMR } = this
    const isSecure = DEV_SERVER_IS_HTTPS
    const isHMR = withHMR
    const host = DEV_SERVER_HOST
    const port = DEV_SERVER_PORT
    const publicPath = PUBLIC_PATH

    return {
      host,
      port,
      url: this.urls.DEV_SERVER_URL,
      publicPath,
      publicPathWithURL: this.urls.PUBLIC_PATH,
      isSecure,
      isHMR,
    }
  }

  public get serverConfig(): Build.ServerConfig {
    const { SERVER_HOST, SERVER_PORT } = this
    const host = SERVER_HOST
    const port = SERVER_PORT

    return {
      host,
      port,
    }
  }

  public get clientURLSConfig(): Build.ClientURLSConfig {
    const { BASE_URL, HOSTNAME_API, HOSTNAME_APP, HOSTNAME_CDN } = this

    return {
      BASE_URL,
      HOSTNAME_APP,
      HOSTNAME_API,
      HOSTNAME_CDN,
    }
  }

  public get outputConfig(): Build.OutputConfig {
    const { PUBLIC_PATH, OUTPUT_PATH } = this

    return {
      publicPath: PUBLIC_PATH,
      outputPath: OUTPUT_PATH,
    }
  }

  public get paths() {
    const ROOT = this.ROOT_PATH
    const { publicPath: PUBLIC_PATH, outputPath: OUTPUT_PATH } = this.outputConfig
    const OUTPUT_PATH_ABSOLUTE = resolve(ROOT, OUTPUT_PATH)

    return {
      OUTPUT_PATH: OUTPUT_PATH_ABSOLUTE,
      PUBLIC_PATH,
      HTML_TEMPLATE_PATH: resolve(this.CONFIGS_PATH, './src/server/index.html'),
      WEBPACK_CONTEXT: this.CONFIGS_PATH,
      SRC: resolve(ROOT, 'src'),
      TS_CONFIG: resolve(this.CONFIGS_PATH, './tsconfig.json'),
      ESLINT_CONFIG: resolve(this.CONFIGS_PATH, './.eslintrc.js'),
      ESLINT_IGNORE: resolve(this.CONFIGS_PATH, './.eslintignore'),
      NODE_MODULES: resolve(this.CONFIGS_PATH, './node_modules'),
      SERVICE_WORKER: JSON.stringify(join(OUTPUT_PATH_ABSOLUTE, 'service-worker.js')),
    }
  }

  public get urls() {
    const { DEV_SERVER_HOST, DEV_SERVER_PORT, DEV_SERVER_IS_HTTPS, PUBLIC_PATH } = this
    const url = `http${DEV_SERVER_IS_HTTPS ? 's' : ''}://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}`
    const publicPathWithURL = url + PUBLIC_PATH

    return {
      DEV_SERVER_URL: url,
      PUBLIC_PATH: publicPathWithURL,
    }
  }

  public get deploymentConfig() {
    const { MODULES_NAMES } = this

    return {
      MODULES_NAMES,
    }
  }

  public get clientAppConfig(): Build.ClientAppConfig {
    const {
      nodeConfig: { env },
      paths: { OUTPUT_PATH, PUBLIC_PATH, SERVICE_WORKER },
    } = this

    return {
      ...this.clientURLSConfig,
      OUTPUT_PATH,
      PUBLIC_PATH,
      NODE_ENV: env,
      SW_PATH: SERVICE_WORKER,
    }
  }

  public get isDev() {
    return this.NODE_ENV === Enviroment.development
  }

  public get withHMR() {
    return this.WITH_HMR
  }

  public get withServerRendering() {
    return this.WITH_SERVER_RENDERING
  }
}

export default EnvService
