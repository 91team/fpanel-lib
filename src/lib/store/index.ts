import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export class Store {
  constructor(isServer: boolean, initialData = {}) {}
}

let store: Store = null

export function initializeStore(initialData?: any) {
  // Always make a new store if server,
  // otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }

  if (store === null) {
    store = new Store(isServer, initialData)
  }

  return store
}
