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
        entry: 'src/index.tsx',
        formats: ['iife'],
        name: 'FPanelPublicApi',
        fileName: 'fpanel-public-api'
      }
    }
  }
})
