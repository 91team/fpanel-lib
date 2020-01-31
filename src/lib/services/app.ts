import BaseService, { TOptions as TBaseOptions } from './base'

export const ENVIROMENT = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development'
} as const

export type TOptions = TBaseOptions

class AppService extends BaseService {
  public get isDev() {
    return process.env.NODE_ENV === ENVIROMENT.DEVELOPMENT
  }

  public get isServer() {
    return typeof window === 'undefined'
  }
}

export default AppService
