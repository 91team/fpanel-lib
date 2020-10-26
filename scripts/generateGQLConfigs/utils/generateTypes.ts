import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

import { TConfig, TGlobalVars } from '../types'

import { convertFirstLetterToUpperCase } from './convertFirstLetterToUpperCase'
import { generateEntityTypes } from './generateEntityTypes'

export function generateTypes(globalVars: TGlobalVars, config: TConfig) {
  const { GQL_TYPES_FOLDER_PATH } = globalVars

  if (!existsSync(GQL_TYPES_FOLDER_PATH)) {
    mkdirSync(GQL_TYPES_FOLDER_PATH)
  }

  const imports: string[] = []
  const mutations: string[] = []
  const queries: string[] = []

  for (const entityName in config) {
    const seed = convertFirstLetterToUpperCase(entityName)
    const mutationsType = `T${seed}Mutations`
    const queriesType = `T${seed}Queries`

    imports.push(
      `import { TMutations as ${mutationsType}, TQueries as ${queriesType} } from './${entityName}'`
    )
    mutations.push(mutationsType)
    queries.push(queriesType)

    generateEntityTypes(globalVars, config, entityName)
  }

  let content = readFileSync(resolve(__dirname, '../templates/types.template'), 'utf8')

  content = content.replace(/__imports__/i, imports.join('\n'))
  content = content.replace(/__mutations__/i, mutations.join(' & '))
  content = content.replace(/__queries__/i, queries.join(' & '))

  writeFileSync(`${GQL_TYPES_FOLDER_PATH}/index.ts`, content, 'utf8')
}
