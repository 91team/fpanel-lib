import { enableLogging } from 'mobx-logger'

import Store, { TChildStores } from 'lib/store'

import { CStore, TRootStoreOptions } from 'lib/store/types'

import { BaseService, TOptions as TBaseOptions } from './base'

export type TInitialState = TRootStoreOptions['initialState']
export type TOptions = TBaseOptions & Omit<TRootStoreOptions, 'servicesManager'>

export class StoreService extends BaseService {
  private rootStore: Store

  constructor({ initialState = {}, root }: TOptions) {
    super({ root })

    this.rootStore = new Store({ initialState, servicesManager: root })
  }

  public getRootStore(): Store {
    return this.rootStore
  }

  public getChildStores(): TChildStores {
    return this.getRootStore().getChildStores()
  }

  public convertToJSON(): Object {
    return this.getRootStore().serialize()
  }

  public makeLogger() {
    enableLogging()
  }
}
