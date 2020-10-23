import bodyParser from 'body-parser'
import express, { Express, Handler, Router } from 'express'
import staticGZIPMiddleware from 'express-static-gzip'
import { join } from 'path'
import cookiesMiddleware from 'universal-cookie-express'
import { Configuration } from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import CompilationService from '../../build/services/compiler'
import ConfiguratorService from '../../build/services/configurator'
import EnvService from '../../build/services/env'
import RulesService from '../../build/services/rules'

export type TOptions = {
  ROOT_PATH?: string
}

class ServerFactory {
  private env: EnvService
  private rules: RulesService
  private configurator: ConfiguratorService
  // App entities
  private app: Express
  private router: Router
  // Webpack entities
  private clientConfig: Configuration
  private compilationInstances: CompilationService

  constructor({ ROOT_PATH }: TOptions = {}) {
    this.env = new EnvService(process.env, { ROOT_PATH })
    this.rules = new RulesService(this.env)
    this.configurator = new ConfiguratorService({
      env: this.env,
      rules: this.rules,
    })

    const {
      nodeConfig: { isDev },
      withHMR,
    } = this.env

    this.clientConfig = this.configurator.getConfig({
      isDev,
      isServer: false,
      isSG: false,
      withHMR,
    })
    this.compilationInstances = new CompilationService(this.clientConfig)

    if (isDev) {
      this.buildDevelopmentApp()
    } else {
      // this.buildProductionApp()
    }
  }

  public buildApp() {
    const {
      env: {
        clientURLSConfig: { BASE_URL },
      },
    } = this
    const app = express()
    const router = Router()

    this.app = app
    this.router = router

    app.use(bodyParser.json())
    app.use(cookiesMiddleware())

    // Redirect from root url to base
    if (BASE_URL && BASE_URL !== '/') {
      app.get('/', (req, res) => res.redirect(BASE_URL))
    }
  }

  public buildDevelopmentApp() {
    this.buildApp()

    const {
      app,
      router,
      clientConfig: {
        output: { path: OUTPUT_PATH, publicPath: PUBLIC_PATH },
      },
    } = this
    const compiler = this.compilationInstances.getCompiler()

    const devMiddleware = webpackDevMiddleware(compiler, {
      publicPath: PUBLIC_PATH,
      writeToDisk: true,
    })

    // Static assets
    app.use(PUBLIC_PATH, express.static(OUTPUT_PATH))
    app.use(devMiddleware)

    if (this.env.withHMR) {
      app.use(webpackHotMiddleware(compiler))
    }

    app.use('/', router)

    router.get('*', this.appRequestHandler)

    devMiddleware.waitUntilValid(this.startServer)
  }

  public buildProductionApp() {
    this.buildApp()

    const {
      app,
      router,
      clientConfig: {
        output: { path: OUTPUT_PATH, publicPath: PUBLIC_PATH },
      },
    } = this

    // Static assets (with compressed version)
    app.use(PUBLIC_PATH, staticGZIPMiddleware(OUTPUT_PATH, {}))
    app.use('/', router)

    router.get('*', this.appRequestHandler)

    this.startServer()
  }

  public appRequestHandler: Handler = (req, res) => {
    const {
      clientConfig: {
        output: { path: OUTPUT_PATH },
      },
    } = this
    const templateFile = join(OUTPUT_PATH, 'index.html')

    res.sendFile(templateFile)
  }

  public startServer = () => {
    const {
      serverConfig: { port },
    } = this.env

    this.app.listen(port, () => {
      console.log(`Started Node.js server on port: ${port}`)
    })
  }
}

new ServerFactory()
