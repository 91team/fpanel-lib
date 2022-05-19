import { TMutations, TQueries } from './lib/gql/generated/graphqlTypes'
import { ServicesManager } from './lib/services'
import { TStorage, TStorageKeys } from './lib/services/types'
import { ServiceName } from './lib/services/types/constants'

export type TFPanelQueries = TQueries
export type TFPanelMutations = TMutations

class FPanelClient {
  private services: ServicesManager

  constructor({ isDev = false, hostname }: { isDev?: boolean; hostname: string }) {
    this.services = new ServicesManager({ isDev, hostname })

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
