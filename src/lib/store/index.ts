import { observable } from 'mobx'

import ServicesManager from 'lib/services/manager'

import { CStore, TRootStoreOptions } from './types'

import User from './user'

class Store implements CStore {
  private childStores = {
    user: User,
  }
  private services: ReturnType<ServicesManager['getServices']>

  constructor({ initialState = {}, servicesManager }: TRootStoreOptions) {
    this.services = servicesManager.getServices()

    Object.entries(this.childStores).forEach(([key, Factory]) => {
      const initialStoreData = initialState[key]

      this[key] = new Factory(initialStoreData, this)
    })
  }

  @observable public user: null | User = null

  private get serializableWhitelist(): string[] {
    return ['user']
  }

  public getServices() {
    return this.services
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

      if (childStore && this.serializableWhitelist.includes(key)) {
        result[key] = (this[key] as CStore).serialize()
      }
    })

    return result
  }
}

export default Store
