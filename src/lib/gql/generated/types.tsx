import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** UUID scalar */
  UUID: string,
  /** Date in ISO 8601 format(YYYY-MM-DD) */
  Date: any,
  /** Unix timestamp */
  Timestamp: number,
  /** JSON scalar */
  JSON: any,
  /** Represents an uploaded file. */
  Upload: File,
}

export enum Abilities {
  UsersControl = 'USERS_CONTROL'
}

export interface Agency {
   __typename?: 'Agency',
  agencyName?: Maybe<Scalars['String']>,
  agencyPhone?: Maybe<Scalars['Int']>,
  agencyTimezone?: Maybe<Scalars['String']>,
  agencyUrl?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  originAgencyId?: Maybe<Scalars['String']>,
  originSource?: Maybe<DataSource>,
}

export interface AgencyCreateInput {
  agencyName?: Maybe<Scalars['String']>,
  agencyPhone?: Maybe<Scalars['Int']>,
  agencyTimezone?: Maybe<Scalars['String']>,
  agencyUrl?: Maybe<Scalars['String']>,
}

export interface AgencyUpdateInput {
  agencyName?: Maybe<Scalars['String']>,
  agencyPhone?: Maybe<Scalars['Int']>,
  agencyTimezone?: Maybe<Scalars['String']>,
  agencyUrl?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
}

