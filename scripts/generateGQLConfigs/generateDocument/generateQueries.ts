import { DocumentNode, TypeNode } from 'graphql'

import { TActionInfo } from '../types'

import { typeValue, typeValueName } from './generateFragments'

function formatType(type: TypeNode): string | null {
  if (type.kind === 'NonNullType') {
    return `${formatType(type.type)}!`
  }

  if (type.kind === 'ListType') {
    return `[${formatType(type.type)}]`
  }

  return type.name.value
}

function formatArgs(args: string[], indent: number) {
  const paramPrefix = '\n' + new Array(indent).fill(' ').join('')
  const bracketPrefix = '\n' + new Array(indent - 2).fill(' ').join('')

  return args.length ? `(${paramPrefix}${args.join(paramPrefix)}${bracketPrefix})` : ''
}

export function generateQueries(
  doc: DocumentNode,
  queriesList: Set<string>,
  info: Record<string, TActionInfo>
): string {
  const queries: Record<string, string> = {}

  doc.definitions.forEach((def) => {
    if (def.kind === 'ObjectTypeDefinition') {
      const name = def.name.value

      if (name === 'RootQueryType') {
        def.fields?.forEach((field) => {
          const queryName = field.name.value

          if (queriesList.has(queryName)) {
            const args =
              field.arguments?.map((arg) => ({
                name: arg.name.value,
                variable: `\$${arg.name.value}`,
                type: formatType(arg.type),
              })) || []

            info[queryName] = typeValueName(field.type)

            const query = `export const ${queryName}Query = gql\`
  query ${queryName}${formatArgs(
              args.map(({ variable, type }) => `${variable}: ${type}`),
              4
            )} {
    ${queryName}${formatArgs(
              args.map(({ variable, name }) => `${name}: ${variable}`),
              6
            )} ${typeValue(field.type) || ''}
  }
\``

            queries[queryName] = query

            queriesList.delete(queryName)
          }
        })
      }
    }
  })

  return Object.keys(queries)
    .sort()
    .map((key) => queries[key])
    .join('\n\n')
}
