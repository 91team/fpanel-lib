import gql from 'graphql-tag'

export const CameraFragment = gql`
  fragment Camera on Camera {
    address
    coords
    expire
    id
    name
    url
  }
`

export const PublicDirectionFragment = gql`
  fragment PublicDirection on PublicDirection {
    shape
    stops {
      ...PublicStop
    }
  }
`

export const PublicRouteFragment = gql`
  fragment PublicRoute on PublicRoute {
    agencyId
    agencyName
    back {
      ...PublicDirection
    }
    forward {
      ...PublicDirection
    }
    id
    name
    shape
    shortName
    stops {
      ...PublicStop
    }
  }
`

export const PublicScheduleRouteFragment = gql`
  fragment PublicScheduleRoute on PublicScheduleRoute {
    arrivalTime
    id
    name
    shortName
  }
`

export const PublicShapeFragment = gql`
  fragment PublicShape on PublicShape {
    executionsIds
    path
    routeShortName
    stops {
      ...PublicStop
    }
  }
`

export const PublicStopFragment = gql`
  fragment PublicStop on PublicStop {
    arrivalTime
    coords
    id
    isTraveled
    name
    nameEn
    normalizedShapeDist
    shapeDist
    wheelchairBoarding
  }
`

export const PublicTripFragment = gql`
  fragment PublicTrip on PublicTrip {
    id
    shape
    stops {
      ...PublicStop
    }
  }
`

export const PublicVehicleFragment = gql`
  fragment PublicVehicle on PublicVehicle {
    agencyId
    agencyName
    bearing
    boardNumber
    coords
    distanceToLine
    id
    normalizedShapeDist
    registrationNumber
    routeId
    shapeDist
    timestamp
    tripDirection
    tripId
    type
    wheelchairBoarding
  }
`
