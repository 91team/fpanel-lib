import gql from 'graphql-tag'

export const cameraByIdQuery = gql`
  query cameraById($id: UUID!) {
    cameraById(id: $id) {
      ...Camera
    }
  }
`

export const camerasGetQuery = gql`
  query camerasGet {
    camerasGet {
      ...Camera
    }
  }
`

export const publicRouteDetailsGetQuery = gql`
  query publicRouteDetailsGet($routeId: Int!) {
    publicRouteDetailsGet(routeId: $routeId) {
      ...PublicRoute
    }
  }
`

export const publicRoutesGetQuery = gql`
  query publicRoutesGet($search: String) {
    publicRoutesGet(search: $search) {
      ...PublicRoute
    }
  }
`

export const publicShapesGetQuery = gql`
  query publicShapesGet($routesIds: [Int!], $tripsExecutionsIds: [Int!]) {
    publicShapesGet(routesIds: $routesIds, tripsExecutionsIds: $tripsExecutionsIds) {
      ...PublicShape
    }
  }
`

export const publicStopScheduleGetQuery = gql`
  query publicStopScheduleGet($stopId: Int!) {
    publicStopScheduleGet(stopId: $stopId) {
      ...PublicScheduleRoute
    }
  }
`

export const publicStopsGetQuery = gql`
  query publicStopsGet(
    $bbox: [[Float!]!]
    $ids: [Int!]
    $limit: Int
    $offset: Int
    $search: String
  ) {
    publicStopsGet(bbox: $bbox, ids: $ids, limit: $limit, offset: $offset, search: $search) {
      ...PublicStop
    }
  }
`

export const publicTripGetQuery = gql`
  query publicTripGet($tripId: Int!) {
    publicTripGet(tripId: $tripId) {
      ...PublicTrip
    }
  }
`

export const publicVehiclesGetQuery = gql`
  query publicVehiclesGet($onRoute: Boolean) {
    publicVehiclesGet(onRoute: $onRoute) {
      ...PublicVehicle
    }
  }
`
