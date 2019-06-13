import {
	applySnapshot,
	Instance,
	SnapshotIn,
	SnapshotOut,
	IStateTreeNode,
	types
} from 'mobx-state-tree'

let store: IStoreInstance = null as any

const Store = types.model({})

export type IStoreInstance = Instance<typeof Store>
export type IStoreState = IStateTreeNode<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

export const initStore: (
	isServer: boolean,
	snapshot?: IStoreState | null
) => IStoreInstance = (isServer, snapshot = null) => {
	if (isServer) {
		store = Store.create()
	}
	if ((store as any) === null) {
		store = Store.create()
	}
	if (snapshot) {
		applySnapshot(store, snapshot)
	}
	return store
}
