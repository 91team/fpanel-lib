export const enum ACTION_TYPE {
  mutations = 'mutations',
  queries = 'queries',
}

export type TArgV = {
  config?: string
}
export type TActionType = ACTION_TYPE
export type TFragmentOverride = Record<string, false | TCustomField>
export type TCustomField = {
  extends?: string[]
  fields?: string[]
  override?: TFragmentOverride
}
export type TCustomFragment = {
  base: string
} & TCustomField
export type TCustomFragments = Record<string, TCustomFragment>
export type TActionInfo = {
  resName: string
  isList: boolean
}
export type TActionOverride = {
  name: string
  type: string
}

export type TCustomAction = {
  name: string
  resName: string
  baseAction: string
  errorMessage: string
}

export type TAliases = Record<string, string[]>

export type TConfig = {
  [ACTION_TYPE.mutations]: Record<string, string | null>
  [ACTION_TYPE.queries]: Record<string, string | null>
  usedFragments: string[]
  fragments: TFragmentOverride
  customFragments: TCustomFragments
  customQueries: TCustomAction[]
  customMutations: TCustomAction[]
}

export type TGlobalVars = {
  MODULE_PATH: string
  CONFIG_PATH: string
  GENERATED_FOLDER_PATH: string
  GQL_TYPES_FOLDER_NAME: string
  GQL_TYPES_FOLDER_PATH: string
  GQL_CONFIGS_FOLDER_NAME: string
  GQL_CONFIGS_FOLDER_PATH: string
  DEFAULTS_FILE_PATH: string
  DEFAULTS_OUT_FILE_PATH: string
  CUSTOM_TYPES_FILE_PATH: string
}
