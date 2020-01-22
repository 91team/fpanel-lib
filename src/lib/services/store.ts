import { enableLogging } from 'mobx-logger'

import Store from 'lib/store'
import { TRootStoreOptions } from 'lib/store/types'

class StoreManager {
  protected static instance: Store

  private constructor() {}

  public static initialize(options: TRootStoreOptions = {}) {
    StoreManager.setInstance(new Store(options))
  }

  public static setInstance(store: Store) {
    StoreManager.instance = store
  }

  public static getInstance(): Store {
    return StoreManager.instance
  }

  public static getChildStores() {
    const store = StoreManager.getInstance()

    return store.getChildStores()
  }

  public static convertToJSON(): string {
    return JSON.stringify(StoreManager.getInstance().serialize())
  }

  public static convertFromJSON(): Store {
    return JSON.parse(window.__INITIAL_STATE__ || '{}')
  }

  public static rehydrate() {
    const initialState = StoreManager.convertFromJSON()

    StoreManager.setInstance(new Store({ initialState }))
  }

  public static makeLogger() {
    enableLogging()
  }
}

export default StoreManager
