import { ACTION_TYPE, TActionInfo, TActionOverride, TActionType, TConfig } from '../types'

import { convertFirstLetterToUpperCase } from './convertFirstLetterToUpperCase'

type TEntityResult = {
  imports: string[]
  fillImports: string[]
  actions: string[]
}
type TResult = Record<TActionType, TEntityResult>

const errorGenerator = (errorMessage: string): string =>
  errorMessage
    ? `
      ERROR: {
        message: '${errorMessage}'
      }
    `
    : ''
const actionGenerator = ({
  name,
  documentType,
  errorMessageConfig,
  fillData,
}: {
  name: string
  documentType: string
  errorMessageConfig: string
  fillData: string | null
}): string => {
  const props = [`GQLDocument: ${documentType}`, `notifications: {${errorMessageConfig}}`]

  if (fillData) {
    props.push(`fillData: ${fillData}`)
  }

  return `${name}: {
    ${props.join(',\n    ')}
  }`
}

export function generateEntityConfigsActionsAndImports(
  entityConfig: TConfig,
  actionOverrides: Record<string, TActionOverride>,
  actionsInfo: Record<string, TActionInfo>,
  aliases: Record<string, string>
): TResult {
  // @ts-expect-error
  const result: TResult = {}

  const actionTypes = [ACTION_TYPE.mutations, ACTION_TYPE.queries]

  actionTypes.map((actionType) => {
    const imports: TEntityResult['imports'] = []
    const fillImports: TEntityResult['fillImports'] = []
    const actions: TEntityResult['actions'] = []
    const actionsConfigs = entityConfig[actionType]

    Object.keys(actionsConfigs).forEach((name) => {
      const errorMessage = actionsConfigs[name]!
      const typePrefix = convertFirstLetterToUpperCase(name)
      const documentType = `${typePrefix}Document`
      const errorMessageConfig = errorGenerator(errorMessage)
      const info = actionsInfo[name]
      const overrides = actionOverrides[`${info?.resName}Fragment`]

      imports.push(documentType)

      let fillData = overrides?.name ? `${overrides?.name}` : null

      if (fillData && info.isList) {
        fillData = `[${fillData}]`
      }

      const dataKey = aliases[name] || name

      actions.push(
        actionGenerator({
          name,
          documentType,
          errorMessageConfig,
          fillData: fillData ? `{ ${dataKey}: ${fillData} }` : null,
        })
      )

      if (overrides?.name) {
        fillImports.push(overrides?.name)
      }
    })

    if (actionType === ACTION_TYPE.queries) {
      entityConfig.customActions.forEach(({ name, errorMessage }) => {
        const typePrefix = convertFirstLetterToUpperCase(name)
        const documentType = `${typePrefix}Document`
        const errorMessageConfig = errorGenerator(errorMessage)
        const info = actionsInfo[name]
        const overrides = actionOverrides[`${info?.resName}Fragment`]

        imports.push(documentType)

        let fillData = overrides?.name ? `${overrides?.name}` : null

        if (fillData && info.isList) {
          fillData = `[${fillData}]`
        }

        const dataKey = aliases[name] || name

        actions.push(
          actionGenerator({
            name,
            documentType,
            errorMessageConfig,
            fillData: fillData ? `{ ${dataKey}: ${fillData} }` : null,
          })
        )

        if (overrides?.name) {
          fillImports.push(overrides?.name)
        }
      })
    }

    result[actionType] = {
      imports,
      fillImports,
      actions,
    }
  })

  return result
}
