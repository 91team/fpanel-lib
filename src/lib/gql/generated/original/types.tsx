import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Unix timestamp */
  Timestamp: number,
  /** Date in ISO 8601 format(YYYY-MM-DD) */
  Date: any,
  /** UUID scalar */
  UUID: string,
  /** JSON scalar */
  JSON: any,
  /** Represents an uploaded file. */
  Upload: File,
}

export interface ActionLog {
   __typename?: 'ActionLog',
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['Timestamp']>,
  type?: Maybe<ActionType>,
  user?: Maybe<User>,
}

export const enum ActionType {
  InstructionOffRoute = 'INSTRUCTION_OFF_ROUTE',
  InstructionSwitchRoute = 'INSTRUCTION_SWITCH_ROUTE',
  OrderChange = 'ORDER_CHANGE',
  RouteInterval = 'ROUTE_INTERVAL'
};

export interface Agency {
   __typename?: 'Agency',
  address?: Maybe<Scalars['String']>,
  adminsCount?: Maybe<Scalars['Int']>,
  city?: Maybe<Scalars['String']>,
  dispatchersCount?: Maybe<Scalars['Int']>,
  driversCount?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  expireDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  routesCount?: Maybe<Scalars['Int']>,
  vehiclesCount?: Maybe<Scalars['Int']>,
}

export interface AskApiVehicle {
   __typename?: 'AskApiVehicle',
  course?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['String']>,
  ll?: Maybe<Array<Scalars['Float']>>,
  model?: Maybe<Scalars['String']>,
  speed?: Maybe<Scalars['Float']>,
  statenum?: Maybe<Scalars['String']>,
  time?: Maybe<Scalars['Timestamp']>,
}

