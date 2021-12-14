import { DocumentNode, FieldDefinitionNode, TypeNode } from 'graphql'

import { TActionInfo, TCustomAction } from '../types'

import { schemaDefinition, typeValue, typeValueName } from './generateFragments'

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

function getQueryDocument({
  field,
  name,
  baseName = name,
  returnFieldType = field.type,
}: {
  field: FieldDefinitionNode
  name: string
  baseName?: string
  returnFieldType?: TypeNode | string
}) {
  const args =
    field.arguments?.map((arg) => ({
      name: arg.name.value,
      variable: `\$${arg.name.value}`,
      type: formatType(arg.type),
    })) || []

  const query = `export const ${name}Query = gql\`
  query ${name}${formatArgs(
    args.map(({ variable, type }) => `${variable}: ${type}`),
    4
  )} {
    ${baseName}${formatArgs(
    args.map(({ variable, name }) => `${name}: ${variable}`),
    6
  )} ${typeValue(returnFieldType) || ''}
  }
\``

  return query
}

export function generateQueries(
  doc: DocumentNode,
  queriesList: Set<string>,
  info: Record<string, TActionInfo>,
  customQueries: TCustomAction[]
): string {
  const queries: Record<string, string> = {}
  const fieldsMap: Record<string, FieldDefinitionNode> = {}

  doc.definitions.forEach((def) => {
    if (def.kind === 'ObjectTypeDefinition') {
      const name = def.name.value

      if (name === schemaDefinition.query) {
        def.fields?.forEach((field) => {
          const queryName = field.name.value

          fieldsMap[queryName] = field

          if (queriesList.has(queryName)) {
            const args =
              field.arguments?.map((arg) => ({
                name: arg.name.value,
                variable: `\$${arg.name.value}`,
                type: formatType(arg.type),
              })) || []

            const query = getQueryDocument({ field, name: queryName })

            info[queryName] = typeValueName(field.type)
            queries[queryName] = query

            queriesList.delete(queryName)
          }
        })
      }
    }
  })

  customQueries.forEach(({ baseAction, name, resName }) => {
    const field = fieldsMap[baseAction]

    queries[name] = getQueryDocument({
      field,
      name,
      baseName: baseAction,
      returnFieldType: resName,
    })
  })

  return Object.keys(queries)
    .sort()
    .map((key) => queries[key])
    .join('\n\n')
}
