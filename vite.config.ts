import { defineConfig } from 'vite'
import { config } from 'dotenv'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

import { getVariablesWithVitePrefix } from './src/lib/constants/env/variables'

function injectEnv(mode: string) {
  const configPath = `./.env.${mode}`
  const env = config({ path: configPath }).parsed

  if (!env) {
    throw new Error(`'${configPath}' is not exists`)
  }
  const viteEnv = getVariablesWithVitePrefix(env)

  Object.assign(process.env, viteEnv)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  injectEnv(mode)

  return {
    base: process.env.BASE_URL,
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './assets'),
      },
    },
  }
})
