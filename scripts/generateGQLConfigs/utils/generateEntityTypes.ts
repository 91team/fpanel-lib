import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import { ACTION_TYPE } from '../constants'

import { TConfig, TGlobalVars } from '../types'

import { generateEntityTypesActionsAndImports } from './generateEntityTypesActionsAndImports'

function formatActions(actions: string[]) {
  if (!actions.length) {
    return ''
  }

  return '\n  ' + actions.join('\n  ') + '\n'
}

export function generateEntityTypes(
  { GQL_TYPES_FOLDER_PATH }: TGlobalVars,
  config: TConfig,
  entityName: string
) {
  const entityConfig = config[entityName]

  const {
    [ACTION_TYPE.mutations]: {
      imports: mutationImports,
      actions: mutationActions,
    },
    [ACTION_TYPE.queries]: { imports: queryImports, actions: queryActions },
  } = generateEntityTypesActionsAndImports(entityConfig)
  const imports = queryImports.concat(mutationImports)

  imports.sort()

  let content = readFileSync(
    resolve(__dirname, '../templates/entityTypes.template'),
    'utf8'
  )

  content = content.replace(/__imports__/i, imports.join(',\n  '))
  content = content.replace(
    /__mutations_actions__/i,
    formatActions(mutationActions)
  )
  content = content.replace(/__queries_actions__/i, formatActions(queryActions))

  const folderName = `${GQL_TYPES_FOLDER_PATH}/${entityName}`

  if (!existsSync(folderName)) {
    mkdirSync(folderName)
  }

  writeFileSync(`${folderName}/index.ts`, content, 'utf8')
}
