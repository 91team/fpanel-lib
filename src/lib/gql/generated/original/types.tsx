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
  AgencyCreate = 'AGENCY_CREATE',
  AgencyDelete = 'AGENCY_DELETE',
  AgencyUpdate = 'AGENCY_UPDATE',
  DirectionCreate = 'DIRECTION_CREATE',
  DirectionDelete = 'DIRECTION_DELETE',
  DirectionUpdate = 'DIRECTION_UPDATE',
  DriverCreate = 'DRIVER_CREATE',
  DriverDelete = 'DRIVER_DELETE',
  DriverUpdate = 'DRIVER_UPDATE',
  GroupChatCreate = 'GROUP_CHAT_CREATE',
  InstructionOffRoute = 'INSTRUCTION_OFF_ROUTE',
  InstructionSwitchRoute = 'INSTRUCTION_SWITCH_ROUTE',
  OrderChange = 'ORDER_CHANGE',
  ReportCreate = 'REPORT_CREATE',
  RouteCreate = 'ROUTE_CREATE',
  RouteDelete = 'ROUTE_DELETE',
  RouteInterval = 'ROUTE_INTERVAL',
  RouteUpdate = 'ROUTE_UPDATE',
  ScheduleCreate = 'SCHEDULE_CREATE',
  ScheduleDelete = 'SCHEDULE_DELETE',
  ScheduleSynchronize = 'SCHEDULE_SYNCHRONIZE',
  ScheduleUpdate = 'SCHEDULE_UPDATE',
  StopCreate = 'STOP_CREATE',
  StopDelete = 'STOP_DELETE',
  StopUpdate = 'STOP_UPDATE',
  UserCreate = 'USER_CREATE',
  UserDelete = 'USER_DELETE',
  UserUpdate = 'USER_UPDATE',
  VehicleCreate = 'VEHICLE_CREATE',
  VehicleDelete = 'VEHICLE_DELETE',
  VehicleUpdate = 'VEHICLE_UPDATE'
};

export interface Agency {
   __typename?: 'Agency',
  address?: Maybe<Scalars['String']>,
  adminsCount?: Maybe<Scalars['Int']>,
  city?: Maybe<City>,
  deactivationTimestamp?: Maybe<Scalars['Timestamp']>,
  dispatchersCount?: Maybe<Scalars['Int']>,
  driversCount?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  expireDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['UUID']>,
  isActive?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  routesCount?: Maybe<Scalars['Int']>,
  vehiclesCount?: Maybe<Scalars['Int']>,
}

export const enum ArchiveObjectType {
  Agency = 'AGENCY',
  Driver = 'DRIVER',
  Route = 'ROUTE',
  RouteDirection = 'ROUTE_DIRECTION',
  Schedule = 'SCHEDULE',
  Stop = 'STOP',
  User = 'USER',
  Vehicle = 'VEHICLE'
};

export interface ArchiveRecord {
   __typename?: 'ArchiveRecord',
  id?: Maybe<Scalars['String']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  linkedObjectName?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  objectType?: Maybe<ArchiveObjectType>,
  userLogin?: Maybe<Scalars['String']>,
}

export interface ArchiveRoute {
   __typename?: 'ArchiveRoute',
  agency?: Maybe<Agency>,
  allowedDeviation?: Maybe<Scalars['Int']>,
  city?: Maybe<City>,
  directions?: Maybe<Array<RouteDirection>>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  nameEn?: Maybe<Scalars['String']>,
  parkingTime?: Maybe<Scalars['Int']>,
  schedules?: Maybe<Array<Schedule>>,
  shortName?: Maybe<Scalars['String']>,
  transportClass?: Maybe<Array<VehicleSize>>,
  transportType?: Maybe<VehicleType>,
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
  CompleteMovement = 'COMPLETE_MOVEMENT',
  CompleteTrips = 'COMPLETE_TRIPS',
  DailyTrips = 'DAILY_TRIPS',
  Dispatching = 'DISPATCHING',
  MileageByRoutes = 'MILEAGE_BY_ROUTES',
  OrderDistTimes = 'ORDER_DIST_TIMES',
  RoudtripsWorkload = 'ROUDTRIPS_WORKLOAD',
  RouteWorkEnd = 'ROUTE_WORK_END',
  RouteWorkload = 'ROUTE_WORKLOAD',
  TripsByDateWorkload = 'TRIPS_BY_DATE_WORKLOAD',
  VehiclesData = 'VEHICLES_DATA'
};

