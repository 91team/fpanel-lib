import { existsSync, mkdirSync } from 'fs'

import { generateConfigs, generateTypes } from './utils'

import { GLOBAL_VARS } from './constants'

const { GENERATED_FOLDER_PATH } = GLOBAL_VARS

if (!existsSync(GENERATED_FOLDER_PATH)) {
  mkdirSync(GENERATED_FOLDER_PATH)
}

import(GLOBAL_VARS.CONFIG_PATH).then(({ config }) => {
  generateTypes(GLOBAL_VARS, config)
  generateConfigs(GLOBAL_VARS, config)
})
