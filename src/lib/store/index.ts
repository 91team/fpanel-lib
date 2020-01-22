import { observable } from 'mobx'

import User from './user'
import { CStore, TRootStoreOptions } from './types'

class Store implements CStore {
  public childStores = {
    user: User
  }

  constructor({ initialState = {} }: TRootStoreOptions) {
    Object.entries(this.childStores).forEach(([key, Factory]) => {
      const initialStoreData = initialState[key]

      this[key] = new Factory(initialStoreData)
    })
  }

  @observable user: null | User = null

  get serializableWhitelist(): (keyof this['childStores'])[] {
    return ['user']
  }

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

      if (
        childStore &&
        this.serializableWhitelist.includes(key as keyof this['childStores'])
      ) {
        result[key] = (this[key] as CStore).serialize()
      }
    })

    return result
  }
}

export default Store
