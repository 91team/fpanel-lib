import { StoreName } from './constants'
import Notifications from './notifications'
import { TStores, TStoresKeys } from './types'

export class Stores {
  // @ts-expect-error
  private stores: TStores = {}

  constructor() {
    this.addStore(StoreName.NOTIFICATIONS, new Notifications())
  }

  public addStore<TStoreName extends TStoresKeys>(
    storeName: TStoreName,
    store: TStores[TStoreName]
  ) {
    this.stores[storeName] = store
  }

  public getStore<TStoreName extends TStoresKeys>(name: TStoreName): TStores[TStoreName] {
    return this.stores[name]
  }
}
