import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import { TConfig, TGlobalVars } from '../types'

import { generateEntityConfigs } from './generateEntityConfigs'

function formatVariables(vars: string[]) {
  if (!vars.length) {
    return ''
  }

  return '\n  ' + vars.join(',\n  ') + '\n'
}

export function generateConfigs(globalVars: TGlobalVars, config: TConfig) {
  const { GQL_CONFIGS_FOLDER_PATH } = globalVars

  if (!existsSync(GQL_CONFIGS_FOLDER_PATH)) {
    mkdirSync(GQL_CONFIGS_FOLDER_PATH)
  }

  const imports: string[] = []
  const mutations: string[] = []
  const queries: string[] = []

  for (const entityName in config) {
    const mutationsVariable = `${entityName}Mutations`
    const queriesVariable = `${entityName}Queries`

    imports.push(
      `import { mutations as ${mutationsVariable}, queries as ${queriesVariable} } from './${entityName}'`
    )
    mutations.push(`...${mutationsVariable}`)
    queries.push(`...${queriesVariable}`)

    generateEntityConfigs(globalVars, config, entityName)
  }

  let content = readFileSync(resolve(__dirname, '../templates/configs.template'), 'utf8')

  content = content.replace(/__imports__/i, imports.join('\n'))
  content = content.replace(/__mutations__/i, formatVariables(mutations))
  content = content.replace(/__queries__/i, formatVariables(queries))

  writeFileSync(`${GQL_CONFIGS_FOLDER_PATH}/index.ts`, content, 'utf8')
}
