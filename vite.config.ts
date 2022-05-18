import { defineConfig } from 'vite'
import path from 'path'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
    plugins: [
       typescript({
          'target': 'es2020',
          'rootDir': path.resolve(__dirname, './src'),
          'declaration': true,
          'declarationDir': path.resolve(__dirname, './dist'),
          exclude: path.resolve(__dirname, '../node_modules/**'),
          allowSyntheticDefaultImports: true
        })
    ],
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
        entry: 'src/index.ts',
        name: 'FPanelPublicApi',
        fileName: 'fpanel-public-api'
      }
    }
  }
})
