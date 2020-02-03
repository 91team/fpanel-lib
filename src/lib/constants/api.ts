import { ENVIROMENT } from 'services/app'

export enum STATE {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed'
}

const API = (process.env.API as unknown) as {
  HOSTNAME: string
  API_HOSTNAME: string
  CDN_HOSTNAME: string
}
export const HOSTNAME = API.HOSTNAME
export const API_HOSTNAME =
  process.env.NODE_ENV === ENVIROMENT.PRODUCTION &&
  typeof window !== 'undefined'
    ? window.location.origin
    : API.API_HOSTNAME
export const CDN_HOSTNAME = API.CDN_HOSTNAME
export const GRAPHQL_API_URL = `${API_HOSTNAME}/api/graphql`
