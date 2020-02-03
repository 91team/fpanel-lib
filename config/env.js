const DEV_API = {
  HOSTNAME: 'http://0.0.0.0:3000',
  API_HOSTNAME: 'https://ecor.91.team',
  CDN_HOSTNAME: 'https://ecor.91.team'
}

const PROD_API = {
  HOSTNAME: 'https://academtalant.ru',
  API_HOSTNAME: 'http://127.0.0.1',
  CDN_HOSTNAME: 'https://academtalant.ru'
}

const API = process.env.NODE_ENV === 'development' ? DEV_API : PROD_API

exports.env = {
  API
}
