import { observable } from 'mobx'

import ServiceBuilder from 'services/builder'
import User from './user'
import { CStore, TRootStoreOptions } from './types'

class Store implements CStore {
  private childStores = {
    user: User
  }
  private services: ServiceBuilder

  constructor({ initialState = {}, services }: TRootStoreOptions) {
    this.services = services

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
    return this.services.getServices()
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
