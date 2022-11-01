import { TConfig } from './scripts/generateGQLConfigs/types'

export const config: TConfig = {
  usedFragments: [],
  customFragments: {},
  customQueries: [],
  customMutations: [],
  fragments: {},
  mutations: {},
  queries: {
    cameraById: 'Не удалось получить информацию о камере',
    camerasGet: 'Не удалось получить список камер',
    publicRouteDetailsGet: 'Не удалось получить информацию о маршруте',
    publicRoutesGet: 'Не удалось получить список маршрутов',
    publicStopScheduleGet: 'Не удалось получить график маршрута',
    publicStopsGet: 'Не удалось получить список остановок',
    publicTripGet: '',
    publicShapesGet: 'Не удалось получить траектории маршрутов',
    publicVehiclesGet: 'Не удалось получить информацию о транспорте',
  },
}
