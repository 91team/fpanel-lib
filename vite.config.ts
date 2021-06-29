import { defineConfig } from 'vite'
import { config } from 'dotenv'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

import { getVariablesWithVitePrefix } from './src/lib/constants/env/variables'

function injectEnv(mode: string) {
  const configPath = `./.env.${mode}`
  const env = config({ path: configPath }).parsed
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
        lib: path.resolve(__dirname, './src/lib'),
        gql: path.resolve(__dirname, './src/lib/gql'),
        HOCs: path.resolve(__dirname, './src/lib/HOCs'),
        hooks: path.resolve(__dirname, './src/lib/hooks'),
        utils: path.resolve(__dirname, './src/lib/utils'),
        services: path.resolve(__dirname, './src/lib/services'),
        constants: path.resolve(__dirname, './src/lib/constants'),
        containers: path.resolve(__dirname, './src/containers'),
        components: path.resolve(__dirname, './src/components'),
        icons: path.resolve(__dirname, './src/generated/icons'),
        assets: path.resolve(__dirname, './assets'),
        generated: path.resolve(__dirname, './src/generated'),
      },
    },
  }
})
