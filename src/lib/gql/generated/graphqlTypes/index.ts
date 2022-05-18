import { TGraphqlAction } from 'src/lib/services/graphqlAPI'

import {
  PublicRouteDetailsGetQuery,
  PublicRouteDetailsGetQueryVariables,
  PublicRoutesGetQuery,
  PublicRoutesGetQueryVariables,
  PublicShapesGetQuery,
  PublicShapesGetQueryVariables,
  PublicStopScheduleGetQuery,
  PublicStopScheduleGetQueryVariables,
  PublicStopsGetQuery,
  PublicStopsGetQueryVariables,
  PublicTripGetQuery,
  PublicTripGetQueryVariables,
  PublicVehiclesGetQuery,
  PublicVehiclesGetQueryVariables
} from '../original/types'
import {
  
 } from '../types'

export type TMutations = {}

export type TQueries = {
  publicRouteDetailsGet: TGraphqlAction<PublicRouteDetailsGetQuery, PublicRouteDetailsGetQueryVariables>
  publicRoutesGet: TGraphqlAction<PublicRoutesGetQuery, PublicRoutesGetQueryVariables>
  publicShapesGet: TGraphqlAction<PublicShapesGetQuery, PublicShapesGetQueryVariables>
  publicStopScheduleGet: TGraphqlAction<PublicStopScheduleGetQuery, PublicStopScheduleGetQueryVariables>
  publicStopsGet: TGraphqlAction<PublicStopsGetQuery, PublicStopsGetQueryVariables>
  publicTripGet: TGraphqlAction<PublicTripGetQuery, PublicTripGetQueryVariables>
  publicVehiclesGet: TGraphqlAction<PublicVehiclesGetQuery, PublicVehiclesGetQueryVariables>
}
