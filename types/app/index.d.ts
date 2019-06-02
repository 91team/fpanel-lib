import {
	IStoreInstance,
	IStoreState,
	IStoreSnapshotIn,
	IStoreSnapshotOut
} from 'lib/store'

declare namespace App {
	type Store = IStoreInstance
	type StoreState = IStoreState
	type StoreSnapshotIn = IStoreSnapshotIn
	type StoreSnapshotOut = IStoreSnapshotOut
}

export = App
export as namespace App
