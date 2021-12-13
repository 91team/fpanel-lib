import { TMutations, TQueries } from 'src/lib/gql/generated/graphqlTypes'
import { Stores } from 'src/lib/store/stores'
import { TStores } from 'src/lib/store/types'
import { createGlobalObjectRef, getGlobal, setGlobal } from '../di/global'
import { ServicesManager } from '../services/manager'
import { TStorage, TStorageKeys } from '../services/types'
import { ServiceName } from '../services/types/constants'

type TGlobals = {
  stores: Stores
  services: ServicesManager
}

const GlobalsRef = createGlobalObjectRef<TGlobals>()

export function initGlobals() {
  const services = new ServicesManager()
  const stores = new Stores()

  setGlobal(GlobalsRef, { stores, services })

  services.initialize()
}

function getGlobals() {
  return getGlobal(GlobalsRef)
}

export function getService<T extends TStorageKeys>(serviceName: T): TStorage[T] {
  return getGlobals().services.getService(serviceName)
}

export function getStore<T extends keyof TStores>(name: T): TStores[T] {
  return getGlobals().stores.getStore(name)
}

export function getGraphqlMutations(): TMutations {
  return getService(ServiceName.GRAPHQL_API).mutations
}

export function getGraphqlQueries(): TQueries {
  return getService(ServiceName.GRAPHQL_API).queries
}
