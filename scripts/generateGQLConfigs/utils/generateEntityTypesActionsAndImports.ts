import { ACTION_TYPE } from '../constants'

import { TActionType, TEntityConfig } from '../types'

import { convertFirstLetterToUpperCase } from './convertFirstLetterToUpperCase'

type TEntityResult = {
  imports: string[]
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

export function generateEntityTypesActionsAndImports(entityConfig: TEntityConfig): TResult {
  const result: TResult = {
    [ACTION_TYPE.mutations]: {
      imports: [],
      actions: [],
    },
    [ACTION_TYPE.queries]: {
      imports: [],
      actions: [],
    },
  }

  Object.keys(entityConfig).map((value) => {
    const actionType = value as TActionType
    const { imports, actions } = result[actionType]
    const actionsConfigs = entityConfig[actionType]
    const formattedActionType = formattedActionTypeNames[actionType]

    actionsConfigs.forEach(({ name }) => {
      const typePrefix = convertFirstLetterToUpperCase(name)
      const resultType = `${typePrefix}${formattedActionType}Result`
      const variableType = `${typePrefix}${formattedActionType}Variables`

      imports.push(resultType, variableType)
      actions.push(actionGenerator({ name, resultType, variableType }))
    })

    result[actionType] = {
      imports,
      actions,
    }
  })

  return result
}
