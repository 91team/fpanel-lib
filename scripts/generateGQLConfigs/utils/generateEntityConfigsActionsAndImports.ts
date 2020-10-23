import { TActionType, TEntityConfig } from '../types'

import { convertFirstLetterToUpperCase } from './convertFirstLetterToUpperCase'

type TEntityResult = {
  imports: string[]
  actions: string[]
}
type TResult = Partial<Record<TActionType, TEntityResult>>

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
}: {
  name: string
  documentType: string
  errorMessageConfig: string
}): string =>
  `${name}: {
    GQLDocument: ${documentType},
    notifications: {${errorMessageConfig}}
  }`

export function generateEntityConfigsActionsAndImports(
  entityConfig: TEntityConfig
): TResult {
  const result: Partial<TResult> = {}

  Object.keys(entityConfig).map((actionType: TActionType) => {
    const imports: TEntityResult['imports'] = []
    const actions: TEntityResult['actions'] = []
    const actionsConfigs = entityConfig[actionType]

    actionsConfigs.forEach(({ name, errorMessage }) => {
      const typePrefix = convertFirstLetterToUpperCase(name)
      const documentType = `${typePrefix}Document`
      const errorMessageConfig = errorGenerator(errorMessage)

      imports.push(documentType)
      actions.push(actionGenerator({ name, documentType, errorMessageConfig }))
    })

    result[actionType] = {
      imports,
      actions,
    }
  })

  return result
}
