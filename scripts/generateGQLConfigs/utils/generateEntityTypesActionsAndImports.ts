import { ACTION_TYPE } from '../constants'
import { TActionInfo, TActionOverride, TActionType, TAliases, TConfig } from '../types'

import { convertFirstLetterToUpperCase } from './convertFirstLetterToUpperCase'

type TEntityResult = {
  imports: string[]
  customTypesImports: string[]
  actions: string[]
}
type TResult = Record<TActionType, TEntityResult>

const formattedActionTypeNames = {
  [ACTION_TYPE.mutations]: 'Mutation',
  [ACTION_TYPE.queries]: 'Query',
}
const actionGenerator = ({
  name,
  resultType,
  variableType,
}: {
  name: string
  resultType: string
  variableType: string
}): string => `${name}: TGraphqlAction<${resultType}, ${variableType}>`

export function generateEntityTypesActionsAndImports(
  entityConfig: TConfig,
  actionOverrides: Record<string, TActionOverride>,
  actionsInfo: Record<string, TActionInfo>,
  aliases: Record<string, string>
): TResult {
  // @ts-expect-error
  const result: TResult = {}

  const actionTypes = [ACTION_TYPE.mutations, ACTION_TYPE.queries]

  actionTypes.map(actionType => {
    const imports: TEntityResult['imports'] = []
    const customTypesImports: TEntityResult['imports'] = []
    const actions: TEntityResult['actions'] = []
    const actionsConfigs = entityConfig[actionType]
    const formattedActionType = formattedActionTypeNames[actionType]

    Object.keys(actionsConfigs).forEach(name => {
      const typePrefix = convertFirstLetterToUpperCase(name)
      const info = actionsInfo[name]
      const overrides = actionOverrides[`${info?.resName}Fragment`]

      const dataKey = aliases[name] || name

      const resultType = overrides?.type
        ? `{ ${dataKey}: ${overrides.type}${info?.isList ? '[]' : ''} }`
        : `${typePrefix}${formattedActionType}`
      const variableType = `${typePrefix}${formattedActionType}Variables`

      if (overrides?.type) {
        customTypesImports.push(overrides.type)
      } else {
        imports.push(resultType)
      }

      imports.push(variableType)
      actions.push(actionGenerator({ name, resultType, variableType }))
    })

    if (actionType === ACTION_TYPE.queries) {
      entityConfig.customActions.forEach(({ name, resName }) => {
        const typePrefix = convertFirstLetterToUpperCase(name)
        const info = actionsInfo[name]
        const overrides = actionOverrides[`${info?.resName}Fragment`]

        const dataKey = aliases[name] || name

        const resultType = overrides?.type
          ? `{ ${dataKey}: ${overrides.type}${info?.isList ? '[]' : ''} }`
          : `${typePrefix}${formattedActionType}`
        const variableType = `${typePrefix}${formattedActionType}Variables`

        if (overrides?.type) {
          customTypesImports.push(overrides.type)
        } else {
          imports.push(resultType)
        }

        imports.push(variableType)
        actions.push(actionGenerator({ name, resultType, variableType }))
      })
    }

    result[actionType] = {
      imports,
      customTypesImports,
      actions,
    }
  })

  return result
}
