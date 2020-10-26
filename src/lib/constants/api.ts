export enum STATE {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export const HOSTNAME_APP = process.env.HOSTNAME_APP
export const HOSTNAME_API = process.env.HOSTNAME_API || window.location.origin
export const HOSTNAME_CDN = process.env.HOSTNAME_CDN
export const GRAPHQL_API_URL = `${HOSTNAME_API}/api/graphql`
