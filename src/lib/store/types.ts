import { ServicesManager } from 'services/manager'

import Store from './index'

export abstract class CStore {
  public serialize: () => Record<string, any>
}

export type TRootStoreOptions = {
  initialState?: Partial<Store>
  servicesManager: ServicesManager
}
