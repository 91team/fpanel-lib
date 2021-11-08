import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { uniq } from 'lodash'
import { resolve } from 'path'

import { ACTION_TYPE } from '../constants'
import { TActionInfo, TActionOverride, TAliases, TConfig, TGlobalVars } from '../types'

import { generateEntityTypesActionsAndImports } from './generateEntityTypesActionsAndImports'

function formatActions(actions: string[]) {
  if (!actions.length) {
    return ''
  }

  return '\n  ' + actions.join('\n  ') + '\n'
}

export function generateEntityTypes(
  { GQL_TYPES_FOLDER_PATH }: TGlobalVars,
  entityConfig: TConfig,
  actionOverrides: Record<string, TActionOverride>,
  actionsInfo: Record<string, TActionInfo>,
  aliases: Record<string, string>
) {
  const {
    [ACTION_TYPE.mutations]: {
      imports: mutationImports,
      customTypesImports: mutationCustomTypesImports,
      actions: mutationActions,
    },
    [ACTION_TYPE.queries]: {
      imports: queryImports,
      customTypesImports: queryCustomTypesImports,
      actions: queryActions,
    },
  } = generateEntityTypesActionsAndImports(entityConfig, actionOverrides, actionsInfo, aliases)
  const imports = queryImports.concat(mutationImports)
  const customImports = uniq(queryCustomTypesImports.concat(mutationCustomTypesImports))

  imports.sort()
  customImports.sort()
  mutationActions.sort()
  queryActions.sort()

  let content = readFileSync(resolve(__dirname, '../templates/entityTypes.template'), 'utf8')

  content = content.replace(/__imports__/i, imports.join(',\n  '))
  content = content.replace(/__customImports__/i, customImports.join(',\n  '))
  content = content.replace(/__mutations_actions__/i, formatActions(mutationActions))
  content = content.replace(/__queries_actions__/i, formatActions(queryActions))

  const folderName = `${GQL_TYPES_FOLDER_PATH}`

  if (!existsSync(folderName)) {
    mkdirSync(folderName)
  }

  writeFileSync(`${folderName}/index.ts`, content, 'utf8')
}