export interface Attachment {
   __typename?: 'Attachment',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Avatar {
   __typename?: 'Avatar',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Calendar {
   __typename?: 'Calendar',
  dates?: Maybe<Array<Maybe<CalendarDate>>>,
  endDate?: Maybe<Scalars['Date']>,
  friday?: Maybe<ExceptionType>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isActive?: Maybe<Scalars['Boolean']>,
  monday?: Maybe<ExceptionType>,
  saturday?: Maybe<ExceptionType>,
  serviceName?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
  sunday?: Maybe<ExceptionType>,
  thursday?: Maybe<ExceptionType>,
  trips?: Maybe<Array<Maybe<Trip>>>,
  tuesday?: Maybe<ExceptionType>,
  wednesday?: Maybe<ExceptionType>,
}

export interface CalendarCreateInput {
  dates: Array<CalendarDateInput>,
  endDate: Scalars['Date'],
  friday: ExceptionType,
  monday: ExceptionType,
  saturday: ExceptionType,
  serviceName?: Maybe<Scalars['String']>,
  startDate: Scalars['Date'],
  sunday: ExceptionType,
  thursday: ExceptionType,
  tuesday: ExceptionType,
  wednesday: ExceptionType,
}

export interface CalendarDate {
   __typename?: 'CalendarDate',
  date?: Maybe<Scalars['Date']>,
  exceptionType?: Maybe<ExceptionType>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isActive?: Maybe<Scalars['Boolean']>,
}

export interface CalendarDateInput {
  date?: Maybe<Scalars['Date']>,
  exceptionType?: Maybe<ExceptionType>,
}

export interface CalendarUpdateInput {
  dates?: Maybe<Array<CalendarDateInput>>,
  endDate?: Maybe<Scalars['Date']>,
  friday?: Maybe<ExceptionType>,
  id: Scalars['Int'],
  monday?: Maybe<ExceptionType>,
  saturday?: Maybe<ExceptionType>,
  serviceName?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
  sunday?: Maybe<ExceptionType>,
  thursday?: Maybe<ExceptionType>,
  tuesday?: Maybe<ExceptionType>,
  wednesday?: Maybe<ExceptionType>,
}

export enum DataSource {
  GtfsSpb = 'GTFS_SPB',
  Native = 'NATIVE'
}


export interface Driver {
   __typename?: 'Driver',
  agency?: Maybe<Agency>,
  agencyId?: Maybe<Scalars['UUID']>,
  allowedVehiclesTypes?: Maybe<Array<Maybe<RouteType>>>,
  avatar?: Maybe<Avatar>,
  avatarId?: Maybe<Scalars['UUID']>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  route?: Maybe<Route>,
  trips?: Maybe<Array<Maybe<Trip>>>,
  vehicle?: Maybe<Vehicle>,
}

export interface DriverInput {
  allowedVehiclesTypes?: Maybe<Array<Maybe<RouteType>>>,
  avatarId?: Maybe<Scalars['UUID']>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
}

export interface DriverUpdateInput {
  allowedVehiclesTypes?: Maybe<Array<Maybe<RouteType>>>,
  avatarId?: Maybe<Scalars['UUID']>,
  drivingLicenseNumber?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
}

export enum ExceptionType {
  Avaliable = 'AVALIABLE',
  Unavaliable = 'UNAVALIABLE'
}

export enum InstructionType {
  Await = 'AWAIT',
  SlowDown = 'SLOW_DOWN',
  SpeedUp = 'SPEED_UP'
}


export enum LocationType {
  BoardingArea = 'BOARDING_AREA',
  Entrance = 'ENTRANCE',
  Node = 'NODE',
  RailwayStation = 'RAILWAY_STATION',
  Station = 'STATION',
  Stop = 'STOP'
}

export interface NetworkVersion {
   __typename?: 'NetworkVersion',
  id?: Maybe<Scalars['Int']>,
  isActive?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  parentVersion?: Maybe<NetworkVersion>,
}

export interface NetworkVersionCreateInput {
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['Int']>,
}

export interface NetworkVersionUpdateInput {
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export interface Road {
   __typename?: 'Road',
  access?: Maybe<RoadAccess>,
  bridge?: Maybe<Scalars['Boolean']>,
  class?: Maybe<RoadClass>,
  geometry?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>,
  id?: Maybe<Scalars['Int']>,
  lanes?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  oneway?: Maybe<RoadDirection>,
  osmId?: Maybe<Scalars['Int']>,
  ref?: Maybe<Scalars['String']>,
  service?: Maybe<Scalars['String']>,
  tunnel?: Maybe<Scalars['Boolean']>,
  type?: Maybe<RoadType>,
  zOrder?: Maybe<Scalars['Int']>,
}

export enum RoadAccess {
  Agricultural = 'AGRICULTURAL',
  Commercial = 'COMMERCIAL',
  Customers = 'CUSTOMERS',
  Delivery = 'DELIVERY',
  Designated = 'DESIGNATED',
  Destination = 'DESTINATION',
  Foot = 'FOOT',
  Forestry = 'FORESTRY',
  Illegal = 'ILLEGAL',
  No = 'NO',
  Official = 'OFFICIAL',
  Permissive = 'PERMISSIVE',
  Permit = 'PERMIT',
  Private = 'PRIVATE',
  Restricted = 'RESTRICTED',
  Undefined = 'UNDEFINED',
  Unknown = 'UNKNOWN',
  Yes = 'YES'
}

export enum RoadClass {
  Highway = 'HIGHWAY',
  ManMade = 'MAN_MADE',
  Railway = 'RAILWAY'
}

export enum RoadDirection {
  Both = 'BOTH',
  Forward = 'FORWARD',
  Reverse = 'REVERSE'
}

export enum RoadType {
  Bridleway = 'BRIDLEWAY',
  Cycleway = 'CYCLEWAY',
  Disused = 'DISUSED',
  Footway = 'FOOTWAY',
  Groyne = 'GROYNE',
  LivingStreet = 'LIVING_STREET',
  Monorail = 'MONORAIL',
  Motorway = 'MOTORWAY',
  MotorwayLink = 'MOTORWAY_LINK',
  NarrowGauge = 'NARROW_GAUGE',
  Path = 'PATH',
  Pedestrian = 'PEDESTRIAN',
  Pier = 'PIER',
  Preserved = 'PRESERVED',
  Primary = 'PRIMARY',
  PrimaryLink = 'PRIMARY_LINK',
  Raceway = 'RACEWAY',
  Rail = 'RAIL',
  Residential = 'RESIDENTIAL',
  Road = 'ROAD',
  Secondary = 'SECONDARY',
  SecondaryLink = 'SECONDARY_LINK',
  Service = 'SERVICE',
  Steps = 'STEPS',
  Subway = 'SUBWAY',
  Tertiary = 'TERTIARY',
  TertiaryLink = 'TERTIARY_LINK',
  Track = 'TRACK',
  Tram = 'TRAM',
  Trunk = 'TRUNK',
  TrunkLink = 'TRUNK_LINK',
  Unclassified = 'UNCLASSIFIED'
}

export interface Role {
   __typename?: 'Role',
  abilities?: Maybe<Array<Maybe<Abilities>>>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  users?: Maybe<Array<Maybe<User>>>,
}

export interface RoleInput {
  abilities: Array<Maybe<Abilities>>,
  name: Scalars['String'],
}

export interface RoleUpdateInput {
  abilities?: Maybe<Array<Maybe<Abilities>>>,
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
}

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
  calendarCreate?: Maybe<Calendar>,
  calendarDelete?: Maybe<Calendar>,
  calendarUpdate?: Maybe<Calendar>,
  driverAuthCodeReset?: Maybe<Scalars['String']>,
  driverCreate?: Maybe<Driver>,
  driverDelete?: Maybe<Driver>,
  driverUpdate?: Maybe<Driver>,
  instructionSend?: Maybe<Scalars['String']>,
  modelCreate?: Maybe<VehicleModel>,
  modelDelete?: Maybe<VehicleModel>,
  modelUpdate?: Maybe<VehicleModel>,
  networkVersionDelete?: Maybe<NetworkVersion>,
  networkVersionSwitch?: Maybe<NetworkVersion>,
  networkVersionUpdate?: Maybe<NetworkVersion>,
  networkVersionsCreate?: Maybe<NetworkVersion>,
  roleCreate?: Maybe<Role>,
  roleUpdate?: Maybe<Role>,
  routeCreate?: Maybe<Route>,
  routeDelete?: Maybe<Route>,
  routeUpdate?: Maybe<Route>,
  sessionCreate?: Maybe<UserSession>,
  sessionDelete?: Maybe<Scalars['String']>,
  sessionRefresh?: Maybe<UserSession>,
  stopCreate?: Maybe<Stop>,
  stopDelete?: Maybe<Stop>,
  stopUpdate?: Maybe<Stop>,
  tripCreate?: Maybe<Trip>,
  tripDelete?: Maybe<Trip>,
  tripUpdate?: Maybe<Trip>,
  userCreate?: Maybe<User>,
  /** DEV */
  userDelete?: Maybe<User>,
  userSelfUpdate?: Maybe<User>,
  userUpdate?: Maybe<User>,
  vehicleCreate?: Maybe<Vehicle>,
  vehicleDelete?: Maybe<Vehicle>,
  vehicleUpdate?: Maybe<Vehicle>,
}


export interface RootMutationTypeAgencyCreateArgs {
  agency: AgencyCreateInput
}


export interface RootMutationTypeAgencyDeleteArgs {
  agencyId: Scalars['UUID']
}


export interface RootMutationTypeAgencyUpdateArgs {
  agency: AgencyUpdateInput
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


export interface RootMutationTypeCalendarCreateArgs {
  obj: CalendarCreateInput
}


export interface RootMutationTypeCalendarDeleteArgs {
  calendarId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeCalendarUpdateArgs {
  obj: CalendarUpdateInput
}


export interface RootMutationTypeDriverAuthCodeResetArgs {
  driverId: Scalars['Int']
}


export interface RootMutationTypeDriverCreateArgs {
  driver: DriverInput
}


export interface RootMutationTypeDriverDeleteArgs {
  driverId: Scalars['Int']
}


export interface RootMutationTypeDriverUpdateArgs {
  driver: DriverUpdateInput
}


export interface RootMutationTypeInstructionSendArgs {
  instructionType: InstructionType,
  interval?: Maybe<Scalars['Int']>,
  stopId?: Maybe<Scalars['Int']>,
  vehicleId: Scalars['Int']
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


export interface RootMutationTypeNetworkVersionDeleteArgs {
  networkVersionId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeNetworkVersionSwitchArgs {
  networkVersionId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeNetworkVersionUpdateArgs {
  obj: NetworkVersionUpdateInput
}


export interface RootMutationTypeNetworkVersionsCreateArgs {
  obj: NetworkVersionCreateInput
}


export interface RootMutationTypeRoleCreateArgs {
  role: RoleInput
}


export interface RootMutationTypeRoleUpdateArgs {
  role: RoleUpdateInput
}


export interface RootMutationTypeRouteCreateArgs {
  obj: RouteCreateInput
}


export interface RootMutationTypeRouteDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeRouteUpdateArgs {
  obj: RouteUpdateInput
}


export interface RootMutationTypeSessionCreateArgs {
  email: Scalars['String'],
  password: Scalars['String']
}


export interface RootMutationTypeSessionRefreshArgs {
  refreshToken: Scalars['String']
}


export interface RootMutationTypeStopCreateArgs {
  obj: StopCreateInput
}


export interface RootMutationTypeStopDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeStopUpdateArgs {
  obj: StopUpdateInput
}


export interface RootMutationTypeTripCreateArgs {
  obj: TripCreateInput
}


export interface RootMutationTypeTripDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeTripUpdateArgs {
  obj: TripUpdateInput
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
  vehicle: VehicleCreateInput
}


export interface RootMutationTypeVehicleDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeVehicleUpdateArgs {
  vehicle: VehicleUpdateInput
}

export interface RootQueryType {
   __typename?: 'RootQueryType',
  agenciesGet?: Maybe<Array<Maybe<Agency>>>,
  brandsGet?: Maybe<Array<Maybe<VehicleBrand>>>,
  calendarGet?: Maybe<Array<Maybe<Calendar>>>,
  driverGetByAuthCode?: Maybe<Driver>,
  driversGet?: Maybe<Array<Maybe<Driver>>>,
  modelsGet?: Maybe<Array<Maybe<VehicleModel>>>,
  networkVersionsGet?: Maybe<Array<Maybe<NetworkVersion>>>,
  roadsGet?: Maybe<Array<Maybe<Road>>>,
  rolesGet?: Maybe<Array<Maybe<Role>>>,
  routesGet?: Maybe<Array<Maybe<Route>>>,
  stopsGet?: Maybe<Array<Maybe<Stop>>>,
  tripsGet?: Maybe<Array<Maybe<Trip>>>,
  usersGet?: Maybe<Array<Maybe<User>>>,
  vehiclesGet?: Maybe<Array<Maybe<Vehicle>>>,
}


export interface RootQueryTypeAgenciesGetArgs {
  agenciesNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  ids?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeBrandsGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>
}


export interface RootQueryTypeDriverGetByAuthCodeArgs {
  authCode?: Maybe<Scalars['String']>
}


export interface RootQueryTypeDriversGetArgs {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  phones?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeModelsGetArgs {
  brandsIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>
}


export interface RootQueryTypeNetworkVersionsGetArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  isActive?: Maybe<Scalars['Boolean']>,
  limit?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeRoadsGetArgs {
  access?: Maybe<Array<Maybe<RoadAccess>>>,
  bbox?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>,
  bridge?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  class?: Maybe<Array<Maybe<RoadClass>>>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  lanes?: Maybe<Array<Maybe<Scalars['Int']>>>,
  limit?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  offset?: Maybe<Scalars['Int']>,
  oneway?: Maybe<Array<Maybe<RoadDirection>>>,
  osmIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  tunnel?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  types?: Maybe<Array<Maybe<RoadType>>>
}


export interface RootQueryTypeRolesGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  limit?: Maybe<Scalars['Int']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>
}


export interface RootQueryTypeRoutesGetArgs {
  agencyIds?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  isActive?: Maybe<Scalars['Boolean']>,
  routeTypes?: Maybe<Array<Maybe<RouteType>>>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeStopsGetArgs {
  bbox?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  isService?: Maybe<Scalars['Boolean']>,
  limit?: Maybe<Scalars['Int']>,
  locationTypes?: Maybe<Array<Maybe<LocationType>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  search?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['Float']>
}


export interface RootQueryTypeTripsGetArgs {
  directions?: Maybe<Array<Maybe<TripDirection>>>,
  fromTime?: Maybe<Scalars['Int']>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  isActive?: Maybe<Scalars['Boolean']>,
  routeIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  toTime?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeUsersGetArgs {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>,
  ids?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  phones?: Maybe<Array<Maybe<Scalars['Int']>>>,
  rolesIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeVehiclesGetArgs {
  agenciesIds?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  boardNumbers?: Maybe<Array<Maybe<Scalars['String']>>>,
  driversIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  limit?: Maybe<Scalars['Int']>,
  modelsIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>,
  originIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  originSources?: Maybe<Array<Maybe<DataSource>>>,
  registrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>,
  search?: Maybe<Scalars['String']>
}

export interface Route {
   __typename?: 'Route',
  agency?: Maybe<Agency>,
  directionName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  isActive?: Maybe<Scalars['Boolean']>,
  routeColor?: Maybe<Scalars['String']>,
  routeDesc?: Maybe<Scalars['String']>,
  routeLongName?: Maybe<Scalars['String']>,
  routeShortName?: Maybe<Scalars['String']>,
  routeTextColor?: Maybe<Scalars['String']>,
  routeType?: Maybe<RouteType>,
  routeUrl?: Maybe<Scalars['String']>,
  trips?: Maybe<Array<Maybe<Trip>>>,
}

export interface RouteCreateInput {
  /** Should be ignored if user doesn't have proper access abilities */
  agencyId?: Maybe<Scalars['UUID']>,
  directionName?: Maybe<Scalars['String']>,
  isActive?: Maybe<Scalars['Boolean']>,
  routeColor?: Maybe<Scalars['String']>,
  routeDesc?: Maybe<Scalars['String']>,
  routeLongName: Scalars['String'],
  routeShortName: Scalars['String'],
  routeTextColor?: Maybe<Scalars['String']>,
  routeType: RouteType,
  routeUrl?: Maybe<Scalars['String']>,
}

export enum RouteType {
  Bus = 'BUS',
  CableCar = 'CABLE_CAR',
  Ferry = 'FERRY',
  Funicular = 'FUNICULAR',
  Gondola = 'GONDOLA',
  Metro = 'METRO',
  Rail = 'RAIL',
  Tram = 'TRAM',
  Trolley = 'TROLLEY'
}

export interface RouteUpdateInput {
  /** Should be ignored if user doesn't have proper access abilities */
  agencyId?: Maybe<Scalars['UUID']>,
  directionName?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  isActive?: Maybe<Scalars['Boolean']>,
  routeColor?: Maybe<Scalars['String']>,
  routeDesc?: Maybe<Scalars['String']>,
  routeLongName?: Maybe<Scalars['String']>,
  routeShortName?: Maybe<Scalars['String']>,
  routeTextColor?: Maybe<Scalars['String']>,
  routeType?: Maybe<RouteType>,
  routeUrl?: Maybe<Scalars['String']>,
}

export interface Shape {
   __typename?: 'Shape',
  dist?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Int']>,
  path?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>,
}

export interface Stop {
   __typename?: 'Stop',
  agency?: Maybe<Agency>,
  agencyId?: Maybe<Scalars['UUID']>,
  coords?: Maybe<Array<Maybe<Scalars['Float']>>>,
  id?: Maybe<Scalars['Int']>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  stopName?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['Float']>,
}

export interface StopCreateInput {
  /** Should be ignored if user doesn't have proper access abilities */
  agencyId?: Maybe<Scalars['UUID']>,
  coords: Array<Maybe<Scalars['Float']>>,
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  stopName: Scalars['String'],
}

export interface StopTime {
   __typename?: 'StopTime',
  arrivalTime?: Maybe<Scalars['Int']>,
  departureTime?: Maybe<Scalars['Int']>,
  distTraveled?: Maybe<Scalars['Float']>,
  shapeId?: Maybe<Scalars['Int']>,
  stopId?: Maybe<Scalars['Int']>,
}

export interface StopUpdateInput {
  /** Should be ignored if user doesn't have proper access abilities */
  agencyId?: Maybe<Scalars['UUID']>,
  coords?: Maybe<Array<Maybe<Scalars['Float']>>>,
  id: Scalars['Int'],
  isService?: Maybe<Scalars['Boolean']>,
  locationType?: Maybe<LocationType>,
  stopName?: Maybe<Scalars['String']>,
}


export interface TrajectoryInput {
  arrivalTime?: Maybe<Scalars['Int']>,
  coords?: Maybe<Array<Maybe<Scalars['Float']>>>,
  departureTime?: Maybe<Scalars['Int']>,
  stopId?: Maybe<Scalars['Int']>,
  /** if type == POINT -> only fill type and coords fields. if type == STOP -> fill type, stop_id, arr and dep times */
  type: TrajectoryPointType,
}

export enum TrajectoryPointType {
  Point = 'POINT',
  Stop = 'STOP'
}

export interface Trip {
   __typename?: 'Trip',
  calendar?: Maybe<Calendar>,
  calendarDates?: Maybe<Array<Maybe<CalendarDate>>>,
  direction?: Maybe<TripDirection>,
  endTime?: Maybe<Scalars['Int']>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  headwaySecs?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  isActive?: Maybe<Scalars['Boolean']>,
  route?: Maybe<Route>,
  serviceId?: Maybe<Scalars['Int']>,
  shape?: Maybe<Shape>,
  startTime?: Maybe<Scalars['Int']>,
  stoptimes?: Maybe<Array<Maybe<StopTime>>>,
}

export interface TripCreateInput {
  direction: TripDirection,
  endTime?: Maybe<Scalars['Int']>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  headwaySecs?: Maybe<Scalars['Int']>,
  isActive?: Maybe<Scalars['Boolean']>,
  routeId: Scalars['Int'],
  serviceId?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  trajectory?: Maybe<Array<Maybe<TrajectoryInput>>>,
}

export enum TripDirection {
  Back = 'BACK',
  Forward = 'FORWARD'
}

export interface TripUpdateInput {
  direction?: Maybe<TripDirection>,
  endTime?: Maybe<Scalars['Int']>,
  hasFrequencies?: Maybe<Scalars['Boolean']>,
  headwaySecs?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  isActive?: Maybe<Scalars['Boolean']>,
  routeId?: Maybe<Scalars['Int']>,
  serviceId?: Maybe<Scalars['Int']>,
  startTime?: Maybe<Scalars['Int']>,
  trajectory?: Maybe<Array<Maybe<TrajectoryInput>>>,
}


export interface User {
   __typename?: 'User',
  agency?: Maybe<Agency>,
  agencyId?: Maybe<Scalars['UUID']>,
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaper?: Maybe<Attachment>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  role?: Maybe<Role>,
  roleId?: Maybe<Scalars['Int']>,
}

export interface UserInput {
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaperId?: Maybe<Scalars['UUID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  middleName?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  phone?: Maybe<Scalars['Int']>,
  roleId: Scalars['Int'],
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
  desktopSettings?: Maybe<Scalars['JSON']>,
  desktopWallpaperId?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['Int']>,
  roleId?: Maybe<Scalars['Int']>,
}


export interface Vehicle {
   __typename?: 'Vehicle',
  agency?: Maybe<Agency>,
  boardNumber?: Maybe<Scalars['String']>,
  brand?: Maybe<VehicleBrand>,
  driver?: Maybe<Driver>,
  id?: Maybe<Scalars['Int']>,
  model?: Maybe<VehicleModel>,
  originId?: Maybe<Scalars['String']>,
  originSource?: Maybe<DataSource>,
  registrationNumber?: Maybe<Scalars['String']>,
}

export interface VehicleBrand {
   __typename?: 'VehicleBrand',
  id?: Maybe<Scalars['Int']>,
  models?: Maybe<Array<Maybe<VehicleModel>>>,
  name?: Maybe<Scalars['String']>,
  vehicles?: Maybe<Array<Maybe<Vehicle>>>,
}

export interface VehicleCreateInput {
  /** Should be ignored for any role except SUPERADMIN */
  agencyId?: Maybe<Scalars['UUID']>,
  boardNumber: Scalars['String'],
  driverId?: Maybe<Scalars['Int']>,
  modelId: Scalars['Int'],
  registrationNumber: Scalars['String'],
}

export interface VehicleModel {
   __typename?: 'VehicleModel',
  brand?: Maybe<VehicleBrand>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  vehicles?: Maybe<Array<Maybe<Vehicle>>>,
}

export interface VehicleUpdateInput {
  agencyId?: Maybe<Scalars['UUID']>,
  boardNumber?: Maybe<Scalars['String']>,
  driverId?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  modelId?: Maybe<Scalars['Int']>,
  registrationNumber?: Maybe<Scalars['String']>,
}

export type SessionDataFragment = (
  { __typename?: 'UserSession' }
  & Pick<UserSession, 'token' | 'refreshToken' | 'expireAt'>
  & { user: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type SessionCreateMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type SessionCreateMutation = (
  { __typename?: 'RootMutationType' }
  & { sessionCreate: Maybe<(
    { __typename?: 'UserSession' }
    & SessionDataFragment
  )> }
);

export type SessionRefreshMutationVariables = {
  refreshToken: Scalars['String']
};


export type SessionRefreshMutation = (
  { __typename?: 'RootMutationType' }
  & { sessionRefresh: Maybe<(
    { __typename?: 'UserSession' }
    & SessionDataFragment
  )> }
);

export type SessionDeleteMutationVariables = {};


export type SessionDeleteMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'sessionDelete'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'phone' | 'firstName' | 'middleName' | 'lastName' | 'agencyId' | 'roleId'>
);

export type UserCreateMutationVariables = {
  user: UserInput
};


export type UserCreateMutation = (
  { __typename?: 'RootMutationType' }
  & { userCreate: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type UserUpdateMutationVariables = {
  user: UserUpdateInput
};


export type UserUpdateMutation = (
  { __typename?: 'RootMutationType' }
  & { userUpdate: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type UserDeleteMutationVariables = {
  userId: Scalars['UUID']
};


export type UserDeleteMutation = (
  { __typename?: 'RootMutationType' }
  & { userDelete: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type UsersGetQueryVariables = {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>,
  ids?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  phones?: Maybe<Array<Maybe<Scalars['Int']>>>,
  rolesIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  orderDirection?: Maybe<OrderDirection>
};


export type UsersGetQuery = (
  { __typename?: 'RootQueryType' }
  & { usersGet: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>>> }
);

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
  phone
  firstName
  middleName
  lastName
  agencyId
  roleId
}
    `;
export const SessionDataFragmentDoc = gql`
    fragment SessionData on UserSession {
  token
  refreshToken
  expireAt
  user {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const SessionCreateDocument = gql`
    mutation sessionCreate($email: String!, $password: String!) {
  sessionCreate(email: $email, password: $password) {
    ...SessionData
  }
}
    ${SessionDataFragmentDoc}`;
export type SessionCreateMutationFn = ApolloReactCommon.MutationFunction<SessionCreateMutation, SessionCreateMutationVariables>;

/**
 * __useSessionCreateMutation__
 *
 * To run a mutation, you first call `useSessionCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSessionCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sessionCreateMutation, { data, loading, error }] = useSessionCreateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSessionCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SessionCreateMutation, SessionCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<SessionCreateMutation, SessionCreateMutationVariables>(SessionCreateDocument, baseOptions);
      }
export type SessionCreateMutationHookResult = ReturnType<typeof useSessionCreateMutation>;
export type SessionCreateMutationResult = ApolloReactCommon.MutationResult<SessionCreateMutation>;
export type SessionCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<SessionCreateMutation, SessionCreateMutationVariables>;
export const SessionRefreshDocument = gql`
    mutation sessionRefresh($refreshToken: String!) {
  sessionRefresh(refreshToken: $refreshToken) {
    ...SessionData
  }
}
    ${SessionDataFragmentDoc}`;
export type SessionRefreshMutationFn = ApolloReactCommon.MutationFunction<SessionRefreshMutation, SessionRefreshMutationVariables>;

/**
 * __useSessionRefreshMutation__
 *
 * To run a mutation, you first call `useSessionRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSessionRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sessionRefreshMutation, { data, loading, error }] = useSessionRefreshMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useSessionRefreshMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SessionRefreshMutation, SessionRefreshMutationVariables>) {
        return ApolloReactHooks.useMutation<SessionRefreshMutation, SessionRefreshMutationVariables>(SessionRefreshDocument, baseOptions);
      }
export type SessionRefreshMutationHookResult = ReturnType<typeof useSessionRefreshMutation>;
export type SessionRefreshMutationResult = ApolloReactCommon.MutationResult<SessionRefreshMutation>;
export type SessionRefreshMutationOptions = ApolloReactCommon.BaseMutationOptions<SessionRefreshMutation, SessionRefreshMutationVariables>;
export const SessionDeleteDocument = gql`
    mutation sessionDelete {
  sessionDelete
}
    `;
export type SessionDeleteMutationFn = ApolloReactCommon.MutationFunction<SessionDeleteMutation, SessionDeleteMutationVariables>;

/**
 * __useSessionDeleteMutation__
 *
 * To run a mutation, you first call `useSessionDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSessionDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sessionDeleteMutation, { data, loading, error }] = useSessionDeleteMutation({
 *   variables: {
 *   },
 * });
 */
export function useSessionDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SessionDeleteMutation, SessionDeleteMutationVariables>) {
        return ApolloReactHooks.useMutation<SessionDeleteMutation, SessionDeleteMutationVariables>(SessionDeleteDocument, baseOptions);
      }
export type SessionDeleteMutationHookResult = ReturnType<typeof useSessionDeleteMutation>;
export type SessionDeleteMutationResult = ApolloReactCommon.MutationResult<SessionDeleteMutation>;
export type SessionDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<SessionDeleteMutation, SessionDeleteMutationVariables>;
export const UserCreateDocument = gql`
    mutation userCreate($user: UserInput!) {
  userCreate(user: $user) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type UserCreateMutationFn = ApolloReactCommon.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, baseOptions);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = ApolloReactCommon.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = ApolloReactCommon.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const UserUpdateDocument = gql`
    mutation userUpdate($user: UserUpdateInput!) {
  userUpdate(user: $user) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type UserUpdateMutationFn = ApolloReactCommon.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUserUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, baseOptions);
      }
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = ApolloReactCommon.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;
export const UserDeleteDocument = gql`
    mutation userDelete($userId: UUID!) {
  userDelete(userId: $userId) {
    id
  }
}
    `;
export type UserDeleteMutationFn = ApolloReactCommon.MutationFunction<UserDeleteMutation, UserDeleteMutationVariables>;

/**
 * __useUserDeleteMutation__
 *
 * To run a mutation, you first call `useUserDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDeleteMutation, { data, loading, error }] = useUserDeleteMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserDeleteMutation, UserDeleteMutationVariables>) {
        return ApolloReactHooks.useMutation<UserDeleteMutation, UserDeleteMutationVariables>(UserDeleteDocument, baseOptions);
      }
export type UserDeleteMutationHookResult = ReturnType<typeof useUserDeleteMutation>;
export type UserDeleteMutationResult = ApolloReactCommon.MutationResult<UserDeleteMutation>;
export type UserDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<UserDeleteMutation, UserDeleteMutationVariables>;
export const UsersGetDocument = gql`
    query usersGet($emails: [String], $ids: [UUID], $phones: [Int], $rolesIds: [Int], $search: String, $orderBy: String, $orderDirection: OrderDirection) {
  usersGet(emails: $emails, ids: $ids, phones: $phones, rolesIds: $rolesIds, search: $search, orderBy: $orderBy, orderDirection: $orderDirection) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUsersGetQuery__
 *
 * To run a query within a React component, call `useUsersGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersGetQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersGetQuery({
 *   variables: {
 *      emails: // value for 'emails'
 *      ids: // value for 'ids'
 *      phones: // value for 'phones'
 *      rolesIds: // value for 'rolesIds'
 *      search: // value for 'search'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useUsersGetQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersGetQuery, UsersGetQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersGetQuery, UsersGetQueryVariables>(UsersGetDocument, baseOptions);
      }
export function useUsersGetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersGetQuery, UsersGetQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersGetQuery, UsersGetQueryVariables>(UsersGetDocument, baseOptions);
        }
export type UsersGetQueryHookResult = ReturnType<typeof useUsersGetQuery>;
export type UsersGetLazyQueryHookResult = ReturnType<typeof useUsersGetLazyQuery>;
export type UsersGetQueryResult = ApolloReactCommon.QueryResult<UsersGetQuery, UsersGetQueryVariables>;