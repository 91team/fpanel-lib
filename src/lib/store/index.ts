import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

export class Store {
	constructor(isServer: boolean, initialData = {}) {}
}

let store = null

export function initializeStore(initialData?: any) {
	// Always make a new store if server, otherwise state is shared between requests
	if (isServer) {
		return new Store(isServer, initialData)
	}
	if (store === null) {
		store = new Store(isServer, initialData)
	}
	return store as App.Store | null
}
