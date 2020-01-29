import BaseService, { TOptions as TBaseOptions } from './base'

export const ENVIROMENT = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development'
} as const

type TOptions = TBaseOptions

class AppService extends BaseService {
  constructor(options: TOptions) {
    super(options)

    this.getRoot().addService('app', this)
  }

  public get isDev() {
    return process.env.NODE_ENV === ENVIROMENT.DEVELOPMENT
  }

  public get isServer() {
    return typeof window === 'undefined'
  }
}

export default AppService
