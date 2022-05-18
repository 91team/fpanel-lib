import { ENV } from './env'

export enum STATE {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export const BASE_URL = ENV.BASE_URL
export const HOSTNAME_APP = ENV.HOSTNAME_APP
export const HOSTNAME_API = ENV.HOSTNAME_API || window.location.origin
export const HOSTNAME_CDN = ENV.HOSTNAME_CDN

export const GRAPHQL_API_URL = `${HOSTNAME_API}/api/graphql`
