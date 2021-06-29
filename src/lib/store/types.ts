import { StoreName } from './constants'

import Notifications from './notifications'

export type TStores = {
  [StoreName.NOTIFICATIONS]: Notifications
}

export type TStoresKeys = keyof TStores
