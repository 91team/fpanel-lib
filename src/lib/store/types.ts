import { StoreName } from './constants'

import Notifications from './notifications'
import User from './user'

export type TStores = {
  [StoreName.USER]: User
  [StoreName.NOTIFICATIONS]: Notifications
}

export type TStoresKeys = keyof TStores