export interface Avatar {
   __typename?: 'Avatar',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Camera {
   __typename?: 'Camera',
  address?: Maybe<Scalars['String']>,
  coords?: Maybe<Array<Scalars['Float']>>,
  expire?: Maybe<Scalars['Timestamp']>,
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

export interface Contract {
   __typename?: 'Contract',
  agency?: Maybe<Agency>,
  city?: Maybe<City>,
  endDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  routes?: Maybe<Array<Route>>,
  routesCount?: Maybe<Scalars['Int']>,
  startDate?: Maybe<Scalars['Date']>,
}

export const enum CorrectionType {
  Order = 'ORDER',
  Route = 'ROUTE',
  Stop = 'STOP',
  Trip = 'TRIP'
};


export const enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
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
  allowedVehiclesTypes?: Maybe<Array<VehicleType>>,
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
  allowedVehiclesTypes?: Maybe<Array<VehicleType>>,
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

export interface File {
   __typename?: 'File',
  content?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface Instruction {
   __typename?: 'Instruction',
  id?: Maybe<Scalars['Int']>,
  instruction?: Maybe<InstructionBody>,
  tripExecutionId?: Maybe<Scalars['Int']>,
}

export interface InstructionBody {
   __typename?: 'InstructionBody',
  offRoute?: Maybe<OffRouteInstruction>,
  offRouteAndSet?: Maybe<OffRouteAndSetInstruction>,
  setVehicle?: Maybe<SetVehicleInstruction>,
  switchRoute?: Maybe<SwitchRouteInstruction>,
  type?: Maybe<InstructionType>,
}

export interface InstructionInput {
  offRoute?: Maybe<OffRouteInstructionInput>,
  offRouteAndSet?: Maybe<OffRouteAndSetInstructionInput>,
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
  OffRouteAndSet = 'OFF_ROUTE_AND_SET',
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

export const enum NetworkOrderChangeType {
  OrderCreate = 'ORDER_CREATE',
  OrderUpdateName = 'ORDER_UPDATE_NAME',
  TripCreate = 'TRIP_CREATE',
  TripDelete = 'TRIP_DELETE',
  TripUpdateStoptimes = 'TRIP_UPDATE_STOPTIMES',
  TripUpdateWaitingTime = 'TRIP_UPDATE_WAITING_TIME',
  TripUpdateWaitingType = 'TRIP_UPDATE_WAITING_TYPE'
};

export const enum NetworkRouteChangeType {
  RouteCopy = 'ROUTE_COPY',
  RouteCopyToArchive = 'ROUTE_COPY_TO_ARCHIVE',
  RouteCreate = 'ROUTE_CREATE',
  RouteDelete = 'ROUTE_DELETE',
  RouteDirectionDelete = 'ROUTE_DIRECTION_DELETE',
  RouteScheduleDelete = 'ROUTE_SCHEDULE_DELETE',
  RouteScheduleSetIsActive = 'ROUTE_SCHEDULE_SET_IS_ACTIVE',
  RouteUpdateAgency = 'ROUTE_UPDATE_AGENCY',
  RouteUpdateAllowedDeviation = 'ROUTE_UPDATE_ALLOWED_DEVIATION',
  RouteUpdateCity = 'ROUTE_UPDATE_CITY',
  RouteUpdateLongName = 'ROUTE_UPDATE_LONG_NAME',
  RouteUpdateParkingTime = 'ROUTE_UPDATE_PARKING_TIME',
  RouteUpdateShortName = 'ROUTE_UPDATE_SHORT_NAME',
  RouteUpdateTransportClass = 'ROUTE_UPDATE_TRANSPORT_CLASS',
  RouteUpdateTransportType = 'ROUTE_UPDATE_TRANSPORT_TYPE'
};

export const enum NetworkRouteDirectionChangeType {
  RouteDirectionCopy = 'ROUTE_DIRECTION_COPY',
  RouteDirectionCopyToArchive = 'ROUTE_DIRECTION_COPY_TO_ARCHIVE',
  RouteDirectionCreate = 'ROUTE_DIRECTION_CREATE',
  RouteDirectionCreateStoptime = 'ROUTE_DIRECTION_CREATE_STOPTIME',
  RouteDirectionDeleteStoptime = 'ROUTE_DIRECTION_DELETE_STOPTIME',
  RouteDirectionUpdate = 'ROUTE_DIRECTION_UPDATE',
  RouteDirectionUpdateEndDate = 'ROUTE_DIRECTION_UPDATE_END_DATE',
  RouteDirectionUpdateIsLocked = 'ROUTE_DIRECTION_UPDATE_IS_LOCKED',
  RouteDirectionUpdateName = 'ROUTE_DIRECTION_UPDATE_NAME',
  RouteDirectionUpdatePlanTime = 'ROUTE_DIRECTION_UPDATE_PLAN_TIME',
  RouteDirectionUpdateStartDate = 'ROUTE_DIRECTION_UPDATE_START_DATE',
  RouteDirectionUpdateStoptimeShapeId = 'ROUTE_DIRECTION_UPDATE_STOPTIME_SHAPE_ID',
  RouteDirectionUpdateStoptimeShapePath = 'ROUTE_DIRECTION_UPDATE_STOPTIME_SHAPE_PATH',
  RouteDirectionUpdateStoptimeShapePivotAndPath = 'ROUTE_DIRECTION_UPDATE_STOPTIME_SHAPE_PIVOT_AND_PATH',
  RouteDirectionUpdateStoptimeShapePivotPoints = 'ROUTE_DIRECTION_UPDATE_STOPTIME_SHAPE_PIVOT_POINTS',
  RouteDirectionUpdateStoptimeStopId = 'ROUTE_DIRECTION_UPDATE_STOPTIME_STOP_ID',
  RouteDirectionUpdateStoptimeTravelTime = 'ROUTE_DIRECTION_UPDATE_STOPTIME_TRAVEL_TIME'
};

export const enum NetworkScheduleChangeType {
  OrderDelete = 'ORDER_DELETE',
  OrderGenerate = 'ORDER_GENERATE',
  ScheduleCopy = 'SCHEDULE_COPY',
  ScheduleCopyToArchive = 'SCHEDULE_COPY_TO_ARCHIVE',
  ScheduleCreate = 'SCHEDULE_CREATE',
  ScheduleGenerateTrips = 'SCHEDULE_GENERATE_TRIPS',
  ScheduleUpdateActivityDays = 'SCHEDULE_UPDATE_ACTIVITY_DAYS',
  ScheduleUpdateBackDirection = 'SCHEDULE_UPDATE_BACK_DIRECTION',
  ScheduleUpdateBackParkingTime = 'SCHEDULE_UPDATE_BACK_PARKING_TIME',
  ScheduleUpdateEndDate = 'SCHEDULE_UPDATE_END_DATE',
  ScheduleUpdateEndTime = 'SCHEDULE_UPDATE_END_TIME',
  ScheduleUpdateExceptHolidays = 'SCHEDULE_UPDATE_EXCEPT_HOLIDAYS',
  ScheduleUpdateExceptionDates = 'SCHEDULE_UPDATE_EXCEPTION_DATES',
  ScheduleUpdateForwardDirection = 'SCHEDULE_UPDATE_FORWARD_DIRECTION',
  ScheduleUpdateInterval = 'SCHEDULE_UPDATE_INTERVAL',
  ScheduleUpdateIntervalType = 'SCHEDULE_UPDATE_INTERVAL_TYPE',
  ScheduleUpdateName = 'SCHEDULE_UPDATE_NAME',
  ScheduleUpdateOrdersAmount = 'SCHEDULE_UPDATE_ORDERS_AMOUNT',
  ScheduleUpdateParkingTime = 'SCHEDULE_UPDATE_PARKING_TIME',
  ScheduleUpdateRoundTripsPerOrderAmount = 'SCHEDULE_UPDATE_ROUND_TRIPS_PER_ORDER_AMOUNT',
  ScheduleUpdateStartDate = 'SCHEDULE_UPDATE_START_DATE',
  ScheduleUpdateStartTime = 'SCHEDULE_UPDATE_START_TIME',
  ScheduleUpdateTripsInterals = 'SCHEDULE_UPDATE_TRIPS_INTERALS',
  ScheduleUpdateType = 'SCHEDULE_UPDATE_TYPE'
};

export const enum NetworkStopChangeType {
  StopCopy = 'STOP_COPY',
  StopCreate = 'STOP_CREATE',
  StopDelete = 'STOP_DELETE',
  StopDeleteMultiple = 'STOP_DELETE_MULTIPLE',
  StopSetCityIdMultiple = 'STOP_SET_CITY_ID_MULTIPLE',
  StopUpdateCity = 'STOP_UPDATE_CITY',
  StopUpdateCoords = 'STOP_UPDATE_COORDS',
  StopUpdateDate = 'STOP_UPDATE_DATE',
  StopUpdateIsService = 'STOP_UPDATE_IS_SERVICE',
  StopUpdateLocationType = 'STOP_UPDATE_LOCATION_TYPE',
  StopUpdateName = 'STOP_UPDATE_NAME',
  StopUpdateReverseDirectionStop = 'STOP_UPDATE_REVERSE_DIRECTION_STOP',
  StopUpdateZone = 'STOP_UPDATE_ZONE'
};

export interface NetworkVersion {
   __typename?: 'NetworkVersion',
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isActive?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
}

export interface Objects {
   __typename?: 'Objects',
  agency?: Maybe<Agency>,
  driver?: Maybe<Driver>,
  id?: Maybe<Scalars['String']>,
  route?: Maybe<ArchiveRoute>,
  routeDirection?: Maybe<RouteDirection>,
  schedule?: Maybe<Schedule>,
  stop?: Maybe<Stop>,
  user?: Maybe<User>,
  vehicle?: Maybe<Vehicle>,
}

export const enum OffRouteAction {
  GotoAgency = 'GOTO_AGENCY',
  Wait = 'WAIT'
};

export interface OffRouteAndSetInstruction {
   __typename?: 'OffRouteAndSetInstruction',
  action?: Maybe<OffRouteAction>,
  fromStopId?: Maybe<Scalars['Int']>,
  newOrderId?: Maybe<Scalars['Int']>,
  newStartTripId?: Maybe<Scalars['Int']>,
  newVehicleId?: Maybe<Scalars['Int']>,
  reason?: Maybe<OffRouteReason>,
  targetOrderId?: Maybe<Scalars['Int']>,
  targetTripId?: Maybe<Scalars['Int']>,
}

export interface OffRouteAndSetInstructionInput {
  action?: Maybe<OffRouteAction>,
  fromStopId: Scalars['Int'],
  newVehicleId?: Maybe<Scalars['Int']>,
  reason?: Maybe<OffRouteReason>,
  targetTripId: Scalars['Int'],
}

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
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  schedule?: Maybe<Schedule>,
  scheduleId?: Maybe<Scalars['Int']>,
  trips?: Maybe<Array<Trip>>,
}

export const enum OrderDirection {
  Asc = 'ASC',
  AscNullsFirst = 'ASC_NULLS_FIRST',
  AscNullsLast = 'ASC_NULLS_LAST',
  Desc = 'DESC',
  DescNullsFirst = 'DESC_NULLS_FIRST',
  DescNullsLast = 'DESC_NULLS_LAST'
};

export interface PublicAgency {
   __typename?: 'PublicAgency',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface PublicDirection {
   __typename?: 'PublicDirection',
  shape?: Maybe<Array<Array<Scalars['Float']>>>,
  stops?: Maybe<Array<PublicStop>>,
}

export interface PublicRoute {
   __typename?: 'PublicRoute',
  agencyId?: Maybe<Scalars['String']>,
  agencyName?: Maybe<Scalars['String']>,
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

export interface PublicRouteStopArrivals {
   __typename?: 'PublicRouteStopArrivals',
  expectedArrival?: Maybe<Scalars['Timestamp']>,
  planArrival?: Maybe<Scalars['Timestamp']>,
  vehicleId?: Maybe<Scalars['Int']>,
  vehicleRegistrationNumber?: Maybe<Scalars['String']>,
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
  nameEn?: Maybe<Scalars['String']>,
  /** only for publicTrip */
  normalizedShapeDist?: Maybe<Scalars['Float']>,
  /** only for publicTrip */
  shapeDist?: Maybe<Scalars['Float']>,
  wheelchairBoarding?: Maybe<Scalars['Boolean']>,
}

export interface PublicStopArrivalForecast {
   __typename?: 'PublicStopArrivalForecast',
  arrivals?: Maybe<Array<PublicRouteStopArrivals>>,
  routeId?: Maybe<Scalars['Int']>,
  routeShortName?: Maybe<Scalars['String']>,
}

export interface PublicTrip {
   __typename?: 'PublicTrip',
  id?: Maybe<Scalars['Int']>,
  shape?: Maybe<Array<Array<Scalars['Float']>>>,
  stops?: Maybe<Array<PublicStop>>,
}

export interface PublicVehicle {
   __typename?: 'PublicVehicle',
  agencyId?: Maybe<Scalars['String']>,
  agencyName?: Maybe<Scalars['String']>,
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
  acceptedTripsAmount?: Maybe<Scalars['Int']>,
  activeTrip?: Maybe<RealtimeTrip>,
  activeTripId?: Maybe<Scalars['Int']>,
  currentTripNumber?: Maybe<Scalars['Int']>,
  driver?: Maybe<Driver>,
  endTime?: Maybe<Scalars['Int']>,
  finishedTripsAmount?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  instructions?: Maybe<Array<Instruction>>,
  /** deprecated */
  lastStopDeviation?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  /** deprecated */
  nextStopDeviation?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  trips?: Maybe<Array<RealtimeTrip>>,
  tripsAmount?: Maybe<Scalars['Int']>,
  vehicle?: Maybe<Vehicle>,
}

export interface RealtimeOrderDirection {
   __typename?: 'RealtimeOrderDirection',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
}

export interface RealtimePath {
   __typename?: 'RealtimePath',
  coords?: Maybe<Array<Array<Scalars['Float']>>>,
  distToShape?: Maybe<Array<Scalars['Float']>>,
  /** only exists for realtime_trips_pathes_get */
  execId?: Maybe<Scalars['Int']>,
  /** only exists for realtime_trips_pathes_get */
  normalizedShapeDistances?: Maybe<Array<Scalars['Float']>>,
  /** only exists for realtime_trips_pathes_get */
  shapeDistances?: Maybe<Array<Scalars['Float']>>,
  speed?: Maybe<Array<Scalars['Float']>>,
  timestamps?: Maybe<Array<Scalars['Timestamp']>>,
}

export interface RealtimeRecieverStat {
   __typename?: 'RealtimeRecieverStat',
  agencyName?: Maybe<Scalars['String']>,
  imei?: Maybe<Scalars['String']>,
  recieverType?: Maybe<RecieverType>,
  registrationNumber?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['Timestamp']>,
  vehicleId?: Maybe<Scalars['Int']>,
}

export interface RealtimeRoute {
   __typename?: 'RealtimeRoute',
  acceptedTripsAmount?: Maybe<Scalars['Int']>,
  activeOrdersAmount?: Maybe<Scalars['Int']>,
  activeVehiclesAmount?: Maybe<Scalars['Int']>,
  agency?: Maybe<Agency>,
  city?: Maybe<City>,
  completedTripsAmount?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  /** deprecated */
  intervalSeconds?: Maybe<Scalars['Int']>,
  /** deprecated */
  isInterval?: Maybe<Scalars['Boolean']>,
  maxDeviation?: Maybe<Scalars['Int']>,
  missedLastStopAmount?: Maybe<Scalars['Int']>,
  missedNextStopAmount?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  orders?: Maybe<Array<RealtimeOrder>>,
  /** deprecated */
  ordersAmount?: Maybe<Scalars['Int']>,
  passedTripsAmount?: Maybe<Scalars['Int']>,
  shortName?: Maybe<Scalars['String']>,
  totalOrdersAmount?: Maybe<Scalars['Int']>,
  totalTripsAmount?: Maybe<Scalars['Int']>,
  totalVehiclesAmount?: Maybe<Scalars['Int']>,
  /** deprecated */
  vehiclesAmount?: Maybe<Scalars['Int']>,
}

export interface RealtimeRoutesStats {
   __typename?: 'RealtimeRoutesStats',
  activeVehicles?: Maybe<Scalars['Int']>,
  offlineVehicles?: Maybe<Scalars['Int']>,
  ordersAmount?: Maybe<Scalars['Int']>,
  tripsAmount?: Maybe<Scalars['Int']>,
  vehiclesAmount?: Maybe<Scalars['Int']>,
  waitingVehicles?: Maybe<Scalars['Int']>,
}

export interface RealtimeShape {
   __typename?: 'RealtimeShape',
  executionsIds?: Maybe<Array<Scalars['Int']>>,
  path: Array<Array<Scalars['Float']>>,
  routeShortName?: Maybe<Scalars['String']>,
  stops?: Maybe<Array<RealtimeTripStop>>,
}

export interface RealtimeStopInterval {
   __typename?: 'RealtimeStopInterval',
  accepted?: Maybe<Scalars['Boolean']>,
  arrivalDeviation?: Maybe<Scalars['Int']>,
  comment?: Maybe<RealtimeTripComment>,
  correction?: Maybe<Scalars['Int']>,
  departureDeviation?: Maybe<Scalars['Int']>,
  factArrival?: Maybe<Scalars['Int']>,
  factDeparture?: Maybe<Scalars['Int']>,
  factInterval?: Maybe<Scalars['Int']>,
  intervalDeviation?: Maybe<Scalars['Int']>,
  orderName?: Maybe<Scalars['String']>,
  parkingTime?: Maybe<Scalars['Int']>,
  planArrival?: Maybe<Scalars['Int']>,
  planDeparture?: Maybe<Scalars['Int']>,
  planInterval?: Maybe<Scalars['Int']>,
  registrationNumber?: Maybe<Scalars['String']>,
  routeShortName?: Maybe<Scalars['String']>,
  stopIndex?: Maybe<Scalars['Int']>,
  tripNumber?: Maybe<Scalars['Int']>,
}

export interface RealtimeTrip {
   __typename?: 'RealtimeTrip',
  acceptScore?: Maybe<Scalars['Float']>,
  directionType?: Maybe<TripDirection>,
  id?: Maybe<Scalars['Int']>,
  orderId?: Maybe<Scalars['Int']>,
  path?: Maybe<RealtimePath>,
  stops?: Maybe<Array<RealtimeTripStop>>,
}

export interface RealtimeTripComment {
   __typename?: 'RealtimeTripComment',
  action?: Maybe<RealtimeTripCommentAction>,
  reason?: Maybe<RealtimeTripCommentReason>,
  status?: Maybe<RealtimeTripCommentStatus>,
}

export const enum RealtimeTripCommentAction {
  ComeOff = 'COME_OFF',
  Late = 'LATE',
  ParkReturn = 'PARK_RETURN',
  Switch = 'SWITCH',
  Underproduction = 'UNDERPRODUCTION',
  Wait = 'WAIT'
};

export interface RealtimeTripCommentInput {
  action?: Maybe<RealtimeTripCommentAction>,
  reason: RealtimeTripCommentReason,
  status: RealtimeTripCommentStatus,
}

export const enum RealtimeTripCommentReason {
  AgencyFault = 'AGENCY_FAULT',
  BoDefect = 'BO_DEFECT',
  DriverFault = 'DRIVER_FAULT',
  Expluatation = 'EXPLUATATION',
  MissSchedule = 'MISS_SCHEDULE',
  MissShape = 'MISS_SHAPE',
  NoAgencyFaoult = 'NO_AGENCY_FAOULT',
  Other = 'OTHER',
  PsDamage = 'PS_DAMAGE',
  Refuel = 'REFUEL',
  RoadFactor = 'ROAD_FACTOR',
  TechDefect = 'TECH_DEFECT',
  TechOperation = 'TECH_OPERATION'
};

export const enum RealtimeTripCommentStatus {
  DoneWithViolations = 'DONE_WITH_VIOLATIONS',
  NotDone = 'NOT_DONE'
};

export interface RealtimeTripStop {
   __typename?: 'RealtimeTripStop',
  accepted?: Maybe<Scalars['Boolean']>,
  arrivalDeviation?: Maybe<Scalars['Int']>,
  comment?: Maybe<RealtimeTripComment>,
  coords?: Maybe<Array<Scalars['Float']>>,
  correction?: Maybe<Scalars['Int']>,
  departureDeviation?: Maybe<Scalars['Int']>,
  directionType?: Maybe<TripDirection>,
  dist?: Maybe<Scalars['Float']>,
  factArrival?: Maybe<Scalars['Int']>,
  factDeparture?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  normDist?: Maybe<Scalars['Float']>,
  parkingTime?: Maybe<Scalars['Int']>,
  planArrival?: Maybe<Scalars['Int']>,
  planDeparture?: Maybe<Scalars['Int']>,
}

export interface RealtimeTripStopsUpdateObject {
  accepted?: Maybe<Scalars['Boolean']>,
  comment?: Maybe<RealtimeTripCommentInput>,
  /** index of stop to be updated */
  index: Scalars['Int'],
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

export const enum RecieverType {
  Ask = 'ASK',
  Egts = 'EGTS',
  Wialon = 'WIALON'
};

export interface Report {
   __typename?: 'Report',
  content?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  reportType?: Maybe<AvaliableReports>,
}

export const enum ReportParams {
  AgenciesIds = 'AGENCIES_IDS',
  CitiesIds = 'CITIES_IDS',
  Date = 'DATE',
  FromDate = 'FROM_DATE',
  RoutesIds = 'ROUTES_IDS',
  ToDate = 'TO_DATE'
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
  archiveRecordDelete?: Maybe<Scalars['String']>,
  archiveRecordRestore?: Maybe<Scalars['String']>,
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
  cancelInstruction?: Maybe<Scalars['String']>,
  cityCreate?: Maybe<City>,
  cityDelete?: Maybe<City>,
  contractAddRoute?: Maybe<Contract>,
  contractCreate?: Maybe<Contract>,
  contractDelete?: Maybe<Contract>,
  contractDeleteRoute?: Maybe<Contract>,
  contractUpdate?: Maybe<Contract>,
  createOrderChange?: Maybe<Order>,
  createRouteChange?: Maybe<Route>,
  createRouteDirectionChange?: Maybe<RouteDirection>,
  createScheduleChange?: Maybe<Schedule>,
  createStopChange?: Maybe<Stop>,
  driverAuthCodeReset?: Maybe<Scalars['String']>,
  driverCreate?: Maybe<Driver>,
  driverDelete?: Maybe<Driver>,
  driverSendSensorsData?: Maybe<Scalars['String']>,
  driverSessionCreate?: Maybe<DriverSession>,
  driverSessionDelete?: Maybe<Scalars['String']>,
  driverSessionRefresh?: Maybe<DriverSession>,
  driverUpdate?: Maybe<Driver>,
  holidayCreate?: Maybe<Scalars['Date']>,
  holidayDelete?: Maybe<Scalars['Date']>,
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
  realtimeCreateTrip?: Maybe<Array<RealtimeOrder>>,
  realtimeSetCorrection?: Maybe<RealtimeOrder>,
  realtimeUpdateTripsIntervals?: Maybe<Array<RealtimeOrder>>,
  routeDeleteAgency?: Maybe<Scalars['String']>,
  routeSetAgency?: Maybe<Scalars['String']>,
  schedulerSetDriver?: Maybe<Scalars['String']>,
  schedulerSetVehicle?: Maybe<Scalars['String']>,
  schedulerUploadSchedule?: Maybe<Scalars['String']>,
  sendInstruction?: Maybe<Instruction>,
  sessionCreate?: Maybe<UserSession>,
  sessionDelete?: Maybe<Scalars['String']>,
  sessionRefresh?: Maybe<UserSession>,
  shapeCreate?: Maybe<Shape>,
  shapeDelete?: Maybe<Shape>,
  shapeUpdate?: Maybe<Shape>,
  syncRoutesSchedules?: Maybe<Scalars['String']>,
  /** deprecated */
  syncSchedules?: Maybe<Scalars['String']>,
  undoChange?: Maybe<UndoChangeResult>,
  undoOrderChange?: Maybe<Order>,
  undoRouteChange?: Maybe<Route>,
  undoRouteDirectionChange?: Maybe<RouteDirection>,
  undoScheduleChange?: Maybe<Schedule>,
  undoStopChange?: Maybe<Stop>,
  updateRealtimeTrip?: Maybe<RealtimeTrip>,
  /** deprecated */
  updateRealtimeTripStop?: Maybe<RealtimeTrip>,
  updateRealtimeTripStops?: Maybe<RealtimeTrip>,
  userAddAgency?: Maybe<User>,
  userAddCity?: Maybe<User>,
  userAddRoute?: Maybe<User>,
  userCreate?: Maybe<User>,
  /** DEV */
  userDelete?: Maybe<User>,
  userRemoveAgency?: Maybe<User>,
  userRemoveCity?: Maybe<User>,
  userRemoveRoute?: Maybe<User>,
  userSelfUpdate?: Maybe<User>,
  userUpdate?: Maybe<User>,
  vehicleCreate?: Maybe<Vehicle>,
  vehicleDelete?: Maybe<Vehicle>,
  vehicleUpdate?: Maybe<Vehicle>,
  vehiclesXlsOidUpdate?: Maybe<Scalars['String']>,
}


export interface RootMutationTypeAgencyCreateArgs {
  address?: Maybe<Scalars['String']>,
  cityId?: Maybe<Scalars['Int']>,
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
  cityId?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  expireDate?: Maybe<Scalars['Date']>,
  id: Scalars['UUID'],
  isActive?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeArchiveRecordDeleteArgs {
  id: Scalars['String']
}


export interface RootMutationTypeArchiveRecordRestoreArgs {
  force?: Maybe<Scalars['Boolean']>,
  id: Scalars['String']
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


export interface RootMutationTypeCancelInstructionArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeCityCreateArgs {
  name: Scalars['String']
}


export interface RootMutationTypeCityDeleteArgs {
  cityId: Scalars['Int']
}


export interface RootMutationTypeContractAddRouteArgs {
  contractId: Scalars['Int'],
  routeId: Scalars['Int']
}


export interface RootMutationTypeContractCreateArgs {
  agencyId?: Maybe<Scalars['Int']>,
  cityId?: Maybe<Scalars['Int']>,
  endDate?: Maybe<Scalars['Date']>,
  name?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>
}


export interface RootMutationTypeContractDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeContractDeleteRouteArgs {
  contractId: Scalars['Int'],
  routeId: Scalars['Int']
}


export interface RootMutationTypeContractUpdateArgs {
  agencyId?: Maybe<Scalars['Int']>,
  cityId?: Maybe<Scalars['Int']>,
  endDate?: Maybe<Scalars['Date']>,
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>
}


export interface RootMutationTypeCreateOrderChangeArgs {
  changeType: NetworkOrderChangeType,
  directionId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  ids?: Maybe<Array<Scalars['Int']>>,
  index?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  scheduleId?: Maybe<Scalars['Int']>,
  time?: Maybe<Scalars['Int']>,
  type?: Maybe<TripWaitingType>
}


export interface RootMutationTypeCreateRouteChangeArgs {
  agencyId?: Maybe<Scalars['UUID']>,
  allowedDeviation?: Maybe<Scalars['Int']>,
  changeType: NetworkRouteChangeType,
  cityId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  parkingTime?: Maybe<Scalars['Int']>,
  scheduleIsActive?: Maybe<Scalars['Boolean']>,
  shortName?: Maybe<Scalars['String']>,
  transportClass?: Maybe<Array<VehicleSize>>,
  transportType?: Maybe<VehicleType>
}


export interface RootMutationTypeCreateRouteDirectionChangeArgs {
  changeType: NetworkRouteDirectionChangeType,
  endDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['Int']>,
  index?: Maybe<Scalars['Int']>,
  isLocked?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Array<Array<Scalars['Float']>>>,
  pivotPoints?: Maybe<Array<Array<Scalars['Float']>>>,
  planDist?: Maybe<Scalars['Float']>,
  planTime?: Maybe<Scalars['Int']>,
  routeId?: Maybe<Scalars['Int']>,
  shapeId?: Maybe<Scalars['Int']>,
  shapes?: Maybe<Array<RouteDirectionShape>>,
  startDate?: Maybe<Scalars['Date']>,
  stopId?: Maybe<Scalars['Int']>,
  stoptimes?: Maybe<Array<Array<Scalars['Int']>>>,
  travelTime?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeCreateScheduleChangeArgs {
  activityDays?: Maybe<Array<DayOfWeek>>,
  backDirectionId?: Maybe<Scalars['Int']>,
  backParkingTime?: Maybe<Scalars['Int']>,
  changeType: NetworkScheduleChangeType,
  directionId?: Maybe<Scalars['Int']>,
  endDate?: Maybe<Scalars['Date']>,
  endTime?: Maybe<Scalars['Int']>,
  exceptHolidays?: Maybe<Scalars['Boolean']>,
  exceptionDates?: Maybe<Array<Scalars['Date']>>,
  forwardDirectionId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  interval?: Maybe<Scalars['Int']>,
  intervalType?: Maybe<ScheduleIntervalType>,
  name?: Maybe<Scalars['String']>,
  ordersAmount?: Maybe<Scalars['Int']>,
  parkingTime?: Maybe<Scalars['Int']>,
  roundTripsPerOrderAmount?: Maybe<Scalars['Int']>,
  routeId?: Maybe<Scalars['Int']>,
  startDate?: Maybe<Scalars['Date']>,
  startTime?: Maybe<Scalars['Int']>,
  totalRoundTripsAmount?: Maybe<Scalars['Int']>,
  type?: Maybe<ScheduleType>,
  updateTripsIntervalsAfterTripId?: Maybe<Scalars['Int']>,
  updateTripsIntervalsChangeValue?: Maybe<Scalars['Int']>,
  updateTripsIntervalsForWholeSchedule?: Maybe<Scalars['Boolean']>
}


export interface RootMutationTypeCreateStopChangeArgs {
  changeType: NetworkStopChangeType,
  cityId?: Maybe<Scalars['Int']>,
  coords?: Maybe<Array<Scalars['Float']>>,
  date?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['Int']>,
  ids?: Maybe<Array<Scalars['Int']>>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  name?: Maybe<Scalars['String']>,
  polygon?: Maybe<Array<Array<Scalars['Float']>>>,
  radius?: Maybe<Scalars['Float']>,
  reverseDirectionStopId?: Maybe<Scalars['Int']>,
  zoneType?: Maybe<StopZoneType>
}


export interface RootMutationTypeDriverAuthCodeResetArgs {
  driverId: Scalars['Int']
}


export interface RootMutationTypeDriverCreateArgs {
  agencyId?: Maybe<Scalars['UUID']>,
  allowedVehiclesTypes?: Maybe<Array<VehicleType>>,
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
  allowedVehiclesTypes?: Maybe<Array<VehicleType>>,
  avatarId?: Maybe<Scalars['UUID']>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>
}


export interface RootMutationTypeHolidayCreateArgs {
  date: Scalars['Date']
}


export interface RootMutationTypeHolidayDeleteArgs {
  date: Scalars['Date']
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


export interface RootMutationTypeRealtimeCreateTripArgs {
  date: Scalars['Date'],
  directionId: Scalars['Int'],
  orderId: Scalars['Int'],
  roundtrip: Scalars['Boolean'],
  startTime: Scalars['Int'],
  waitingTime?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeRealtimeSetCorrectionArgs {
  correction: Scalars['Int'],
  stopIndex: Scalars['Int'],
  tripExecutionId: Scalars['Int'],
  type: CorrectionType
}


export interface RootMutationTypeRealtimeUpdateTripsIntervalsArgs {
  afterTripId: Scalars['Int'],
  changeValue: Scalars['Int'],
  forWholeSchedule: Scalars['Boolean'],
  routeId: Scalars['Int']
}


export interface RootMutationTypeRouteDeleteAgencyArgs {
  routeId: Scalars['Int']
}


export interface RootMutationTypeRouteSetAgencyArgs {
  agencyId: Scalars['UUID'],
  routeId: Scalars['Int']
}


export interface RootMutationTypeSchedulerSetDriverArgs {
  date: Scalars['Date'],
  driverId?: Maybe<Scalars['Int']>,
  orderId: Scalars['Int']
}


export interface RootMutationTypeSchedulerSetVehicleArgs {
  date: Scalars['Date'],
  orderId: Scalars['Int'],
  vehicleId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeSchedulerUploadScheduleArgs {
  xls: Scalars['Upload']
}


export interface RootMutationTypeSendInstructionArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  instruction: InstructionInput,
  orderId: Scalars['Int']
}


export interface RootMutationTypeSessionCreateArgs {
  login: Scalars['String'],
  password: Scalars['String']
}


export interface RootMutationTypeSessionRefreshArgs {
  refreshToken: Scalars['String']
}


export interface RootMutationTypeShapeCreateArgs {
  path: Array<Array<Scalars['Float']>>,
  pivotPoints?: Maybe<Array<Array<Scalars['Float']>>>
}


export interface RootMutationTypeShapeDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeShapeUpdateArgs {
  id: Scalars['Int'],
  path: Array<Array<Scalars['Float']>>,
  pivotPoints?: Maybe<Array<Array<Scalars['Float']>>>
}


export interface RootMutationTypeSyncRoutesSchedulesArgs {
  fromDate: Scalars['Date'],
  routesIds: Array<Scalars['Int']>
}


export interface RootMutationTypeSyncSchedulesArgs {
  fromDate: Scalars['Date']
}


export interface RootMutationTypeUndoOrderChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUndoRouteChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUndoRouteDirectionChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUndoScheduleChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUndoStopChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateRealtimeTripArgs {
  acceptScore: Scalars['Float'],
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateRealtimeTripStopArgs {
  accepted?: Maybe<Scalars['Boolean']>,
  comment?: Maybe<RealtimeTripCommentInput>,
  correction?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  index: Scalars['Int']
}


export interface RootMutationTypeUpdateRealtimeTripStopsArgs {
  id: Scalars['Int'],
  stops: Array<RealtimeTripStopsUpdateObject>
}


export interface RootMutationTypeUserAddAgencyArgs {
  agencyId: Scalars['UUID'],
  userId: Scalars['UUID']
}


export interface RootMutationTypeUserAddCityArgs {
  cityId: Scalars['Int'],
  userId: Scalars['UUID']
}


export interface RootMutationTypeUserAddRouteArgs {
  routeId: Scalars['Int'],
  userId: Scalars['UUID']
}


export interface RootMutationTypeUserCreateArgs {
  user: UserInput
}


export interface RootMutationTypeUserDeleteArgs {
  userId: Scalars['UUID']
}


export interface RootMutationTypeUserRemoveAgencyArgs {
  agencyId: Scalars['UUID'],
  userId: Scalars['UUID']
}


export interface RootMutationTypeUserRemoveCityArgs {
  cityId: Scalars['Int'],
  userId: Scalars['UUID']
}


export interface RootMutationTypeUserRemoveRouteArgs {
  routeId: Scalars['Int'],
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
  isActive?: Maybe<Scalars['Boolean']>,
  model?: Maybe<Scalars['String']>,
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
  isActive?: Maybe<Scalars['Boolean']>,
  model?: Maybe<Scalars['String']>,
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
  archiveRecordsGet?: Maybe<Array<ArchiveRecord>>,
  askApiVehiclesGet?: Maybe<Array<AskApiVehicle>>,
  brandsGet?: Maybe<Array<VehicleBrand>>,
  cameraById?: Maybe<Camera>,
  camerasGet?: Maybe<Array<Camera>>,
  citiesGet?: Maybe<Array<City>>,
  contractsGet?: Maybe<Array<Contract>>,
  dispatchersDict?: Maybe<DictFile>,
  /** Get profile */
  driverGetActiveTrip?: Maybe<DriverTrip>,
  driverGetByAuthCode?: Maybe<Driver>,
  driverGetTrips: Array<DriverTrip>,
  driverMessagesGet?: Maybe<Array<Message>>,
  driversDict?: Maybe<DictFile>,
  driversGet?: Maybe<Array<Driver>>,
  getLatestChangeByStopId?: Maybe<Array<ActionLog>>,
  getObjectInfo?: Maybe<Objects>,
  holidaysGet?: Maybe<Array<Scalars['Date']>>,
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
  publicAgenciesGet?: Maybe<Array<PublicAgency>>,
  publicRouteDetailsGet?: Maybe<PublicRoute>,
  publicRoutesGet?: Maybe<Array<PublicRoute>>,
  publicShapesGet?: Maybe<Array<PublicShape>>,
  publicStopArrivalsForecastGet?: Maybe<Array<PublicStopArrivalForecast>>,
  publicStopScheduleGet?: Maybe<Array<PublicScheduleRoute>>,
  publicStopsGet?: Maybe<Array<PublicStop>>,
  publicTripGet?: Maybe<PublicTrip>,
  publicVehiclesGet?: Maybe<Array<PublicVehicle>>,
  realtimeGetRouteShapes?: Maybe<Array<Array<Array<Scalars['Float']>>>>,
  realtimeOrderDirections?: Maybe<Array<RealtimeOrderDirection>>,
  realtimeOrdersTripsGet?: Maybe<Array<RealtimeTrip>>,
  realtimeRecieversStatsGet?: Maybe<Array<RealtimeRecieverStat>>,
  realtimeRouteGetStops?: Maybe<Array<RealtimeTripStop>>,
  realtimeRoutesGet?: Maybe<Array<RealtimeRoute>>,
  realtimeRoutesGetStats?: Maybe<RealtimeRoutesStats>,
  realtimeStopIntervals?: Maybe<Array<RealtimeStopInterval>>,
  realtimeTripsGet?: Maybe<Array<RealtimeTrip>>,
  realtimeTripsPathesGet?: Maybe<Array<RealtimePath>>,
  realtimeUnknownVehiclesGet?: Maybe<Array<RealtimeVehicle>>,
  realtimeVehiclePathGet?: Maybe<RealtimePath>,
  realtimeVehiclesGet?: Maybe<Array<RealtimeVehicle>>,
  realtimeVehiclesMetaGet?: Maybe<Array<RealtimeVehicleMeta>>,
  realtimeVehiclesShapesGet?: Maybe<Array<RealtimeShape>>,
  /** Get report */
  reportGet?: Maybe<Report>,
  /** returns list of reports */
  reportsList?: Maybe<Array<ReportProperties>>,
  reportsRoutesGet?: Maybe<Array<ReportRoute>>,
  roadGet?: Maybe<Array<Array<Array<Scalars['Float']>>>>,
  routesDict?: Maybe<DictFile>,
  routesGet?: Maybe<Array<Route>>,
  routesGetCsv?: Maybe<File>,
  routesGetXls?: Maybe<File>,
  scheduleExistingWaitingsList?: Maybe<Array<ScheduleWaiting>>,
  scheduleImportLogsGet?: Maybe<Array<ScheduleImportLog>>,
  schedulerDriversWorkloadsGet?: Maybe<Array<Workload>>,
  schedulerRoutesGet?: Maybe<Array<SchedulerRoute>>,
  schedulerStopsGet: Array<Stop>,
  schedulerVehiclesWorkloadsGet?: Maybe<Array<Workload>>,
  schedulesGet?: Maybe<Array<Schedule>>,
  shapesGet?: Maybe<Array<Shape>>,
  shapesGetCompact?: Maybe<Scalars['JSON']>,
  stopsGet: Array<Stop>,
  stopsGetCsv?: Maybe<File>,
  stopsGetXls?: Maybe<File>,
  tripsGet?: Maybe<Array<Trip>>,
  usersGet?: Maybe<Array<User>>,
  vehiclesAllowedGet?: Maybe<Array<Vehicle>>,
  vehiclesDict?: Maybe<DictFile>,
  vehiclesDistinctModelsGet?: Maybe<Array<Scalars['String']>>,
  vehiclesGet?: Maybe<Array<Vehicle>>,
  vehiclesGetCompact?: Maybe<Scalars['String']>,
  vehiclesLogRoutesGet?: Maybe<Array<Route>>,
  vehiclesLogVehiclesGet?: Maybe<Array<Vehicle>>,
  vehiclesLogsGet?: Maybe<Array<VehicleLogGroup>>,
}


export interface RootQueryTypeActionsLogsGetArgs {
  fromTimestamp?: Maybe<Scalars['Timestamp']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  toTimestamp?: Maybe<Scalars['Timestamp']>,
  types?: Maybe<Array<ActionType>>,
  usersIds?: Maybe<Array<Scalars['String']>>
}


export interface RootQueryTypeAgenciesGetArgs {
  citiesIds?: Maybe<Array<Scalars['Int']>>,
  ids?: Maybe<Array<Scalars['UUID']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>,
  withStats?: Scalars['Boolean']
}


export interface RootQueryTypeArchiveRecordsGetArgs {
  fromDate?: Maybe<Scalars['Date']>,
  limit?: Maybe<Scalars['Int']>,
  objectTypes?: Maybe<Array<ArchiveObjectType>>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>,
  toDate?: Maybe<Scalars['Date']>,
  usersIds?: Maybe<Array<Scalars['String']>>
}


export interface RootQueryTypeAskApiVehiclesGetArgs {
  id?: Maybe<Scalars['String']>
}


export interface RootQueryTypeBrandsGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeCameraByIdArgs {
  id: Scalars['UUID']
}


export interface RootQueryTypeCitiesGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeContractsGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeDispatchersDictArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>
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


export interface RootQueryTypeDriversDictArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>
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


export interface RootQueryTypeGetLatestChangeByStopIdArgs {
  stopId: Scalars['Int']
}


export interface RootQueryTypeGetObjectInfoArgs {
  id: Scalars['String']
}


export interface RootQueryTypeHolidaysGetArgs {
  fromDate?: Maybe<Scalars['Date']>,
  toDate?: Maybe<Scalars['Date']>
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
  scheduleId: Scalars['Int']
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


export interface RootQueryTypePublicStopArrivalsForecastGetArgs {
  stopId: Scalars['Int']
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


export interface RootQueryTypePublicVehiclesGetArgs {
  onRoute?: Maybe<Scalars['Boolean']>
}


export interface RootQueryTypeRealtimeGetRouteShapesArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  routeId: Scalars['Int']
}


export interface RootQueryTypeRealtimeOrderDirectionsArgs {
  orderId: Scalars['Int']
}


export interface RootQueryTypeRealtimeOrdersTripsGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  ordersIds: Array<Scalars['Int']>
}


export interface RootQueryTypeRealtimeRecieversStatsGetArgs {
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeRealtimeRouteGetStopsArgs {
  routeId: Scalars['Int']
}


export interface RootQueryTypeRealtimeRoutesGetArgs {
  agenciesIds?: Maybe<Array<Scalars['String']>>,
  citiesIds?: Maybe<Array<Scalars['Int']>>,
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  ids?: Maybe<Array<Scalars['Int']>>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeRealtimeRoutesGetStatsArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>
}


export interface RootQueryTypeRealtimeStopIntervalsArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  stopId: Scalars['Int']
}


export interface RootQueryTypeRealtimeTripsGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  tripsIds: Array<Scalars['Int']>
}


export interface RootQueryTypeRealtimeTripsPathesGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  tripExecutionIds: Array<Scalars['Int']>
}


export interface RootQueryTypeRealtimeUnknownVehiclesGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeRealtimeVehiclePathGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  imei?: Maybe<Scalars['String']>,
  interval?: Maybe<Scalars['Int']>,
  tripExecutionId?: Maybe<Scalars['Int']>,
  vehicleId?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeRealtimeVehiclesGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  hasTrip?: Maybe<Scalars['Boolean']>,
  routesIds?: Maybe<Array<Scalars['Int']>>,
  search?: Maybe<Scalars['String']>,
  vehiclesIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeRealtimeVehiclesMetaGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  executionsIds?: Maybe<Array<Scalars['Int']>>,
  vehiclesIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeRealtimeVehiclesShapesGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  routesIds?: Maybe<Array<Scalars['Int']>>,
  tripsExecutionsIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeReportGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  citiesIds?: Maybe<Array<Scalars['Int']>>,
  date?: Maybe<Scalars['Date']>,
  fromDate?: Maybe<Scalars['Date']>,
  oneSheet?: Maybe<Scalars['Boolean']>,
  routesIds?: Maybe<Array<Scalars['Int']>>,
  toDate?: Maybe<Scalars['Date']>,
  type: AvaliableReports
}


export interface RootQueryTypeReportsRoutesGetArgs {
  date: Scalars['Date'],
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeRoadGetArgs {
  points?: Maybe<Array<Array<Scalars['Float']>>>
}


export interface RootQueryTypeRoutesDictArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>
}


export interface RootQueryTypeRoutesGetArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  citiesIds?: Maybe<Array<Scalars['Int']>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>,
  types?: Maybe<Array<VehicleType>>
}


export interface RootQueryTypeScheduleExistingWaitingsListArgs {
  scheduleId: Scalars['Int']
}


export interface RootQueryTypeScheduleImportLogsGetArgs {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeSchedulerDriversWorkloadsGetArgs {
  date: Scalars['Date'],
  routeId?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeSchedulerRoutesGetArgs {
  date: Scalars['Date'],
  ids?: Maybe<Array<Scalars['Int']>>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeSchedulerStopsGetArgs {
  currentTimestamp?: Maybe<Scalars['Timestamp']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeSchedulerVehiclesWorkloadsGetArgs {
  date: Scalars['Date'],
  routeId?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeSchedulesGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeShapesGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  routeId?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeStopsGetArgs {
  bbox?: Maybe<Array<Array<Scalars['Float']>>>,
  cityIds?: Maybe<Array<Scalars['Int']>>,
  dates?: Maybe<Array<Scalars['Date']>>,
  ids?: Maybe<Array<Scalars['Int']>>,
  isService?: Maybe<Scalars['Boolean']>,
  limit?: Maybe<Scalars['Int']>,
  locationTypes?: Maybe<Array<LocationType>>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeTripsGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  ordersIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeUsersGetArgs {
  abilities?: Maybe<Array<UserAbility>>,
  agenciesIds?: Maybe<Array<Scalars['UUID']>>,
  citiesIds?: Maybe<Array<Scalars['Int']>>,
  emails?: Maybe<Array<Scalars['String']>>,
  ids?: Maybe<Array<Scalars['UUID']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  phones?: Maybe<Array<Scalars['Int']>>,
  roles?: Maybe<Array<Role>>,
  routesIds?: Maybe<Array<Scalars['Int']>>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeVehiclesAllowedGetArgs {
  search?: Maybe<Scalars['String']>,
  vehicleId?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeVehiclesDictArgs {
  agenciesIds?: Maybe<Array<Scalars['UUID']>>
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
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  timeEnd: Scalars['Timestamp'],
  timeStart: Scalars['Timestamp']
}


export interface RootQueryTypeVehiclesLogVehiclesGetArgs {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
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
  agency?: Maybe<Agency>,
  allowedDeviation?: Maybe<Scalars['Int']>,
  city?: Maybe<City>,
  directions?: Maybe<Array<RouteDirection>>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  nameEn?: Maybe<Scalars['String']>,
  parkingTime?: Maybe<Scalars['Int']>,
  schedules?: Maybe<Array<Schedule>>,
  shortName?: Maybe<Scalars['String']>,
  transportClass?: Maybe<Array<VehicleSize>>,
  transportType?: Maybe<VehicleType>,
  uniqueCode?: Maybe<Scalars['String']>,
}

export interface RouteDirection {
   __typename?: 'RouteDirection',
  endDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['Int']>,
  isLocked?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  planDist?: Maybe<Scalars['Float']>,
  planTime?: Maybe<Scalars['Int']>,
  route?: Maybe<Route>,
  shapes?: Maybe<Array<Shape>>,
  startDate?: Maybe<Scalars['Date']>,
  stoptimes?: Maybe<Array<StopTime>>,
}

export interface RouteDirectionShape {
  id?: Maybe<Scalars['Int']>,
  /** needed if no id provided or shape needs update */
  path?: Maybe<Array<Array<Scalars['Float']>>>,
  /** needed if no id provided or shape needs update */
  pivotPoints?: Maybe<Array<Array<Scalars['Float']>>>,
}

export interface Schedule {
   __typename?: 'Schedule',
  activityDays?: Maybe<Array<DayOfWeek>>,
  backDirection?: Maybe<RouteDirection>,
  backParkingTime?: Maybe<Scalars['Int']>,
  endDate?: Maybe<Scalars['Date']>,
  endTime?: Maybe<Scalars['Int']>,
  exceptHolidays?: Maybe<Scalars['Boolean']>,
  exceptionDates?: Maybe<Array<Scalars['Date']>>,
  forwardDirection?: Maybe<RouteDirection>,
  id?: Maybe<Scalars['Int']>,
  interval?: Maybe<Scalars['Int']>,
  intervalType?: Maybe<ScheduleIntervalType>,
  isActive?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  orders?: Maybe<Array<Order>>,
  ordersAmount?: Maybe<Scalars['Int']>,
  parkingTime?: Maybe<Scalars['Int']>,
  roundTripsPerOrderAmount?: Maybe<Scalars['Int']>,
  route?: Maybe<Route>,
  routeId?: Maybe<Scalars['Int']>,
  startDate?: Maybe<Scalars['Date']>,
  startTime?: Maybe<Scalars['Int']>,
  totalRoundTripsAmount?: Maybe<Scalars['Int']>,
  type?: Maybe<ScheduleType>,
}

export interface ScheduleImportLog {
   __typename?: 'ScheduleImportLog',
  fromDate?: Maybe<Scalars['Date']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['Timestamp']>,
  userLogin?: Maybe<Scalars['String']>,
}

export const enum ScheduleIntervalType {
  Fixed = 'FIXED',
  Fuzzy = 'FUZZY',
  Interval = 'INTERVAL'
};

export interface SchedulerOrder {
   __typename?: 'SchedulerOrder',
  driver?: Maybe<Driver>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  trips?: Maybe<Array<SchedulerTrip>>,
  vehicle?: Maybe<Vehicle>,
}

export interface SchedulerRoute {
   __typename?: 'SchedulerRoute',
  agency?: Maybe<Agency>,
  city?: Maybe<City>,
  date?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  orders?: Maybe<Array<SchedulerOrder>>,
  ordersAmount?: Maybe<Scalars['Int']>,
  shortName?: Maybe<Scalars['String']>,
  uniqueCode?: Maybe<Scalars['String']>,
  vehicleType?: Maybe<VehicleType>,
}

export interface SchedulerTrip {
   __typename?: 'SchedulerTrip',
  directionType?: Maybe<TripDirection>,
  endTime?: Maybe<Scalars['Int']>,
  seqNum?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  waitingTime?: Maybe<Scalars['Int']>,
}

export const enum ScheduleType {
  Circular = 'CIRCULAR',
  CompletePendulum = 'COMPLETE_PENDULUM',
  IncompletePendulum = 'INCOMPLETE_PENDULUM'
};

export interface ScheduleWaiting {
   __typename?: 'ScheduleWaiting',
  values?: Maybe<Array<Scalars['Int']>>,
  waitingType?: Maybe<TripWaitingType>,
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
  city?: Maybe<City>,
  coords?: Maybe<Array<Scalars['Float']>>,
  date?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['Int']>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  name?: Maybe<Scalars['String']>,
  nameEn?: Maybe<Scalars['String']>,
  polygon?: Maybe<Array<Array<Scalars['Float']>>>,
  radius?: Maybe<Scalars['Float']>,
  reverseDirectionStop?: Maybe<Stop>,
  stopRoutes?: Maybe<Array<Route>>,
  zoneType?: Maybe<StopZoneType>,
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
  travelToNext?: Maybe<Scalars['Int']>,
}

export const enum StopZoneType {
  Polygon = 'POLYGON',
  Radius = 'RADIUS'
};

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
  direction?: Maybe<RouteDirection>,
  directionId?: Maybe<Scalars['Int']>,
  directionType?: Maybe<TripDirection>,
  endTime?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  order?: Maybe<Order>,
  orderId?: Maybe<Scalars['Int']>,
  shapes?: Maybe<Array<Shape>>,
  startTime?: Maybe<Scalars['Int']>,
  stoptimes?: Maybe<Array<StopTime>>,
  waitingType?: Maybe<TripWaitingType>,
}

export const enum TripDirection {
  Back = 'BACK',
  Forward = 'FORWARD'
};

export const enum TripWaitingType {
  Departure = 'DEPARTURE',
  Lunch = 'LUNCH',
  Refuel = 'REFUEL',
  Waiting = 'WAITING'
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
  agencies?: Maybe<Array<Agency>>,
  cities?: Maybe<Array<City>>,
  deactivationTimestamp?: Maybe<Scalars['Timestamp']>,
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaper?: Maybe<Attachment>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  hasAllCities?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['UUID']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isActive?: Maybe<Scalars['Boolean']>,
  lastName?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
  routes?: Maybe<Array<Route>>,
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
  hasAllCities?: Maybe<Scalars['Boolean']>,
  lastName?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
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
  cityId?: Maybe<Scalars['Int']>,
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaperId?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  hasAllCities?: Maybe<Scalars['Boolean']>,
  id: Scalars['UUID'],
  isActive?: Maybe<Scalars['Boolean']>,
  lastName?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
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
  deactivationTimestamp?: Maybe<Scalars['Timestamp']>,
  hasInfoPanel?: Maybe<Scalars['Boolean']>,
  hasSpeakers?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['Int']>,
  imei?: Maybe<Scalars['String']>,
  imeiChanges?: Maybe<Array<VehicleImeiChange>>,
  imeiChanges2?: Maybe<Array<VehicleImeiChange2>>,
  isActive?: Maybe<Scalars['Boolean']>,
  model?: Maybe<Scalars['String']>,
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

export interface VehicleImeiChange {
   __typename?: 'VehicleImeiChange',
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['Timestamp']>,
  userLogin?: Maybe<Scalars['String']>,
}

export interface VehicleImeiChange2 {
   __typename?: 'VehicleImeiChange2',
  dateEnd?: Maybe<Scalars['Date']>,
  dateStart?: Maybe<Scalars['Date']>,
  imei?: Maybe<Scalars['String']>,
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
  stops?: Maybe<Array<RealtimeTripStop>>,
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
  Fap = 'FAP',
  Ferry = 'FERRY',
  Funicular = 'FUNICULAR',
  Gondola = 'GONDOLA',
  Metro = 'METRO',
  Rail = 'RAIL',
  Tram = 'TRAM',
  Trolley = 'TROLLEY',
  Unknown = 'UNKNOWN'
};

export const enum WheelchairBoarding {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
  Undefined = 'UNDEFINED'
};

export interface Workload {
   __typename?: 'Workload',
  entityId?: Maybe<Scalars['Int']>,
  entityName?: Maybe<Scalars['String']>,
  /** from 0 to 1, 'busy line', [[0, 0.01!], [0.02, 0.03!], ...!] */
  workload?: Maybe<Array<Array<Scalars['Float']>>>,
}

export type CameraFragment = (
  { __typename?: 'Camera' }
  & Pick<Camera, 'address' | 'coords' | 'expire' | 'id' | 'name' | 'url'>
);

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
  & Pick<PublicRoute, 'agencyId' | 'agencyName' | 'id' | 'name' | 'shape' | 'shortName'>
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
  & Pick<PublicStop, 'arrivalTime' | 'coords' | 'id' | 'isTraveled' | 'name' | 'nameEn' | 'normalizedShapeDist' | 'shapeDist' | 'wheelchairBoarding'>
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
  & Pick<PublicVehicle, 'agencyId' | 'agencyName' | 'bearing' | 'boardNumber' | 'coords' | 'distanceToLine' | 'id' | 'normalizedShapeDist' | 'registrationNumber' | 'routeId' | 'shapeDist' | 'timestamp' | 'tripDirection' | 'tripId' | 'type' | 'wheelchairBoarding'>
);

export type CameraByIdQueryVariables = {
  id: Scalars['UUID']
};


export type CameraByIdQuery = (
  { __typename?: 'RootQueryType' }
  & { cameraById: Maybe<(
    { __typename?: 'Camera' }
    & CameraFragment
  )> }
);

export type CamerasGetQueryVariables = {};


export type CamerasGetQuery = (
  { __typename?: 'RootQueryType' }
  & { camerasGet: Maybe<Array<(
    { __typename?: 'Camera' }
    & CameraFragment
  )>> }
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

export type PublicVehiclesGetQueryVariables = {
  onRoute?: Maybe<Scalars['Boolean']>
};


export type PublicVehiclesGetQuery = (
  { __typename?: 'RootQueryType' }
  & { publicVehiclesGet: Maybe<Array<(
    { __typename?: 'PublicVehicle' }
    & PublicVehicleFragment
  )>> }
);

export const CameraFragmentDoc = gql`
    fragment Camera on Camera {
  address
  coords
  expire
  id
  name
  url
}
    `;
export const PublicStopFragmentDoc = gql`
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
    `;
export const CameraByIdDocument = gql`
    query cameraById($id: UUID!) {
  cameraById(id: $id) {
    ...Camera
  }
}
    ${CameraFragmentDoc}`;
export type CameraByIdQueryResult = ApolloReactCommon.QueryResult<CameraByIdQuery, CameraByIdQueryVariables>;
export const CamerasGetDocument = gql`
    query camerasGet {
  camerasGet {
    ...Camera
  }
}
    ${CameraFragmentDoc}`;
export type CamerasGetQueryResult = ApolloReactCommon.QueryResult<CamerasGetQuery, CamerasGetQueryVariables>;
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
    query publicVehiclesGet($onRoute: Boolean) {
  publicVehiclesGet(onRoute: $onRoute) {
    ...PublicVehicle
  }
}
    ${PublicVehicleFragmentDoc}`;
export type PublicVehiclesGetQueryResult = ApolloReactCommon.QueryResult<PublicVehiclesGetQuery, PublicVehiclesGetQueryVariables>;