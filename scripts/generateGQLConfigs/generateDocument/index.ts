import fs, { existsSync, mkdirSync } from 'fs'
import { parse, Source } from 'graphql'
import { join } from 'path'

import { TActionInfo, TConfig } from '../types'

import { generateFragments } from './generateFragments'
import { generateMutations } from './generateMutations'
import { generateQueries } from './generateQueries'

function getFileContent(content: string) {
  return `import gql from 'graphql-tag'

${content}
`
}

export function generateDocument(config: TConfig, modulePath: string): Record<string, TActionInfo> {
  const mutations = new Set(Object.keys(config.mutations))
  const queries = new Set(Object.keys(config.queries))
  const info: Record<string, TActionInfo> = {}

  const schemaFile = join(modulePath, 'schema.graphql')
  const outFolder = join(modulePath, 'src/lib/gql/documents')
  const outFragmentsFile = join(outFolder, 'fragments.ts')
  const outQueriesFile = join(outFolder, 'queries.ts')
  const outMutationsFile = join(outFolder, 'mutations.ts')

  if (!existsSync(outFolder)) {
    mkdirSync(outFolder)
  }

  const content = fs.readFileSync(schemaFile, 'utf8').replace(/!?\]/g, '!]')

  fs.writeFileSync(schemaFile, content, 'utf8')

  const source = new Source(content)
  const doc = parse(source)

  const { fragments, depsMap } = generateFragments(doc, config.fragmentOverrides)
  const queriesContent = generateQueries(doc, queries, info, config.customQueries)
  const mutationsContent = generateMutations(doc, mutations, info, config.customMutations)

  const usedFragments = new Set<string>()

  function addFragment(name: string) {
    if (fragments[name] && !usedFragments.has(name)) {
      usedFragments.add(name)

      depsMap[name]?.forEach(addFragment)
    }
  }

  config.usedFragments.forEach(addFragment)

  Object.keys(info).forEach((key) => {
    const actionInfo = info[key]

    addFragment(actionInfo.resName)
  })

  const fragmentsContent = Array.from(usedFragments)
    .sort()
    .map((key) => fragments[key])
    .join('\n\n')

  fs.writeFileSync(outFragmentsFile, getFileContent(fragmentsContent), 'utf8')
  fs.writeFileSync(outQueriesFile, getFileContent(queriesContent), 'utf8')
  fs.writeFileSync(outMutationsFile, getFileContent(mutationsContent), 'utf8')

  if (queries.size || mutations.size) {
    if (queries.size) {
      console.log(`Unknown queries: ${[...queries.values()].join(', ')}`)
    }

    if (mutations.size) {
      console.log(`Unknown queries: ${[...mutations.values()].join(', ')}`)
    }

    process.exit(1)
  }

  return info
}
