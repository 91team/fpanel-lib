import { observable } from 'mobx'

import User from './user'
import { CStore, TRootStoreOptions } from './types'

class Store implements CStore {
  private childStores = {
    user: User
  }

  constructor({ initialState = {} }: TRootStoreOptions) {
    Object.entries(this.childStores).forEach(([key, Factory]) => {
      const initialStoreData = initialState[key]

      this[key] = new Factory(initialStoreData)
    })
  }

  @observable user: null | User = null

  public getChildStores(): Record<string, CStore> {
    const result: Record<string, CStore> = {}

    Object.keys(this.childStores).forEach(key => {
      const childStore = this[key]

      result[key] = childStore
    })

    return result
  }

  public serialize() {
    const result: Record<string, any> = {}

    Object.keys(this.childStores).forEach(key => {
      const childStore = this[key]

      if (childStore) {
        result[key] = (this[key] as CStore).serialize()
      }
    })

    return result
  }
}

export default Store
