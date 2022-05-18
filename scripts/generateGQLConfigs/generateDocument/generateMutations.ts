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

function getMutationDocument({
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

  const mutation = `export const ${name}Mutation = gql\`
  mutation ${name}${formatArgs(
    args.map(({ variable, type }) => `${variable}: ${type}`),
    4
  )} {
    ${baseName}${formatArgs(
    args.map(({ variable, name }) => `${name}: ${variable}`),
    6
  )} ${typeValue(returnFieldType) || ''}
  }
\``

  return mutation
}

export function generateMutations(
  doc: DocumentNode,
  mutationsList: Set<string>,
  info: Record<string, TActionInfo>,
  customMutations: TCustomAction[]
): string {
  const mutations: Record<string, string> = {}
  const fieldsMap: Record<string, FieldDefinitionNode> = {}

  doc.definitions.forEach((def) => {
    if (def.kind === 'ObjectTypeDefinition') {
      const name = def.name.value

      if (name === schemaDefinition.mutation) {
        def.fields?.forEach((field) => {
          const mutationName = field.name.value

          fieldsMap[mutationName] = field

          if (mutationsList.has(mutationName)) {
            const mutation = getMutationDocument({
              field,
              name: mutationName,
            })

            info[mutationName] = typeValueName(field.type)
            mutations[mutationName] = mutation

            mutationsList.delete(mutationName)
          }
        })
      }
    }
  })

  customMutations.forEach(({ baseAction, name, resName }) => {
    const field = fieldsMap[baseAction]

    mutations[name] = getMutationDocument({
      field,
      name,
      baseName: baseAction,
      returnFieldType: resName,
    })
  })

  return Object.keys(mutations)
    .sort()
    .map((key) => mutations[key])
    .join('\n\n')
}
