export namespace Build {
  /* Environment */
  interface DevServerEnv {
    DEV_SERVER_HOST: string
    DEV_SERVER_PORT: string
    DEV_SERVER_IS_HTTPS: string
  }

  interface ServerEnv {
    SERVER_HOST: string
    SERVER_PORT: string
  }

  interface HostnamesEnv {
    HOSTNAME_APP: string
    HOSTNAME_API: string
    HOSTNAME_CDN: string
  }

  interface ClientEnv extends HostnamesEnv {
    BASE_URL: string
  }

  interface NodeEnv {
    NODE_ENV: string
  }

  interface OutputEnv {
    PUBLIC_PATH: string
    OUTPUT_PATH: string
  }

  interface DeploymentEnv {
    MODULES_NAMES: string
  }

  interface CommonEnv
    extends NodeEnv,
      OutputEnv,
      ServerEnv,
      ClientEnv,
      DevServerEnv,
      DeploymentEnv {
    WITH_SERVER_RENDERING: string
    WITH_HMR: string
  }

  /* Settings */

  interface NodeConfig {
    env: string
    isDev: boolean
  }

  interface OutputConfig {
    publicPath: string
    outputPath: string
  }

  interface DevServerConfig {
    host: string
    port: string
    url: string
    publicPath: OutputConfig['publicPath']
    publicPathWithURL: string
    isSecure: boolean
    isHMR: boolean
  }

  interface ServerConfig {
    host: string
    port: string
  }

  interface ClientURLSConfig {
    BASE_URL: string
    HOSTNAME_APP: string
    HOSTNAME_API: string
    HOSTNAME_CDN: string
  }

  interface ClientAppConfig extends ClientURLSConfig, OutputEnv, NodeEnv {
    SW_PATH: string
  }

  interface DeploymentConfig {
    MODULES_NAMES: string[]
  }

  interface Env extends Partial<CommonEnv> {}
}
