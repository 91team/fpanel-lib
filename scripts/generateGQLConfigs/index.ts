import { existsSync, mkdirSync } from 'fs'

import { GLOBAL_VARS } from './constants'
import { generateDocument } from './generateDocument'
import { TAliases, TConfig } from './types'
import { generateEntityConfigs, generateEntityTypes } from './utils'
import { generateDefaults } from './utils/generateDefaults'

const { GENERATED_FOLDER_PATH } = GLOBAL_VARS

if (!existsSync(GENERATED_FOLDER_PATH)) {
  mkdirSync(GENERATED_FOLDER_PATH)
}

import(GLOBAL_VARS.CONFIG_PATH)
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
  .then(({ config }: { config: TConfig }) => {
    const actionsInfo = generateDocument(config, GLOBAL_VARS.MODULE_PATH)

    const typeAliases: TAliases = {}
    const dataKeyAliases: Record<string, string> = {}

    config.customQueries.concat(config.customMutations).forEach((action) => {
      const baseAction = actionsInfo[action.baseAction]

      actionsInfo[action.name] = {
        resName: action.resName,
        isList: baseAction.isList,
      }

      typeAliases[baseAction.resName] = typeAliases[baseAction.resName] || []
      typeAliases[baseAction.resName].push(action.resName)

      dataKeyAliases[action.name] = action.baseAction
    })

    const typeDefaults = generateDefaults(typeAliases)

    generateEntityTypes(GLOBAL_VARS, config, typeDefaults, actionsInfo, dataKeyAliases)
    generateEntityConfigs(GLOBAL_VARS, config, typeDefaults, actionsInfo, dataKeyAliases)
  })
