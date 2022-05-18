import { TMutations, TQueries } from 'src/lib/gql/generated/graphqlTypes'
import { ServiceName } from 'src/lib/services/types/constants'

import { ServicesManager } from './lib/services'
import { TStorage, TStorageKeys } from './lib/services/types'

export type TFPanelQueries = TQueries
export type TFPanelMutations = TMutations

class FPanelClient {
  private services: ServicesManager

  constructor() {
    this.services = new ServicesManager()

    this.services.initialize()
  }

  public get mutations() {
    return this.getService(ServiceName.GRAPHQL_API).mutations
  }

  public get queries() {
    return this.getService(ServiceName.GRAPHQL_API).queries
  }

  private getService<T extends TStorageKeys>(serviceName: T): TStorage[T] {
    return this.services.getService(serviceName)
  }
}

export default FPanelClient
