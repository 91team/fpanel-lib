import { DocumentNode, TypeNode } from 'graphql'

import { TActionInfo, TOverrides } from '../types'

const SCALARS = ['ID', 'String', 'Boolean', 'Int', 'Float']

const enums: string[] = []

export const schemaDefinition = {
  query: 'Query',
  mutation: 'Mutation',
}

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

export function typeValue(type: TypeNode | string): string | null {
  const typeName = typeof type === 'string' ? type : typeValueName(type).resName

  if (SCALARS.includes(typeName) || enums.includes(typeName)) {
    return null
  }

  return `{
      ...${typeName}
    }`
}

export function generateFragments(doc: DocumentNode, overrides: TOverrides) {
  const fragments: Record<string, string> = {}
  const interfaces: Record<string, string[]> = {}
  const depsMap: Record<string, Set<string>> = {}

  doc.definitions.forEach((def) => {
    if (def.kind === 'EnumTypeDefinition') {
      enums.push(def.name.value)
    }

    if (def.kind === 'ScalarTypeDefinition') {
      SCALARS.push(def.name.value)
    }

    if (def.kind === 'SchemaDefinition') {
      def.operationTypes.forEach((operation) => {
        if (operation.operation === 'query' || operation.operation === 'mutation') {
          schemaDefinition[operation.operation] = operation.type.name.value
        }
      })
    }
  })

  doc.definitions.forEach((def) => {
    if (def.kind === 'UnionTypeDefinition') {
      const name = def.name.value

      depsMap[name] = new Set()
      def.types?.forEach((type) => depsMap[name].add(type.name.value))

      const fragment = `export const ${name}Fragment = gql\`
  fragment ${name} on ${name} {
    ${def.types?.map((type) => `...${type.name.value}`).join('\n    ')}
  }
\``

      fragments[name] = fragment
    }

    if (
      def.kind === 'ObjectTypeDefinition' &&
      def.name.value !== schemaDefinition.mutation &&
      def.name.value !== schemaDefinition.query
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

      depsMap[typeName] = new Set()

      const args =
        def.fields?.flatMap((field) => {
          const fieldName = field.name.value
          const typeOverrides = overrides[typeName]

          if (typeOverrides && typeOverrides[fieldName] === false) {
            return []
          }

          const argTypeName = typeValueName(field.type).resName

          if (!SCALARS.includes(argTypeName) && !enums.includes(argTypeName)) {
            depsMap[typeName].add(argTypeName)
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

  Object.keys(interfaces).forEach((name) => {
    depsMap[name] = new Set(interfaces[name])

    const fragment = `export const ${name}Fragment = gql\`
  fragment ${name} on ${name} {
    ${interfaces[name].map((typeName) => `...${typeName}`).join('\n    ')}
  }
\``

    fragments[name] = fragment
  })

  return {
    fragments,
    depsMap,
  }
}