export interface Attachment {
   __typename?: 'Attachment',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export const enum AvaliableReports {
  DailyTrips = 'DAILY_TRIPS',
  Dispatcher = 'DISPATCHER',
  DrivingQuality = 'DRIVING_QUALITY',
  Malfunctions = 'MALFUNCTIONS',
  OrderDistTimes = 'ORDER_DIST_TIMES',
  RouteWorkload = 'ROUTE_WORKLOAD',
  VehiclesMileage = 'VEHICLES_MILEAGE'
};

export interface Avatar {
   __typename?: 'Avatar',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Chat {
   __typename?: 'Chat',
  driver?: Maybe<Driver>,
  lastMessage?: Maybe<Message>,
  messagesGroup?: Maybe<MessagesGroup>,
  type?: Maybe<MessageType>,
}

export interface City {
   __typename?: 'City',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
}


export const enum Day {
  Fr = 'FR',
  Mo = 'MO',
  Sa = 'SA',
  Su = 'SU',
  Th = 'TH',
  Tu = 'TU',
  We = 'WE'
};

export interface DictFile {
   __typename?: 'DictFile',
  content?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface Driver {
   __typename?: 'Driver',
  agency?: Maybe<Agency>,
  agencyId?: Maybe<Scalars['UUID']>,
  allowedVehiclesTypes?: Maybe<Array<RouteType>>,
  authCode?: Maybe<Scalars['String']>,
  avatar?: Maybe<Avatar>,
  avatarId?: Maybe<Scalars['UUID']>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  workload?: Maybe<Array<Array<Scalars['Int']>>>,
}

export interface DriverRoute {
   __typename?: 'DriverRoute',
  name?: Maybe<Scalars['String']>,
  rId?: Maybe<Scalars['Int']>,
  shortName?: Maybe<Scalars['String']>,
}

export interface DriverSession {
   __typename?: 'DriverSession',
  driver?: Maybe<DriverSimplified>,
  expireAt?: Maybe<Scalars['Timestamp']>,
  refreshToken?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
}

export interface DriverSimplified {
   __typename?: 'DriverSimplified',
  agency?: Maybe<Agency>,
  allowedVehiclesTypes?: Maybe<Array<RouteType>>,
  avatar?: Maybe<Avatar>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
}

export interface DriverStoptime {
   __typename?: 'DriverStoptime',
  arrivalTimestamp: Scalars['Timestamp'],
  coords: Array<Scalars['Float']>,
  departureTimestamp: Scalars['Timestamp'],
  isTraveled: Scalars['Boolean'],
  /** Do you need it? */
  radius: Scalars['Float'],
  stopId: Scalars['Int'],
  stopName: Scalars['String'],
  /** amount in seconds */
  waitingTime: Scalars['Int'],
}

export interface DriverTrip {
   __typename?: 'DriverTrip',
  endTimestamp?: Maybe<Scalars['Timestamp']>,
  firsStopName?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  lastStopName?: Maybe<Scalars['String']>,
  lastTraveledStopId?: Maybe<Scalars['Int']>,
  normalizedShapeDist?: Maybe<Scalars['Float']>,
  route: DriverRoute,
  /** [[lon1, lat1!], [lon2, lat2!], ...!] */
  shape: Array<Array<Scalars['Float']>>,
  shapeDist?: Maybe<Scalars['Float']>,
  startTimestamp?: Maybe<Scalars['Timestamp']>,
  stoptimes: Array<DriverStoptime>,
  waitingTime?: Maybe<Scalars['Int']>,
}

export interface Fare {
   __typename?: 'Fare',
  rows?: Maybe<Array<FareRow>>,
  stops?: Maybe<Array<Stop>>,
}

export interface FareColumn {
   __typename?: 'FareColumn',
  price?: Maybe<Scalars['Float']>,
  stop?: Maybe<Stop>,
  toStopId?: Maybe<Scalars['Int']>,
}

export interface FareRow {
   __typename?: 'FareRow',
  columns?: Maybe<Array<FareColumn>>,
  fromStopId?: Maybe<Scalars['Int']>,
  stop?: Maybe<Stop>,
}

export interface Instruction {
   __typename?: 'Instruction',
  id?: Maybe<Scalars['UUID']>,
  instruction?: Maybe<InstructionBody>,
  tripExecutionId?: Maybe<Scalars['Int']>,
}

export interface InstructionBody {
   __typename?: 'InstructionBody',
  offRoute?: Maybe<OffRouteInstruction>,
  setVehicle?: Maybe<SetVehicleInstruction>,
  switchRoute?: Maybe<SwitchRouteInstruction>,
  type?: Maybe<InstructionType>,
}

export interface InstructionInput {
  offRoute?: Maybe<OffRouteInstructionInput>,
  setVehicle?: Maybe<SetVehicleInstructionInput>,
  switchRoute?: Maybe<SwitchRouteInstructionInput>,
  type: InstructionType,
}

export interface InstructionOrder {
   __typename?: 'InstructionOrder',
  endTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface InstructionRoute {
   __typename?: 'InstructionRoute',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
}

export interface InstructionTrip {
   __typename?: 'InstructionTrip',
  endTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export const enum InstructionType {
  OffRoute = 'OFF_ROUTE',
  SetVehicle = 'SET_VEHICLE',
  SwitchRoute = 'SWITCH_ROUTE'
};


export const enum LocationType {
  BoardingArea = 'BOARDING_AREA',
  Entrance = 'ENTRANCE',
  Node = 'NODE',
  RailwayStation = 'RAILWAY_STATION',
  Station = 'STATION',
  Stop = 'STOP'
};

export interface Message {
   __typename?: 'Message',
  /** Might be text or base64 wav audio, based on content_type */
  content?: Maybe<Scalars['String']>,
  contentType?: Maybe<MessageContentType>,
  id?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['Timestamp']>,
}

export const enum MessageContentType {
  Audio = 'AUDIO',
  Text = 'TEXT'
};

export interface MessagesAudio {
   __typename?: 'MessagesAudio',
  content?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
}

export interface MessagesGroup {
   __typename?: 'MessagesGroup',
  drivers?: Maybe<Array<Driver>>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
}

export interface MessagesRoute {
   __typename?: 'MessagesRoute',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
}

export const enum MessageType {
  Group = 'GROUP',
  Personal = 'PERSONAL'
};

export const enum NetworkRouteChangeType {
  RouteCreate = 'ROUTE_CREATE',
  RouteDelete = 'ROUTE_DELETE',
  RouteUpdateLongName = 'ROUTE_UPDATE_LONG_NAME',
  RouteUpdateShortName = 'ROUTE_UPDATE_SHORT_NAME',
  RouteUpdateType = 'ROUTE_UPDATE_TYPE',
  RouteVersionDelete = 'ROUTE_VERSION_DELETE',
  TripDelete = 'TRIP_DELETE'
};

export const enum NetworkRouteVersionChangeType {
  RouteVersionCreate = 'ROUTE_VERSION_CREATE',
  RouteVersionSelect = 'ROUTE_VERSION_SELECT',
  RouteVersionUpdateDays = 'ROUTE_VERSION_UPDATE_DAYS',
  RouteVersionUpdateEndDate = 'ROUTE_VERSION_UPDATE_END_DATE',
  RouteVersionUpdateEndTime = 'ROUTE_VERSION_UPDATE_END_TIME',
  RouteVersionUpdateHasFrequencies = 'ROUTE_VERSION_UPDATE_HAS_FREQUENCIES',
  RouteVersionUpdateHeadwaySecs = 'ROUTE_VERSION_UPDATE_HEADWAY_SECS',
  RouteVersionUpdateName = 'ROUTE_VERSION_UPDATE_NAME',
  RouteVersionUpdatePriority = 'ROUTE_VERSION_UPDATE_PRIORITY',
  RouteVersionUpdateStartDate = 'ROUTE_VERSION_UPDATE_START_DATE',
  RouteVersionUpdateStartTime = 'ROUTE_VERSION_UPDATE_START_TIME'
};

export const enum NetworkStopChangeType {
  StopCreate = 'STOP_CREATE',
  StopDelete = 'STOP_DELETE',
  StopUpdateCoords = 'STOP_UPDATE_COORDS',
  StopUpdateIsService = 'STOP_UPDATE_IS_SERVICE',
  StopUpdateLocationType = 'STOP_UPDATE_LOCATION_TYPE',
  StopUpdateName = 'STOP_UPDATE_NAME',
  StopUpdateRadius = 'STOP_UPDATE_RADIUS'
};

export const enum NetworkTripChangeType {
  TripClone = 'TRIP_CLONE',
  TripCreate = 'TRIP_CREATE',
  TripCreateStoptime = 'TRIP_CREATE_STOPTIME',
  TripDeleteStoptime = 'TRIP_DELETE_STOPTIME',
  TripUpdateIsPivot = 'TRIP_UPDATE_IS_PIVOT',
  TripUpdateStoptimeArrivalTime = 'TRIP_UPDATE_STOPTIME_ARRIVAL_TIME',
  TripUpdateStoptimeDepartureTime = 'TRIP_UPDATE_STOPTIME_DEPARTURE_TIME',
  TripUpdateStoptimeShapeId = 'TRIP_UPDATE_STOPTIME_SHAPE_ID',
  TripUpdateStoptimeStopId = 'TRIP_UPDATE_STOPTIME_STOP_ID'
};

export interface NetworkVersion {
   __typename?: 'NetworkVersion',
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isActive?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
}

export const enum OffRouteAction {
  GotoAgency = 'GOTO_AGENCY',
  Wait = 'WAIT'
};

export interface OffRouteInstruction {
   __typename?: 'OffRouteInstruction',
  action?: Maybe<OffRouteAction>,
  reason?: Maybe<OffRouteReason>,
}

export interface OffRouteInstructionInput {
  action?: Maybe<OffRouteAction>,
  reason?: Maybe<OffRouteReason>,
}

export const enum OffRouteReason {
  Accident = 'ACCIDENT',
  DriverTrouble = 'DRIVER_TROUBLE',
  Emergency = 'EMERGENCY',
  Malfunction = 'MALFUNCTION'
};

export interface Order {
   __typename?: 'Order',
  date?: Maybe<Scalars['Date']>,
  driver?: Maybe<Driver>,
  endTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  tripExecutions?: Maybe<Array<TripExecution>>,
  vehicle?: Maybe<Vehicle>,
}

export const enum OrderDirection {
  Asc = 'ASC',
  AscNullsFirst = 'ASC_NULLS_FIRST',
  AscNullsLast = 'ASC_NULLS_LAST',
  Desc = 'DESC',
  DescNullsFirst = 'DESC_NULLS_FIRST',
  DescNullsLast = 'DESC_NULLS_LAST'
};

export interface PublicDirection {
   __typename?: 'PublicDirection',
  shape?: Maybe<Array<Array<Scalars['Float']>>>,
  stops?: Maybe<Array<PublicStop>>,
}

export interface PublicRoute {
   __typename?: 'PublicRoute',
  /** only for publicRouteDetailsGet */
  back?: Maybe<PublicDirection>,
  /** only for publicRouteDetailsGet */
  forward?: Maybe<PublicDirection>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  /** depr */
  shape?: Maybe<Array<Array<Scalars['Float']>>>,
  shortName?: Maybe<Scalars['String']>,
  /** depr */
  stops?: Maybe<Array<PublicStop>>,
}

export interface PublicScheduleRoute {
   __typename?: 'PublicScheduleRoute',
  arrivalTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
}

export interface PublicShape {
   __typename?: 'PublicShape',
  executionsIds?: Maybe<Array<Scalars['Int']>>,
  path: Array<Array<Scalars['Float']>>,
  routeShortName?: Maybe<Scalars['String']>,
  stops?: Maybe<Array<PublicStop>>,
}

export interface PublicStop {
   __typename?: 'PublicStop',
  /** only for publicTrip */
  arrivalTime?: Maybe<Scalars['Int']>,
  coords?: Maybe<Array<Scalars['Float']>>,
  id?: Maybe<Scalars['Int']>,
  /** only for publicTrip */
  isTraveled?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  /** only for publicTrip */
  normalizedShapeDist?: Maybe<Scalars['Float']>,
  /** only for publicTrip */
  shapeDist?: Maybe<Scalars['Float']>,
}

export interface PublicTrip {
   __typename?: 'PublicTrip',
  id?: Maybe<Scalars['Int']>,
  shape?: Maybe<Array<Array<Scalars['Float']>>>,
  stops?: Maybe<Array<PublicStop>>,
}

export interface PublicVehicle {
   __typename?: 'PublicVehicle',
  bearing?: Maybe<Scalars['Float']>,
  boardNumber?: Maybe<Scalars['String']>,
  coords?: Maybe<Array<Scalars['Float']>>,
  distanceToLine?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Int']>,
  normalizedShapeDist?: Maybe<Scalars['Float']>,
  registrationNumber?: Maybe<Scalars['String']>,
  routeId?: Maybe<Scalars['Int']>,
  shapeDist?: Maybe<Scalars['Float']>,
  timestamp?: Maybe<Scalars['Timestamp']>,
  tripDirection?: Maybe<TripDirection>,
  tripId?: Maybe<Scalars['Int']>,
  type?: Maybe<VehicleType>,
  wheelchairBoarding?: Maybe<WheelchairBoarding>,
}

export interface RealtimeOrder {
   __typename?: 'RealtimeOrder',
  acceptedTripsCount?: Maybe<Scalars['Int']>,
  currentTripNum?: Maybe<Scalars['Int']>,
  driver?: Maybe<Driver>,
  endTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  instructions?: Maybe<Array<Instruction>>,
  lastStopDeviation?: Maybe<Scalars['Int']>,
  nextStopDeviation?: Maybe<Scalars['Int']>,
  routeId?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  tripsCount?: Maybe<Scalars['Int']>,
  vehicleId?: Maybe<Scalars['Int']>,
}

export interface RealtimeRoute {
   __typename?: 'RealtimeRoute',
  orders?: Maybe<Array<RealtimeOrder>>,
  stops?: Maybe<Array<RealtimeStop>>,
  vehicles?: Maybe<Array<RealtimeVehicle>>,
}

export interface RealtimeRouteRow {
   __typename?: 'RealtimeRouteRow',
  activeOrdersCount?: Maybe<Scalars['Int']>,
  agency?: Maybe<Agency>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  intervalSeconds?: Maybe<Scalars['Int']>,
  isInterval?: Maybe<Scalars['Boolean']>,
  lastStopDeviationCount?: Maybe<Scalars['Int']>,
  lastStopDeviationMax?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  nextStopDeviationCount?: Maybe<Scalars['Int']>,
  ordersCount?: Maybe<Scalars['Int']>,
  shortName?: Maybe<Scalars['String']>,
  tripExecutionsFactCount?: Maybe<Scalars['Int']>,
  tripExecutionsPlanCount?: Maybe<Scalars['Int']>,
  vehiclesCount?: Maybe<Scalars['Int']>,
}

export interface RealtimeShape {
   __typename?: 'RealtimeShape',
  executionsIds?: Maybe<Array<Scalars['Int']>>,
  path: Array<Array<Scalars['Float']>>,
  routeShortName?: Maybe<Scalars['String']>,
  stops?: Maybe<Array<RealtimeStop>>,
}

export interface RealtimeStop {
   __typename?: 'RealtimeStop',
  coords?: Maybe<Array<Scalars['Float']>>,
  dir?: Maybe<TripDirection>,
  id?: Maybe<Scalars['Int']>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  name?: Maybe<Scalars['String']>,
  normDist?: Maybe<Scalars['Float']>,
}

export interface RealtimeTripExecution {
   __typename?: 'RealtimeTripExecution',
  acceptScore?: Maybe<Scalars['Float']>,
  dir?: Maybe<TripDirection>,
  id?: Maybe<Scalars['Int']>,
  isActive?: Maybe<Scalars['Boolean']>,
  orderId?: Maybe<Scalars['Int']>,
  routeId?: Maybe<Scalars['Int']>,
  stops?: Maybe<Array<TripExecutionStop>>,
}

export interface RealtimeVehicle {
   __typename?: 'RealtimeVehicle',
  bearing?: Maybe<Scalars['Float']>,
  boardNumber?: Maybe<Scalars['String']>,
  distanceToLine?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Int']>,
  imei?: Maybe<Scalars['String']>,
  normalizedShapeDist?: Maybe<Scalars['Float']>,
  oid?: Maybe<Scalars['String']>,
  originLl?: Maybe<Array<Scalars['Float']>>,
  registrationNumber?: Maybe<Scalars['String']>,
  routeId?: Maybe<Scalars['Int']>,
  shapeDist?: Maybe<Scalars['Float']>,
  shapeLl?: Maybe<Array<Scalars['Float']>>,
  size?: Maybe<VehicleSize>,
  speed?: Maybe<Scalars['Float']>,
  status?: Maybe<RealtimeVehicleStatus>,
  timestamp?: Maybe<Scalars['Timestamp']>,
  tripDirection?: Maybe<TripDirection>,
  tripExecutionId?: Maybe<Scalars['Int']>,
  type?: Maybe<VehicleType>,
  wheelchairBoarding?: Maybe<WheelchairBoarding>,
}

export interface RealtimeVehicleMeta {
   __typename?: 'RealtimeVehicleMeta',
  agency?: Maybe<Agency>,
  driver?: Maybe<Driver>,
  tripExecutionId?: Maybe<Scalars['Int']>,
  vehicle?: Maybe<Vehicle>,
  vehicleId?: Maybe<Scalars['Int']>,
}

export const enum RealtimeVehicleStatus {
  Active = 'ACTIVE',
  NoConnection = 'NO_CONNECTION',
  Staying = 'STAYING'
};

export interface Report {
   __typename?: 'Report',
  content?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  reportType?: Maybe<AvaliableReports>,
}

export const enum ReportParams {
  AgencyId = 'AGENCY_ID',
  Date = 'DATE',
  DispatchersIds = 'DISPATCHERS_IDS',
  DriverId = 'DRIVER_ID',
  FromDate = 'FROM_DATE',
  FromTimestamp = 'FROM_TIMESTAMP',
  MinVelocity = 'MIN_VELOCITY',
  RoutesIds = 'ROUTES_IDS',
  ToDate = 'TO_DATE',
  ToTimestamp = 'TO_TIMESTAMP'
};

export interface ReportProperties {
   __typename?: 'ReportProperties',
  avaliableParams?: Maybe<Array<ReportParams>>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<AvaliableReports>,
}

export interface ReportRoute {
   __typename?: 'ReportRoute',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
}

export const enum Role {
  AgencyAdmin = 'AGENCY_ADMIN',
  Dispatcher = 'DISPATCHER',
  Superadmin = 'SUPERADMIN'
};

export interface RootMutationType {
   __typename?: 'RootMutationType',
  agencyCreate?: Maybe<Agency>,
  agencyDelete?: Maybe<Agency>,
  agencyUpdate?: Maybe<Agency>,
  /** Create attachment */
  attachmentCreate?: Maybe<Attachment>,
  /** Delete attachment */
  attachmentDelete?: Maybe<Scalars['String']>,
  /** Create avatar */
  avatarCreate?: Maybe<Avatar>,
  /** Delete avatar */
  avatarDelete?: Maybe<Scalars['String']>,
  brandCreate?: Maybe<VehicleBrand>,
  brandDelete?: Maybe<VehicleBrand>,
  brandUpdate?: Maybe<VehicleBrand>,
  cityCreate?: Maybe<City>,
  cityDelete?: Maybe<City>,
  createRouteChange?: Maybe<Route>,
  createRouteVersionChange?: Maybe<RouteVersion>,
  createStopChange?: Maybe<Stop>,
  createTripChange?: Maybe<Trip>,
  driverAuthCodeReset?: Maybe<Scalars['String']>,
  driverCreate?: Maybe<Driver>,
  driverDelete?: Maybe<Driver>,
  driverSendSensorsData?: Maybe<Scalars['String']>,
  driverSessionCreate?: Maybe<DriverSession>,
  driverSessionDelete?: Maybe<Scalars['String']>,
  driverSessionRefresh?: Maybe<DriverSession>,
  driverUpdate?: Maybe<Driver>,
  fareCreate?: Maybe<Fare>,
  importAgenciesFromFile?: Maybe<Array<Agency>>,
  importDriversFromFile?: Maybe<Array<Driver>>,
  importVehiclesFromFile?: Maybe<Array<Vehicle>>,
  messageCreate?: Maybe<Message>,
  messagesGroupCreate?: Maybe<MessagesGroup>,
  modelCreate?: Maybe<VehicleModel>,
  modelDelete?: Maybe<VehicleModel>,
  modelUpdate?: Maybe<VehicleModel>,
  networkVersionCreate?: Maybe<NetworkVersion>,
  networkVersionImportGtfs?: Maybe<NetworkVersion>,
  networkVersionSwitch?: Maybe<NetworkVersion>,
  orderCreate: Order,
  orderDelete?: Maybe<Scalars['String']>,
  orderUpdate: Order,
  realtimeOrderApplyCorrection?: Maybe<Scalars['String']>,
  realtimeSetRouteInterval?: Maybe<Scalars['String']>,
  routeDeleteAgency?: Maybe<Scalars['String']>,
  routeSetAgency?: Maybe<Scalars['String']>,
  routeVersionDelete?: Maybe<RouteVersion>,
  scheduleAskImport?: Maybe<Scalars['String']>,
  scheduleImportNetwork?: Maybe<Scalars['String']>,
  scheduleXlsUpload?: Maybe<Scalars['String']>,
  sendInstruction?: Maybe<Instruction>,
  sessionCreate?: Maybe<UserSession>,
  sessionDelete?: Maybe<Scalars['String']>,
  sessionRefresh?: Maybe<UserSession>,
  shapeCreate?: Maybe<Shape>,
  shapeDelete?: Maybe<Shape>,
  shapeUpdate?: Maybe<Shape>,
  tripDelete?: Maybe<Trip>,
  tripExecutionApplyCorrection?: Maybe<RealtimeTripExecution>,
  tripExecutionSetOrder: TripExecution,
  undoChange?: Maybe<UndoChangeResult>,
  undoRouteChange?: Maybe<Route>,
  undoStopChange?: Maybe<Stop>,
  undoTripChange?: Maybe<Trip>,
  updateTripExecution?: Maybe<RealtimeTripExecution>,
  updateTripExecutionStop?: Maybe<RealtimeTripExecution>,
  userCreate?: Maybe<User>,
  /** DEV */
  userDelete?: Maybe<User>,
  userSelfUpdate?: Maybe<User>,
  userUpdate?: Maybe<User>,
  vehicleCreate?: Maybe<Vehicle>,
  vehicleDelete?: Maybe<Vehicle>,
  vehicleUpdate?: Maybe<Vehicle>,
  vehiclesXlsOidUpdate?: Maybe<Scalars['String']>,
}


export interface RootMutationTypeAgencyCreateArgs {
  address?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  expireDate?: Maybe<Scalars['Date']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeAgencyDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeAgencyUpdateArgs {
  address?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  expireDate?: Maybe<Scalars['Date']>,
  id: Scalars['UUID'],
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeAttachmentCreateArgs {
  file: Scalars['Upload']
}


export interface RootMutationTypeAttachmentDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeAvatarCreateArgs {
  file: Scalars['Upload']
}


export interface RootMutationTypeAvatarDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeBrandCreateArgs {
  name: Scalars['String']
}


export interface RootMutationTypeBrandDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeBrandUpdateArgs {
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>
}


export interface RootMutationTypeCityCreateArgs {
  name: Scalars['String']
}


export interface RootMutationTypeCityDeleteArgs {
  cityId: Scalars['Int']
}


export interface RootMutationTypeCreateRouteChangeArgs {
  changeType: NetworkRouteChangeType,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  selectedVersionId?: Maybe<Scalars['Int']>,
  shortName?: Maybe<Scalars['String']>,
  type?: Maybe<RouteType>
}


export interface RootMutationTypeCreateRouteVersionChangeArgs {
  changeType: NetworkRouteVersionChangeType,
  days?: Maybe<Array<Day>>,
  endDate?: Maybe<Scalars['Date']>,
  endTime?: Maybe<Scalars['Int']>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  headwaySecs?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['Int']>,
  routeId?: Maybe<Scalars['Int']>,
  selectedVersionId?: Maybe<Scalars['Int']>,
  startDate?: Maybe<Scalars['Date']>,
  startTime?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeCreateStopChangeArgs {
  changeType: NetworkStopChangeType,
  coords?: Maybe<Array<Scalars['Float']>>,
  id?: Maybe<Scalars['Int']>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  name?: Maybe<Scalars['String']>,
  radius?: Maybe<Scalars['Float']>
}


export interface RootMutationTypeCreateTripChangeArgs {
  arrivalTime?: Maybe<Scalars['Int']>,
  changeType: NetworkTripChangeType,
  departureTime?: Maybe<Scalars['Int']>,
  dir?: Maybe<TripDirection>,
  id?: Maybe<Scalars['Int']>,
  index?: Maybe<Scalars['Int']>,
  isPivot?: Maybe<Scalars['Boolean']>,
  routeId?: Maybe<Scalars['Int']>,
  shapeId?: Maybe<Scalars['Int']>,
  shift?: Maybe<Scalars['Int']>,
  stopId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeDriverAuthCodeResetArgs {
  driverId: Scalars['Int']
}


export interface RootMutationTypeDriverCreateArgs {
  agencyId?: Maybe<Scalars['UUID']>,
  allowedVehiclesTypes?: Maybe<Array<RouteType>>,
  avatarId?: Maybe<Scalars['UUID']>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>
}


export interface RootMutationTypeDriverDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDriverSendSensorsDataArgs {
  coords: Array<Scalars['Float']>,
  speed: Scalars['Float'],
  timestamp: Scalars['Timestamp']
}


export interface RootMutationTypeDriverSessionCreateArgs {
  authCode: Scalars['String']
}


export interface RootMutationTypeDriverSessionRefreshArgs {
  refreshToken: Scalars['String']
}


export interface RootMutationTypeDriverUpdateArgs {
  agencyId?: Maybe<Scalars['UUID']>,
  allowedVehiclesTypes?: Maybe<Array<RouteType>>,
  avatarId?: Maybe<Scalars['UUID']>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>
}


export interface RootMutationTypeFareCreateArgs {
  fromStopId: Scalars['Int'],
  price: Scalars['Float'],
  toStopId: Scalars['Int'],
  tripId: Scalars['Int']
}


export interface RootMutationTypeImportAgenciesFromFileArgs {
  file?: Maybe<Scalars['Upload']>
}


export interface RootMutationTypeImportDriversFromFileArgs {
  agencyId: Scalars['UUID'],
  file?: Maybe<Scalars['Upload']>
}


export interface RootMutationTypeImportVehiclesFromFileArgs {
  agencyId: Scalars['UUID'],
  file?: Maybe<Scalars['Upload']>
}


export interface RootMutationTypeMessageCreateArgs {
  audioId?: Maybe<Scalars['Int']>,
  content?: Maybe<Scalars['String']>,
  contentType: MessageContentType,
  driverId?: Maybe<Scalars['Int']>,
  groupId?: Maybe<Scalars['Int']>,
  type: MessageType
}


export interface RootMutationTypeMessagesGroupCreateArgs {
  driversIds: Array<Scalars['Int']>,
  name: Scalars['String']
}


export interface RootMutationTypeModelCreateArgs {
  brandId: Scalars['Int'],
  name: Scalars['String']
}


export interface RootMutationTypeModelDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeModelUpdateArgs {
  brandId?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>
}


export interface RootMutationTypeNetworkVersionCreateArgs {
  name: Scalars['String']
}


export interface RootMutationTypeNetworkVersionSwitchArgs {
  versionId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOrderCreateArgs {
  date: Scalars['Date'],
  routeId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeOrderDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeOrderUpdateArgs {
  driverId?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>,
  vehicleId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeRealtimeOrderApplyCorrectionArgs {
  correction: Scalars['Int'],
  stopIndex: Scalars['Int'],
  tripExecutionId: Scalars['Int']
}


export interface RootMutationTypeRealtimeSetRouteIntervalArgs {
  intervalSeconds?: Maybe<Scalars['Int']>,
  isInterval: Scalars['Boolean'],
  routeId: Scalars['Int']
}


export interface RootMutationTypeRouteDeleteAgencyArgs {
  routeId: Scalars['Int']
}


export interface RootMutationTypeRouteSetAgencyArgs {
  agencyId: Scalars['UUID'],
  routeId: Scalars['Int']
}


export interface RootMutationTypeRouteVersionDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeScheduleXlsUploadArgs {
  xls: Scalars['Upload']
}


export interface RootMutationTypeSendInstructionArgs {
  instruction: InstructionInput,
  orderId: Scalars['Int']
}


export interface RootMutationTypeSessionCreateArgs {
  email: Scalars['String'],
  password: Scalars['String']
}


export interface RootMutationTypeSessionRefreshArgs {
  refreshToken: Scalars['String']
}


export interface RootMutationTypeShapeCreateArgs {
  path: Array<Array<Scalars['Float']>>,
  pivotPoints?: Maybe<Array<Array<Scalars['Float']>>>,
  routeVersionId: Scalars['Int'],
  tripId: Scalars['Int']
}


export interface RootMutationTypeShapeDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeShapeUpdateArgs {
  id: Scalars['Int'],
  path: Array<Array<Scalars['Float']>>,
  pivotPoints?: Maybe<Array<Array<Scalars['Float']>>>
}


export interface RootMutationTypeTripDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeTripExecutionApplyCorrectionArgs {
  correction: Scalars['Int'],
  id: Scalars['Int'],
  stopIndex: Scalars['Int']
}


export interface RootMutationTypeTripExecutionSetOrderArgs {
  id: Scalars['Int'],
  orderId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeUndoRouteChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUndoStopChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUndoTripChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateTripExecutionArgs {
  acceptScore: Scalars['Float'],
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateTripExecutionStopArgs {
  accepted?: Maybe<Scalars['Boolean']>,
  comment?: Maybe<TripExecutionStopCommentInp>,
  correction?: Maybe<Scalars['Int']>,
  stopIndex: Scalars['Int'],
  tripExecutionId: Scalars['Int']
}


export interface RootMutationTypeUserCreateArgs {
  user: UserInput
}


export interface RootMutationTypeUserDeleteArgs {
  userId: Scalars['UUID']
}


export interface RootMutationTypeUserSelfUpdateArgs {
  user: UserSelfUpdateInput
}


export interface RootMutationTypeUserUpdateArgs {
  user: UserUpdateInput
}


export interface RootMutationTypeVehicleCreateArgs {
  agencyId?: Maybe<Scalars['UUID']>,
  boardNumber?: Maybe<Scalars['String']>,
  hasInfoPanel?: Maybe<Scalars['Boolean']>,
  hasSpeakers?: Maybe<Scalars['Boolean']>,
  imei?: Maybe<Scalars['String']>,
  oid?: Maybe<Scalars['String']>,
  registrationNumber?: Maybe<Scalars['String']>,
  size?: Maybe<VehicleSize>,
  type?: Maybe<VehicleType>,
  wheelchairBoarding?: Maybe<WheelchairBoarding>
}


export interface RootMutationTypeVehicleDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeVehicleUpdateArgs {
  agencyId?: Maybe<Scalars['UUID']>,
  boardNumber?: Maybe<Scalars['String']>,
  hasInfoPanel?: Maybe<Scalars['Boolean']>,
  hasSpeakers?: Maybe<Scalars['Boolean']>,
  id: Scalars['Int'],
  imei?: Maybe<Scalars['String']>,
  oid?: Maybe<Scalars['String']>,
  registrationNumber?: Maybe<Scalars['String']>,
  size?: Maybe<VehicleSize>,
  type?: Maybe<VehicleType>,
  wheelchairBoarding?: Maybe<WheelchairBoarding>
}


export interface RootMutationTypeVehiclesXlsOidUpdateArgs {
  xls: Scalars['Upload']
}

export interface RootQueryType {
   __typename?: 'RootQueryType',
  actionsLogsGet?: Maybe<Array<ActionLog>>,
  agenciesDict?: Maybe<DictFile>,
  agenciesGet?: Maybe<Array<Agency>>,
  askApiVehiclesGet?: Maybe<Array<AskApiVehicle>>,
  brandsGet?: Maybe<Array<VehicleBrand>>,
  citiesGet?: Maybe<Array<City>>,
  dispatchersDict?: Maybe<DictFile>,
  /** Get profile */
  driverGetActiveTrip?: Maybe<DriverTrip>,
  driverGetByAuthCode?: Maybe<Driver>,
  driverGetTrips: Array<DriverTrip>,
  driverMessagesGet?: Maybe<Array<Message>>,
  driversDict?: Maybe<DictFile>,
  driversGet?: Maybe<Array<Driver>>,
  instructionRoutesGet?: Maybe<Array<InstructionRoute>>,
  instructionsOrdersGet?: Maybe<Array<InstructionOrder>>,
  instructionsTripsGet?: Maybe<Array<InstructionTrip>>,
  messagesAudioGet?: Maybe<Array<MessagesAudio>>,
  messagesChatsGet?: Maybe<Array<Chat>>,
  messagesDriversGet?: Maybe<Array<Driver>>,
  messagesGet?: Maybe<Array<Message>>,
  messagesRoutesGet?: Maybe<Array<MessagesRoute>>,
  modelsGet?: Maybe<Array<VehicleModel>>,
  networkVersionsGet?: Maybe<Array<NetworkVersion>>,
  ordersGet?: Maybe<Array<Order>>,
  publicRouteDetailsGet?: Maybe<PublicRoute>,
  publicRoutesGet?: Maybe<Array<PublicRoute>>,
  publicShapesGet?: Maybe<Array<PublicShape>>,
  publicStopScheduleGet?: Maybe<Array<PublicScheduleRoute>>,
  publicStopsGet?: Maybe<Array<PublicStop>>,
  publicTripGet?: Maybe<PublicTrip>,
  publicVehiclesGet?: Maybe<Array<PublicVehicle>>,
  realtimeOrderTripExecutionsGet?: Maybe<Array<RealtimeTripExecution>>,
  realtimeRouteGet?: Maybe<RealtimeRoute>,
  realtimeRouteRowsGet?: Maybe<Array<RealtimeRouteRow>>,
  realtimeVehiclePathGet?: Maybe<Array<Array<Scalars['Float']>>>,
  realtimeVehiclesGet?: Maybe<Array<RealtimeVehicle>>,
  realtimeVehiclesMetaGet?: Maybe<Array<RealtimeVehicleMeta>>,
  realtimeVehiclesShapesGet?: Maybe<Array<RealtimeShape>>,
  /** Get report */
  reportGet?: Maybe<Report>,
  /** returns list of reports */
  reportsList?: Maybe<Array<ReportProperties>>,
  reportsRoutesGet?: Maybe<Array<ReportRoute>>,
  routeTripExecutionsGet?: Maybe<Array<TripExecution>>,
  routesDict?: Maybe<DictFile>,
  routesGet?: Maybe<Array<Route>>,
  routesVersionsGet?: Maybe<Array<RouteVersion>>,
  scheduleCalendarDatesGet?: Maybe<Array<ScheduleCalendarDate>>,
  scheduleDriversWorkloadGet?: Maybe<Array<Driver>>,
  scheduleRoutesGet?: Maybe<Array<ScheduleRoute>>,
  scheduleVehiclesWorkloadGet?: Maybe<Array<Vehicle>>,
  schedulerTripsGet?: Maybe<Scalars['JSON']>,
  shapesGet?: Maybe<Array<Shape>>,
  shapesGetCompact?: Maybe<Scalars['JSON']>,
  stopsGet?: Maybe<Array<Stop>>,
  tripFareGet?: Maybe<Fare>,
  tripsGet?: Maybe<Array<Trip>>,
  usersGet?: Maybe<Array<User>>,
  vehiclesDict?: Maybe<DictFile>,
  vehiclesGet?: Maybe<Array<Vehicle>>,
  vehiclesGetCompact?: Maybe<Scalars['String']>,
  vehiclesLogRoutesGet?: Maybe<Array<Route>>,
  vehiclesLogVehiclesGet?: Maybe<Array<Vehicle>>,
  vehiclesLogsGet?: Maybe<Array<VehicleLogGroup>>,
}


export interface RootQueryTypeActionsLogsGetArgs {
  fromTimestamp: Scalars['Timestamp'],
  toTimestamp: Scalars['Timestamp'],
  types?: Maybe<Array<ActionType>>
}


export interface RootQueryTypeAgenciesGetArgs {
  ids?: Maybe<Array<Scalars['UUID']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>,
  withStats?: Scalars['Boolean']
}


export interface RootQueryTypeAskApiVehiclesGetArgs {
  id?: Maybe<Scalars['String']>
}


export interface RootQueryTypeBrandsGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeCitiesGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeDriverGetByAuthCodeArgs {
  authCode: Scalars['String']
}


export interface RootQueryTypeDriverGetTripsArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeDriverMessagesGetArgs {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeDriversGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeInstructionsOrdersGetArgs {
  routeId: Scalars['Int']
}


export interface RootQueryTypeInstructionsTripsGetArgs {
  orderId: Scalars['Int']
}


export interface RootQueryTypeMessagesChatsGetArgs {
  type: MessageType
}


export interface RootQueryTypeMessagesDriversGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  routesIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeMessagesGetArgs {
  driverId?: Maybe<Scalars['Int']>,
  groupId?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  type: MessageType
}


export interface RootQueryTypeMessagesRoutesGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>
}


export interface RootQueryTypeModelsGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeNetworkVersionsGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  isActive?: Maybe<Scalars['Boolean']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeOrdersGetArgs {
  date: Scalars['Date'],
  ids?: Maybe<Array<Scalars['Int']>>,
  routeId: Scalars['Int']
}


export interface RootQueryTypePublicRouteDetailsGetArgs {
  routeId: Scalars['Int']
}


export interface RootQueryTypePublicRoutesGetArgs {
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypePublicShapesGetArgs {
  routesIds?: Maybe<Array<Scalars['Int']>>,
  tripsExecutionsIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypePublicStopScheduleGetArgs {
  stopId: Scalars['Int']
}


export interface RootQueryTypePublicStopsGetArgs {
  bbox?: Maybe<Array<Array<Scalars['Float']>>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypePublicTripGetArgs {
  tripId: Scalars['Int']
}


export interface RootQueryTypeRealtimeOrderTripExecutionsGetArgs {
  orderId: Scalars['Int']
}


export interface RootQueryTypeRealtimeRouteGetArgs {
  id: Scalars['Int']
}


export interface RootQueryTypeRealtimeRouteRowsGetArgs {
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeRealtimeVehiclePathGetArgs {
  tripExecutionId?: Maybe<Scalars['Int']>,
  vehicleId?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeRealtimeVehiclesGetArgs {
  vehiclesIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeRealtimeVehiclesMetaGetArgs {
  executionsIds?: Maybe<Array<Scalars['Int']>>,
  vehiclesIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeRealtimeVehiclesShapesGetArgs {
  routesIds?: Maybe<Array<Scalars['Int']>>,
  tripsExecutionsIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeReportGetArgs {
  agencyId?: Maybe<Scalars['UUID']>,
  date?: Maybe<Scalars['Date']>,
  dispatchersIds?: Maybe<Array<Scalars['String']>>,
  driverId?: Maybe<Scalars['Int']>,
  fromDate?: Maybe<Scalars['Date']>,
  fromTimestamp?: Maybe<Scalars['Timestamp']>,
  minVelocity?: Maybe<Scalars['Float']>,
  routesIds?: Maybe<Array<Scalars['Int']>>,
  toDate?: Maybe<Scalars['Date']>,
  toTimestamp?: Maybe<Scalars['Timestamp']>,
  type: AvaliableReports
}


export interface RootQueryTypeReportsRoutesGetArgs {
  date: Scalars['Date'],
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeRouteTripExecutionsGetArgs {
  date: Scalars['Date'],
  routeId: Scalars['Int']
}


export interface RootQueryTypeRoutesGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  types?: Maybe<Array<RouteType>>
}


export interface RootQueryTypeRoutesVersionsGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  routeIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeScheduleCalendarDatesGetArgs {
  fromDate?: Maybe<Scalars['Date']>,
  toDate?: Maybe<Scalars['Date']>
}


export interface RootQueryTypeScheduleDriversWorkloadGetArgs {
  date: Scalars['Date'],
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeScheduleRoutesGetArgs {
  date: Scalars['Date'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeScheduleVehiclesWorkloadGetArgs {
  date: Scalars['Date'],
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeShapesGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  routeId?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeStopsGetArgs {
  bbox?: Maybe<Array<Array<Scalars['Float']>>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  isService?: Maybe<Scalars['Boolean']>,
  limit?: Maybe<Scalars['Int']>,
  locationTypes?: Maybe<Array<LocationType>>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeTripFareGetArgs {
  tripId: Scalars['Int']
}


export interface RootQueryTypeTripsGetArgs {
  directions?: Maybe<Array<TripDirection>>,
  fromTime?: Maybe<Scalars['Int']>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Scalars['Int']>>,
  isActive?: Maybe<Scalars['Boolean']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  routeIds?: Maybe<Array<Scalars['Int']>>,
  toTime?: Maybe<Scalars['Int']>,
  versionIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeUsersGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  emails?: Maybe<Array<Scalars['String']>>,
  ids?: Maybe<Array<Scalars['UUID']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  phones?: Maybe<Array<Scalars['Int']>>,
  roles?: Maybe<Array<Role>>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeVehiclesGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeVehiclesLogRoutesGetArgs {
  search?: Maybe<Scalars['String']>,
  timeEnd: Scalars['Timestamp'],
  timeStart: Scalars['Timestamp']
}


export interface RootQueryTypeVehiclesLogVehiclesGetArgs {
  routeIds?: Maybe<Array<Scalars['Int']>>,
  search?: Maybe<Scalars['String']>,
  timeEnd: Scalars['Timestamp'],
  timeStart: Scalars['Timestamp']
}


export interface RootQueryTypeVehiclesLogsGetArgs {
  routeIds?: Maybe<Array<Scalars['Int']>>,
  timeEnd: Scalars['Timestamp'],
  timeStart: Scalars['Timestamp'],
  vehicleIds?: Maybe<Array<Scalars['Int']>>
}

export interface Route {
   __typename?: 'Route',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  originRouteId?: Maybe<Scalars['String']>,
  selectedVersion?: Maybe<RouteVersion>,
  selectedVersionId?: Maybe<Scalars['Int']>,
  shortName?: Maybe<Scalars['String']>,
  type?: Maybe<RouteType>,
  versions?: Maybe<Array<RouteVersion>>,
}

export const enum RouteType {
  Bus = 'BUS',
  CableCar = 'CABLE_CAR',
  Ferry = 'FERRY',
  Funicular = 'FUNICULAR',
  Gondola = 'GONDOLA',
  Metro = 'METRO',
  Rail = 'RAIL',
  Tram = 'TRAM',
  Trolley = 'TROLLEY'
};

export interface RouteVersion {
   __typename?: 'RouteVersion',
  backTrips?: Maybe<Array<Trip>>,
  days?: Maybe<Array<Day>>,
  endDate?: Maybe<Scalars['Date']>,
  endTime?: Maybe<Scalars['Int']>,
  forwardTrips?: Maybe<Array<Trip>>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  headwaySecs?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['Int']>,
  route?: Maybe<Route>,
  routeId?: Maybe<Scalars['Int']>,
  shapes?: Maybe<Array<Shape>>,
  startDate?: Maybe<Scalars['Date']>,
  startTime?: Maybe<Scalars['Int']>,
}

export interface ScheduleCalendarDate {
   __typename?: 'ScheduleCalendarDate',
  date?: Maybe<Scalars['Date']>,
  unresolvedTripsCount?: Maybe<Scalars['Int']>,
}

export interface ScheduleRoute {
   __typename?: 'ScheduleRoute',
  dispatcher?: Maybe<User>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  resolvedTripsCount?: Maybe<Scalars['Int']>,
  shortName?: Maybe<Scalars['String']>,
  type?: Maybe<RouteType>,
  unresolvedTripsCount?: Maybe<Scalars['Int']>,
}

export interface SetVehicleInstruction {
   __typename?: 'SetVehicleInstruction',
  targetOrderId?: Maybe<Scalars['Int']>,
  targetTripExecutionId?: Maybe<Scalars['Int']>,
  vehicleId?: Maybe<Scalars['Int']>,
}

export interface SetVehicleInstructionInput {
  targetTripExecutionId: Scalars['Int'],
  vehicleId: Scalars['Int'],
}

export interface Shape {
   __typename?: 'Shape',
  id?: Maybe<Scalars['Int']>,
  path?: Maybe<Array<Array<Scalars['Float']>>>,
  pivotPoints?: Maybe<Array<Array<Scalars['Float']>>>,
}

export interface Stop {
   __typename?: 'Stop',
  coords?: Maybe<Array<Scalars['Float']>>,
  id?: Maybe<Scalars['Int']>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  name?: Maybe<Scalars['String']>,
  radius?: Maybe<Scalars['Float']>,
}

export interface StopTime {
   __typename?: 'StopTime',
  arrivalTime?: Maybe<Scalars['Int']>,
  departureTime?: Maybe<Scalars['Int']>,
  distTraveled?: Maybe<Scalars['Float']>,
  index?: Maybe<Scalars['Int']>,
  normalizedDist?: Maybe<Scalars['Float']>,
  shapeId?: Maybe<Scalars['Int']>,
  stop?: Maybe<Stop>,
  stopId?: Maybe<Scalars['Int']>,
}

export interface SwitchRouteInstruction {
   __typename?: 'SwitchRouteInstruction',
  targetOrderId?: Maybe<Scalars['Int']>,
  targetTripExecutionId?: Maybe<Scalars['Int']>,
}

export interface SwitchRouteInstructionInput {
  targetTripExecutionId: Scalars['Int'],
}


export interface Trip {
   __typename?: 'Trip',
  direction?: Maybe<TripDirection>,
  endTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  isPivot?: Maybe<Scalars['Boolean']>,
  parentTripId?: Maybe<Scalars['Int']>,
  routeVersion?: Maybe<RouteVersion>,
  routeVersionId?: Maybe<Scalars['Int']>,
  shapes?: Maybe<Array<Shape>>,
  startTime?: Maybe<Scalars['Int']>,
  stoptimes?: Maybe<Array<StopTime>>,
  stoptimesCompact?: Maybe<Array<Array<Scalars['Int']>>>,
  tripDistance?: Maybe<Scalars['Float']>,
}

export const enum TripDirection {
  Back = 'BACK',
  Forward = 'FORWARD'
};

export interface TripExecution {
   __typename?: 'TripExecution',
  dir?: Maybe<TripDirection>,
  endTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  orderId?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
}

export interface TripExecutionStop {
   __typename?: 'TripExecutionStop',
  accepted?: Maybe<Scalars['Boolean']>,
  comment?: Maybe<TripExecutionStopComment>,
  coords?: Maybe<Array<Scalars['Float']>>,
  correction?: Maybe<Scalars['Int']>,
  dist?: Maybe<Scalars['Float']>,
  factArrival?: Maybe<Scalars['Int']>,
  factDeparture?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  name?: Maybe<Scalars['String']>,
  normDist?: Maybe<Scalars['Float']>,
  planArrival?: Maybe<Scalars['Int']>,
  planDeparture?: Maybe<Scalars['Int']>,
}

export interface TripExecutionStopComment {
   __typename?: 'TripExecutionStopComment',
  action?: Maybe<TripExecutionStopCommentAction>,
  reason?: Maybe<TripExecutionStopCommentReason>,
  status?: Maybe<TripExecutionStopCommentStatus>,
}

export const enum TripExecutionStopCommentAction {
  ComeOff = 'COME_OFF',
  Late = 'LATE',
  ParkReturn = 'PARK_RETURN',
  Switch = 'SWITCH',
  Underproduction = 'UNDERPRODUCTION'
};

export interface TripExecutionStopCommentInp {
  action?: Maybe<TripExecutionStopCommentAction>,
  reason?: Maybe<TripExecutionStopCommentReason>,
  status?: Maybe<TripExecutionStopCommentStatus>,
}

export const enum TripExecutionStopCommentReason {
  AgencyFault = 'AGENCY_FAULT',
  BoDefect = 'BO_DEFECT',
  DriverFault = 'DRIVER_FAULT',
  NoAgencyFaoult = 'NO_AGENCY_FAOULT',
  Other = 'OTHER',
  PsDamage = 'PS_DAMAGE',
  Refuel = 'REFUEL',
  RoadFactor = 'ROAD_FACTOR',
  TechDefect = 'TECH_DEFECT',
  TechOperation = 'TECH_OPERATION'
};

export const enum TripExecutionStopCommentStatus {
  DoneWithViolations = 'DONE_WITH_VIOLATIONS',
  NotDone = 'NOT_DONE'
};

export interface UndoChangeResult {
   __typename?: 'UndoChangeResult',
  route?: Maybe<Route>,
  stop?: Maybe<Stop>,
  type?: Maybe<UndoChangeResultType>,
}

export const enum UndoChangeResultType {
  Route = 'ROUTE',
  Stop = 'STOP'
};


export interface User {
   __typename?: 'User',
  abilities?: Maybe<Array<UserAbility>>,
  agency?: Maybe<Agency>,
  agencyId?: Maybe<Scalars['UUID']>,
  city?: Maybe<City>,
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaper?: Maybe<Attachment>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
}

export const enum UserAbility {
  Agencies = 'AGENCIES',
  ControlCenter = 'CONTROL_CENTER',
  RealtimeMap = 'REALTIME_MAP',
  Reports = 'REPORTS',
  Schedule = 'SCHEDULE',
  Tracking = 'TRACKING',
  TransportNetwork = 'TRANSPORT_NETWORK',
  Users = 'USERS'
};

export interface UserInput {
  abilities?: Maybe<Array<UserAbility>>,
  agencyId?: Maybe<Scalars['UUID']>,
  cityId?: Maybe<Scalars['Int']>,
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaperId?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
}

export interface UserSelfUpdateInput {
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaperId?: Maybe<Scalars['UUID']>,
}

export interface UserSession {
   __typename?: 'UserSession',
  expireAt?: Maybe<Scalars['Timestamp']>,
  refreshToken?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
}

export interface UserUpdateInput {
  abilities?: Maybe<Array<UserAbility>>,
  agencyId?: Maybe<Scalars['UUID']>,
  cityId?: Maybe<Scalars['Int']>,
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaperId?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
}


export interface Vehicle {
   __typename?: 'Vehicle',
  agency?: Maybe<Agency>,
  boardNumber?: Maybe<Scalars['String']>,
  hasInfoPanel?: Maybe<Scalars['Boolean']>,
  hasSpeakers?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  imei?: Maybe<Scalars['String']>,
  oid?: Maybe<Scalars['String']>,
  registrationNumber?: Maybe<Scalars['String']>,
  size?: Maybe<VehicleSize>,
  type?: Maybe<VehicleType>,
  wheelchairBoarding?: Maybe<WheelchairBoarding>,
  workload?: Maybe<Array<Array<Scalars['Int']>>>,
}

export interface VehicleBrand {
   __typename?: 'VehicleBrand',
  id?: Maybe<Scalars['Int']>,
  models?: Maybe<Array<VehicleModel>>,
  name?: Maybe<Scalars['String']>,
  vehicles?: Maybe<Array<Vehicle>>,
}

export interface VehicleLog {
   __typename?: 'VehicleLog',
  normalizedShapeDist?: Maybe<Scalars['Float']>,
  originLl?: Maybe<Array<Scalars['Float']>>,
  shapeDist?: Maybe<Scalars['Float']>,
  shapeLl?: Maybe<Array<Scalars['Float']>>,
  speed?: Maybe<Scalars['Float']>,
  timestamp?: Maybe<Scalars['Timestamp']>,
}

export interface VehicleLogGroup {
   __typename?: 'VehicleLogGroup',
  agencyId?: Maybe<Scalars['String']>,
  agencyName?: Maybe<Scalars['String']>,
  driverFio?: Maybe<Scalars['String']>,
  driverId?: Maybe<Scalars['Int']>,
  executionId?: Maybe<Scalars['Int']>,
  logs?: Maybe<Array<VehicleLog>>,
  routeId?: Maybe<Scalars['Int']>,
  routeName?: Maybe<Scalars['String']>,
  routeShortName?: Maybe<Scalars['String']>,
  shape?: Maybe<Array<Array<Scalars['Float']>>>,
  stops?: Maybe<Array<TripExecutionStop>>,
  vehicleId?: Maybe<Scalars['Int']>,
  vehicleRegistrationNumber?: Maybe<Scalars['String']>,
  vehicleType?: Maybe<VehicleType>,
}

export interface VehicleModel {
   __typename?: 'VehicleModel',
  brand?: Maybe<VehicleBrand>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
}

export const enum VehicleSize {
  Big = 'BIG',
  Medium = 'MEDIUM',
  Small = 'SMALL'
};

export const enum VehicleType {
  Bus = 'BUS',
  CableCar = 'CABLE_CAR',
  Ferry = 'FERRY',
  Funicular = 'FUNICULAR',
  Gondola = 'GONDOLA',
  Metro = 'METRO',
  Rail = 'RAIL',
  Tram = 'TRAM',
  Trolley = 'TROLLEY'
};

export const enum WheelchairBoarding {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
  Undefined = 'UNDEFINED'
};

export type PublicDirectionFragment = (
  { __typename?: 'PublicDirection' }
  & Pick<PublicDirection, 'shape'>
  & { stops: Maybe<Array<(
    { __typename?: 'PublicStop' }
    & PublicStopFragment
  )>> }
);

export type PublicRouteFragment = (
  { __typename?: 'PublicRoute' }
  & Pick<PublicRoute, 'id' | 'name' | 'shape' | 'shortName'>
  & { back: Maybe<(
    { __typename?: 'PublicDirection' }
    & PublicDirectionFragment
  )>, forward: Maybe<(
    { __typename?: 'PublicDirection' }
    & PublicDirectionFragment
  )>, stops: Maybe<Array<(
    { __typename?: 'PublicStop' }
    & PublicStopFragment
  )>> }
);

export type PublicScheduleRouteFragment = (
  { __typename?: 'PublicScheduleRoute' }
  & Pick<PublicScheduleRoute, 'arrivalTime' | 'id' | 'name' | 'shortName'>
);

export type PublicShapeFragment = (
  { __typename?: 'PublicShape' }
  & Pick<PublicShape, 'executionsIds' | 'path' | 'routeShortName'>
  & { stops: Maybe<Array<(
    { __typename?: 'PublicStop' }
    & PublicStopFragment
  )>> }
);

export type PublicStopFragment = (
  { __typename?: 'PublicStop' }
  & Pick<PublicStop, 'arrivalTime' | 'coords' | 'id' | 'isTraveled' | 'name' | 'normalizedShapeDist' | 'shapeDist'>
);

export type PublicTripFragment = (
  { __typename?: 'PublicTrip' }
  & Pick<PublicTrip, 'id' | 'shape'>
  & { stops: Maybe<Array<(
    { __typename?: 'PublicStop' }
    & PublicStopFragment
  )>> }
);

export type PublicVehicleFragment = (
  { __typename?: 'PublicVehicle' }
  & Pick<PublicVehicle, 'bearing' | 'boardNumber' | 'coords' | 'distanceToLine' | 'id' | 'normalizedShapeDist' | 'registrationNumber' | 'routeId' | 'shapeDist' | 'timestamp' | 'tripDirection' | 'tripId' | 'type' | 'wheelchairBoarding'>
);

export type PublicRouteDetailsGetQueryVariables = {
  routeId: Scalars['Int']
};


export type PublicRouteDetailsGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicRouteDetailsGet: Maybe<(
    { __typename?: 'PublicRoute' }
    & PublicRouteFragment
  )> }
);

export type PublicRoutesGetQueryVariables = {
  search?: Maybe<Scalars['String']>
};


export type PublicRoutesGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicRoutesGet: Maybe<Array<(
    { __typename?: 'PublicRoute' }
    & PublicRouteFragment
  )>> }
);

export type PublicShapesGetQueryVariables = {
  routesIds?: Maybe<Array<Scalars['Int']>>,
  tripsExecutionsIds?: Maybe<Array<Scalars['Int']>>
};


export type PublicShapesGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicShapesGet: Maybe<Array<(
    { __typename?: 'PublicShape' }
    & PublicShapeFragment
  )>> }
);

export type PublicStopScheduleGetQueryVariables = {
  stopId: Scalars['Int']
};


export type PublicStopScheduleGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicStopScheduleGet: Maybe<Array<(
    { __typename?: 'PublicScheduleRoute' }
    & PublicScheduleRouteFragment
  )>> }
);

export type PublicStopsGetQueryVariables = {
  bbox?: Maybe<Array<Array<Scalars['Float']>>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
};


export type PublicStopsGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicStopsGet: Maybe<Array<(
    { __typename?: 'PublicStop' }
    & PublicStopFragment
  )>> }
);

export type PublicTripGetQueryVariables = {
  tripId: Scalars['Int']
};


export type PublicTripGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicTripGet: Maybe<(
    { __typename?: 'PublicTrip' }
    & PublicTripFragment
  )> }
);

export type PublicVehiclesGetQueryVariables = {};


export type PublicVehiclesGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicVehiclesGet: Maybe<Array<(
    { __typename?: 'PublicVehicle' }
    & PublicVehicleFragment
  )>> }
);

export const PublicStopFragmentDoc = gql`
    fragment PublicStop on PublicStop {
  arrivalTime
  coords
  id
  isTraveled
  name
  normalizedShapeDist
  shapeDist
}
    `;
export const PublicDirectionFragmentDoc = gql`
    fragment PublicDirection on PublicDirection {
  shape
  stops {
    ...PublicStop
  }
}
    ${PublicStopFragmentDoc}`;
export const PublicRouteFragmentDoc = gql`
    fragment PublicRoute on PublicRoute {
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
    ${PublicDirectionFragmentDoc}
${PublicStopFragmentDoc}`;
export const PublicScheduleRouteFragmentDoc = gql`
    fragment PublicScheduleRoute on PublicScheduleRoute {
  arrivalTime
  id
  name
  shortName
}
    `;
export const PublicShapeFragmentDoc = gql`
    fragment PublicShape on PublicShape {
  executionsIds
  path
  routeShortName
  stops {
    ...PublicStop
  }
}
    ${PublicStopFragmentDoc}`;
export const PublicTripFragmentDoc = gql`
    fragment PublicTrip on PublicTrip {
  id
  shape
  stops {
    ...PublicStop
  }
}
    ${PublicStopFragmentDoc}`;
export const PublicVehicleFragmentDoc = gql`
    fragment PublicVehicle on PublicVehicle {
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
    `;
export const PublicRouteDetailsGetDocument = gql`
    query publicRouteDetailsGet($routeId: Int!) {
  publicRouteDetailsGet(routeId: $routeId) {
    ...PublicRoute
  }
}
    ${PublicRouteFragmentDoc}`;
export type PublicRouteDetailsGetQueryResult = ApolloReactCommon.QueryResult<PublicRouteDetailsGetQuery, PublicRouteDetailsGetQueryVariables>;
export const PublicRoutesGetDocument = gql`
    query publicRoutesGet($search: String) {
  publicRoutesGet(search: $search) {
    ...PublicRoute
  }
}
    ${PublicRouteFragmentDoc}`;
export type PublicRoutesGetQueryResult = ApolloReactCommon.QueryResult<PublicRoutesGetQuery, PublicRoutesGetQueryVariables>;
export const PublicShapesGetDocument = gql`
    query publicShapesGet($routesIds: [Int!], $tripsExecutionsIds: [Int!]) {
  publicShapesGet(routesIds: $routesIds, tripsExecutionsIds: $tripsExecutionsIds) {
    ...PublicShape
  }
}
    ${PublicShapeFragmentDoc}`;
export type PublicShapesGetQueryResult = ApolloReactCommon.QueryResult<PublicShapesGetQuery, PublicShapesGetQueryVariables>;
export const PublicStopScheduleGetDocument = gql`
    query publicStopScheduleGet($stopId: Int!) {
  publicStopScheduleGet(stopId: $stopId) {
    ...PublicScheduleRoute
  }
}
    ${PublicScheduleRouteFragmentDoc}`;
export type PublicStopScheduleGetQueryResult = ApolloReactCommon.QueryResult<PublicStopScheduleGetQuery, PublicStopScheduleGetQueryVariables>;
export const PublicStopsGetDocument = gql`
    query publicStopsGet($bbox: [[Float!]!], $ids: [Int!], $limit: Int, $offset: Int, $search: String) {
  publicStopsGet(bbox: $bbox, ids: $ids, limit: $limit, offset: $offset, search: $search) {
    ...PublicStop
  }
}
    ${PublicStopFragmentDoc}`;
export type PublicStopsGetQueryResult = ApolloReactCommon.QueryResult<PublicStopsGetQuery, PublicStopsGetQueryVariables>;
export const PublicTripGetDocument = gql`
    query publicTripGet($tripId: Int!) {
  publicTripGet(tripId: $tripId) {
    ...PublicTrip
  }
}
    ${PublicTripFragmentDoc}`;
export type PublicTripGetQueryResult = ApolloReactCommon.QueryResult<PublicTripGetQuery, PublicTripGetQueryVariables>;
export const PublicVehiclesGetDocument = gql`
    query publicVehiclesGet {
  publicVehiclesGet {
    ...PublicVehicle
  }
}
    ${PublicVehicleFragmentDoc}`;
export type PublicVehiclesGetQueryResult = ApolloReactCommon.QueryResult<PublicVehiclesGetQuery, PublicVehiclesGetQueryVariables>;