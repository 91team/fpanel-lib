import { action, observable } from 'mobx'
import { nanoid } from 'nanoid'

export type TNotification = {
  id: string
  type: 'ERROR' | 'SUCCESS'
  message?: string
}

class Notifications {
  @observable public items = observable.array<TNotification>([])

  @action.bound public pushNotification(notification: Omit<TNotification, 'id'>) {
    this.items.push({ ...notification, id: nanoid() })

    const item = this.items[this.items.length - 1]

    setTimeout(() => {
      this.items.remove(item)
    }, 5000)
  }

  @action.bound public remove(item: TNotification) {
    this.items.remove(item)
  }

  public serialize() {
    return {
      items: this.items,
    }
  }
}

export default Notifications
