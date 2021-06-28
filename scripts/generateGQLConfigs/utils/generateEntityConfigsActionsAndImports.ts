import { ACTION_TYPE } from '../constants'

import { TActionType, TEntityConfig } from '../types'

import { convertFirstLetterToUpperCase } from './convertFirstLetterToUpperCase'

type TEntityResult = {
  imports: string[]
  actions: string[]
}
type TResult = Record<TActionType, TEntityResult>

const errorGenerator = (errorMessage: string | undefined): string =>
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
}: {
  name: string
  documentType: string
  errorMessageConfig: string
}): string =>
  `${name}: {
    GQLDocument: ${documentType},
    notifications: {${errorMessageConfig}}
  }`

export function generateEntityConfigsActionsAndImports(entityConfig: TEntityConfig): TResult {
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

    actionsConfigs.forEach(({ name, errorMessage }) => {
      const typePrefix = convertFirstLetterToUpperCase(name)
      const documentType = `${typePrefix}Document`
      const errorMessageConfig = errorGenerator(errorMessage)

      imports.push(documentType)
      actions.push(actionGenerator({ name, documentType, errorMessageConfig }))
    })
  })

  return result
}
