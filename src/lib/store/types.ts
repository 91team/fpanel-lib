import Store from './index'

export abstract class CStore {
  public serialize: () => Record<string, any>
}

export type TRootStoreOptions = {
  initialState?: Partial<Store>
  services: unknown
}
