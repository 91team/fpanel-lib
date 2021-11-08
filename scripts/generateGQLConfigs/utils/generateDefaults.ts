import { readFileSync, writeFileSync } from 'fs'
import { uniq } from 'lodash'

import { GLOBAL_VARS } from '../constants'
import { TActionOverride, TAliases } from '../types'

export function generateDefaults(aliases: TAliases): Record<string, TActionOverride> {
  const res: Record<string, TActionOverride> = {}

  const content = readFileSync(GLOBAL_VARS.DEFAULTS_FILE_PATH, 'utf-8')

  const outContent = content.replace(/const (.*)\: FillDefaults<(.*)>(.*)/g, (...args) => {
    const type: string = args[2]
    const name = args[1]

    res[type] = {
      type,
      name,
    }

    if (!type.endsWith('Fragment')) {
      res[`${type}Fragment`] = {
        type: `${type}Fragment`,
        name,
      }
    }

    const typeAliases = aliases[type]

    typeAliases?.forEach(alias => {
      res[`${alias}Fragment`] = {
        type: `${alias}Fragment`,
        name,
      }
    })

    return `const ${args[1]}${args[3]}`
  })

  writeFileSync(GLOBAL_VARS.DEFAULTS_OUT_FILE_PATH, outContent, 'utf-8')

  const customTypesContent = `import { Fill } from '../utils/fillDefaults'
import { 
  ${uniq(Object.keys(res).map(key => res[key].name))
    .sort()
    .join(',\n  ')}
} from './defaults';
import { 
  ${Object.keys(res)
    .map(type => `${type} as T${type}`)
    .sort()
    .join(',\n  ')}
} from './typesOriginal';

export * from './typesOriginal'

${Object.keys(res)
  .map(originalType => {
    const { name, type } = res[originalType]

    return `export type ${originalType} = Fill<T${originalType}, typeof ${name}>`
  })
  .sort()
  .join('\n')}
`

  writeFileSync(GLOBAL_VARS.CUSTOM_TYPES_FILE_PATH, customTypesContent, 'utf-8')

  return res
}
