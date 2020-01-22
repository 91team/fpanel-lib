export const ENVIROMENT = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development'
} as const

class AppService {
  public get isDev() {
    return process.env.NODE_ENV === ENVIROMENT.DEVELOPMENT
  }

  public get isServer() {
    return typeof window === 'undefined'
  }
}

export default new AppService()
