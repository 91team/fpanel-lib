import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
    plugins: [],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './assets'),
      },
    },
    build: {
      assetsDir: '',
      sourcemap: true,
      lib: {
        "files": ["dist"],
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'FPanelPublicApi',
        fileName: 'fpanel-public-api'
      }
    }
  }
})
