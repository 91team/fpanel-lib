import { DocumentNode, ObjectTypeDefinitionNode, TypeNode } from 'graphql'

import { TActionInfo, TCustomField, TCustomFragments, TFragmentOverride } from '../types'

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

export function generateTypeFields(
  typeName: string,
  baseName: string,
  fragmentFields: Record<string, ObjectTypeDefinitionNode>,
  depsMap: Record<string, Set<string>>,
  meta?: TCustomField
): string {
  const def = fragmentFields[baseName]

  if (!depsMap[typeName]) depsMap[typeName] = new Set()

  if (!def || !meta) {
    return typeValue(typeName) || ''
  }

  const { fields, ignoreFields, override } = meta || {}

  const args =
    def.fields?.flatMap((field) => {
      const fieldName = field.name.value
      const fieldMeta = override?.[fieldName]

      if (ignoreFields?.includes(fieldName) || fields?.includes(fieldName) === false) {
        return []
      }

      const argTypeName = typeValueName(field.type).resName

      if (!fields || fields.includes(argTypeName)) {
        if (!SCALARS.includes(argTypeName) && !enums.includes(argTypeName)) {
          depsMap[typeName].add(argTypeName)
        }
      }

      const value = generateTypeFields(
        typeValueName(field.type).resName,
        typeValueName(field.type).resName,
        fragmentFields,
        depsMap,
        fieldMeta
      )

      return value ? `${fieldName} ${value}` : fieldName
    }) || []

  args.sort()

  meta?.extends?.forEach((childType) => depsMap[typeName].add(childType))

  return `{
  ${meta?.extends ? meta.extends.map((type) => `...${type}`).join('\n') : ''}
  ${args.join('\n    ')}
}`
}

function generateFragment({
  typeName,
  baseName = typeName,
  fragmentFields,
  meta,
  depsMap,
}: {
  typeName: string
  baseName?: string
  fragmentFields: Record<string, ObjectTypeDefinitionNode>
  meta: TCustomField
  depsMap: Record<string, Set<string>>
  fields?: string[]
}) {
  const fragment = `export const ${typeName}Fragment = gql\`
  fragment ${typeName} on ${baseName} ${generateTypeFields(
    typeName,
    baseName,
    fragmentFields,
    depsMap,
    meta
  )}
\``

  return fragment
}

export function generateFragments(
  doc: DocumentNode,
  overrides: TFragmentOverride,
  custom: TCustomFragments
) {
  const fragments: Record<string, string> = {}
  const interfaces: Record<string, string[]> = {}
  const depsMap: Record<string, Set<string>> = {}
  const fragmentFields: Record<string, ObjectTypeDefinitionNode> = {}

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

      fragmentFields[typeName] = def
    }
  })

  Object.keys(fragmentFields).forEach((typeName) => {
    const def = fragmentFields[typeName]
    const override = overrides[typeName]

    if (override === false) {
      return
    }

    if (def.interfaces && def.interfaces.length) {
      def.interfaces.forEach(({ name }) => {
        const implementations = interfaces[name.value] || []

        implementations.push(typeName)

        interfaces[name.value] = implementations
      })
    }

    fragments[typeName] = generateFragment({
      typeName,
      fragmentFields,
      depsMap,
      meta: override || {},
    })
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

  Object.keys(custom).forEach((typeName) => {
    const meta = custom[typeName]

    fragments[typeName] = generateFragment({
      typeName,
      baseName: meta.base,
      fragmentFields,
      depsMap,
      meta,
    })
  })

  return {
    fragments,
    depsMap,
  }
}
