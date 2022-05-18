import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { uniq } from 'lodash'
import { resolve } from 'path'

import { ACTION_TYPE } from '../constants'
import { TActionInfo, TActionOverride, TConfig, TGlobalVars } from '../types'

import { generateEntityConfigsActionsAndImports } from './generateEntityConfigsActionsAndImports'

function formatActions(actions: string[]) {
  if (!actions.length) {
    return ''
  }

  return '\n  ' + actions.join(',\n  ') + '\n'
}

export function generateEntityConfigs(
  { GQL_CONFIGS_FOLDER_PATH }: TGlobalVars,
  entityConfig: TConfig,
  actionOverrides: Record<string, TActionOverride>,
  actionsInfo: Record<string, TActionInfo>,
  aliases: Record<string, string>
) {
  const {
    [ACTION_TYPE.mutations]: {
      imports: mutationImports,
      fillImports: mutationFillImports,
      actions: mutationActions,
    },
    [ACTION_TYPE.queries]: {
      imports: queryImports,
      fillImports: queryFillImports,
      actions: queryActions,
    },
  } = generateEntityConfigsActionsAndImports(entityConfig, actionOverrides, actionsInfo, aliases)
  const imports = queryImports.concat(mutationImports)
  const fillImports = uniq(queryFillImports.concat(mutationFillImports))

  imports.sort()
  fillImports.sort()
  queryActions.sort()
  mutationActions.sort()

  let content = readFileSync(resolve(__dirname, '../templates/entityConfig.template'), 'utf8')

  content = content.replace(/__imports__/i, imports.join(',\n  '))
  content = content.replace(/__fillImports__/i, fillImports.join(',\n  '))
  content = content.replace(/__mutations_actions__/i, formatActions(mutationActions))
  content = content.replace(/__queries_actions__/i, formatActions(queryActions))

  const folderName = `${GQL_CONFIGS_FOLDER_PATH}`

  if (!existsSync(folderName)) {
    mkdirSync(folderName)
  }

  writeFileSync(`${folderName}/index.ts`, content, 'utf8')
}
