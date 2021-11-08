import { DocumentNode, TypeNode } from 'graphql'

import { TActionInfo, TOverrides } from '../types'

export const SCALARS = [
  'DateTime',
  'Timestamp',
  'Decimal',
  'UUID',
  'Coordinates',
  'ID',
  'Upload',
  'Boolean',
  'String',
  'Int',
  'Json',
  'Float',
]

const enums: string[] = []

export function typeValueName(type: TypeNode, isList: boolean = false): TActionInfo {
  if (type.kind === 'NonNullType') {
    return typeValueName(type.type, isList)
  }

  if (type.kind === 'ListType') {
    return typeValueName(type.type, true)
  }

  return {
    resName: type.name.value,
    isList,
  }
}

export function typeValue(type: TypeNode): string | null {
  const typeName = typeValueName(type).resName

  if (SCALARS.includes(typeName) || enums.includes(typeName)) {
    return null
  }

  return `{
      ...${typeName}
    }`
}

export function generateFragments(doc: DocumentNode, overrides: TOverrides): string {
  const fragments: Record<string, string> = {}
  const interfaces: Record<string, string[]> = {}

  doc.definitions.forEach(def => {
    if (def.kind === 'EnumTypeDefinition') {
      enums.push(def.name.value)
    }
  })

  doc.definitions.forEach(def => {
    if (def.kind === 'UnionTypeDefinition') {
      const name = def.name.value

      const fragment = `export const ${name}Fragment = gql\`
  fragment ${name} on ${name} {
    ${def.types?.map(type => `...${type.name.value}`).join('\n    ')}
  }
\``

      fragments[name] = fragment
    }

    if (
      def.kind === 'ObjectTypeDefinition' &&
      def.name.value !== 'RootMutationType' &&
      def.name.value !== 'RootQueryType'
    ) {
      const typeName = def.name.value

      if (overrides[typeName] === false) {
        return
      }

      if (def.interfaces && def.interfaces.length) {
        def.interfaces.forEach(({ name }) => {
          const implementations = interfaces[name.value] || []

          implementations.push(typeName)

          interfaces[name.value] = implementations
        })
      }

      const args =
        def.fields?.flatMap(field => {
          const fieldName = field.name.value
          const typeOverrides = overrides[typeName]

          if (typeOverrides && typeOverrides[fieldName] === false) {
            return []
          }

          const value = (typeOverrides && typeOverrides[fieldName]) || typeValue(field.type)

          return value ? `${fieldName} ${value}` : fieldName
        }) || []

      args.sort()

      const fragment = `export const ${typeName}Fragment = gql\`
  fragment ${typeName} on ${typeName} {
    ${args.join('\n    ')}
  }
\``

      fragments[typeName] = fragment
    }
  })

  Object.keys(interfaces).forEach(name => {
    const fragment = `export const ${name}Fragment = gql\`
  fragment ${name} on ${name} {
    ${interfaces[name].map(typeName => `...${typeName}`).join('\n    ')}
  }
\``

    fragments[name] = fragment
  })

  return Object.keys(fragments)
    .sort()
    .map(key => fragments[key])
    .join('\n\n')
}
