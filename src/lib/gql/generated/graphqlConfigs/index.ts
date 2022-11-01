import {
  CameraByIdDocument,
  CamerasGetDocument,
  PublicRouteDetailsGetDocument,
  PublicRoutesGetDocument,
  PublicShapesGetDocument,
  PublicStopScheduleGetDocument,
  PublicStopsGetDocument,
  PublicTripGetDocument,
  PublicVehiclesGetDocument
} from '../original/types'
import { 
   
} from '../defaults'
import { TMutations, TQueries } from '../graphqlTypes'
import { TGraphqlConfig } from 'src/lib/services/graphqlAPI'

const mutations: {
  [key in keyof TMutations]: TGraphqlConfig
} = {}

const queries: {
  [key in keyof TQueries]: TGraphqlConfig
} = {
  cameraById: {
    GQLDocument: CameraByIdDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить информацию о камере'
      }
    }
  },
  camerasGet: {
    GQLDocument: CamerasGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить список камер'
      }
    }
  },
  publicRouteDetailsGet: {
    GQLDocument: PublicRouteDetailsGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить информацию о маршруте'
      }
    }
  },
  publicRoutesGet: {
    GQLDocument: PublicRoutesGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить список маршрутов'
      }
    }
  },
  publicShapesGet: {
    GQLDocument: PublicShapesGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить траектории маршрутов'
      }
    }
  },
  publicStopScheduleGet: {
    GQLDocument: PublicStopScheduleGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить график маршрута'
      }
    }
  },
  publicStopsGet: {
    GQLDocument: PublicStopsGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить список остановок'
      }
    }
  },
  publicTripGet: {
    GQLDocument: PublicTripGetDocument,
    notifications: {}
  },
  publicVehiclesGet: {
    GQLDocument: PublicVehiclesGetDocument,
    notifications: {
      ERROR: {
        message: 'Не удалось получить информацию о транспорте'
      }
    }
  }
}

export { mutations, queries }
