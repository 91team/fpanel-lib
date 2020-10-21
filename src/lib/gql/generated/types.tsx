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
  /** Unix timestamp */
  Timestamp: number,
  /** 
 * The `Json` scalar type represents arbitrary json string data, represented as UTF-8
   * character sequences. The Json type is most often used to represent a free-form
   * human-readable json string.
 **/
  Json: any,
  /** UUID scalar */
  UUID: string,
  /** Represents an uploaded file. */
  Upload: File,
}

export interface Acl {
   __typename?: 'Acl',
  etl?: Maybe<EtlAcl>,
  olap?: Maybe<OlapAcl>,
  ose?: Maybe<OseAcl>,
  shared?: Maybe<SharedAcl>,
}

export enum Agg {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Median = 'MEDIAN',
  Min = 'MIN',
  Sum = 'SUM'
}

export enum ArgType {
  AnyDate = 'ANY_DATE',
  AnyNumber = 'ANY_NUMBER',
  AnyString = 'ANY_STRING',
  ColDate = 'COL_DATE',
  ColNumber = 'COL_NUMBER',
  ColString = 'COL_STRING',
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
}

export interface Attachment {
   __typename?: 'Attachment',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export interface Autocomplete {
   __typename?: 'Autocomplete',
  column?: Maybe<Column>,
  function?: Maybe<Function>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<AutocompleteType>,
}

export enum AutocompleteType {
  Column = 'COLUMN',
  Function = 'FUNCTION',
  Keyword = 'KEYWORD'
}

export enum CaseType {
  Capitalize = 'CAPITALIZE',
  Lower = 'LOWER',
  None = 'NONE',
  Upper = 'UPPER'
}

export interface Change {
   __typename?: 'Change',
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  changeType?: Maybe<ChangeType>,
  column?: Maybe<Column>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
}

export interface ChangeCaseTypeInput {
  value?: Maybe<CaseType>,
}

export enum ChangeType {
  ChangeCaseType = 'CHANGE_CASE_TYPE',
  ChangeCodecs = 'CHANGE_CODECS',
  ChangeDataType = 'CHANGE_DATA_TYPE',
  ChangeInclude = 'CHANGE_INCLUDE',
  ChangePosition = 'CHANGE_POSITION',
  ChangeTitle = 'CHANGE_TITLE',
  ChangeWidth = 'CHANGE_WIDTH',
  DeleteColumn = 'DELETE_COLUMN',
  DeleteColumns = 'DELETE_COLUMNS',
  RemoveLetters = 'REMOVE_LETTERS',
  RemoveNumbers = 'REMOVE_NUMBERS',
  RemovePunctuation = 'REMOVE_PUNCTUATION',
  TrimSpaces = 'TRIM_SPACES',
  UnionColumns = 'UNION_COLUMNS'
}

export interface ChatAvatar {
   __typename?: 'ChatAvatar',
  large?: Maybe<Scalars['String']>,
  small?: Maybe<Scalars['String']>,
}

export interface ChatMessage {
   __typename?: 'ChatMessage',
  embed?: Maybe<Scalars['Json']>,
  messageId?: Maybe<Scalars['String']>,
  reply?: Maybe<ChatMessage>,
  replyId?: Maybe<Scalars['String']>,
  roomId?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  user?: Maybe<ChatUser>,
  userId?: Maybe<Scalars['String']>,
}

export interface ChatOnline {
   __typename?: 'ChatOnline',
  id?: Maybe<Scalars['String']>,
  meta?: Maybe<ChatOnlineMeta>,
}

export interface ChatOnlineMeta {
   __typename?: 'ChatOnlineMeta',
  onlineAt?: Maybe<Scalars['Int']>,
}

export interface ChatRoom {
   __typename?: 'ChatRoom',
  dialog?: Maybe<Scalars['Boolean']>,
  lastMessage?: Maybe<ChatMessage>,
  messageId?: Maybe<Scalars['String']>,
  metadata?: Maybe<Scalars['Json']>,
  name?: Maybe<Scalars['String']>,
  roomId?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Int']>,
  user?: Maybe<ChatUser>,
}

export interface ChatUser {
   __typename?: 'ChatUser',
  avatar?: Maybe<ChatAvatar>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface Codec {
   __typename?: 'Codec',
  level?: Maybe<Scalars['Int']>,
  type?: Maybe<CodecType>,
}

export interface CodecInp {
  level?: Maybe<Scalars['Int']>,
  type?: Maybe<CodecType>,
}

export interface CodecInput {
  value?: Maybe<Array<Maybe<CodecInp>>>,
}

export enum CodecType {
  Delta = 'DELTA',
  DoubleDelta = 'DOUBLE_DELTA',
  Gorilla = 'GORILLA',
  Lz4 = 'LZ4',
  Lz4Hc = 'LZ4HC',
  None = 'NONE',
  T64 = 'T64',
  Zstd = 'ZSTD'
}

export interface Column {
   __typename?: 'Column',
  caseType?: Maybe<CaseType>,
  changes?: Maybe<Array<Maybe<Change>>>,
  codecs?: Maybe<Array<Maybe<Codec>>>,
  columnIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  columnName?: Maybe<Scalars['String']>,
  columnStats?: Maybe<Array<Maybe<ColumnStat>>>,
  compressedBytes?: Maybe<Scalars['Int']>,
  dataType?: Maybe<DataType>,
  defaultExpr?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  include?: Maybe<Scalars['Boolean']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  nullable?: Maybe<Scalars['Boolean']>,
  originalTitle?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  removeLetters?: Maybe<Scalars['Boolean']>,
  removeNumbers?: Maybe<Scalars['Boolean']>,
  removePunctuation?: Maybe<Scalars['Boolean']>,
  sourceStepId?: Maybe<Scalars['Int']>,
  step?: Maybe<Step>,
  stepIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  title?: Maybe<Scalars['String']>,
  trimSpaces?: Maybe<Scalars['Boolean']>,
  uncompressedBytes?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
  width?: Maybe<Scalars['Int']>,
}

export interface ColumnStat {
   __typename?: 'ColumnStat',
  count?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['String']>,
}

export interface ConnectedEntities {
   __typename?: 'ConnectedEntities',
  folders?: Maybe<Scalars['Json']>,
  objects?: Maybe<Scalars['Json']>,
}

export interface Connection {
   __typename?: 'Connection',
  id?: Maybe<Scalars['Int']>,
  joinType?: Maybe<JoinType>,
  leftTableFieldId?: Maybe<Scalars['String']>,
  leftTableId?: Maybe<Scalars['Int']>,
  rightTableFieldId?: Maybe<Scalars['String']>,
  rightTableId?: Maybe<Scalars['Int']>,
}

export interface Datasource {
   __typename?: 'Datasource',
  datasetCode?: Maybe<Scalars['String']>,
  datasourceProgress?: Maybe<DatasourceProgress>,
  datasourceState?: Maybe<DatasourceState>,
  dbParams?: Maybe<DbParams>,
  eisParams?: Maybe<EisParams>,
  id?: Maybe<Scalars['Int']>,
  link?: Maybe<Scalars['String']>,
  locked?: Maybe<Scalars['Boolean']>,
  object?: Maybe<Object>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  sourceType?: Maybe<SourceType>,
  steps?: Maybe<Array<Maybe<Step>>>,
  title?: Maybe<Scalars['String']>,
}

export interface DatasourceProgress {
   __typename?: 'DatasourceProgress',
  datasourceId?: Maybe<Scalars['Int']>,
  doneDate?: Maybe<Scalars['Timestamp']>,
  futureStartDate?: Maybe<Scalars['Timestamp']>,
  processes?: Maybe<Array<Maybe<Progress>>>,
  startDate?: Maybe<Scalars['Timestamp']>,
  status?: Maybe<ProgressStatus>,
  stopDate?: Maybe<Scalars['Timestamp']>,
}

export interface DatasourceState {
   __typename?: 'DatasourceState',
  allCount?: Maybe<Scalars['Int']>,
  currentSubsource?: Maybe<Scalars['String']>,
  datasourceId?: Maybe<Scalars['Int']>,
  doneCount?: Maybe<Scalars['Int']>,
}

export enum DataType {
  Date = 'DATE',
  Datetime = 'DATETIME',
  Enum = 'ENUM',
  Float32 = 'FLOAT32',
  Float64 = 'FLOAT64',
  Int16 = 'INT16',
  Int32 = 'INT32',
  Int64 = 'INT64',
  Int8 = 'INT8',
  String = 'STRING',
  StringN = 'STRING_N',
  Uint16 = 'UINT16',
  Uint32 = 'UINT32',
  Uint64 = 'UINT64',
  Uint8 = 'UINT8',
  Uuid = 'UUID'
}

export interface DataTypeInput {
  value?: Maybe<DataType>,
}

export interface DataValue {
   __typename?: 'DataValue',
  agg?: Maybe<Agg>,
  columnId?: Maybe<Scalars['Int']>,
  fieldId?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<FormulaToken>>>,
  groupFieldId?: Maybe<Scalars['String']>,
  tableId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface DataValueInput {
  agg?: Maybe<Agg>,
  columnId?: Maybe<Scalars['Int']>,
  fieldId?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  groupFieldId?: Maybe<Scalars['String']>,
  tableId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface DbParams {
   __typename?: 'DbParams',
  db?: Maybe<Scalars['String']>,
  dbType?: Maybe<DbType>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<Maybe<DbTable>>>,
  user?: Maybe<Scalars['String']>,
}

export interface DbParamsInp {
  db?: Maybe<Scalars['String']>,
  dbType?: Maybe<DbType>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<Maybe<DbTableInp>>>,
  user?: Maybe<Scalars['String']>,
}

export interface DbTable {
   __typename?: 'DbTable',
  name?: Maybe<Scalars['String']>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  schema?: Maybe<Scalars['String']>,
}

export interface DbTableInp {
  name?: Maybe<Scalars['String']>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  schema?: Maybe<Scalars['String']>,
}

export enum DbType {
  Mssql = 'MSSQL',
  Mysql = 'MYSQL',
  Oracle = 'ORACLE',
  Postgres = 'POSTGRES'
}

export interface EisDir {
   __typename?: 'EisDir',
  includeSubdirs?: Maybe<Scalars['Boolean']>,
  path?: Maybe<Scalars['String']>,
  queries?: Maybe<Array<Maybe<Scalars['String']>>>,
  regexp?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface EisDirInp {
  includeSubdirs?: Maybe<Scalars['Boolean']>,
  path?: Maybe<Scalars['String']>,
  queries?: Maybe<Array<Maybe<Scalars['String']>>>,
  regexp?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface EisParams {
   __typename?: 'EisParams',
  dirs?: Maybe<Array<Maybe<EisDir>>>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface EisParamsInp {
  dirs?: Maybe<Array<Maybe<EisDirInp>>>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface EtlAcl {
   __typename?: 'EtlAcl',
  datasourceEdit?: Maybe<Scalars['Boolean']>,
  datasourceRead?: Maybe<Scalars['Boolean']>,
  flowEdit?: Maybe<Scalars['Boolean']>,
  flowRead?: Maybe<Scalars['Boolean']>,
}

export interface Field {
   __typename?: 'Field',
  datatype?: Maybe<FieldDataType>,
  description?: Maybe<Scalars['String']>,
  fieldType?: Maybe<FieldType>,
  id?: Maybe<Scalars['String']>,
  isFKey?: Maybe<Scalars['Boolean']>,
  isInvisible?: Maybe<Scalars['Boolean']>,
  position?: Maybe<Scalars['Int']>,
  postfix?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export enum FieldDataType {
  Date = 'DATE',
  Datetime = 'DATETIME',
  Float = 'FLOAT',
  Geo = 'GEO',
  Int = 'INT',
  String = 'STRING'
}

export enum FieldType {
  Dimension = 'DIMENSION',
  Measure = 'MEASURE'
}

export interface Flow {
   __typename?: 'Flow',
  acl?: Maybe<FlowAcl>,
  connectedEntities?: Maybe<ConnectedEntities>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  object?: Maybe<Object>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export interface FlowAcl {
   __typename?: 'FlowAcl',
  copy?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<Scalars['Boolean']>,
}

export interface Folder {
   __typename?: 'Folder',
  folders?: Maybe<Array<Maybe<Folder>>>,
  id?: Maybe<Scalars['Int']>,
  isLocked?: Maybe<Scalars['Boolean']>,
  isOpened?: Maybe<Scalars['Boolean']>,
  objects?: Maybe<Array<Maybe<Object>>>,
  sharedAccess?: Maybe<Scalars['Boolean']>,
  sharedToken?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface FormulaToken {
   __typename?: 'FormulaToken',
  dataValue?: Maybe<DataValue>,
  funcValue?: Maybe<FuncValue>,
  listValue?: Maybe<ListValue>,
  tokenType: TokenType,
  value?: Maybe<Scalars['String']>,
}

export interface FormulaTokenInput {
  dataValue?: Maybe<DataValueInput>,
  funcValue?: Maybe<FuncValueInput>,
  listValue?: Maybe<ListValueInput>,
  tokenType: TokenType,
  value?: Maybe<Scalars['String']>,
}

export interface FtpEnity {
   __typename?: 'FtpEnity',
  name?: Maybe<Scalars['String']>,
  type?: Maybe<FtpEnityType>,
}

export enum FtpEnityType {
  Dir = 'DIR',
  File = 'FILE'
}

export interface Function {
   __typename?: 'Function',
  arg1Type?: Maybe<ArgType>,
  arg2Type?: Maybe<ArgType>,
  arg3Type?: Maybe<ArgType>,
  argsCount?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  examples?: Maybe<Array<Maybe<FunctionExample>>>,
  name: Scalars['String'],
  resultType?: Maybe<ResultType>,
}

export interface FunctionExample {
   __typename?: 'FunctionExample',
  formula?: Maybe<Scalars['String']>,
  result?: Maybe<Scalars['String']>,
}

export interface FuncValue {
   __typename?: 'FuncValue',
  arg1?: Maybe<Array<Maybe<FormulaToken>>>,
  arg2?: Maybe<Array<Maybe<FormulaToken>>>,
  arg3?: Maybe<Array<Maybe<FormulaToken>>>,
  args?: Maybe<Array<Maybe<Array<Maybe<FormulaToken>>>>>,
  name: Scalars['String'],
}

export interface FuncValueInput {
  arg1?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  arg2?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  arg3?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  args?: Maybe<Array<Maybe<Array<Maybe<FormulaTokenInput>>>>>,
  name: Scalars['String'],
}

export interface Hierarchy {
   __typename?: 'Hierarchy',
  description?: Maybe<Scalars['String']>,
  dims?: Maybe<Array<Maybe<HierarchyDim>>>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isInvisible?: Maybe<Scalars['Boolean']>,
  isOpened?: Maybe<Scalars['Boolean']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export interface HierarchyDim {
   __typename?: 'HierarchyDim',
  dimId?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
}

export interface HierarchyDimInput {
  dimId?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
}

export interface IncludeInput {
  value?: Maybe<Scalars['Boolean']>,
}

export interface Indicator {
   __typename?: 'Indicator',
  baseRating?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  connectedEntities?: Maybe<ConnectedEntities>,
  displayColumnIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<Maybe<FormulaToken>>>,
  id?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  object?: Maybe<Object>,
  periodicity?: Maybe<Periodicity>,
  periodicityDays?: Maybe<Scalars['Int']>,
  showCountedFormula?: Maybe<Scalars['Boolean']>,
  sortType?: Maybe<SortType>,
  sortValue?: Maybe<Scalars['Float']>,
  sortValueType?: Maybe<SortValueType>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export interface IndicatorsAutocomplete {
   __typename?: 'IndicatorsAutocomplete',
  field?: Maybe<Field>,
  function?: Maybe<Function>,
  name?: Maybe<Scalars['String']>,
  table?: Maybe<Table>,
  type?: Maybe<IndicatorsAutocompleteType>,
}

export enum IndicatorsAutocompleteType {
  Field = 'FIELD',
  Function = 'FUNCTION',
  Keyword = 'KEYWORD',
  Table = 'TABLE'
}

export enum JoinType {
  AllFull = 'ALL_FULL',
  AllInner = 'ALL_INNER',
  AllLeft = 'ALL_LEFT',
  AllRight = 'ALL_RIGHT',
  AntiLeft = 'ANTI_LEFT',
  AntiRight = 'ANTI_RIGHT',
  AnyInner = 'ANY_INNER',
  AnyLeft = 'ANY_LEFT',
  AnyRight = 'ANY_RIGHT',
  CrossJoin = 'CROSS_JOIN',
  SemiLeft = 'SEMI_LEFT',
  SemiRight = 'SEMI_RIGHT'
}


export interface ListValue {
   __typename?: 'ListValue',
  list?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
}

export interface ListValueInput {
  list?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
}

export interface Object {
   __typename?: 'Object',
  attachment?: Maybe<Attachment>,
  attachmentId?: Maybe<Scalars['String']>,
  entityId?: Maybe<Scalars['String']>,
  folderId?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  objectType?: Maybe<ObjectType>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export enum ObjectType {
  Dashboard = 'DASHBOARD',
  Datasource = 'DATASOURCE',
  Flow = 'FLOW',
  GroupChat = 'GROUP_CHAT',
  Indicator = 'INDICATOR',
  Table = 'TABLE'
}

export interface OlapAcl {
   __typename?: 'OlapAcl',
  olapRequest?: Maybe<Scalars['Boolean']>,
  panelsEdit?: Maybe<Scalars['Boolean']>,
  panelsRead?: Maybe<Scalars['Boolean']>,
}

export interface OlapChartLayer  extends OlapLayer {
   __typename?: 'OlapChartLayer',
  chartType?: Maybe<OlapChartType>,
  columns?: Maybe<Array<Maybe<OlapRequestField>>>,
  cubeId?: Maybe<Scalars['String']>,
  havingFilters?: Maybe<Array<Maybe<FormulaToken>>>,
  height?: Maybe<Scalars['Int']>,
  hierarchy?: Maybe<OlapHierarchy>,
  id: Scalars['UUID'],
  limit?: Maybe<Scalars['Int']>,
  mapProperties?: Maybe<OlapLayerMapProperties>,
  offset?: Maybe<Scalars['Int']>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  rows?: Maybe<Array<Maybe<OlapRequestField>>>,
  styles?: Maybe<OlapLayerStyles>,
  type?: Maybe<OlapLayerType>,
  whereFilters?: Maybe<Array<Maybe<FormulaToken>>>,
  width?: Maybe<Scalars['Int']>,
}

export enum OlapChartType {
  Configurable = 'CONFIGURABLE',
  Graph = 'GRAPH',
  Map = 'MAP',
  Pie = 'PIE',
  Scanner = 'SCANNER',
  Scatter = 'SCATTER',
  Table = 'TABLE',
  Value = 'VALUE'
}

export interface OlapDashboard {
   __typename?: 'OlapDashboard',
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  columnsCount?: Maybe<Scalars['Int']>,
  horizontalMargin?: Maybe<Scalars['Int']>,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  layers?: Maybe<Array<Maybe<OlapLayer>>>,
  object?: Maybe<Object>,
  rowHeight?: Maybe<Scalars['Int']>,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['Timestamp']>,
  verticalMargin?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  workspace: OlapDashboardWorkspace,
}

export interface OlapDashboardInput {
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  columnsCount?: Maybe<Scalars['Int']>,
  horizontalMargin?: Maybe<Scalars['Int']>,
  layers?: Maybe<Array<Maybe<OlapLayerInput>>>,
  rowHeight?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  verticalMargin?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  workspace?: Maybe<OlapDashboardWorkspace>,
}

export enum OlapDashboardWorkspace {
  Fixed = 'FIXED',
  Unlimited = 'UNLIMITED'
}

export enum OlapFontStyle {
  Italic = 'ITALIC',
  Normal = 'NORMAL'
}

export enum OlapFontWeight {
  Bold = 'BOLD',
  Normal = 'NORMAL'
}

export enum OlapGridType {
  Combined = 'COMBINED',
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
}

export interface OlapHierarchy {
   __typename?: 'OlapHierarchy',
  fields?: Maybe<Array<Maybe<OlapRequestField>>>,
  id?: Maybe<Scalars['String']>,
}

export interface OlapHierarchyInput {
  fields?: Maybe<Array<Maybe<OlapRequestFieldInput>>>,
  id?: Maybe<Scalars['String']>,
}

export interface OlapLayer {
  height?: Maybe<Scalars['Int']>,
  id: Scalars['UUID'],
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  type?: Maybe<OlapLayerType>,
  width?: Maybe<Scalars['Int']>,
}

export interface OlapLayerAlias {
   __typename?: 'OlapLayerAlias',
  alias?: Maybe<Scalars['String']>,
  fieldId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface OlapLayerAliasInput {
  alias?: Maybe<Scalars['String']>,
  fieldId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface OlapLayerAxis {
   __typename?: 'OlapLayerAxis',
  color?: Maybe<Scalars['String']>,
  gridColor?: Maybe<Scalars['String']>,
  lineStyle?: Maybe<OlapLayerLineStyle>,
  textStyle?: Maybe<OlapLayerTextStyle>,
  x?: Maybe<OlapLayerDirectAxis>,
  y?: Maybe<OlapLayerDirectAxis>,
}

export interface OlapLayerAxisInput {
  color?: Maybe<Scalars['String']>,
  gridColor?: Maybe<Scalars['String']>,
  lineStyle?: Maybe<OlapLayerLineStyleInput>,
  textStyle?: Maybe<OlapLayerTextStyleInput>,
  x?: Maybe<OlapLayerDirectAxisInput>,
  y?: Maybe<OlapLayerDirectAxisInput>,
}

export interface OlapLayerBarFillStyle {
   __typename?: 'OlapLayerBarFillStyle',
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
}

export interface OlapLayerBarFillStyleInput {
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
}

export interface OlapLayerDirectAxis {
   __typename?: 'OlapLayerDirectAxis',
  withAxisLine?: Maybe<Scalars['Boolean']>,
  withLabel?: Maybe<Scalars['Boolean']>,
  withName?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerDirectAxisInput {
  withAxisLine?: Maybe<Scalars['Boolean']>,
  withLabel?: Maybe<Scalars['Boolean']>,
  withName?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerGrid {
   __typename?: 'OlapLayerGrid',
  color?: Maybe<Scalars['String']>,
  lineStyle?: Maybe<OlapLayerLineStyle>,
  type?: Maybe<OlapGridType>,
}

export interface OlapLayerGridInput {
  color?: Maybe<Scalars['String']>,
  lineStyle?: Maybe<OlapLayerLineStyleInput>,
  type?: Maybe<OlapGridType>,
}

export interface OlapLayerInput {
  chartType?: Maybe<OlapChartType>,
  color?: Maybe<Scalars['String']>,
  columns?: Maybe<Array<Maybe<OlapRequestFieldInput>>>,
  cubeId?: Maybe<Scalars['String']>,
  fontStyle?: Maybe<OlapFontStyle>,
  fontWeight?: Maybe<OlapFontWeight>,
  havingFilters?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  height?: Maybe<Scalars['Int']>,
  hierarchy?: Maybe<OlapHierarchyInput>,
  id?: Maybe<Scalars['UUID']>,
  limit?: Maybe<Scalars['Int']>,
  mapProperties?: Maybe<OlapLayerMapPropertiesInput>,
  offset?: Maybe<Scalars['Int']>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  rows?: Maybe<Array<Maybe<OlapRequestFieldInput>>>,
  size?: Maybe<Scalars['Int']>,
  styles?: Maybe<OlapLayerStylesInput>,
  text?: Maybe<Scalars['String']>,
  textAlign?: Maybe<OlapTextAlign>,
  textDecoration?: Maybe<OlapTextDecoration>,
  type?: Maybe<OlapLayerType>,
  whereFilters?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  width?: Maybe<Scalars['Int']>,
}

export interface OlapLayerLegend {
   __typename?: 'OlapLayerLegend',
  show?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerLegendInput {
  show?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerLineStyle {
   __typename?: 'OlapLayerLineStyle',
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
  type?: Maybe<OlapLineType>,
  width?: Maybe<Scalars['Float']>,
}

export interface OlapLayerLineStyleInput {
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
  type?: Maybe<OlapLineType>,
  width?: Maybe<Scalars['Float']>,
}

export interface OlapLayerMap {
   __typename?: 'OlapLayerMap',
  color?: Maybe<Scalars['String']>,
  ranges?: Maybe<Array<Maybe<OlapLayerRanges>>>,
}

export interface OlapLayerMapInput {
  color?: Maybe<Scalars['String']>,
  ranges?: Maybe<Array<Maybe<OlapLayerRangesInput>>>,
}

export interface OlapLayerMapProperties {
   __typename?: 'OlapLayerMapProperties',
  center?: Maybe<Array<Maybe<Scalars['Float']>>>,
  zoom?: Maybe<Scalars['Float']>,
}

export interface OlapLayerMapPropertiesInput {
  center?: Maybe<Array<Maybe<Scalars['Float']>>>,
  zoom?: Maybe<Scalars['Float']>,
}

export interface OlapLayerMark {
   __typename?: 'OlapLayerMark',
  color?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
}

export interface OlapLayerMarkInput {
  color?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
}

export interface OlapLayerMarkLine {
   __typename?: 'OlapLayerMarkLine',
  category?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  type?: Maybe<OlapMarkLineType>,
  value?: Maybe<Scalars['Float']>,
}

export interface OlapLayerMarkLineInput {
  category?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  type?: Maybe<OlapMarkLineType>,
  value?: Maybe<Scalars['Float']>,
}

export interface OlapLayerPoint {
   __typename?: 'OlapLayerPoint',
  barFill?: Maybe<OlapLayerBarFillStyle>,
  barStroke?: Maybe<OlapLayerShapeStyle>,
  fill?: Maybe<OlapLayerShapeStyle>,
  id?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<Maybe<OlapLayerMark>>>,
  stroke?: Maybe<OlapLayerShapeStyle>,
}

export interface OlapLayerPointInput {
  barFill?: Maybe<OlapLayerBarFillStyleInput>,
  barStroke?: Maybe<OlapLayerShapeStyleInput>,
  fill?: Maybe<OlapLayerShapeStyleInput>,
  id?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<Maybe<OlapLayerMarkInput>>>,
  stroke?: Maybe<OlapLayerShapeStyleInput>,
}

export interface OlapLayerRanges {
   __typename?: 'OlapLayerRanges',
  color?: Maybe<Scalars['String']>,
  end?: Maybe<Scalars['Float']>,
  start?: Maybe<Scalars['Float']>,
}

export interface OlapLayerRangesInput {
  color?: Maybe<Scalars['String']>,
  end?: Maybe<Scalars['Float']>,
  start?: Maybe<Scalars['Float']>,
}

export interface OlapLayerSeria {
   __typename?: 'OlapLayerSeria',
  id?: Maybe<Scalars['String']>,
  lineStyle?: Maybe<OlapLayerLineStyle>,
  marks?: Maybe<Array<Maybe<OlapLayerMark>>>,
  pointStyle?: Maybe<OlapLayerPoint>,
  showTrend?: Maybe<Scalars['Boolean']>,
  smooth?: Maybe<Scalars['Boolean']>,
  stack?: Maybe<Scalars['String']>,
  trendLine?: Maybe<TrendLine>,
  type?: Maybe<OlapSeriaType>,
}

export interface OlapLayerSeriaInput {
  id?: Maybe<Scalars['String']>,
  lineStyle?: Maybe<OlapLayerLineStyleInput>,
  marks?: Maybe<Array<Maybe<OlapLayerMarkInput>>>,
  pointStyle?: Maybe<OlapLayerPointInput>,
  showTrend?: Maybe<Scalars['Boolean']>,
  smooth?: Maybe<Scalars['Boolean']>,
  stack?: Maybe<Scalars['String']>,
  trendLine?: Maybe<TrendLineInput>,
  type?: Maybe<OlapSeriaType>,
}

export interface OlapLayerShapeStyle {
   __typename?: 'OlapLayerShapeStyle',
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
}

export interface OlapLayerShapeStyleInput {
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
}

export interface OlapLayerStyles {
   __typename?: 'OlapLayerStyles',
  aliases?: Maybe<Array<Maybe<OlapLayerAlias>>>,
  axis?: Maybe<OlapLayerAxis>,
  backgroundColor?: Maybe<Scalars['String']>,
  grid?: Maybe<OlapLayerGrid>,
  hGrid?: Maybe<OlapLayerVhGrid>,
  legend?: Maybe<OlapLayerLegend>,
  map?: Maybe<OlapLayerMap>,
  markLines?: Maybe<Array<Maybe<OlapLayerMarkLine>>>,
  points?: Maybe<Array<Maybe<OlapLayerPoint>>>,
  series?: Maybe<Array<Maybe<OlapLayerSeria>>>,
  table?: Maybe<OlapLayerTable>,
  vGrid?: Maybe<OlapLayerVhGrid>,
  valueRounding?: Maybe<Scalars['Int']>,
  zooming?: Maybe<OlapLayerZooming>,
}

export interface OlapLayerStylesInput {
  aliases?: Maybe<Array<Maybe<OlapLayerAliasInput>>>,
  axis?: Maybe<OlapLayerAxisInput>,
  backgroundColor?: Maybe<Scalars['String']>,
  grid?: Maybe<OlapLayerGridInput>,
  hGrid?: Maybe<OlapLayerVhGridInput>,
  legend?: Maybe<OlapLayerLegendInput>,
  map?: Maybe<OlapLayerMapInput>,
  markLines?: Maybe<Array<Maybe<OlapLayerMarkLineInput>>>,
  points?: Maybe<Array<Maybe<OlapLayerPointInput>>>,
  series?: Maybe<Array<Maybe<OlapLayerSeriaInput>>>,
  table?: Maybe<OlapLayerTableInput>,
  vGrid?: Maybe<OlapLayerVhGridInput>,
  valueRounding?: Maybe<Scalars['Int']>,
  zooming?: Maybe<OlapLayerZoomingInput>,
}

export interface OlapLayerTable {
   __typename?: 'OlapLayerTable',
  horizontalPadding?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  mergeCells?: Maybe<Scalars['Boolean']>,
  stickyHeader?: Maybe<Scalars['Boolean']>,
  stickySide?: Maybe<Scalars['Boolean']>,
  verticalPadding?: Maybe<Scalars['Int']>,
}

export interface OlapLayerTableInput {
  horizontalPadding?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  mergeCells?: Maybe<Scalars['Boolean']>,
  stickyHeader?: Maybe<Scalars['Boolean']>,
  stickySide?: Maybe<Scalars['Boolean']>,
  verticalPadding?: Maybe<Scalars['Int']>,
}

export interface OlapLayerTextStyle {
   __typename?: 'OlapLayerTextStyle',
  color?: Maybe<Scalars['String']>,
  fontSize?: Maybe<Scalars['Float']>,
}

export interface OlapLayerTextStyleInput {
  color?: Maybe<Scalars['String']>,
  fontSize?: Maybe<Scalars['Float']>,
}

export enum OlapLayerType {
  Chart = 'CHART',
  Text = 'TEXT'
}

export interface OlapLayerVhGrid {
   __typename?: 'OlapLayerVHGrid',
  areas?: Maybe<Scalars['Int']>,
  show?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerVhGridInput {
  areas?: Maybe<Scalars['Int']>,
  show?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerZooming {
   __typename?: 'OlapLayerZooming',
  horizontal?: Maybe<OlapLayerZoomingOpts>,
  vertical?: Maybe<OlapLayerZoomingOpts>,
}

export interface OlapLayerZoomingInput {
  horizontal?: Maybe<OlapLayerZoomingOptsInput>,
  vertical?: Maybe<OlapLayerZoomingOptsInput>,
}

export interface OlapLayerZoomingOpts {
   __typename?: 'OlapLayerZoomingOpts',
  enabled?: Maybe<Scalars['Boolean']>,
  end?: Maybe<Scalars['Float']>,
  start?: Maybe<Scalars['Float']>,
}

export interface OlapLayerZoomingOptsInput {
  enabled?: Maybe<Scalars['Boolean']>,
  end?: Maybe<Scalars['Float']>,
  start?: Maybe<Scalars['Float']>,
}

export enum OlapLineType {
  Dashed = 'DASHED',
  Dotted = 'DOTTED',
  Solid = 'SOLID'
}

export enum OlapMarkLineType {
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
}

export enum OlapRequestAgg {
  ArgMax = 'ARG_MAX',
  ArgMin = 'ARG_MIN',
  Avg = 'AVG',
  Calculated = 'CALCULATED',
  Count = 'COUNT',
  Kurtpop = 'KURTPOP',
  Kurtsamp = 'KURTSAMP',
  Max = 'MAX',
  Median = 'MEDIAN',
  Min = 'MIN',
  None = 'NONE',
  Quantile = 'QUANTILE',
  Skewpop = 'SKEWPOP',
  Skewsamp = 'SKEWSAMP',
  Sum = 'SUM',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP'
}

export interface OlapRequestArg {
   __typename?: 'OlapRequestArg',
  columnId?: Maybe<Scalars['String']>,
  cubeId?: Maybe<Scalars['String']>,
  dataType?: Maybe<FieldDataType>,
  dateFormat?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  type: OlapRequestArgType,
  value?: Maybe<Scalars['String']>,
}

export interface OlapRequestArgInput {
  columnId?: Maybe<Scalars['String']>,
  cubeId?: Maybe<Scalars['String']>,
  dataType?: Maybe<FieldDataType>,
  dateFormat?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  type: OlapRequestArgType,
  value?: Maybe<Scalars['String']>,
}

export enum OlapRequestArgType {
  Column = 'COLUMN',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  String = 'STRING'
}

export interface OlapRequestConditionInput {
  field: OlapRequestFieldInput,
  value?: Maybe<Scalars['String']>,
}

export interface OlapRequestField {
   __typename?: 'OlapRequestField',
  agg: OlapRequestAgg,
  args?: Maybe<Array<Maybe<OlapRequestArg>>>,
  calculatedFormula?: Maybe<Array<Maybe<FormulaToken>>>,
  hierarchyId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
}

export interface OlapRequestFieldInput {
  agg: OlapRequestAgg,
  args?: Maybe<Array<Maybe<OlapRequestArgInput>>>,
  calculatedFormula?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  hierarchyId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
}

export interface OlapRequestInput {
  conditions?: Maybe<Array<Maybe<OlapRequestConditionInput>>>,
  cubeId?: Maybe<Scalars['String']>,
  fields?: Maybe<Array<OlapRequestFieldInput>>,
  format: OlapRequestType,
  havingFilters?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  scannerId?: Maybe<Scalars['String']>,
  whereFilters?: Maybe<Array<Maybe<FormulaTokenInput>>>,
}

export enum OlapRequestType {
  Axis = 'AXIS',
  Flat = 'FLAT'
}

export interface OlapResponse {
   __typename?: 'OlapResponse',
  data?: Maybe<Scalars['Json']>,
}

export enum OlapSeriaType {
  Bar = 'BAR',
  Line = 'LINE',
  Scatter = 'SCATTER'
}

export enum OlapTextAlign {
  Center = 'CENTER',
  Justify = 'JUSTIFY',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum OlapTextDecoration {
  LineThrough = 'LINE_THROUGH',
  None = 'NONE',
  Underline = 'UNDERLINE'
}

export interface OlapTextLayer  extends OlapLayer {
   __typename?: 'OlapTextLayer',
  color?: Maybe<Scalars['String']>,
  fontStyle?: Maybe<OlapFontStyle>,
  fontWeight?: Maybe<OlapFontWeight>,
  height?: Maybe<Scalars['Int']>,
  id: Scalars['UUID'],
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
  textAlign?: Maybe<OlapTextAlign>,
  textDecoration?: Maybe<OlapTextDecoration>,
  type?: Maybe<OlapLayerType>,
  width?: Maybe<Scalars['Int']>,
}

export interface Organisation {
   __typename?: 'Organisation',
  acl?: Maybe<Acl>,
  description?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  private?: Maybe<Scalars['Boolean']>,
  url?: Maybe<Scalars['String']>,
}

export interface OseAcl {
   __typename?: 'OseAcl',
  tablesEdit?: Maybe<Scalars['Boolean']>,
  tablesRead?: Maybe<Scalars['Boolean']>,
}

export interface OutDbParams {
   __typename?: 'OutDbParams',
  db?: Maybe<Scalars['String']>,
  dbType?: Maybe<DbType>,
  exportToDb?: Maybe<Scalars['Boolean']>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tableName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface OutDbParamsInput {
  db?: Maybe<Scalars['String']>,
  dbType?: Maybe<DbType>,
  exportToDb?: Maybe<Scalars['Boolean']>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tableName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export enum Periodicity {
  Custom = 'CUSTOM',
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  None = 'NONE',
  Quarter = 'QUARTER',
  Week = 'WEEK'
}

export enum PeriodicityType {
  Days = 'DAYS',
  Hours = 'HOURS',
  Never = 'NEVER',
  Once = 'ONCE'
}

export interface PositionInput {
  value?: Maybe<Scalars['Int']>,
}

export interface Progress {
   __typename?: 'Progress',
  allCount?: Maybe<Scalars['Int']>,
  doneCount?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
}

export enum ProgressStatus {
  Created = 'CREATED',
  Done = 'DONE',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Stopped = 'STOPPED'
}

export enum ResultType {
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
}

export interface RootMutationType {
   __typename?: 'RootMutationType',
  /** Unshare folder */
  unshareFolder?: Maybe<Scalars['String']>,
  /** Update datasource */
  updateDatasource?: Maybe<Datasource>,
  /** Delete dashboard */
  olapDashboardDelete?: Maybe<Scalars['Boolean']>,
  /** Delete step */
  deleteStep?: Maybe<Scalars['String']>,
  /** Create OSE table */
  createOseTable?: Maybe<Scalars['String']>,
  /** Update hierarchy */
  updateHierarchy?: Maybe<Hierarchy>,
  /** Create step */
  createStep?: Maybe<Step>,
  /** Close folder */
  closeFolder?: Maybe<Scalars['String']>,
  /** Close all folders */
  closeAllFolders?: Maybe<Scalars['String']>,
  /** Set where filter */
  setWhereFilter?: Maybe<Step>,
  /** Create dashboard */
  olapDashboardCreate?: Maybe<OlapDashboard>,
  /** Calculate join */
  calculateJoin?: Maybe<Step>,
  /** Delete datasources */
  deleteDatasource?: Maybe<Scalars['String']>,
  /** Create hierarchy */
  createHierarchy?: Maybe<Hierarchy>,
  /** Delete change */
  deleteChange?: Maybe<Array<Maybe<Column>>>,
  /** Set join steps */
  setJoinSteps?: Maybe<Step>,
  /** Delete connection */
  deleteConnection?: Maybe<Scalars['String']>,
  /** Refresh session */
  sessionUpdate?: Maybe<Session>,
  /** Update connection */
  updateConnection?: Maybe<Connection>,
  /** Delete indicator */
  deleteIndicator?: Maybe<Scalars['String']>,
  /** Delete folder */
  deleteFolder?: Maybe<Scalars['String']>,
  /** Export Step */
  exportStep?: Maybe<Scalars['String']>,
  /** import file */
  importFile?: Maybe<Array<Maybe<Step>>>,
  /** Create column */
  createColumn?: Maybe<Column>,
  /** Update flow */
  updateFlow?: Maybe<Flow>,
  /** Run step */
  runStep?: Maybe<Scalars['String']>,
  /** Create folder */
  createFolder?: Maybe<Folder>,
  /** load table to memory */
  loadToMemory?: Maybe<Table>,
  /** Create change */
  createChange?: Maybe<Change>,
  /** Update organisation */
  organisationsUpdate?: Maybe<Organisation>,
  /** Share folder */
  shareFolder?: Maybe<Scalars['String']>,
  /** Pin folder */
  pinFolder?: Maybe<Folder>,
  /** Get csv export link */
  getCsvExportLink?: Maybe<Scalars['String']>,
  /** remove table from memory */
  removeFromMemory?: Maybe<Table>,
  /** Unpin folder */
  unpinFolder?: Maybe<Scalars['String']>,
  /** Delete hierarchy */
  deleteHierarchy?: Maybe<Scalars['String']>,
  /** Sign in */
  sessionCreate?: Maybe<Session>,
  /** Update object */
  updateObject?: Maybe<Object>,
  /** Add steps to union */
  addStepsToUnion?: Maybe<Step>,
  /** Update step */
  updateStep?: Maybe<Step>,
  /** Update indicator */
  updateIndicator?: Maybe<Indicator>,
  /** Create datasource */
  createDatasource?: Maybe<Datasource>,
  /** stop datasource import */
  stopImport?: Maybe<Datasource>,
  /** Create attachment */
  attachmentCreate?: Maybe<Attachment>,
  /** Unpin object */
  unpinObject?: Maybe<Scalars['String']>,
  /** Export Step to MADD */
  exportStepToMadd?: Maybe<Scalars['String']>,
  /** Update folder */
  updateFolder?: Maybe<Folder>,
  /** Add step to union */
  addStepToUnion?: Maybe<Step>,
  /** Update field */
  updateField?: Maybe<Field>,
  /** Create indicator */
  createIndicator?: Maybe<Indicator>,
  /** Create flow */
  createFlow?: Maybe<Flow>,
  /** Get duplicates */
  getDuplicates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>,
  /** Update dashboard */
  olapDashboardUpdate?: Maybe<OlapDashboard>,
  /** Open folder */
  openFolder?: Maybe<Folder>,
  /** Get total column stats */
  getTotalColumnStats?: Maybe<Array<Maybe<ColumnStat>>>,
  /** Delete attachment */
  attachmentDelete?: Maybe<Scalars['String']>,
  /** Delete steps */
  deleteSteps?: Maybe<Scalars['String']>,
  /** Pin object */
  pinObject?: Maybe<Scalars['String']>,
  /** Delete organisation */
  organisationsDelete?: Maybe<Scalars['Boolean']>,
  /** Update table */
  updateTable?: Maybe<Table>,
  /** Sign out */
  sessionDelete?: Maybe<Scalars['Boolean']>,
  /** Create connection */
  createConnection?: Maybe<Connection>,
  /** Create organisation */
  organisationsCreate?: Maybe<Organisation>,
  /** Delete flow */
  deleteFlow?: Maybe<Scalars['String']>,
  /** remove step from union */
  removeStepFromUnion?: Maybe<Step>,
  /** init datasource import */
  initImport?: Maybe<Datasource>,
}


export interface RootMutationTypeUnshareFolderArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateDatasourceArgs {
  dbParams?: Maybe<DbParamsInp>,
  eisParams?: Maybe<EisParamsInp>,
  id?: Maybe<Scalars['Int']>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeOlapDashboardDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeDeleteStepArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeCreateOseTableArgs {
  indicatorId: Scalars['Int']
}


export interface RootMutationTypeUpdateHierarchyArgs {
  description?: Maybe<Scalars['String']>,
  dims?: Maybe<Array<Maybe<HierarchyDimInput>>>,
  id: Scalars['Int'],
  isInvisible?: Maybe<Scalars['Boolean']>,
  isOpened?: Maybe<Scalars['Boolean']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeCreateStepArgs {
  flowId: Scalars['Int'],
  joinType?: Maybe<JoinType>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  sourceStepId?: Maybe<Scalars['Int']>,
  sourceStepIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  stepType: StepType,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeCloseFolderArgs {
  id: Scalars['Int'],
  pinnedFolderId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeCloseAllFoldersArgs {
  exceptIds?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootMutationTypeSetWhereFilterArgs {
  stepId: Scalars['Int'],
  whereCond?: Maybe<Array<Maybe<FormulaTokenInput>>>
}


export interface RootMutationTypeOlapDashboardCreateArgs {
  dashboard: OlapDashboardInput,
  folderId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeCalculateJoinArgs {
  joinId: Scalars['Int'],
  joinType: JoinType,
  leftStepColumnId: Scalars['Int'],
  leftStepId: Scalars['Int'],
  rightStepColumnId: Scalars['Int'],
  rightStepId: Scalars['Int']
}


export interface RootMutationTypeDeleteDatasourceArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeCreateHierarchyArgs {
  tableId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeDeleteChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeSetJoinStepsArgs {
  joinId: Scalars['Int'],
  leftStepId?: Maybe<Scalars['Int']>,
  rightStepId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeDeleteConnectionArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeSessionUpdateArgs {
  refreshToken: Scalars['UUID']
}


export interface RootMutationTypeUpdateConnectionArgs {
  id?: Maybe<Scalars['Int']>,
  joinType?: Maybe<JoinType>,
  leftTableFieldId?: Maybe<Scalars['String']>,
  leftTableId?: Maybe<Scalars['Int']>,
  rightTableFieldId?: Maybe<Scalars['String']>,
  rightTableId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeDeleteIndicatorArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDeleteFolderArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeExportStepArgs {
  db?: Maybe<Scalars['String']>,
  dbType?: Maybe<DbType>,
  host?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tableName?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>
}


export interface RootMutationTypeImportFileArgs {
  file?: Maybe<Scalars['Upload']>,
  flowId: Scalars['Int'],
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeCreateColumnArgs {
  formula: Array<Maybe<FormulaTokenInput>>,
  stepId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeUpdateFlowArgs {
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeRunStepArgs {
  stepId: Scalars['Int']
}


export interface RootMutationTypeCreateFolderArgs {
  folderId?: Maybe<Scalars['Int']>,
  title: Scalars['String']
}


export interface RootMutationTypeLoadToMemoryArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeCreateChangeArgs {
  changeCaseTypeInput?: Maybe<ChangeCaseTypeInput>,
  changeType?: Maybe<ChangeType>,
  codecInput?: Maybe<CodecInput>,
  columnId?: Maybe<Scalars['Int']>,
  columnIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  dataTypeInput?: Maybe<DataTypeInput>,
  includeInput?: Maybe<IncludeInput>,
  positionInput?: Maybe<PositionInput>,
  stepId: Scalars['Int'],
  titleInput?: Maybe<TitleInput>,
  unionColumnsInput?: Maybe<UnionColumnsInput>,
  widthInput?: Maybe<WidthInput>
}


export interface RootMutationTypeOrganisationsUpdateArgs {
  description?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name: Scalars['String'],
  private?: Maybe<Scalars['Boolean']>,
  url: Scalars['String']
}


export interface RootMutationTypeShareFolderArgs {
  id: Scalars['Int']
}


export interface RootMutationTypePinFolderArgs {
  folderId: Scalars['Int']
}


export interface RootMutationTypeGetCsvExportLinkArgs {
  stepId: Scalars['Int']
}


export interface RootMutationTypeRemoveFromMemoryArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUnpinFolderArgs {
  folderId: Scalars['Int']
}


export interface RootMutationTypeDeleteHierarchyArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeSessionCreateArgs {
  email: Scalars['String'],
  password: Scalars['String']
}


export interface RootMutationTypeUpdateObjectArgs {
  attachmentId?: Maybe<Scalars['String']>,
  folderId?: Maybe<Scalars['Int']>,
  id: Scalars['String'],
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAddStepsToUnionArgs {
  stepIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  unionId: Scalars['Int']
}


export interface RootMutationTypeUpdateStepArgs {
  dateColumn?: Maybe<Scalars['String']>,
  exportToMadd?: Maybe<Scalars['Boolean']>,
  fullUpdate?: Maybe<Scalars['Boolean']>,
  id: Scalars['Int'],
  outDbParams?: Maybe<Array<Maybe<OutDbParamsInput>>>,
  periodicity?: Maybe<Scalars['Int']>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeUpdateIndicatorArgs {
  displayColumnIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  id: Scalars['Int'],
  periodicity?: Maybe<Periodicity>,
  periodicityDays?: Maybe<Scalars['Int']>,
  showCountedFormula?: Maybe<Scalars['Boolean']>,
  sortType?: Maybe<SortType>,
  sortValue?: Maybe<Scalars['Float']>,
  sortValueType?: Maybe<SortValueType>,
  title: Scalars['String']
}


export interface RootMutationTypeCreateDatasourceArgs {
  dbParams?: Maybe<DbParamsInp>,
  eisParams?: Maybe<EisParamsInp>,
  folderId?: Maybe<Scalars['Int']>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  sourceType?: Maybe<SourceType>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeStopImportArgs {
  datasourceId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeAttachmentCreateArgs {
  file?: Maybe<Scalars['Upload']>
}


export interface RootMutationTypeUnpinObjectArgs {
  id: Scalars['String']
}


export interface RootMutationTypeExportStepToMaddArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateFolderArgs {
  folderId?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAddStepToUnionArgs {
  stepId: Scalars['Int'],
  unionId: Scalars['Int']
}


export interface RootMutationTypeUpdateFieldArgs {
  description?: Maybe<Scalars['String']>,
  fieldType?: Maybe<FieldType>,
  id: Scalars['String'],
  isFKey?: Maybe<Scalars['Boolean']>,
  isInvisible?: Maybe<Scalars['Boolean']>,
  position?: Maybe<Scalars['Int']>,
  postfix?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeCreateIndicatorArgs {
  displayColumnIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  folderId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  periodicity?: Maybe<Periodicity>,
  periodicityDays?: Maybe<Scalars['Int']>,
  showCountedFormula?: Maybe<Scalars['Boolean']>,
  sortType?: Maybe<SortType>,
  sortValue?: Maybe<Scalars['Float']>,
  sortValueType?: Maybe<SortValueType>,
  title: Scalars['String']
}


export interface RootMutationTypeCreateFlowArgs {
  folderId?: Maybe<Scalars['Int']>,
  title: Scalars['String']
}


export interface RootMutationTypeGetDuplicatesArgs {
  stepId: Scalars['Int']
}


export interface RootMutationTypeOlapDashboardUpdateArgs {
  dashboard: OlapDashboardInput,
  id: Scalars['UUID']
}


export interface RootMutationTypeOpenFolderArgs {
  id: Scalars['Int'],
  pinnedFolderId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeGetTotalColumnStatsArgs {
  columnIds?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootMutationTypeAttachmentDeleteArgs {
  id?: Maybe<Scalars['UUID']>
}


export interface RootMutationTypeDeleteStepsArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootMutationTypePinObjectArgs {
  id: Scalars['String']
}


export interface RootMutationTypeOrganisationsDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateTableArgs {
  cubeDescription?: Maybe<Scalars['String']>,
  cubeTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  isInvisible?: Maybe<Scalars['Boolean']>,
  isOpened?: Maybe<Scalars['Boolean']>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  tableType?: Maybe<TableType>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeCreateConnectionArgs {
  joinType?: Maybe<JoinType>,
  leftTableFieldId?: Maybe<Scalars['String']>,
  leftTableId?: Maybe<Scalars['Int']>,
  rightTableFieldId?: Maybe<Scalars['String']>,
  rightTableId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOrganisationsCreateArgs {
  description?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  private?: Maybe<Scalars['Boolean']>,
  url: Scalars['String']
}


export interface RootMutationTypeDeleteFlowArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeRemoveStepFromUnionArgs {
  stepId: Scalars['Int'],
  unionId: Scalars['Int']
}


export interface RootMutationTypeInitImportArgs {
  datasourceId?: Maybe<Scalars['Int']>
}

export interface RootQueryType {
   __typename?: 'RootQueryType',
  /** chech_indicator_formula */
  chechIndicatorFormula?: Maybe<Scalars['String']>,
  /** check_where_formula */
  checkWhereFormula?: Maybe<Scalars['String']>,
  /** Get column stats by formula */
  getColumnStatsByFormula?: Maybe<Array<Maybe<ColumnStat>>>,
  /** Get column values */
  getColumnValues?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** Get columns */
  getColumns?: Maybe<Array<Maybe<Column>>>,
  /** Get datasources */
  getDatasources?: Maybe<Array<Maybe<Datasource>>>,
  /** get db tables */
  getDbTables?: Maybe<Array<Maybe<DbTable>>>,
  /** Get autocomplete */
  getEtlStepAutocomplete?: Maybe<Array<Maybe<Autocomplete>>>,
  /** Get flows */
  getFlows?: Maybe<Array<Maybe<Flow>>>,
  /** Get folder trees */
  getFolderTree?: Maybe<Trees>,
  /** Get folders */
  getFolders?: Maybe<Array<Maybe<Folder>>>,
  /** Get functions list */
  getFunctions?: Maybe<Array<Maybe<Function>>>,
  /** Get hierarchies */
  getHierarchies?: Maybe<Array<Maybe<Hierarchy>>>,
  /** Get indicator base rating */
  getIndicatorBaseRating?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  /** Get indicators */
  getIndicators?: Maybe<Array<Maybe<Indicator>>>,
  /** Get indicators autocomplete */
  getIndicatorsAutocomplete?: Maybe<Array<Maybe<IndicatorsAutocomplete>>>,
  /** Get objects */
  getObjects?: Maybe<Array<Maybe<Object>>>,
  /** for socket_message to appear in schema */
  getSocketMessage?: Maybe<SocketMessage>,
  /** Get steps */
  getSteps?: Maybe<Array<Maybe<Step>>>,
  /** Get tables */
  getTables?: Maybe<Array<Maybe<Table>>>,
  /** ls ftp dir */
  lsFtpDir?: Maybe<Array<Maybe<FtpEnity>>>,
  /** Get dashboards */
  olapDashboardGet?: Maybe<Array<Maybe<OlapDashboard>>>,
  /** OLAP request */
  olapRequest?: Maybe<OlapResponse>,
  /** Get current user organisations */
  organisationsMyGet?: Maybe<Array<Maybe<Organisation>>>,
  /** Get profile */
  profileGet?: Maybe<User>,
  /** Scanner drill */
  scannerDrill?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
}


export interface RootQueryTypeChechIndicatorFormulaArgs {
  formula?: Maybe<Array<Maybe<FormulaTokenInput>>>
}


export interface RootQueryTypeCheckWhereFormulaArgs {
  whereCond: Array<Maybe<FormulaTokenInput>>
}


export interface RootQueryTypeGetColumnStatsByFormulaArgs {
  formula: Array<Maybe<FormulaTokenInput>>,
  stepId: Scalars['Int']
}


export interface RootQueryTypeGetColumnValuesArgs {
  columnId: Scalars['Int'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetColumnsArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stepId?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeGetDatasourcesArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootQueryTypeGetDbTablesArgs {
  db: Scalars['String'],
  dbType: DbType,
  host: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  pass: Scalars['String'],
  port: Scalars['String'],
  search?: Maybe<Scalars['String']>,
  user: Scalars['String']
}


export interface RootQueryTypeGetEtlStepAutocompleteArgs {
  search: Scalars['String'],
  stepId: Scalars['Int'],
  types?: Maybe<Array<Maybe<AutocompleteType>>>
}


export interface RootQueryTypeGetFlowsArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetFolderTreeArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeGetFoldersArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeGetHierarchiesArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootQueryTypeGetIndicatorBaseRatingArgs {
  displayColumnIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<Maybe<FormulaTokenInput>>>,
  showCountedFormula?: Maybe<Scalars['Boolean']>,
  sortType?: Maybe<SortType>,
  sortValue?: Maybe<Scalars['Float']>,
  sortValueType?: Maybe<SortValueType>
}


export interface RootQueryTypeGetIndicatorsArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootQueryTypeGetIndicatorsAutocompleteArgs {
  search: Scalars['String'],
  tableId?: Maybe<Scalars['Int']>,
  types?: Maybe<Array<Maybe<IndicatorsAutocompleteType>>>
}


export interface RootQueryTypeGetObjectsArgs {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  types?: Maybe<Array<Maybe<ObjectType>>>
}


export interface RootQueryTypeGetStepsArgs {
  datasourceId?: Maybe<Scalars['Int']>,
  flowId?: Maybe<Scalars['Int']>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeGetTablesArgs {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>
}


export interface RootQueryTypeLsFtpDirArgs {
  host?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  pass?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  regexp?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>
}


export interface RootQueryTypeOlapDashboardGetArgs {
  ids?: Maybe<Array<Maybe<Scalars['UUID']>>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeOlapRequestArgs {
  request: OlapRequestInput
}


export interface RootQueryTypeScannerDrillArgs {
  cubeId: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  scanDate: Scalars['String'],
  scannerId: Scalars['String']
}

export interface Session {
   __typename?: 'Session',
  expireAt?: Maybe<Scalars['Timestamp']>,
  refreshToken?: Maybe<Scalars['UUID']>,
  token?: Maybe<Scalars['UUID']>,
  user?: Maybe<User>,
}

export interface SharedAcl {
   __typename?: 'SharedAcl',
  foldersEdit?: Maybe<Scalars['Boolean']>,
  foldersRead?: Maybe<Scalars['Boolean']>,
  objectsEdit?: Maybe<Scalars['Boolean']>,
  objectsRead?: Maybe<Scalars['Boolean']>,
  organisationCreate?: Maybe<Scalars['Boolean']>,
}

export type SocketMessage = StepProgress | DatasourceState | DatasourceProgress | ChatOnline | ChatUser | ChatMessage | ChatRoom;

export enum SortType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortValueType {
  Reference = 'REFERENCE',
  ReferenceAvg = 'REFERENCE_AVG',
  Value = 'VALUE'
}

export enum SourceType {
  Clickhouse = 'CLICKHOUSE',
  Db = 'DB',
  Eis = 'EIS',
  Ftp = 'FTP'
}

export interface Step {
   __typename?: 'Step',
  columnsCount?: Maybe<Scalars['Int']>,
  dupColumnsCount?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  leftNotInRecords?: Maybe<Scalars['Int']>,
  rightInKeys?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
  leftColumns?: Maybe<Array<Maybe<Column>>>,
  originalSchemaTitle?: Maybe<Scalars['String']>,
  rightStepColumnId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  periodicity?: Maybe<Scalars['Int']>,
  stepIds?: Maybe<Array<Maybe<Scalars['Int']>>>,
  exportToMadd?: Maybe<Scalars['Boolean']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  flow?: Maybe<Flow>,
  leftStepColumnId?: Maybe<Scalars['Int']>,
  positionX?: Maybe<Scalars['Int']>,
  outDbParams?: Maybe<Array<Maybe<OutDbParams>>>,
  leftInRecords?: Maybe<Scalars['Int']>,
  fullUpdate?: Maybe<Scalars['Boolean']>,
  leftStepId?: Maybe<Scalars['Int']>,
  whereCond?: Maybe<Array<Maybe<FormulaToken>>>,
  matchedKeys?: Maybe<Array<Maybe<Scalars['String']>>>,
  rightStepId?: Maybe<Scalars['Int']>,
  tableName?: Maybe<Scalars['String']>,
  rightUnmatchedKeys?: Maybe<Array<Maybe<Scalars['String']>>>,
  changes?: Maybe<Array<Maybe<Change>>>,
  datasource?: Maybe<Datasource>,
  leftUnmatchedKeys?: Maybe<Array<Maybe<Scalars['String']>>>,
  dateColumn?: Maybe<Scalars['String']>,
  leftInKeys?: Maybe<Scalars['Int']>,
  leftNotInKeys?: Maybe<Scalars['Int']>,
  rightInRecords?: Maybe<Scalars['Int']>,
  rightNotInKeys?: Maybe<Scalars['Int']>,
  joinType?: Maybe<JoinType>,
  originalTitle?: Maybe<Scalars['String']>,
  rightColumns?: Maybe<Array<Maybe<Column>>>,
  rightNotInRecords?: Maybe<Scalars['Int']>,
  dupGroupsCount?: Maybe<Scalars['Int']>,
  stepType?: Maybe<StepType>,
}

export interface StepProgress {
   __typename?: 'StepProgress',
  processes?: Maybe<Array<Maybe<Progress>>>,
  status?: Maybe<ProgressStatus>,
  stepId?: Maybe<Scalars['Int']>,
}

export enum StepType {
  Agg = 'AGG',
  Join = 'JOIN',
  Out = 'OUT',
  Pivot = 'PIVOT',
  Source = 'SOURCE',
  Transform = 'TRANSFORM',
  Union = 'UNION'
}

export interface Table {
   __typename?: 'Table',
  connections?: Maybe<Array<Maybe<Connection>>>,
  cubeDescription?: Maybe<Scalars['String']>,
  cubeTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  fields?: Maybe<Array<Maybe<Field>>>,
  hierarchies?: Maybe<Array<Maybe<Hierarchy>>>,
  id?: Maybe<Scalars['Int']>,
  inMemory?: Maybe<Scalars['Boolean']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isInvisible?: Maybe<Scalars['Boolean']>,
  isOpened?: Maybe<Scalars['Boolean']>,
  object?: Maybe<Object>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  tableType?: Maybe<TableType>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export enum TableType {
  Dimension = 'DIMENSION',
  Fact = 'FACT'
}


export interface TitleInput {
  value: Scalars['String'],
}

export enum TokenType {
  Bracket = 'BRACKET',
  Data = 'DATA',
  EqOperator = 'EQ_OPERATOR',
  Func = 'FUNC',
  InOperator = 'IN_OPERATOR',
  List = 'LIST',
  LogicOperator = 'LOGIC_OPERATOR',
  Number = 'NUMBER',
  Operator = 'OPERATOR',
  Space = 'SPACE',
  String = 'STRING'
}

export interface Tree {
   __typename?: 'Tree',
  folders?: Maybe<Array<Maybe<Folder>>>,
  objects?: Maybe<Array<Maybe<Object>>>,
}

export interface Trees {
   __typename?: 'Trees',
  pinnedTree?: Maybe<Tree>,
  tree?: Maybe<Tree>,
}

export interface TrendLine {
   __typename?: 'TrendLine',
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
}

export interface TrendLineInput {
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
}

export interface UnionColumnsInput {
  value?: Maybe<Array<Maybe<Scalars['Int']>>>,
}


export interface User {
   __typename?: 'User',
  acl?: Maybe<Acl>,
  avatar?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}


export interface WidthInput {
  value?: Maybe<Scalars['Int']>,
}

export type SessionDataFragment = (
  { __typename?: 'Session' }
  & Pick<Session, 'token' | 'refreshToken' | 'expireAt'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'avatar' | 'email' | 'firstName' | 'id' | 'lastName' | 'name'>
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

export type ProfileGetQueryVariables = {};


export type ProfileGetQuery = (
  { __typename?: 'RootQueryType' }
  & { profileGet: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export const SessionDataFragmentDoc = gql`
    fragment SessionData on Session {
  token
  refreshToken
  expireAt
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  avatar
  email
  firstName
  id
  lastName
  name
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
export const ProfileGetDocument = gql`
    query profileGet {
  profileGet {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useProfileGetQuery__
 *
 * To run a query within a React component, call `useProfileGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileGetQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileGetQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileGetQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileGetQuery, ProfileGetQueryVariables>) {
        return ApolloReactHooks.useQuery<ProfileGetQuery, ProfileGetQueryVariables>(ProfileGetDocument, baseOptions);
      }
export function useProfileGetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileGetQuery, ProfileGetQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProfileGetQuery, ProfileGetQueryVariables>(ProfileGetDocument, baseOptions);
        }
export type ProfileGetQueryHookResult = ReturnType<typeof useProfileGetQuery>;
export type ProfileGetLazyQueryHookResult = ReturnType<typeof useProfileGetLazyQuery>;
export type ProfileGetQueryResult = ApolloReactCommon.QueryResult<ProfileGetQuery, ProfileGetQueryVariables>;