import { dirname, join } from 'path'
import { argv } from 'yargs'

import { TArgV, TGlobalVars } from './types'

const { config: CONFIG_RELATIVE_PATH } = argv as TArgV

if (!CONFIG_RELATIVE_PATH) {
  throw new Error(`Script must contain '--config' argument`)
}

const GENERATED_FOLDER_NAME = 'generated'
const GQL_TYPES_FOLDER_NAME = 'graphqlTypes'
const GQL_CONFIGS_FOLDER_NAME = 'graphqlConfigs'

const PROJECT_PATH = process.env.INIT_CWD
const CONFIG_PATH = join(PROJECT_PATH, CONFIG_RELATIVE_PATH)

const GENERATED_FOLDER_PATH = join(dirname(CONFIG_PATH), GENERATED_FOLDER_NAME)
const GQL_TYPES_FOLDER_PATH = join(GENERATED_FOLDER_PATH, GQL_TYPES_FOLDER_NAME)
const GQL_CONFIGS_FOLDER_PATH = join(GENERATED_FOLDER_PATH, GQL_CONFIGS_FOLDER_NAME)

export const GLOBAL_VARS: TGlobalVars = {
  PROJECT_PATH,
  CONFIG_PATH,
  GENERATED_FOLDER_PATH,
  GQL_CONFIGS_FOLDER_NAME,
  GQL_CONFIGS_FOLDER_PATH,
  GQL_TYPES_FOLDER_NAME,
  GQL_TYPES_FOLDER_PATH,
}
export enum ACTION_TYPE {
  mutations = 'mutations',
  queries = 'queries',
}
