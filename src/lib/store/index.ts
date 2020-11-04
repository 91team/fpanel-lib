import { observable } from 'mobx'

import { ServicesManager } from 'services/manager'

import { CStore, TRootStoreOptions } from './types'

import Notifications from './notifications'
import User from './user'

export type TChildStores = Omit<Store, 'getServices' | 'getChildStores' | 'serialize'>

class Store implements CStore {
  private childStores: { [key in keyof TChildStores]: any } = {
    user: User,
    notifications: Notifications,
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
  @observable public notifications: null | Notifications = null

  private get serializableWhitelist(): string[] {
    return ['user', 'notifications']
  }

  public getServices() {
    return this.services
  }

  public getChildStores(): TChildStores {
    const result: Partial<TChildStores> = {}

    Object.keys(this.childStores).forEach(key => {
      const childStore = this[key]

      result[key] = childStore
    })

    return result as TChildStores
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
