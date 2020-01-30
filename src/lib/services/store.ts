import { enableLogging } from 'mobx-logger'

import Store from 'lib/store'
import BaseService, { TOptions as TBaseOptions } from './base'
import { TRootStoreOptions, CStore } from 'lib/store/types'

type TOptions = TBaseOptions & Omit<TRootStoreOptions, 'services'>

class StoreService extends BaseService {
  private rootStore: Store

  constructor({ initialState = {}, root }: TOptions) {
    super({ root })

    this.rootStore = new Store({ initialState, services: root })

    this.getRoot().addService('store', this)
  }

  public getRootStore(): Store {
    return this.rootStore
  }

  public getChildStores(): Record<string, CStore> {
    return this.getRootStore().getChildStores()
  }

  public convertToJSON(): Object {
    return this.getRootStore().serialize()
  }

  public static makeLogger() {
    enableLogging()
  }
}

export default StoreService
