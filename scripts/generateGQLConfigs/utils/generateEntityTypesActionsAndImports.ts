import { ACTION_TYPE } from '../constants'

import { TActionType, TEntityConfig } from '../types'

import { convertFirstLetterToUpperCase } from './convertFirstLetterToUpperCase'

type TEntityResult = {
  imports: string[]
  actions: string[]
}
type TResult = Partial<Record<TActionType, TEntityResult>>

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
}): string => `${name}: App.TGraphqlAction<${resultType}, ${variableType}>`

export function generateEntityTypesActionsAndImports(entityConfig: TEntityConfig): TResult {
  const result: Partial<TResult> = {}

  Object.keys(entityConfig).map((actionType: TActionType) => {
    const imports: TEntityResult['imports'] = []
    const actions: TEntityResult['actions'] = []
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
