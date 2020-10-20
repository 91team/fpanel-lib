import { BaseService } from '../base'
import { TOptions as TBaseOptions } from '../base'

export type TOptions = TBaseOptions
export const ENVIROMENT = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
} as const

export class AppService extends BaseService {
  public get isDev() {
    return process.env.NODE_ENV === ENVIROMENT.DEVELOPMENT
  }

  public get isServer() {
    return typeof window === 'undefined'
  }

  public get baseURL() {
    return process.env.BASE_URL
  }
}
