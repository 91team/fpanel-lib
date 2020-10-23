import { ACTION_TYPE } from './constants'

export type TArgV = {
  config?: string
}
export type TActionType = ACTION_TYPE
export type TActionConfig = {
  name: string
  errorMessage?: string
}
export type TEntityConfig = {
  [ACTION_TYPE.mutations]?: TActionConfig[]
  [ACTION_TYPE.queries]?: TActionConfig[]
}
export type TConfig = Record<string, TEntityConfig>
export type TGlobalVars = {
  PROJECT_PATH: string
  CONFIG_PATH: string
  GENERATED_FOLDER_PATH: string
  GQL_TYPES_FOLDER_NAME: string
  GQL_TYPES_FOLDER_PATH: string
  GQL_CONFIGS_FOLDER_NAME: string
  GQL_CONFIGS_FOLDER_PATH: string
}
