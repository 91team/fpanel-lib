import CompilationService from './services/compiler'
import ConfiguratorService from './services/configurator'
import EnvService from './services/env'
import RulesService from './services/rules'

const env = new EnvService(process.env)
const rules = new RulesService(env)
const configurator = new ConfiguratorService({
  env,
  rules,
})
const {
  nodeConfig: { isDev },
  withHMR,
} = env
const clientEntryConfig = configurator.getConfig({
  isDev,
  isServer: false,
  isSG: false,
  withHMR,
})

const compilationInstance = new CompilationService(clientEntryConfig)

compilationInstance.run()
