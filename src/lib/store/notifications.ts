import { action, observable } from 'mobx'
import shortid from 'shortid'

import { CStore } from './types'

import BaseStore from './base'

type TInitialState = Partial<Notifications>

class Notifications extends BaseStore<TInitialState> implements CStore {
  @observable public items = observable.array<Data.TNotification>([])

  @action.bound public pushNotification(
    notification: Omit<Data.TNotification, 'id'>
  ) {
    this.items.push({ ...notification, id: shortid() })

    const item = this.items[this.items.length - 1]

    setTimeout(() => {
      this.items.remove(item)
    }, 5000)
  }

  @action.bound public remove(item: Data.TNotification) {
    this.items.remove(item)
  }

  public serialize() {
    return {
      items: this.items,
    }
  }
}

export default Notifications
