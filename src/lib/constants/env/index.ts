import { getViteEnv } from './variables'

export const ENV = getViteEnv()

export const isDev = import.meta.env.DEV
