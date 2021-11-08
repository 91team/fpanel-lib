import { join } from 'path'

import { TGlobalVars } from './types'

const GQL_TYPES_FOLDER_NAME = 'graphqlTypes'
const GQL_CONFIGS_FOLDER_NAME = 'graphqlConfigs'

const MODULE_PATH = join(__dirname, '../../')
const CONFIG_PATH = join(MODULE_PATH, 'gqlConfig.ts')
const DEFAULTS_FILE_PATH = join(MODULE_PATH, 'gqlDefaults.ts')
const DEFAULTS_OUT_FILE_PATH = join(MODULE_PATH, 'src/lib/gql/generated/defaults.ts')
const CUSTOM_TYPES_FILE_PATH = join(MODULE_PATH, 'src/lib/gql/generated/types.ts')

const GENERATED_FOLDER_PATH = join(MODULE_PATH, 'src/lib/gql/generated')
const GQL_TYPES_FOLDER_PATH = join(GENERATED_FOLDER_PATH, GQL_TYPES_FOLDER_NAME)
const GQL_CONFIGS_FOLDER_PATH = join(GENERATED_FOLDER_PATH, GQL_CONFIGS_FOLDER_NAME)

export const GLOBAL_VARS: TGlobalVars = {
  MODULE_PATH,
  CONFIG_PATH,
  GENERATED_FOLDER_PATH,
  GQL_CONFIGS_FOLDER_NAME,
  GQL_CONFIGS_FOLDER_PATH,
  GQL_TYPES_FOLDER_NAME,
  GQL_TYPES_FOLDER_PATH,
  DEFAULTS_FILE_PATH,
  DEFAULTS_OUT_FILE_PATH,
  CUSTOM_TYPES_FILE_PATH,
}

export const enum ACTION_TYPE {
  mutations = 'mutations',
  queries = 'queries',
}
