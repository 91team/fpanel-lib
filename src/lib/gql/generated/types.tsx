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
  /** Unix timestamp */
  Timestamp: number,
  /** Coordinates scalar */
  Coordinates: LatLonCoordinates,
  /** Represents an uploaded file. */
  Upload: File,
}

export interface Acl {
   __typename?: 'Acl',
  administration?: Maybe<Scalars['Boolean']>,
  bi?: Maybe<Scalars['Boolean']>,
  cms?: Maybe<Scalars['Boolean']>,
  events?: Maybe<Scalars['Boolean']>,
  modeling?: Maybe<Scalars['Boolean']>,
  monitoring?: Maybe<Scalars['Boolean']>,
}

export interface AclInput {
  administration?: Maybe<Scalars['Boolean']>,
  bi?: Maybe<Scalars['Boolean']>,
  cms?: Maybe<Scalars['Boolean']>,
  events?: Maybe<Scalars['Boolean']>,
  modeling?: Maybe<Scalars['Boolean']>,
  monitoring?: Maybe<Scalars['Boolean']>,
}

export interface AdditionalInfo {
   __typename?: 'AdditionalInfo',
  id?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
}

export interface AdditionalInfoInput {
  id?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
}

export interface AppealType {
   __typename?: 'AppealType',
  additionalQuestions?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateEnd?: Maybe<Scalars['Timestamp']>,
  dateStart?: Maybe<Scalars['Timestamp']>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  timeLimit?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface Attachment {
   __typename?: 'Attachment',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Banner {
   __typename?: 'Banner',
  attachment?: Maybe<Attachment>,
  id?: Maybe<Scalars['Int']>,
  image?: Maybe<File>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Block {
   __typename?: 'Block',
  attachment?: Maybe<Attachment>,
  blockContent?: Maybe<Scalars['String']>,
  blockType?: Maybe<NewsBlockType>,
  id?: Maybe<Scalars['String']>,
  place?: Maybe<Geography>,
}

export interface Card {
   __typename?: 'Card',
  kladrAddrLevel1?: Maybe<Scalars['String']>,
  peopleInDanger?: Maybe<Scalars['String']>,
  callerRoom?: Maybe<Scalars['String']>,
  sys112TypeId?: Maybe<Scalars['Int']>,
  entranceCode?: Maybe<Scalars['String']>,
  state03?: Maybe<Sys112StateType>,
  state01?: Maybe<Sys112StateType>,
  injuredPeople?: Maybe<Scalars['String']>,
  withCall?: Maybe<Scalars['Boolean']>,
  room?: Maybe<Scalars['String']>,
  callerInfoLastName?: Maybe<Scalars['String']>,
  incidentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  callerAdditionalInfo?: Maybe<Scalars['String']>,
  callerPhone?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['String']>,
  callerLanguage?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  building?: Maybe<Scalars['String']>,
  sys112OperatorId?: Maybe<Scalars['String']>,
  kladrStreet?: Maybe<Scalars['String']>,
  limitDate?: Maybe<Scalars['Timestamp']>,
  place?: Maybe<Geography>,
  coordinatorId?: Maybe<Scalars['Int']>,
  state02?: Maybe<Sys112StateType>,
  callerInfoMiddleName?: Maybe<Scalars['String']>,
  kladrCallerStreet?: Maybe<Scalars['String']>,
  emergencyId?: Maybe<Scalars['Int']>,
  callerStreet?: Maybe<Scalars['String']>,
  kladrAddrLevel2?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  callerAddrCorps?: Maybe<Scalars['String']>,
  attachments?: Maybe<Array<Maybe<EcorAttachment>>>,
  entrance?: Maybe<Scalars['String']>,
  kladrCallerAddrLevel2?: Maybe<Scalars['String']>,
  kladrCallerAddrLevel1?: Maybe<Scalars['String']>,
  phoneInfoAddress?: Maybe<Scalars['String']>,
  km?: Maybe<Scalars['String']>,
  state?: Maybe<Sys112StateType>,
  additionalInfo?: Maybe<Scalars['String']>,
  phoneInfoPlace?: Maybe<Geography>,
  state04?: Maybe<Sys112StateType>,
  phoneInfoMiddleName?: Maybe<Scalars['String']>,
  phoneInfoLastName?: Maybe<Scalars['String']>,
  callerAddressStr?: Maybe<Scalars['String']>,
  sys112Id?: Maybe<Scalars['String']>,
  addressStr?: Maybe<Scalars['String']>,
  addrCorps?: Maybe<Scalars['String']>,
  sys112TypeName?: Maybe<Scalars['String']>,
  callerBuilding?: Maybe<Scalars['String']>,
  stateJkh?: Maybe<Sys112StateType>,
  cardType?: Maybe<EventCardType>,
  callerInfoName?: Maybe<Scalars['String']>,
  storeys?: Maybe<Scalars['String']>,
  stateCouterTerr?: Maybe<Sys112StateType>,
  executorId?: Maybe<Scalars['Int']>,
  eventId?: Maybe<Scalars['UUID']>,
  answer?: Maybe<Scalars['String']>,
  ukio?: Maybe<Scalars['String']>,
  callerAddrLevel2?: Maybe<Scalars['String']>,
  callerAddrLevel1?: Maybe<Scalars['String']>,
  sys112Type?: Maybe<Sys112Type>,
  addrLevel2?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Timestamp']>,
  near?: Maybe<Scalars['String']>,
  sys112Number?: Maybe<Scalars['String']>,
  phoneInfoName?: Maybe<Scalars['String']>,
  addrLevel1?: Maybe<Scalars['String']>,
}

export interface CardInput {
  addrLevel1?: Maybe<Scalars['String']>,
  phoneInfoName?: Maybe<Scalars['String']>,
  attachmentIds?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  near?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Timestamp']>,
  addrLevel2?: Maybe<Scalars['String']>,
  sys112Type?: Maybe<Sys112Type>,
  callerAddrLevel1?: Maybe<Scalars['String']>,
  callerAddrLevel2?: Maybe<Scalars['String']>,
  ukio?: Maybe<Scalars['String']>,
  answer?: Maybe<Scalars['String']>,
  executorId?: Maybe<Scalars['Int']>,
  storeys?: Maybe<Scalars['String']>,
  callerInfoName?: Maybe<Scalars['String']>,
  cardType?: Maybe<EventCardType>,
  callerBuilding?: Maybe<Scalars['String']>,
  sys112TypeName?: Maybe<Scalars['String']>,
  addrCorps?: Maybe<Scalars['String']>,
  addressStr?: Maybe<Scalars['String']>,
  sys112Id?: Maybe<Scalars['String']>,
  callerAddressStr?: Maybe<Scalars['String']>,
  phoneInfoLastName?: Maybe<Scalars['String']>,
  phoneInfoMiddleName?: Maybe<Scalars['String']>,
  phoneInfoPlace?: Maybe<PlaceInput>,
  additionalInfo?: Maybe<Scalars['String']>,
  km?: Maybe<Scalars['String']>,
  phoneInfoAddress?: Maybe<Scalars['String']>,
  kladrCallerAddrLevel1?: Maybe<Scalars['String']>,
  kladrCallerAddrLevel2?: Maybe<Scalars['String']>,
  entrance?: Maybe<Scalars['String']>,
  callerAddrCorps?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  kladrAddrLevel2?: Maybe<Scalars['String']>,
  callerStreet?: Maybe<Scalars['String']>,
  emergencyId?: Maybe<Scalars['Int']>,
  kladrCallerStreet?: Maybe<Scalars['String']>,
  callerInfoMiddleName?: Maybe<Scalars['String']>,
  coordinatorId?: Maybe<Scalars['Int']>,
  place?: Maybe<PlaceInput>,
  limitDate?: Maybe<Scalars['Timestamp']>,
  kladrStreet?: Maybe<Scalars['String']>,
  sys112OperatorId?: Maybe<Scalars['String']>,
  building?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  callerLanguage?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  callerPhone?: Maybe<Scalars['String']>,
  callerAdditionalInfo?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  incidentType?: Maybe<Scalars['String']>,
  callerInfoLastName?: Maybe<Scalars['String']>,
  room?: Maybe<Scalars['String']>,
  withCall?: Maybe<Scalars['Boolean']>,
  injuredPeople?: Maybe<Scalars['String']>,
  entranceCode?: Maybe<Scalars['String']>,
  sys112TypeId?: Maybe<Scalars['Int']>,
  callerRoom?: Maybe<Scalars['String']>,
  peopleInDanger?: Maybe<Scalars['String']>,
  kladrAddrLevel1?: Maybe<Scalars['String']>,
}


export interface Coords {
  lat?: Maybe<Scalars['Float']>,
  lon?: Maybe<Scalars['Float']>,
}

export interface Dimension {
   __typename?: 'Dimension',
  id?: Maybe<Scalars['ID']>,
  physicTitle?: Maybe<Scalars['String']>,
  postfix?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  values?: Maybe<Array<Maybe<DimensionVal>>>,
}

export interface DimensionVal {
   __typename?: 'DimensionVal',
  time?: Maybe<Scalars['Timestamp']>,
  value?: Maybe<Scalars['Float']>,
}

export interface Document {
   __typename?: 'Document',
  attachment?: Maybe<Attachment>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  published?: Maybe<Scalars['Boolean']>,
  publishedAt?: Maybe<Scalars['Timestamp']>,
  title?: Maybe<Scalars['String']>,
}

export interface EcorAttachment {
   __typename?: 'EcorAttachment',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export enum EcorEventStatus {
  Appeared = 'APPEARED',
  Declined = 'DECLINED',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS'
}

export enum EcorEventType {
  Appeal = 'APPEAL',
  PhoneCall = 'PHONE_CALL',
  Signal = 'SIGNAL',
  Sys112 = 'SYS112'
}

export interface EcorObject {
   __typename?: 'EcorObject',
  address?: Maybe<Scalars['String']>,
  attachments?: Maybe<Array<Maybe<EcorAttachment>>>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  objectCategory?: Maybe<EcorObjectCategory>,
  place?: Maybe<Geography>,
  title?: Maybe<Scalars['String']>,
}

export interface EcorObjectCategory {
   __typename?: 'EcorObjectCategory',
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  objects?: Maybe<Array<Maybe<EcorObject>>>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export enum EcorType {
  Alarm = 'ALARM',
  Object = 'OBJECT',
  Sensor = 'SENSOR',
  Transport = 'TRANSPORT',
  VideoCam = 'VIDEO_CAM'
}

export interface EmergencyContact {
   __typename?: 'EmergencyContact',
  contact?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
}

export interface Event {
   __typename?: 'Event',
  monitoringEventId?: Maybe<Scalars['Int']>,
  entranceCode?: Maybe<Scalars['String']>,
  room?: Maybe<Scalars['String']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  userAddress?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  phone?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['String']>,
  cards?: Maybe<Array<Maybe<Card>>>,
  description?: Maybe<Scalars['String']>,
  building?: Maybe<Scalars['String']>,
  appealPlace?: Maybe<Geography>,
  status?: Maybe<EcorEventStatus>,
  appealUserMiddleName?: Maybe<Scalars['String']>,
  appealUserFirstName?: Maybe<Scalars['String']>,
  appealUserLastName?: Maybe<Scalars['String']>,
  place?: Maybe<Geography>,
  phoneCallId?: Maybe<Scalars['Int']>,
  secondName?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  attachments?: Maybe<Array<Maybe<Attachment>>>,
  entrance?: Maybe<Scalars['String']>,
  ecorEventType?: Maybe<EcorEventType>,
  additionalInfo?: Maybe<Scalars['String']>,
  appealUserEmail?: Maybe<Scalars['String']>,
  scenarioId?: Maybe<Scalars['Int']>,
  appealUserPhone?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  addressStr?: Maybe<Scalars['String']>,
  addrCorps?: Maybe<Scalars['String']>,
  eventCategoryId?: Maybe<Scalars['Int']>,
  storeys?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  appealDate?: Maybe<Scalars['Timestamp']>,
  eventTypeId?: Maybe<Scalars['Int']>,
  addrLevel2?: Maybe<Scalars['String']>,
  appealUserId?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Timestamp']>,
  near?: Maybe<Scalars['String']>,
  appealId?: Maybe<Scalars['Int']>,
  appealTypeId?: Maybe<Scalars['Int']>,
  phoneCallRecord?: Maybe<Scalars['String']>,
  addrLevel1?: Maybe<Scalars['String']>,
}

export enum EventCardType {
  Coordinator = 'COORDINATOR',
  Emergency = 'EMERGENCY',
  Sys112 = 'SYS112'
}

export interface EventCategory {
   __typename?: 'EventCategory',
  eventTypes?: Maybe<Array<Maybe<EventType>>>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface EventType {
   __typename?: 'EventType',
  eventCategoryId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  scenarios?: Maybe<Array<Maybe<Scenario>>>,
  title?: Maybe<Scalars['String']>,
}

export interface File {
   __typename?: 'File',
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface FireModelIteration {
   __typename?: 'FireModelIteration',
  iterationNumber?: Maybe<Scalars['Int']>,
  place?: Maybe<Geography>,
  secondsFromPrevious?: Maybe<Scalars['Int']>,
}

export interface Form {
   __typename?: 'Form',
  formAnswers?: Maybe<Array<Maybe<FormAnswer>>>,
  formType?: Maybe<FormType>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  operator?: Maybe<Operator>,
  question?: Maybe<Scalars['String']>,
  respondentIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  title?: Maybe<Scalars['String']>,
  userAnswers?: Maybe<Array<Maybe<UserAnswer>>>,
}

export interface FormAnswer {
   __typename?: 'FormAnswer',
  answer?: Maybe<Scalars['String']>,
  formId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
}

export interface FormAnswerInput {
  answer?: Maybe<Scalars['String']>,
  formId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
}

export enum FormType {
  Custom = 'CUSTOM',
  Quiz = 'QUIZ'
}

export interface FullNewsCategory {
   __typename?: 'FullNewsCategory',
  color?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleTranslate?: Maybe<OutputTranslate>,
}

export type Geography = Point | LineString | Polygon;

export enum GeographyType {
  LineString = 'LINE_STRING',
  Point = 'POINT',
  Polygon = 'POLYGON'
}

export interface GisLayer {
   __typename?: 'GisLayer',
  name?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface GroupNotification {
   __typename?: 'GroupNotification',
  activityTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
  actualLocation?: Maybe<Scalars['Boolean']>,
  area?: Maybe<Geography>,
  id?: Maybe<Scalars['UUID']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  message?: Maybe<Scalars['String']>,
  methods?: Maybe<Array<Maybe<GroupNotificationMethod>>>,
  probableLocation?: Maybe<Scalars['Boolean']>,
  radius?: Maybe<Scalars['Int']>,
  status?: Maybe<GroupNotificationStatus>,
  template?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<GroupNotificationType>,
}

export enum GroupNotificationMethod {
  Email = 'EMAIL',
  Push = 'PUSH',
  Sms = 'SMS',
  Websocket = 'WEBSOCKET'
}

export enum GroupNotificationStatus {
  Created = 'CREATED',
  Delivered = 'DELIVERED'
}

export enum GroupNotificationType {
  Emergency = 'EMERGENCY',
  Info = 'INFO',
  Warning = 'WARNING'
}

export interface InputBlock {
  attachmentId?: Maybe<Scalars['UUID']>,
  blockContent?: Maybe<Translate>,
  blockType?: Maybe<NewsBlockType>,
  placeInput?: Maybe<PlaceInput>,
}

export interface Journal {
   __typename?: 'Journal',
  action?: Maybe<Scalars['String']>,
  actionLevel?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Timestamp']>,
  description?: Maybe<Scalars['String']>,
  object?: Maybe<Scalars['String']>,
  objectId?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  userName?: Maybe<Scalars['String']>,
}

export interface LineString {
   __typename?: 'LineString',
  coordinates?: Maybe<Array<Maybe<Scalars['Coordinates']>>>,
}

export interface MonitoringObject {
   __typename?: 'MonitoringObject',
  additionalInfo?: Maybe<Array<Maybe<AdditionalInfo>>>,
  address?: Maybe<Scalars['String']>,
  attachments?: Maybe<Array<Maybe<EcorAttachment>>>,
  devices?: Maybe<Array<Maybe<MonitoringObjectDevice>>>,
  ecorType?: Maybe<EcorType>,
  id?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  place?: Maybe<Geography>,
  previewSrc?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  source?: Maybe<Source>,
  sourceId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface MonitoringObjectDevice {
   __typename?: 'MonitoringObjectDevice',
  deviceType?: Maybe<Scalars['String']>,
  dimensions?: Maybe<Array<Maybe<Dimension>>>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export enum NewsBlockType {
  Image = 'IMAGE',
  Place = 'PLACE',
  Text = 'TEXT'
}

export interface NewsCategory {
   __typename?: 'NewsCategory',
  color?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface NewsEntity {
   __typename?: 'NewsEntity',
  blocks?: Maybe<Array<Maybe<Block>>>,
  categories?: Maybe<Array<Maybe<NewsCategory>>>,
  cover?: Maybe<Attachment>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  localeList?: Maybe<Array<Maybe<Scalars['String']>>>,
  pinned?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  routeIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  sendNotification?: Maybe<Scalars['Boolean']>,
  showOnMain?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Object {
   __typename?: 'Object',
  address?: Maybe<Scalars['String']>,
  attachments?: Maybe<Array<Maybe<Attachment>>>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  image?: Maybe<File>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  objectCategory?: Maybe<ObjectCategory>,
  place?: Maybe<Geography>,
  title?: Maybe<Scalars['String']>,
}

export interface ObjectCategory {
   __typename?: 'ObjectCategory',
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  objects?: Maybe<Array<Maybe<Object>>>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface OpenDataFile {
   __typename?: 'OpenDataFile',
  description?: Maybe<Scalars['String']>,
  generatedId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  licence?: Maybe<Scalars['String']>,
  openDataFileVersions?: Maybe<Array<Maybe<OpenDataFileVersion>>>,
  orgInn?: Maybe<Scalars['String']>,
  orgTitle?: Maybe<Scalars['String']>,
  responsibleContacts?: Maybe<Scalars['String']>,
  responsibleFio?: Maybe<Scalars['String']>,
  rubric?: Maybe<OpendataRubric>,
  title?: Maybe<Scalars['String']>,
}

export interface OpenDataFileVersion {
   __typename?: 'OpenDataFileVersion',
  attachment?: Maybe<Attachment>,
  file?: Maybe<File>,
  id?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export interface OpendataRubric {
   __typename?: 'OpendataRubric',
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  openDataFiles?: Maybe<Array<Maybe<OpenDataFile>>>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface Operator {
   __typename?: 'Operator',
  acl?: Maybe<Acl>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  organisation?: Maybe<Organisation>,
  phone?: Maybe<Scalars['String']>,
  role?: Maybe<OperatorRole>,
}

export enum OperatorRole {
  Admin = 'ADMIN',
  Cms = 'CMS',
  Coordinator = 'COORDINATOR',
  Custom = 'CUSTOM',
  Emergency = 'EMERGENCY',
  Executor = 'EXECUTOR',
  Operator = 'OPERATOR'
}

export interface Organisation {
   __typename?: 'Organisation',
  id?: Maybe<Scalars['Int']>,
  role?: Maybe<OrganisationRole>,
  title?: Maybe<Scalars['String']>,
}

export enum OrganisationRole {
  Coordinator = 'COORDINATOR',
  Emergency = 'EMERGENCY',
  Executor = 'EXECUTOR'
}

export interface OutputTranslate {
   __typename?: 'OutputTranslate',
  en?: Maybe<Scalars['String']>,
  ru?: Maybe<Scalars['String']>,
}

export interface PlaceInput {
  lineStringCoordinates?: Maybe<Array<Maybe<Coords>>>,
  pointCoordinates?: Maybe<Coords>,
  polygonCoordinates?: Maybe<Array<Maybe<Array<Maybe<Coords>>>>>,
  type?: Maybe<GeographyType>,
}

export interface Point {
   __typename?: 'Point',
  coordinates?: Maybe<Scalars['Coordinates']>,
}

export interface Polygon {
   __typename?: 'Polygon',
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Coordinates']>>>>>,
}

export interface RootMutationType {
   __typename?: 'RootMutationType',
  /** Update opendata rubric */
  opendataRubricUpdate?: Maybe<OpendataRubric>,
  /** Create attachment */
  ecorAttachmentCreate?: Maybe<EcorAttachment>,
  /** Create object */
  ecorObjectCreate?: Maybe<EcorObject>,
  /** Create support_info */
  portalSupportInfoCreate?: Maybe<SupportInfo>,
  /** Answer form */
  answerForm?: Maybe<UserAnswer>,
  /** Delete opendata file */
  openDataFileDelete?: Maybe<Scalars['String']>,
  /** Delete group notification */
  groupNotificationDelete?: Maybe<Scalars['String']>,
  /** Update event_category */
  eventCategoryUpdate?: Maybe<EventCategory>,
  /** Update appeal_type */
  appealTypeUpdate?: Maybe<AppealType>,
  /** Update news */
  portalNewsUpdate?: Maybe<NewsEntity>,
  /** Update scenario (with cards) */
  scenarioUpdate?: Maybe<Scenario>,
  /** Update monitoring objects */
  monitoringObjectUpdate?: Maybe<MonitoringObject>,
  /** Update card */
  eventCardsUpdate?: Maybe<Card>,
  /** Create emergency contact */
  portalEmergencyContactCreate?: Maybe<EmergencyContact>,
  /** Delete attachment */
  portalAttachmentDelete?: Maybe<Scalars['String']>,
  /** Delete card */
  eventCardsDelete?: Maybe<Scalars['String']>,
  /** Delete news */
  portalNewsDelete?: Maybe<Scalars['String']>,
  /** Update operator */
  operatorUpdate?: Maybe<Operator>,
  /** Sign in */
  sessionCreate?: Maybe<Session>,
  /** Update object category */
  objectCategoryUpdate?: Maybe<ObjectCategory>,
  /** Update opendata file */
  openDataFileUpdate?: Maybe<OpenDataFile>,
  /** Create object category */
  ecorObjectCategoryCreate?: Maybe<EcorObjectCategory>,
  /** Create object */
  objectCreate?: Maybe<Object>,
  /** Create operator */
  operatorCreate?: Maybe<Operator>,
  /** Delete news category */
  portalNewsCategoryDelete?: Maybe<Scalars['String']>,
  /** Update opendata file version */
  openDataFileVersionUpdate?: Maybe<OpenDataFileVersion>,
  /** Update group notification */
  groupNotificationUpdate?: Maybe<GroupNotification>,
  /** Create news */
  portalNewsCreate?: Maybe<NewsEntity>,
  /** Create appeal_type */
  appealTypeCreate?: Maybe<AppealType>,
  /** Update support_info */
  portalSupportInfoUpdate?: Maybe<SupportInfo>,
  /** Delete attachment */
  ecorAttachmentDelete?: Maybe<Scalars['String']>,
  /** Create group notification */
  groupNotificationCreate?: Maybe<GroupNotification>,
  /** Create opendata rubric */
  opendataRubricCreate?: Maybe<OpendataRubric>,
  /** Update emergency contact */
  portalEmergencyContactUpdate?: Maybe<EmergencyContact>,
  /** Create Organisation */
  organisationCreate?: Maybe<Organisation>,
  /** Update document */
  portalDocumentUpdate?: Maybe<Document>,
  /** Delete object category */
  ecorObjectCategoryDelete?: Maybe<Scalars['String']>,
  /** Refresh session */
  sessionUpdate?: Maybe<Session>,
  /** Update object category */
  ecorObjectCategoryUpdate?: Maybe<EcorObjectCategory>,
  /** Delete appeal_type */
  appealTypeDelete?: Maybe<Scalars['String']>,
  /** Update event_type */
  eventTypeUpdate?: Maybe<EventType>,
  /** Delete operator */
  operatorDelete?: Maybe<Scalars['String']>,
  /** Create opendata file version */
  openDataFileVersionCreate?: Maybe<OpenDataFileVersion>,
  /** Update object */
  objectUpdate?: Maybe<Object>,
  /** Create event_category */
  eventCategoryCreate?: Maybe<EventCategory>,
  /** Create document */
  portalDocumentCreate?: Maybe<Document>,
  /** Create news category */
  portalNewsCategoryCreate?: Maybe<FullNewsCategory>,
  /** Create object category */
  objectCategoryCreate?: Maybe<ObjectCategory>,
  /** Update form */
  formUpdate?: Maybe<Form>,
  /** Delete form */
  formDelete?: Maybe<Scalars['String']>,
  /** Delete event_category */
  eventCategoryDelete?: Maybe<Scalars['String']>,
  /** Create banner */
  bannerCreate?: Maybe<Banner>,
  /** Create scenario (with cards) */
  scenarioCreate?: Maybe<Scenario>,
  /** Delete support_info */
  portalSupportInfoDelete?: Maybe<Scalars['String']>,
  /** Update event (with cards) */
  eventUpdate?: Maybe<Event>,
  /** Delete object category */
  objectCategoryDelete?: Maybe<Scalars['String']>,
  /** Delete event_type */
  eventTypeDelete?: Maybe<Scalars['String']>,
  /** Delete document */
  portalDocumentDelete?: Maybe<Scalars['String']>,
  /** Create opendata file */
  openDataFileCreate?: Maybe<OpenDataFile>,
  /** Delete banner */
  bannerDelete?: Maybe<Scalars['String']>,
  /** Delete opendata file version */
  openDataFileVersionDelete?: Maybe<Scalars['String']>,
  /** Update news category */
  portalNewsCategoryUpdate?: Maybe<FullNewsCategory>,
  /** Create event_type */
  eventTypeCreate?: Maybe<EventType>,
  /** Delete emergency contact */
  portalEmergencyContactDelete?: Maybe<Scalars['String']>,
  /** Sign out */
  sessionDelete?: Maybe<Scalars['String']>,
  /** Update banner */
  bannerUpdate?: Maybe<Banner>,
  /** Delete object */
  objectDelete?: Maybe<Scalars['String']>,
  /** Create form */
  formCreate?: Maybe<Form>,
  /** Delete Organisation */
  organisationDelete?: Maybe<Scalars['String']>,
  /** Delete opendata rubric */
  opendataRubricDelete?: Maybe<Scalars['String']>,
  /** Update object */
  ecorObjectUpdate?: Maybe<EcorObject>,
  /** Delete object */
  ecorObjectDelete?: Maybe<Scalars['String']>,
  /** Update Organisation */
  organisationUpdate?: Maybe<Organisation>,
  /** Create attachment */
  portalAttachmentCreate?: Maybe<Attachment>,
}


export interface RootMutationTypeOpendataRubricUpdateArgs {
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeEcorAttachmentCreateArgs {
  file?: Maybe<Scalars['Upload']>
}


export interface RootMutationTypeEcorObjectCreateArgs {
  address?: Maybe<Scalars['String']>,
  attachmentIds?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  description?: Maybe<Scalars['String']>,
  objectCategoryId?: Maybe<Scalars['Int']>,
  placeInput?: Maybe<PlaceInput>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalSupportInfoCreateArgs {
  blocks?: Maybe<Array<Maybe<SupportInfoInputBlock>>>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAnswerFormArgs {
  customAnswer?: Maybe<Scalars['Float']>,
  formAnswerId?: Maybe<Scalars['Int']>,
  formId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOpenDataFileDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeGroupNotificationDeleteArgs {
  id?: Maybe<Scalars['UUID']>
}


export interface RootMutationTypeEventCategoryUpdateArgs {
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAppealTypeUpdateArgs {
  additionalQuestions?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateEnd?: Maybe<Scalars['Timestamp']>,
  dateStart?: Maybe<Scalars['Timestamp']>,
  id?: Maybe<Scalars['Int']>,
  timeLimit?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalNewsUpdateArgs {
  blocks?: Maybe<Array<Maybe<InputBlock>>>,
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>,
  coverId?: Maybe<Scalars['UUID']>,
  id?: Maybe<Scalars['Int']>,
  localeList?: Maybe<Array<Maybe<Scalars['String']>>>,
  pinned?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  sendNotification?: Maybe<Scalars['Boolean']>,
  showOnMain?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  titleTranslate?: Maybe<Translate>,
  url?: Maybe<Scalars['String']>
}


export interface RootMutationTypeScenarioUpdateArgs {
  cards?: Maybe<Array<Maybe<CardInput>>>,
  eventCategoryId?: Maybe<Scalars['Int']>,
  eventTypeId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeMonitoringObjectUpdateArgs {
  additionalInfo?: Maybe<Array<Maybe<AdditionalInfoInput>>>,
  id?: Maybe<Scalars['String']>
}


export interface RootMutationTypeEventCardsUpdateArgs {
  card?: Maybe<CardInput>
}


export interface RootMutationTypePortalEmergencyContactCreateArgs {
  contact?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalAttachmentDeleteArgs {
  id?: Maybe<Scalars['UUID']>
}


export interface RootMutationTypeEventCardsDeleteArgs {
  id?: Maybe<Scalars['UUID']>
}


export interface RootMutationTypePortalNewsDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOperatorUpdateArgs {
  acl?: Maybe<AclInput>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  organisationId?: Maybe<Scalars['Int']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  role?: Maybe<OperatorRole>
}


export interface RootMutationTypeSessionCreateArgs {
  email: Scalars['String'],
  password: Scalars['String']
}


export interface RootMutationTypeObjectCategoryUpdateArgs {
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeOpenDataFileUpdateArgs {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  licence?: Maybe<Scalars['String']>,
  orgInn?: Maybe<Scalars['String']>,
  orgTitle?: Maybe<Scalars['String']>,
  responsibleContacts?: Maybe<Scalars['String']>,
  responsibleFio?: Maybe<Scalars['String']>,
  rubricId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeEcorObjectCategoryCreateArgs {
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeObjectCreateArgs {
  address?: Maybe<Scalars['String']>,
  attachmentIds?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['Upload']>,
  objectCategoryId?: Maybe<Scalars['Int']>,
  placeInput?: Maybe<PlaceInput>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeOperatorCreateArgs {
  acl?: Maybe<AclInput>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  organisationId?: Maybe<Scalars['Int']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  role?: Maybe<OperatorRole>
}


export interface RootMutationTypePortalNewsCategoryDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOpenDataFileVersionUpdateArgs {
  attachmentId?: Maybe<Scalars['String']>,
  file?: Maybe<Scalars['Upload']>,
  id?: Maybe<Scalars['Int']>,
  openDataFileId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeGroupNotificationUpdateArgs {
  activityTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
  actualLocation?: Maybe<Scalars['Boolean']>,
  area?: Maybe<Coords>,
  id?: Maybe<Scalars['UUID']>,
  message?: Maybe<Scalars['String']>,
  methods?: Maybe<Array<Maybe<GroupNotificationMethod>>>,
  probableLocation?: Maybe<Scalars['Boolean']>,
  radius?: Maybe<Scalars['Int']>,
  template?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<GroupNotificationType>
}


export interface RootMutationTypePortalNewsCreateArgs {
  blocks?: Maybe<Array<Maybe<InputBlock>>>,
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>,
  coverId?: Maybe<Scalars['UUID']>,
  localeList?: Maybe<Array<Maybe<Scalars['String']>>>,
  pinned?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  sendNotification?: Maybe<Scalars['Boolean']>,
  showOnMain?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  titleTranslate?: Maybe<Translate>,
  url?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAppealTypeCreateArgs {
  additionalQuestions?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateEnd?: Maybe<Scalars['Timestamp']>,
  dateStart?: Maybe<Scalars['Timestamp']>,
  timeLimit?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalSupportInfoUpdateArgs {
  blocks?: Maybe<Array<Maybe<SupportInfoInputBlock>>>,
  id?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeEcorAttachmentDeleteArgs {
  id?: Maybe<Scalars['UUID']>
}


export interface RootMutationTypeGroupNotificationCreateArgs {
  activityTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
  actualLocation?: Maybe<Scalars['Boolean']>,
  area?: Maybe<Coords>,
  message?: Maybe<Scalars['String']>,
  methods?: Maybe<Array<Maybe<GroupNotificationMethod>>>,
  probableLocation?: Maybe<Scalars['Boolean']>,
  radius?: Maybe<Scalars['Int']>,
  template?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<GroupNotificationType>
}


export interface RootMutationTypeOpendataRubricCreateArgs {
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalEmergencyContactUpdateArgs {
  contact?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeOrganisationCreateArgs {
  role?: Maybe<OrganisationRole>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalDocumentUpdateArgs {
  attachmentId?: Maybe<Scalars['UUID']>,
  id?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>,
  publishedAt?: Maybe<Scalars['Timestamp']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeEcorObjectCategoryDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeSessionUpdateArgs {
  refreshToken: Scalars['UUID']
}


export interface RootMutationTypeEcorObjectCategoryUpdateArgs {
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAppealTypeDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeEventTypeUpdateArgs {
  eventCategoryId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeOperatorDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOpenDataFileVersionCreateArgs {
  attachmentId?: Maybe<Scalars['String']>,
  file?: Maybe<Scalars['Upload']>,
  openDataFileId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeObjectUpdateArgs {
  address?: Maybe<Scalars['String']>,
  attachmentIds?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  image?: Maybe<Scalars['Upload']>,
  objectCategoryId?: Maybe<Scalars['Int']>,
  placeInput?: Maybe<PlaceInput>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeEventCategoryCreateArgs {
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalDocumentCreateArgs {
  attachmentId?: Maybe<Scalars['UUID']>,
  published?: Maybe<Scalars['Boolean']>,
  publishedAt?: Maybe<Scalars['Timestamp']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalNewsCategoryCreateArgs {
  color?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleTranslate?: Maybe<Translate>
}


export interface RootMutationTypeObjectCategoryCreateArgs {
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeFormUpdateArgs {
  formAnswers?: Maybe<Array<Maybe<FormAnswerInput>>>,
  formType?: Maybe<FormType>,
  id?: Maybe<Scalars['Int']>,
  question?: Maybe<Scalars['String']>,
  respondentIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeFormDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeEventCategoryDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeBannerCreateArgs {
  attachmentId?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['Upload']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>
}


export interface RootMutationTypeScenarioCreateArgs {
  cards?: Maybe<Array<Maybe<CardInput>>>,
  eventCategoryId?: Maybe<Scalars['Int']>,
  eventTypeId?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalSupportInfoDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeEventUpdateArgs {
  additionalInfo?: Maybe<Scalars['String']>,
  addrCorps?: Maybe<Scalars['String']>,
  addrLevel1?: Maybe<Scalars['String']>,
  addrLevel2?: Maybe<Scalars['String']>,
  addressStr?: Maybe<Scalars['String']>,
  building?: Maybe<Scalars['String']>,
  cards?: Maybe<Array<Maybe<CardInput>>>,
  date?: Maybe<Scalars['Timestamp']>,
  description?: Maybe<Scalars['String']>,
  ecorEventType?: Maybe<EcorEventType>,
  entrance?: Maybe<Scalars['String']>,
  entranceCode?: Maybe<Scalars['String']>,
  eventCategoryId?: Maybe<Scalars['Int']>,
  eventTypeId?: Maybe<Scalars['Int']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  label?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['String']>,
  near?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  place?: Maybe<PlaceInput>,
  room?: Maybe<Scalars['String']>,
  scenarioId?: Maybe<Scalars['Int']>,
  secondName?: Maybe<Scalars['String']>,
  status?: Maybe<EcorEventStatus>,
  storeys?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  userAddress?: Maybe<Scalars['String']>
}


export interface RootMutationTypeObjectCategoryDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeEventTypeDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypePortalDocumentDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOpenDataFileCreateArgs {
  description?: Maybe<Scalars['String']>,
  licence?: Maybe<Scalars['String']>,
  orgInn?: Maybe<Scalars['String']>,
  orgTitle?: Maybe<Scalars['String']>,
  responsibleContacts?: Maybe<Scalars['String']>,
  responsibleFio?: Maybe<Scalars['String']>,
  rubricId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeBannerDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOpenDataFileVersionDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypePortalNewsCategoryUpdateArgs {
  color?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  titleTranslate?: Maybe<Translate>
}


export interface RootMutationTypeEventTypeCreateArgs {
  eventCategoryId?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalEmergencyContactDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeBannerUpdateArgs {
  attachmentId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  image?: Maybe<Scalars['Upload']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>
}


export interface RootMutationTypeObjectDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeFormCreateArgs {
  formAnswers?: Maybe<Array<Maybe<FormAnswerInput>>>,
  formType?: Maybe<FormType>,
  question?: Maybe<Scalars['String']>,
  respondentIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeOrganisationDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOpendataRubricDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeEcorObjectUpdateArgs {
  address?: Maybe<Scalars['String']>,
  attachmentIds?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  objectCategoryId?: Maybe<Scalars['Int']>,
  placeInput?: Maybe<PlaceInput>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeEcorObjectDeleteArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOrganisationUpdateArgs {
  id?: Maybe<Scalars['Int']>,
  role?: Maybe<OrganisationRole>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypePortalAttachmentCreateArgs {
  file?: Maybe<Scalars['Upload']>
}

export interface RootQueryType {
   __typename?: 'RootQueryType',
  /** Get banners by admin */
  adminBannersGet?: Maybe<Array<Maybe<Banner>>>,
  /** Get appeal_types */
  appealTypesGet?: Maybe<Array<Maybe<AppealType>>>,
  /** Get cards */
  cards?: Maybe<Array<Maybe<Card>>>,
  /** Get object categories */
  ecorObjectCategoriesGet?: Maybe<Array<Maybe<EcorObjectCategory>>>,
  /** Get objects */
  ecorObjectsGet?: Maybe<Array<Maybe<EcorObject>>>,
  /** Get event_categories */
  eventCategoriesGet?: Maybe<Array<Maybe<EventCategory>>>,
  /** Get event_types */
  eventTypesGet?: Maybe<Array<Maybe<EventType>>>,
  /** Get events */
  events?: Maybe<Array<Maybe<Event>>>,
  /** Get fire iterations */
  fireIterationsGet?: Maybe<Array<Maybe<FireModelIteration>>>,
  /** Get forms */
  formsGet?: Maybe<Array<Maybe<Form>>>,
  /** Get WMS layers */
  gisLayersGet?: Maybe<Array<Maybe<GisLayer>>>,
  /** Get users activity types for group notification */
  groupNotificationActivityTypesGet?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** Get group notifications */
  groupNotificationsGet?: Maybe<Array<Maybe<GroupNotification>>>,
  /** Get journal logs */
  journalGet?: Maybe<Array<Maybe<Journal>>>,
  /** Get monitoring objects */
  monitoringObjectsGet?: Maybe<Array<Maybe<MonitoringObject>>>,
  /** Get object categories */
  objectCategoriesGet?: Maybe<Array<Maybe<ObjectCategory>>>,
  /** Get objects */
  objectsGet?: Maybe<Array<Maybe<Object>>>,
  /** Get opendata file */
  opendataFileGet?: Maybe<OpenDataFile>,
  /** Get opendata rubrics */
  opendataRubricsGet?: Maybe<Array<Maybe<OpendataRubric>>>,
  /** Get operators */
  operatorsGet?: Maybe<Array<Maybe<Operator>>>,
  /** Get organisations */
  organisationsGet?: Maybe<Array<Maybe<Organisation>>>,
  /** Get documents */
  portalDocumentsGet?: Maybe<Array<Maybe<Document>>>,
  /** Get emergency contacts */
  portalEmergencyContactsGet?: Maybe<Array<Maybe<EmergencyContact>>>,
  /** Get news categories */
  portalNewsCategoriesGet?: Maybe<Array<Maybe<FullNewsCategory>>>,
  /** Get news */
  portalNewsGet?: Maybe<Array<Maybe<NewsEntity>>>,
  /** Get support_info */
  portalSupportInfoGet?: Maybe<Array<Maybe<SupportInfo>>>,
  /** Get profile */
  profileGet?: Maybe<Operator>,
  /** Get scenarios */
  scenariosGet?: Maybe<Array<Maybe<Scenario>>>,
  /** Get vk_posts */
  vkPostsGet?: Maybe<Array<Maybe<VkPost>>>,
}


export interface RootQueryTypeAdminBannersGetArgs {
  id?: Maybe<Scalars['ID']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>
}


export interface RootQueryTypeAppealTypesGetArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeCardsArgs {
  eventIds?: Maybe<Array<Maybe<Scalars['UUID']>>>
}


export interface RootQueryTypeEcorObjectCategoriesGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}


export interface RootQueryTypeEcorObjectsGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}


export interface RootQueryTypeEventCategoriesGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootQueryTypeEventTypesGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootQueryTypeFireIterationsGetArgs {
  fireAgentDistance?: Maybe<Scalars['Int']>,
  fireCenter?: Maybe<PlaceInput>,
  fireClass?: Maybe<Scalars['Int']>,
  fuelTypeCode?: Maybe<Scalars['Int']>,
  iterationStepTime?: Maybe<Scalars['Int']>,
  lastIterationTime?: Maybe<Scalars['Int']>,
  windDirection?: Maybe<Scalars['Float']>,
  windSpeed?: Maybe<Scalars['Float']>
}


export interface RootQueryTypeFormsGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}


export interface RootQueryTypeGroupNotificationActivityTypesGetArgs {
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGroupNotificationsGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  template?: Maybe<Scalars['Boolean']>
}


export interface RootQueryTypeJournalGetArgs {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeMonitoringObjectsGetArgs {
  ecorTypes?: Maybe<Array<Maybe<EcorType>>>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  sources?: Maybe<Array<Maybe<Source>>>
}


export interface RootQueryTypeObjectCategoriesGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}


export interface RootQueryTypeObjectsGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}


export interface RootQueryTypeOpendataFileGetArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeOperatorsGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeOrganisationsGetArgs {
  roles?: Maybe<Array<Maybe<OrganisationRole>>>
}


export interface RootQueryTypePortalDocumentsGetArgs {
  id?: Maybe<Scalars['ID']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypePortalEmergencyContactsGetArgs {
  id?: Maybe<Scalars['ID']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  published?: Maybe<Scalars['Boolean']>
}


export interface RootQueryTypePortalNewsCategoriesGetArgs {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypePortalNewsGetArgs {
  id?: Maybe<Scalars['ID']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  pinned?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  publishedAtGt?: Maybe<Scalars['Timestamp']>,
  publishedAtLt?: Maybe<Scalars['Timestamp']>,
  routeIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  search?: Maybe<Scalars['String']>,
  showOnMain?: Maybe<Scalars['Boolean']>
}


export interface RootQueryTypePortalSupportInfoGetArgs {
  id?: Maybe<Scalars['ID']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  pinned?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  publishedAtGt?: Maybe<Scalars['Timestamp']>,
  publishedAtLt?: Maybe<Scalars['Timestamp']>,
  routeIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  search?: Maybe<Scalars['String']>,
  showOnMain?: Maybe<Scalars['Boolean']>
}


export interface RootQueryTypeScenariosGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootQueryTypeVkPostsGetArgs {
  bboxBottom?: Maybe<Scalars['Float']>,
  bboxLeft?: Maybe<Scalars['Float']>,
  bboxRight?: Maybe<Scalars['Float']>,
  bboxTop?: Maybe<Scalars['Float']>,
  dateFinish?: Maybe<Scalars['Timestamp']>,
  dateStart?: Maybe<Scalars['Timestamp']>,
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  searchTags?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface Scenario {
   __typename?: 'Scenario',
  cards?: Maybe<Array<Maybe<Card>>>,
  eventCategoryId?: Maybe<Scalars['Int']>,
  eventTypeId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface Session {
   __typename?: 'Session',
  expireAt?: Maybe<Scalars['Timestamp']>,
  operator?: Maybe<Operator>,
  refreshToken?: Maybe<Scalars['UUID']>,
  token?: Maybe<Scalars['UUID']>,
}

export enum Source {
  Csmto = 'CSMTO',
  Csor = 'CSOR',
  Events = 'EVENTS',
  Objects = 'OBJECTS',
  Rasco = 'RASCO',
  Rnis = 'RNIS',
  Sevstar = 'SEVSTAR',
  Sevtelecom = 'SEVTELECOM',
  Sps = 'SPS'
}

export interface SupportInfo {
   __typename?: 'SupportInfo',
  blocks?: Maybe<Array<Maybe<SupportInfoBlock>>>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
}

export interface SupportInfoBlock {
   __typename?: 'SupportInfoBlock',
  attachment?: Maybe<Attachment>,
  blockContent?: Maybe<Scalars['String']>,
  blockType?: Maybe<SupportInfoBlockType>,
  id?: Maybe<Scalars['String']>,
}

export enum SupportInfoBlockType {
  Image = 'IMAGE',
  Text = 'TEXT'
}

export interface SupportInfoInputBlock {
  attachmentId?: Maybe<Scalars['UUID']>,
  blockContent?: Maybe<Scalars['String']>,
  blockType?: Maybe<NewsBlockType>,
}

export enum Sys112StateType {
  Done = 'DONE',
  InAction = 'IN_ACTION',
  Request_112 = 'REQUEST_112',
  Watched = 'WATCHED'
}

export enum Sys112Type {
  Child = 'CHILD',
  CouterTerr = 'COUTER_TERR',
  Edds = 'EDDS',
  Firefight = 'FIREFIGHT',
  Gas = 'GAS',
  HeatSys = 'HEAT_SYS',
  Lie = 'LIE',
  Medicine = 'MEDICINE',
  Police = 'POLICE',
  Regional = 'REGIONAL',
  Repeat = 'REPEAT',
  Spr = 'SPR'
}


export interface Translate {
  en?: Maybe<Scalars['String']>,
  ru?: Maybe<Scalars['String']>,
}


export interface UserAnswer {
   __typename?: 'UserAnswer',
  customAnswer?: Maybe<Scalars['Float']>,
  formAnswerId?: Maybe<Scalars['Int']>,
  formId?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  operatorId?: Maybe<Scalars['Int']>,
}


export interface VkPost {
   __typename?: 'VkPost',
  address?: Maybe<Scalars['String']>,
  attachments?: Maybe<Array<Maybe<EcorAttachment>>>,
  commentsCount?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Timestamp']>,
  groupName?: Maybe<Scalars['String']>,
  groupUrl?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  likesCount?: Maybe<Scalars['Int']>,
  markedAsAds?: Maybe<Scalars['Boolean']>,
  place?: Maybe<Geography>,
  text?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  viewsCount?: Maybe<Scalars['Int']>,
}

export type SessionDataFragment = (
  { __typename?: 'Session' }
  & Pick<Session, 'token' | 'refreshToken' | 'expireAt'>
);

export type SessionCreateMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type SessionCreateMutation = (
  { __typename?: 'RootMutationType' }
  & { sessionCreate: Maybe<(
    { __typename?: 'Session' }
    & SessionDataFragment
  )> }
);

export type SessionUpdateMutationVariables = {
  refreshToken: Scalars['UUID']
};


export type SessionUpdateMutation = (
  { __typename?: 'RootMutationType' }
  & { sessionUpdate: Maybe<(
    { __typename?: 'Session' }
    & SessionDataFragment
  )> }
);

export type SessionDeleteMutationVariables = {};


export type SessionDeleteMutation = (
  { __typename?: 'RootMutationType' }
  & Pick<RootMutationType, 'sessionDelete'>
);

export const SessionDataFragmentDoc = gql`
    fragment SessionData on Session {
  token
  refreshToken
  expireAt
}
    `;
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
export const SessionUpdateDocument = gql`
    mutation sessionUpdate($refreshToken: UUID!) {
  sessionUpdate(refreshToken: $refreshToken) {
    ...SessionData
  }
}
    ${SessionDataFragmentDoc}`;
export type SessionUpdateMutationFn = ApolloReactCommon.MutationFunction<SessionUpdateMutation, SessionUpdateMutationVariables>;

/**
 * __useSessionUpdateMutation__
 *
 * To run a mutation, you first call `useSessionUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSessionUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sessionUpdateMutation, { data, loading, error }] = useSessionUpdateMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useSessionUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SessionUpdateMutation, SessionUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<SessionUpdateMutation, SessionUpdateMutationVariables>(SessionUpdateDocument, baseOptions);
      }
export type SessionUpdateMutationHookResult = ReturnType<typeof useSessionUpdateMutation>;
export type SessionUpdateMutationResult = ApolloReactCommon.MutationResult<SessionUpdateMutation>;
export type SessionUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<SessionUpdateMutation, SessionUpdateMutationVariables>;
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