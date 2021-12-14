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

export function generateMutations(
  doc: DocumentNode,
  mutationsList: Set<string>,
  info: Record<string, TActionInfo>
): string {
  const mutations: Record<string, string> = {}

  doc.definitions.forEach((def) => {
    if (def.kind === 'ObjectTypeDefinition') {
      const name = def.name.value

      if (name === 'RootMutationType') {
        def.fields?.forEach((field) => {
          const mutationName = field.name.value

          if (mutationsList.has(mutationName)) {
            const args =
              field.arguments?.map((arg) => ({
                name: arg.name.value,
                variable: `\$${arg.name.value}`,
                type: formatType(arg.type),
              })) || []

            info[mutationName] = typeValueName(field.type)

            const mutation = `export const ${mutationName}Mutation = gql\`
  mutation ${mutationName}${formatArgs(
              args.map(({ variable, type }) => `${variable}: ${type}`),
              4
            )} {
    ${mutationName}${formatArgs(
              args.map(({ variable, name }) => `${name}: ${variable}`),
              6
            )} ${typeValue(field.type) || ''}
  }
\``

            mutations[mutationName] = mutation

            mutationsList.delete(mutationName)
          }
        })
      }
    }
  })

  return Object.keys(mutations)
    .sort()
    .map((key) => mutations[key])
    .join('\n\n')
}
