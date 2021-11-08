import gql from 'graphql-tag';
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
  /** 
 * The `Json` scalar type represents arbitrary json string data, represented as UTF-8
   * character sequences. The Json type is most often used to represent a free-form
   * human-readable json string.
 **/
  Json: any,
  /** Represents an uploaded file. */
  Upload: File,
}

export interface Acl {
   __typename?: 'Acl',
  etl: EtlAcl,
  olap: OlapAcl,
  ose: OseAcl,
  shared: SharedAcl,
}

export interface AdditionalCalc {
   __typename?: 'AdditionalCalc',
  cumulativeTotal?: Maybe<Scalars['Boolean']>,
  groupBy?: Maybe<Scalars['String']>,
  growth?: Maybe<Scalars['Boolean']>,
  growthRate?: Maybe<Scalars['Boolean']>,
  linkedFieldId?: Maybe<Scalars['String']>,
  percentOfTotal?: Maybe<Scalars['Boolean']>,
}

export interface AdditionalCalcInput {
  cumulativeTotal?: Maybe<Scalars['Boolean']>,
  groupBy?: Maybe<Scalars['String']>,
  growth?: Maybe<Scalars['Boolean']>,
  growthRate?: Maybe<Scalars['Boolean']>,
  linkedFieldId?: Maybe<Scalars['String']>,
  percentOfTotal?: Maybe<Scalars['Boolean']>,
}

export const enum Agg {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Median = 'MEDIAN',
  Min = 'MIN',
  Sum = 'SUM'
};

export interface Analysis {
   __typename?: 'Analysis',
  regression?: Maybe<Regression>,
}

export interface AnalysisInput {
  regression?: Maybe<RegressionInput>,
}

export const enum ArgType {
  AnyDate = 'ANY_DATE',
  AnyNumber = 'ANY_NUMBER',
  AnyString = 'ANY_STRING',
  ColDate = 'COL_DATE',
  ColNumber = 'COL_NUMBER',
  ColString = 'COL_STRING',
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
};

export interface Attachment {
   __typename?: 'Attachment',
  aspectRatio?: Maybe<Scalars['Float']>,
  contentType?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
}

export const enum AuthMode {
  Hard = 'HARD',
  Refresh = 'REFRESH'
};

export const enum AuthType {
  ApiKey = 'API_KEY',
  Basic = 'BASIC',
  Bearer = 'BEARER',
  Digest = 'DIGEST',
  None = 'NONE',
  Oauth20 = 'OAUTH20'
};

export interface Autocomplete {
   __typename?: 'Autocomplete',
  column?: Maybe<Column>,
  function?: Maybe<Function>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<AutocompleteType>,
}

export const enum AutocompleteType {
  Column = 'COLUMN',
  Function = 'FUNCTION',
  Keyword = 'KEYWORD'
};

export const enum CaseType {
  Capitalize = 'CAPITALIZE',
  Lower = 'LOWER',
  None = 'NONE',
  Upper = 'UPPER'
};

export interface Change {
   __typename?: 'Change',
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  changeType?: Maybe<ChangeType>,
  column: Column,
  id: Scalars['Int'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
}

export interface ChangeCaseTypeInput {
  value?: Maybe<CaseType>,
}

export const enum ChangeType {
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
};

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
  value?: Maybe<Array<CodecInp>>,
}

export const enum CodecType {
  Delta = 'DELTA',
  DoubleDelta = 'DOUBLE_DELTA',
  Gorilla = 'GORILLA',
  Lz4 = 'LZ4',
  Lz4Hc = 'LZ4HC',
  None = 'NONE',
  T64 = 'T64',
  Zstd = 'ZSTD'
};

export interface Column {
   __typename?: 'Column',
  caseType?: Maybe<CaseType>,
  changes?: Maybe<Array<Change>>,
  codecs?: Maybe<Array<Codec>>,
  columnIds?: Maybe<Array<Scalars['Int']>>,
  columnName?: Maybe<Scalars['String']>,
  columnStats?: Maybe<Array<ColumnStat>>,
  compressedBytes?: Maybe<Scalars['Int']>,
  dataType?: Maybe<DataType>,
  defaultExpr?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  include?: Maybe<Scalars['Boolean']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  nullable?: Maybe<Scalars['Boolean']>,
  originalTitle?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  removeLetters?: Maybe<Scalars['Boolean']>,
  removeNumbers?: Maybe<Scalars['Boolean']>,
  removePunctuation?: Maybe<Scalars['Boolean']>,
  sourceStepId?: Maybe<Scalars['Int']>,
  step: Step,
  stepIds: Array<Scalars['Int']>,
  title: Scalars['String'],
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

export interface Coords {
   __typename?: 'Coords',
  coordsType: CoordsType,
  lineCoords?: Maybe<Array<Array<Scalars['Float']>>>,
  pointCoords?: Maybe<Array<Scalars['Float']>>,
  polyCoords?: Maybe<Array<Array<Array<Scalars['Float']>>>>,
}

export interface CoordsInp {
  coordsType?: Maybe<CoordsType>,
  lineCoords?: Maybe<Array<Array<Scalars['Float']>>>,
  pointCoords?: Maybe<Array<Scalars['Float']>>,
  polyCoords?: Maybe<Array<Array<Array<Scalars['Float']>>>>,
}

export const enum CoordsType {
  Line = 'LINE',
  Point = 'POINT',
  Poly = 'POLY'
};

export interface CubeFilter {
   __typename?: 'CubeFilter',
  cubeId: Scalars['String'],
  cubeTitle?: Maybe<Scalars['String']>,
  draftInput?: Maybe<Scalars['String']>,
  filter: Array<FormulaToken>,
}

export interface CubeFilterInput {
  cubeId: Scalars['String'],
  draftInput?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<FormulaTokenInput>>,
}

export interface DashboardAnalysis {
   __typename?: 'DashboardAnalysis',
  regression?: Maybe<DashboardRegression>,
}

export interface DashboardAnalysisInput {
  regression?: Maybe<DashboardRegressionInput>,
}

export interface DashboardRegression {
   __typename?: 'DashboardRegression',
  models?: Maybe<Array<RegressionModelV1>>,
  predictSize: Scalars['Int'],
}

export interface DashboardRegressionInput {
  models?: Maybe<Array<RegressionModelV1Input>>,
  predictSize: Scalars['Int'],
}

export interface Datasource {
   __typename?: 'Datasource',
  datasourceProgresses?: Maybe<Array<DatasourceProgress>>,
  datasourceState?: Maybe<DatasourceState>,
  dbParams?: Maybe<DbParams>,
  eisParams?: Maybe<EisParams>,
  ftpParams?: Maybe<FtpParams>,
  id: Scalars['Int'],
  object: Object,
  odataParams?: Maybe<OdataParams>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  restParams?: Maybe<RestParams>,
  sourceType: SourceType,
  steps: Array<Step>,
  title: Scalars['String'],
}

export interface DatasourceProgress {
   __typename?: 'DatasourceProgress',
  allCount?: Maybe<Scalars['Int']>,
  datasourceId?: Maybe<Scalars['Int']>,
  doneCount?: Maybe<Scalars['Int']>,
  doneDate?: Maybe<Scalars['Timestamp']>,
  futureStartDate?: Maybe<Scalars['Timestamp']>,
  processes?: Maybe<Array<Progress>>,
  startDate?: Maybe<Scalars['Timestamp']>,
  status?: Maybe<ProgressStatus>,
  stopDate?: Maybe<Scalars['Timestamp']>,
  tableId: Scalars['String'],
}

export interface DatasourceState {
   __typename?: 'DatasourceState',
  allCount?: Maybe<Scalars['Int']>,
  currentSubsource?: Maybe<Scalars['String']>,
  datasourceId?: Maybe<Scalars['Int']>,
  doneCount?: Maybe<Scalars['Int']>,
}

export interface DataTable {
   __typename?: 'DataTable',
  description?: Maybe<Scalars['String']>,
  errorCount?: Maybe<Scalars['Int']>,
  fields: Array<DataTableField>,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  mapCenter?: Maybe<Array<Scalars['Float']>>,
  mapLayerStyles?: Maybe<MapLayerStyles>,
  mapZoom?: Maybe<Scalars['Float']>,
  object?: Maybe<Object>,
  tablePositionType?: Maybe<TablePositionType>,
  tablePositionX?: Maybe<Scalars['Int']>,
  tablePositionY?: Maybe<Scalars['Int']>,
  tileLayerLink?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  tooltip?: Maybe<MapLayerTooltip>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export interface DataTableField {
   __typename?: 'DataTableField',
  considerSearch: Scalars['Boolean'],
  dataTableId: Scalars['UUID'],
  defaultValue?: Maybe<Array<Scalars['String']>>,
  fieldCatalogId?: Maybe<Scalars['String']>,
  fieldType: DataTableFieldType,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  isLink: Scalars['Boolean'],
  isVideoLink: Scalars['Boolean'],
  multiInput: Scalars['Boolean'],
  position: Scalars['Int'],
  required: Scalars['Boolean'],
  showInTable: Scalars['Boolean'],
  title: Scalars['String'],
  uniq: Scalars['Boolean'],
  updatedAt?: Maybe<Scalars['Timestamp']>,
  validation?: Maybe<DataTableFieldValidation>,
  width?: Maybe<Scalars['Int']>,
}

export const enum DataTableFieldType {
  Catalog = 'CATALOG',
  Coordinates = 'COORDINATES',
  Date = 'DATE',
  Datetime = 'DATETIME',
  File = 'FILE',
  Number = 'NUMBER',
  String = 'STRING'
};

export interface DataTableFieldValidation {
   __typename?: 'DataTableFieldValidation',
  dateFormat?: Maybe<Scalars['String']>,
  dateMax?: Maybe<Scalars['String']>,
  dateMin?: Maybe<Scalars['String']>,
  datetimeFormat?: Maybe<Scalars['String']>,
  datetimeMax?: Maybe<Scalars['String']>,
  datetimeMin?: Maybe<Scalars['String']>,
  fileFormats?: Maybe<Array<DataTableFileFormat>>,
  numberMax?: Maybe<Scalars['Float']>,
  numberMin?: Maybe<Scalars['Float']>,
  stringMaxChars?: Maybe<Scalars['Int']>,
  stringMinChars?: Maybe<Scalars['Int']>,
  stringRegexp?: Maybe<Scalars['String']>,
}

export interface DataTableFieldValidationInput {
  dateFormat?: Maybe<Scalars['String']>,
  dateMax?: Maybe<Scalars['String']>,
  dateMin?: Maybe<Scalars['String']>,
  datetimeFormat?: Maybe<Scalars['String']>,
  datetimeMax?: Maybe<Scalars['String']>,
  datetimeMin?: Maybe<Scalars['String']>,
  fileFormats?: Maybe<Array<DataTableFileFormat>>,
  numberMax?: Maybe<Scalars['Float']>,
  numberMin?: Maybe<Scalars['Float']>,
  stringMaxChars?: Maybe<Scalars['Int']>,
  stringMinChars?: Maybe<Scalars['Int']>,
  stringRegexp?: Maybe<Scalars['String']>,
}

export const enum DataTableFileFormat {
  Csv = 'CSV',
  Docx = 'DOCX',
  Jpg = 'JPG',
  Pdf = 'PDF',
  Png = 'PNG',
  Xlsx = 'XLSX',
  Zip = 'ZIP'
};

export interface DataTableRow {
   __typename?: 'DataTableRow',
  createdAt?: Maybe<Scalars['Timestamp']>,
  fields: Array<DataTableRowField>,
  id: Scalars['UUID'],
}

export interface DataTableRowField {
   __typename?: 'DataTableRowField',
  catalogValue?: Maybe<Array<Scalars['String']>>,
  coordinatesValue?: Maybe<Coords>,
  dataTableFieldId: Scalars['String'],
  dateValue?: Maybe<Array<Scalars['Timestamp']>>,
  datetimeValue?: Maybe<Array<Scalars['Timestamp']>>,
  fileValue?: Maybe<Array<Attachment>>,
  numberValue?: Maybe<Array<Scalars['Float']>>,
  stringValue?: Maybe<Array<Scalars['String']>>,
  userEnteredValue?: Maybe<Array<Scalars['String']>>,
  validationErrors?: Maybe<Array<Scalars['String']>>,
}

export const enum DataType {
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
};

export interface DataTypeInput {
  value?: Maybe<DataType>,
}

export interface DataValue {
   __typename?: 'DataValue',
  agg?: Maybe<Agg>,
  columnId?: Maybe<Scalars['Int']>,
  dataTableFieldId?: Maybe<Scalars['String']>,
  fieldId?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<FormulaToken>>,
  groupFieldId?: Maybe<Scalars['String']>,
  tableId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export interface DataValueInput {
  agg?: Maybe<Agg>,
  columnId?: Maybe<Scalars['Int']>,
  dataTableFieldId?: Maybe<Scalars['String']>,
  fieldId?: Maybe<Scalars['String']>,
  filter?: Maybe<Array<FormulaTokenInput>>,
  groupFieldId?: Maybe<Scalars['String']>,
  tableId?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
}

export const enum DateLimitType {
  Days = 'DAYS',
  Hours = 'HOURS',
  Minutes = 'MINUTES'
};

export interface DbParams {
   __typename?: 'DbParams',
  db?: Maybe<Scalars['String']>,
  dbType?: Maybe<DbType>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<DbTable>>,
  user?: Maybe<Scalars['String']>,
}

export interface DbParamsInp {
  db?: Maybe<Scalars['String']>,
  dbType?: Maybe<DbType>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<DbTableInp>>,
  user?: Maybe<Scalars['String']>,
}

export interface DbTable {
   __typename?: 'DbTable',
  id?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  schema?: Maybe<Scalars['String']>,
}

export interface DbTableInp {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  schema?: Maybe<Scalars['String']>,
}

export const enum DbType {
  Mssql = 'MSSQL',
  Mysql = 'MYSQL',
  Oracle = 'ORACLE',
  Postgres = 'POSTGRES'
};

export interface DefaultPanel {
   __typename?: 'DefaultPanel',
  panelId: Scalars['UUID'],
  userId: Scalars['Int'],
}

export interface EisDir {
   __typename?: 'EisDir',
  id?: Maybe<Scalars['String']>,
  includeSubdirs?: Maybe<Scalars['Boolean']>,
  path: Scalars['String'],
  queries?: Maybe<Array<Scalars['String']>>,
  regexp?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface EisDirInp {
  id?: Maybe<Scalars['String']>,
  includeSubdirs?: Maybe<Scalars['Boolean']>,
  path?: Maybe<Scalars['String']>,
  queries?: Maybe<Array<Scalars['String']>>,
  regexp?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface EisParams {
   __typename?: 'EisParams',
  dirs?: Maybe<Array<EisDir>>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface EisParamsInp {
  dirs?: Maybe<Array<EisDirInp>>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface EntityCreated {
   __typename?: 'EntityCreated',
  entity?: Maybe<Scalars['Json']>,
  type?: Maybe<EntityCreatedType>,
}

export const enum EntityCreatedType {
  EtlStep = 'ETL_STEP',
  Folder = 'FOLDER',
  Object = 'OBJECT',
  OlapTable = 'OLAP_TABLE'
};

export interface EtlAcl {
   __typename?: 'EtlAcl',
  datasourceEdit?: Maybe<Scalars['Boolean']>,
  datasourceRead?: Maybe<Scalars['Boolean']>,
  flowEdit?: Maybe<Scalars['Boolean']>,
  flowRead?: Maybe<Scalars['Boolean']>,
}

export interface ExternalSystem {
   __typename?: 'ExternalSystem',
  folderId: Scalars['Int'],
  id: Scalars['Int'],
  ips: Array<Scalars['String']>,
  params: Array<ExternalSystemParams>,
  title: Scalars['String'],
}

export interface ExternalSystemParams {
   __typename?: 'ExternalSystemParams',
  active?: Maybe<Scalars['Boolean']>,
  description: Scalars['String'],
  key: Scalars['String'],
  value: Scalars['String'],
}

export interface ExternalSystemParamsInp {
  active?: Maybe<Scalars['Boolean']>,
  description: Scalars['String'],
  key: Scalars['String'],
  value: Scalars['String'],
}

export interface Field {
   __typename?: 'Field',
  datatype: FieldDataType,
  description?: Maybe<Scalars['String']>,
  fieldType: FieldType,
  id: Scalars['String'],
  isFKey?: Maybe<Scalars['Boolean']>,
  isInvisible?: Maybe<Scalars['Boolean']>,
  isLink?: Maybe<Scalars['Boolean']>,
  position?: Maybe<Scalars['Int']>,
  postfix?: Maybe<Scalars['String']>,
  title: Scalars['String'],
}

export const enum FieldDataType {
  Date = 'DATE',
  Datetime = 'DATETIME',
  Float = 'FLOAT',
  Geo = 'GEO',
  Int = 'INT',
  String = 'STRING'
};

export const enum FieldType {
  Dimension = 'DIMENSION',
  Measure = 'MEASURE'
};

export const enum FilterVisType {
  Buttons = 'BUTTONS',
  Multiselect = 'MULTISELECT',
  Tabs = 'TABS'
};

export interface Flow {
   __typename?: 'Flow',
  acl?: Maybe<FlowAcl>,
  connectedEntities: ConnectedEntities,
  id: Scalars['Int'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  object: Object,
  title: Scalars['String'],
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
  asOwner?: Maybe<Scalars['Boolean']>,
  defaultPanels: Array<DefaultPanel>,
  folders: Array<Folder>,
  groupAccessList?: Maybe<Array<UserGroup>>,
  id: Scalars['Int'],
  invitedUsers?: Maybe<Array<User>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  isOpened?: Maybe<Scalars['Boolean']>,
  objects: Array<Object>,
  sharedAccess?: Maybe<Scalars['Boolean']>,
  sharedToken?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  userQuota?: Maybe<Scalars['Int']>,
  usersAccessList?: Maybe<Array<User>>,
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

export interface FtpDir {
   __typename?: 'FtpDir',
  id?: Maybe<Scalars['String']>,
  includeSubdirs?: Maybe<Scalars['Boolean']>,
  path?: Maybe<Scalars['String']>,
  regexp?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface FtpDirInp {
  id?: Maybe<Scalars['String']>,
  includeSubdirs?: Maybe<Scalars['Boolean']>,
  path?: Maybe<Scalars['String']>,
  regexp?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
}

export interface FtpEnity {
   __typename?: 'FtpEnity',
  name?: Maybe<Scalars['String']>,
  type?: Maybe<FtpEnityType>,
}

export const enum FtpEnityType {
  Dir = 'DIR',
  File = 'FILE'
};

export interface FtpParams {
   __typename?: 'FtpParams',
  dirs?: Maybe<Array<FtpDir>>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface FtpParamsInp {
  dirs?: Maybe<Array<FtpDirInp>>,
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface Function {
   __typename?: 'Function',
  arg1Type?: Maybe<ArgType>,
  arg2Type?: Maybe<ArgType>,
  arg3Type?: Maybe<ArgType>,
  argsCount: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
  examples?: Maybe<Array<FunctionExample>>,
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
  arg1?: Maybe<Array<FormulaToken>>,
  arg2?: Maybe<Array<FormulaToken>>,
  arg3?: Maybe<Array<FormulaToken>>,
  args: Array<Array<FormulaToken>>,
  name: Scalars['String'],
}

export interface FuncValueInput {
  arg1?: Maybe<Array<FormulaTokenInput>>,
  arg2?: Maybe<Array<FormulaTokenInput>>,
  arg3?: Maybe<Array<FormulaTokenInput>>,
  args: Array<Array<FormulaTokenInput>>,
  name: Scalars['String'],
}

export interface Hierarchy {
   __typename?: 'Hierarchy',
  description?: Maybe<Scalars['String']>,
  dims?: Maybe<Array<HierarchyDim>>,
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
  baseRating?: Maybe<Array<Array<Scalars['String']>>>,
  connectedEntities?: Maybe<ConnectedEntities>,
  displayColumnIds?: Maybe<Array<Scalars['String']>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<FormulaToken>>,
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

export const enum IndicatorsAutocompleteType {
  Field = 'FIELD',
  Function = 'FUNCTION',
  Keyword = 'KEYWORD',
  Table = 'TABLE'
};

export const enum JoinType {
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
};


export const enum LegendDirection {
  Column = 'COLUMN',
  Row = 'ROW'
};

export const enum LegendPosition {
  Bottom = 'BOTTOM',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
};

export interface ListValue {
   __typename?: 'ListValue',
  list?: Maybe<Array<Scalars['String']>>,
  title?: Maybe<Scalars['String']>,
}

export interface ListValueInput {
  list?: Maybe<Array<Scalars['String']>>,
  title?: Maybe<Scalars['String']>,
}

export const enum LoType {
  Date = 'DATE',
  Number = 'NUMBER',
  Pages = 'PAGES'
};

export interface Map {
   __typename?: 'Map',
  center?: Maybe<Array<Scalars['Float']>>,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  layers?: Maybe<Array<MapLayer>>,
  object?: Maybe<Object>,
  privateToken?: Maybe<Scalars['String']>,
  publicToken?: Maybe<Scalars['String']>,
  tileLayerLink?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
  zoom?: Maybe<Scalars['Float']>,
}

export interface MapLayer {
   __typename?: 'MapLayer',
  dataTableId: Scalars['UUID'],
  filter?: Maybe<Array<FormulaToken>>,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  mapId: Scalars['UUID'],
  mapLayerStyles?: Maybe<MapLayerStyles>,
  modal?: Maybe<MapLayerModal>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  tooltip?: Maybe<MapLayerTooltip>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
  visible?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerModal {
   __typename?: 'MapLayerModal',
  backgroundColor?: Maybe<Scalars['String']>,
  blocks?: Maybe<Array<ModalBlock>>,
  borderColor?: Maybe<Scalars['String']>,
  borderType?: Maybe<Scalars['String']>,
  borderWidth?: Maybe<Scalars['String']>,
  paddingBottom?: Maybe<Scalars['String']>,
  paddingLeft?: Maybe<Scalars['String']>,
  paddingRight?: Maybe<Scalars['String']>,
  paddingTop?: Maybe<Scalars['String']>,
}

export const enum MapLayerModalBlockType {
  Embed = 'EMBED',
  Link = 'LINK',
  LocalImage = 'LOCAL_IMAGE',
  RemoteImage = 'REMOTE_IMAGE',
  Rtx = 'RTX',
  VideoStream = 'VIDEO_STREAM'
};

export interface MapLayerModalInp {
  backgroundColor?: Maybe<Scalars['String']>,
  blocks?: Maybe<Array<ModalBlockInp>>,
  borderColor?: Maybe<Scalars['String']>,
  borderType?: Maybe<Scalars['String']>,
  borderWidth?: Maybe<Scalars['String']>,
  paddingBottom?: Maybe<Scalars['String']>,
  paddingLeft?: Maybe<Scalars['String']>,
  paddingRight?: Maybe<Scalars['String']>,
  paddingTop?: Maybe<Scalars['String']>,
}

export interface MapLayerRtxData {
   __typename?: 'MapLayerRtxData',
  align?: Maybe<Scalars['String']>,
  children: Array<MapLayerRtxItem>,
  type?: Maybe<MapLayerRtxDataType>,
}

export interface MapLayerRtxDataInp {
  align?: Maybe<Scalars['String']>,
  children?: Maybe<Array<MapLayerRtxItemInp>>,
  type?: Maybe<MapLayerRtxDataType>,
}

export const enum MapLayerRtxDataType {
  Paragraph = 'PARAGRAPH'
};

export interface MapLayerRtxItem {
   __typename?: 'MapLayerRtxItem',
  backgroundColor?: Maybe<Scalars['String']>,
  bold?: Maybe<Scalars['Boolean']>,
  children?: Maybe<Array<MapLayerRtxItemChild>>,
  color?: Maybe<Scalars['String']>,
  dataTableFieldId?: Maybe<Scalars['String']>,
  fontSize?: Maybe<Scalars['Float']>,
  italic?: Maybe<Scalars['Boolean']>,
  text?: Maybe<Scalars['String']>,
  type?: Maybe<MapLayerRtxItemType>,
}

export interface MapLayerRtxItemChild {
   __typename?: 'MapLayerRtxItemChild',
  text?: Maybe<Scalars['String']>,
}

export interface MapLayerRtxItemChildInp {
  text?: Maybe<Scalars['String']>,
}

export interface MapLayerRtxItemInp {
  backgroundColor?: Maybe<Scalars['String']>,
  bold?: Maybe<Scalars['Boolean']>,
  children?: Maybe<Array<MapLayerRtxItemChildInp>>,
  color?: Maybe<Scalars['String']>,
  dataTableFieldId?: Maybe<Scalars['String']>,
  fontSize?: Maybe<Scalars['Float']>,
  italic?: Maybe<Scalars['Boolean']>,
  text?: Maybe<Scalars['String']>,
  type?: Maybe<MapLayerRtxItemType>,
}

export const enum MapLayerRtxItemType {
  Field = 'FIELD',
  Text = 'TEXT'
};

export interface MapLayerShared {
   __typename?: 'MapLayerShared',
  id: Scalars['UUID'],
  mapId: Scalars['UUID'],
  mapLayerStyles?: Maybe<MapLayerStyles>,
  modal?: Maybe<MapLayerModal>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  tooltip?: Maybe<MapLayerTooltip>,
  visible?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerStyles {
   __typename?: 'MapLayerStyles',
  fillOptions?: Maybe<MapLayerStylesFillOptions>,
  gridSize?: Maybe<Scalars['Float']>,
  gridType?: Maybe<MapLayerStylesGridType>,
  showArrowLine?: Maybe<Scalars['Boolean']>,
  sizeOptions?: Maybe<MapLayerStylesSizeOptions>,
  stroke?: Maybe<MapLayerStylesStroke>,
}

export interface MapLayerStylesFillOptions {
   __typename?: 'MapLayerStylesFillOptions',
  color?: Maybe<Scalars['String']>,
  fillType?: Maybe<MapLayerStylesFillType>,
  gridAggType?: Maybe<MapLayerStylesGridAggType>,
  opacity?: Maybe<Scalars['Float']>,
  scales?: Maybe<Array<MapLayerStylesFillScale>>,
  scalesDataFieldId?: Maybe<Scalars['String']>,
  showInLegend?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerStylesFillOptionsInp {
  color?: Maybe<Scalars['String']>,
  fillType?: Maybe<MapLayerStylesFillType>,
  gridAggType?: Maybe<MapLayerStylesGridAggType>,
  opacity?: Maybe<Scalars['Float']>,
  scales?: Maybe<Array<MapLayerStylesFillScaleInp>>,
  scalesDataFieldId?: Maybe<Scalars['String']>,
  showInLegend?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerStylesFillScale {
   __typename?: 'MapLayerStylesFillScale',
  limits?: Maybe<Array<MapLayerStylesFillScaleLimit>>,
  name?: Maybe<Scalars['String']>,
  scaleFunc?: Maybe<MapLayerStylesScaleFunc>,
  scaleType?: Maybe<MapLayerStylesScaleType>,
  showInLegend?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerStylesFillScaleInp {
  limits?: Maybe<Array<MapLayerStylesFillScaleLimitInp>>,
  name?: Maybe<Scalars['String']>,
  scaleFunc?: Maybe<MapLayerStylesScaleFunc>,
  scaleType?: Maybe<MapLayerStylesScaleType>,
  showInLegend?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerStylesFillScaleLimit {
   __typename?: 'MapLayerStylesFillScaleLimit',
  colorFrom?: Maybe<Scalars['String']>,
  colorTo?: Maybe<Scalars['String']>,
  from?: Maybe<Scalars['Float']>,
  to?: Maybe<Scalars['Float']>,
}

export interface MapLayerStylesFillScaleLimitInp {
  colorFrom?: Maybe<Scalars['String']>,
  colorTo?: Maybe<Scalars['String']>,
  from?: Maybe<Scalars['Float']>,
  to?: Maybe<Scalars['Float']>,
}

export const enum MapLayerStylesFillType {
  Fixed = 'FIXED',
  Scales = 'SCALES'
};

export const enum MapLayerStylesGridAggType {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
};

export const enum MapLayerStylesGridType {
  Hex = 'HEX',
  None = 'NONE',
  Square = 'SQUARE'
};

export interface MapLayerStylesInp {
  fillOptions?: Maybe<MapLayerStylesFillOptionsInp>,
  gridSize?: Maybe<Scalars['Float']>,
  gridType?: Maybe<MapLayerStylesGridType>,
  showArrowLine?: Maybe<Scalars['Boolean']>,
  sizeOptions?: Maybe<MapLayerStylesSizeOptionsInp>,
  stroke?: Maybe<MapLayerStylesStrokeInp>,
}

export const enum MapLayerStylesScaleFunc {
  Exp = 'EXP',
  Linear = 'LINEAR',
  Square = 'SQUARE'
};

export const enum MapLayerStylesScaleType {
  Custom = 'CUSTOM',
  Linear = 'LINEAR',
  Uniform = 'UNIFORM'
};

export interface MapLayerStylesSizeOptions {
   __typename?: 'MapLayerStylesSizeOptions',
  gridAggType?: Maybe<MapLayerStylesGridAggType>,
  scales?: Maybe<Array<MapLayerStylesSizeScale>>,
  scalesDataFieldId?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  type?: Maybe<MapLayerStylesFillType>,
}

export interface MapLayerStylesSizeOptionsInp {
  gridAggType?: Maybe<MapLayerStylesGridAggType>,
  scales?: Maybe<Array<MapLayerStylesSizeScaleInp>>,
  scalesDataFieldId?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  type?: Maybe<MapLayerStylesFillType>,
}

export interface MapLayerStylesSizeScale {
   __typename?: 'MapLayerStylesSizeScale',
  limits?: Maybe<Array<MapLayerStylesSizeScaleLimit>>,
  name?: Maybe<Scalars['String']>,
  scaleFunc?: Maybe<MapLayerStylesScaleFunc>,
  scaleType?: Maybe<MapLayerStylesScaleType>,
  showInLegend?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerStylesSizeScaleInp {
  limits?: Maybe<Array<MapLayerStylesSizeScaleLimitInp>>,
  name?: Maybe<Scalars['String']>,
  scaleFunc?: Maybe<MapLayerStylesScaleFunc>,
  scaleType?: Maybe<MapLayerStylesScaleType>,
  showInLegend?: Maybe<Scalars['Boolean']>,
}

export interface MapLayerStylesSizeScaleLimit {
   __typename?: 'MapLayerStylesSizeScaleLimit',
  from?: Maybe<Scalars['Float']>,
  sizeFrom?: Maybe<Scalars['Float']>,
  sizeTo?: Maybe<Scalars['Float']>,
  to?: Maybe<Scalars['Float']>,
}

export interface MapLayerStylesSizeScaleLimitInp {
  from?: Maybe<Scalars['Float']>,
  sizeFrom?: Maybe<Scalars['Float']>,
  sizeTo?: Maybe<Scalars['Float']>,
  to?: Maybe<Scalars['Float']>,
}

export interface MapLayerStylesStroke {
   __typename?: 'MapLayerStylesStroke',
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
}

export interface MapLayerStylesStrokeInp {
  color?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
}

export interface MapLayerTooltip {
   __typename?: 'MapLayerTooltip',
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  borderRadius?: Maybe<Scalars['String']>,
  borderType?: Maybe<Scalars['String']>,
  borderWidth?: Maybe<Scalars['String']>,
  paddingBottom?: Maybe<Scalars['String']>,
  paddingLeft?: Maybe<Scalars['String']>,
  paddingRight?: Maybe<Scalars['String']>,
  paddingTop?: Maybe<Scalars['String']>,
  rtx?: Maybe<Array<MapLayerRtxData>>,
}

export interface MapLayerTooltipInp {
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  borderRadius?: Maybe<Scalars['String']>,
  borderType?: Maybe<Scalars['String']>,
  borderWidth?: Maybe<Scalars['String']>,
  paddingBottom?: Maybe<Scalars['String']>,
  paddingLeft?: Maybe<Scalars['String']>,
  paddingRight?: Maybe<Scalars['String']>,
  paddingTop?: Maybe<Scalars['String']>,
  rtx?: Maybe<Array<MapLayerRtxDataInp>>,
}

export interface MapShared {
   __typename?: 'MapShared',
  center?: Maybe<Array<Scalars['Float']>>,
  id: Scalars['UUID'],
  layers?: Maybe<Array<MapLayerShared>>,
  tileLayerLink?: Maybe<Scalars['String']>,
  zoom?: Maybe<Scalars['Float']>,
}

export interface ModalBlock {
   __typename?: 'ModalBlock',
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  borderType?: Maybe<Scalars['String']>,
  borderWidth?: Maybe<Scalars['String']>,
  embedLink?: Maybe<Array<MapLayerRtxData>>,
  link?: Maybe<Array<MapLayerRtxData>>,
  linkText?: Maybe<Array<MapLayerRtxData>>,
  localImageUrl?: Maybe<Scalars['String']>,
  paddingBottom?: Maybe<Scalars['String']>,
  paddingLeft?: Maybe<Scalars['String']>,
  paddingRight?: Maybe<Scalars['String']>,
  paddingTop?: Maybe<Scalars['String']>,
  remoteImageUrl?: Maybe<Array<MapLayerRtxData>>,
  rtx?: Maybe<Array<MapLayerRtxData>>,
  type?: Maybe<MapLayerModalBlockType>,
  videoStreamLink?: Maybe<Array<MapLayerRtxData>>,
}

export interface ModalBlockInp {
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  borderType?: Maybe<Scalars['String']>,
  borderWidth?: Maybe<Scalars['String']>,
  embedLink?: Maybe<Array<MapLayerRtxDataInp>>,
  link?: Maybe<Array<MapLayerRtxDataInp>>,
  linkText?: Maybe<Array<MapLayerRtxDataInp>>,
  localImageUrl?: Maybe<Scalars['String']>,
  paddingBottom?: Maybe<Scalars['String']>,
  paddingLeft?: Maybe<Scalars['String']>,
  paddingRight?: Maybe<Scalars['String']>,
  paddingTop?: Maybe<Scalars['String']>,
  remoteImageUrl?: Maybe<Array<MapLayerRtxDataInp>>,
  rtx?: Maybe<Array<MapLayerRtxDataInp>>,
  type?: Maybe<MapLayerModalBlockType>,
  videoStreamLink?: Maybe<Array<MapLayerRtxDataInp>>,
}

export interface Object {
   __typename?: 'Object',
  attachment?: Maybe<Attachment>,
  attachmentId?: Maybe<Scalars['String']>,
  entityId?: Maybe<Scalars['String']>,
  folderId?: Maybe<Scalars['Int']>,
  groupAccessList: Array<UserGroup>,
  id: Scalars['String'],
  objectType: ObjectType,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['Timestamp']>,
  usersAccessList: Array<User>,
}

export const enum ObjectType {
  Dashboard = 'DASHBOARD',
  Data = 'DATA',
  Datasource = 'DATASOURCE',
  Flow = 'FLOW',
  GroupChat = 'GROUP_CHAT',
  Indicator = 'INDICATOR',
  Map = 'MAP',
  Pm = 'PM',
  Table = 'TABLE'
};

export interface OdataParams {
   __typename?: 'OdataParams',
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<Scalars['String']>>,
  url?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface OdataParamsInp {
  host?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<Scalars['String']>>,
  url?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
}

export interface OlapAcl {
   __typename?: 'OlapAcl',
  olapRequest?: Maybe<Scalars['Boolean']>,
  panelsEdit?: Maybe<Scalars['Boolean']>,
  panelsRead?: Maybe<Scalars['Boolean']>,
}

export interface OlapChartLayer  extends OlapLayer {
   __typename?: 'OlapChartLayer',
  analysis?: Maybe<Analysis>,
  chartProperties?: Maybe<OlapLayerChartProperties>,
  chartType?: Maybe<OlapChartType>,
  columns?: Maybe<Array<OlapRequestField>>,
  cubeId?: Maybe<Scalars['String']>,
  drillAsidePanelId?: Maybe<Scalars['String']>,
  havingFilters?: Maybe<Array<FormulaToken>>,
  height?: Maybe<Scalars['Float']>,
  hierarchy?: Maybe<OlapHierarchy>,
  id: Scalars['UUID'],
  limit?: Maybe<Scalars['Int']>,
  mapProperties?: Maybe<OlapLayerMapProperties>,
  offset?: Maybe<Scalars['Int']>,
  positionX?: Maybe<Scalars['Float']>,
  positionY?: Maybe<Scalars['Float']>,
  rows?: Maybe<Array<OlapRequestField>>,
  scannerDrillFields?: Maybe<Array<Scalars['String']>>,
  showTotal?: Maybe<Scalars['Boolean']>,
  showValueMeasureName?: Maybe<Scalars['Boolean']>,
  sorting?: Maybe<OlapLayerSorting>,
  styles?: Maybe<OlapLayerStyles>,
  tableProperties?: Maybe<OlapLayerTableProperties>,
  type?: Maybe<OlapLayerType>,
  valueFontColor?: Maybe<Scalars['String']>,
  valueFontSize?: Maybe<Scalars['Int']>,
  valuePostfix?: Maybe<Scalars['String']>,
  whereFilters?: Maybe<Array<FormulaToken>>,
  width?: Maybe<Scalars['Float']>,
}

export const enum OlapChartType {
  Bubble = 'BUBBLE',
  Configurable = 'CONFIGURABLE',
  Graph = 'GRAPH',
  Map = 'MAP',
  Pie = 'PIE',
  Radar = 'RADAR',
  Scanner = 'SCANNER',
  Scatter = 'SCATTER',
  Table = 'TABLE',
  Value = 'VALUE'
};

export interface OlapDashboard {
   __typename?: 'OlapDashboard',
  analysis?: Maybe<DashboardAnalysis>,
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  horizontalMargin?: Maybe<Scalars['Int']>,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  layers?: Maybe<Array<OlapLayer>>,
  maxWidth?: Maybe<Scalars['Int']>,
  minWidth?: Maybe<Scalars['Int']>,
  object?: Maybe<Object>,
  rowHeight?: Maybe<Scalars['Int']>,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['Timestamp']>,
  verticalMargin?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  workspace: OlapDashboardWorkspace,
}

export interface OlapDashboardInput {
  analysis?: Maybe<DashboardAnalysisInput>,
  backgroundColor?: Maybe<Scalars['String']>,
  borderColor?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  horizontalMargin?: Maybe<Scalars['Int']>,
  layers?: Maybe<Array<OlapLayerInput>>,
  maxWidth?: Maybe<Scalars['Int']>,
  minWidth?: Maybe<Scalars['Int']>,
  rowHeight?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  verticalMargin?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  workspace?: Maybe<OlapDashboardWorkspace>,
}

export const enum OlapDashboardWorkspace {
  Fixed = 'FIXED',
  Unlimited = 'UNLIMITED'
};

export interface OlapFilterLayer  extends OlapLayer {
   __typename?: 'OlapFilterLayer',
  applyToAllElement?: Maybe<Scalars['Boolean']>,
  cubeId?: Maybe<Scalars['String']>,
  defaultSelectedValues?: Maybe<Array<Scalars['String']>>,
  fieldId?: Maybe<Scalars['String']>,
  fieldValues?: Maybe<Array<Scalars['String']>>,
  filterField?: Maybe<OlapRequestField>,
  filterVisType?: Maybe<FilterVisType>,
  height?: Maybe<Scalars['Float']>,
  id: Scalars['UUID'],
  positionX?: Maybe<Scalars['Float']>,
  positionY?: Maybe<Scalars['Float']>,
  relatedElements?: Maybe<Array<Scalars['UUID']>>,
  type?: Maybe<OlapLayerType>,
  width?: Maybe<Scalars['Float']>,
}

export const enum OlapFontStyle {
  Italic = 'ITALIC',
  Normal = 'NORMAL'
};

export const enum OlapFontWeight {
  Bold = 'BOLD',
  Normal = 'NORMAL'
};

export const enum OlapGridType {
  Combined = 'COMBINED',
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
};

export interface OlapHierarchy {
   __typename?: 'OlapHierarchy',
  fields?: Maybe<Array<OlapRequestField>>,
  id?: Maybe<Scalars['String']>,
}

export interface OlapHierarchyInput {
  fields?: Maybe<Array<OlapRequestFieldInput>>,
  id?: Maybe<Scalars['String']>,
}

export interface OlapLayer {
  height?: Maybe<Scalars['Float']>,
  id: Scalars['UUID'],
  positionX?: Maybe<Scalars['Float']>,
  positionY?: Maybe<Scalars['Float']>,
  type?: Maybe<OlapLayerType>,
  width?: Maybe<Scalars['Float']>,
}

export interface OlapLayerAlias {
   __typename?: 'OlapLayerAlias',
  alias?: Maybe<Scalars['String']>,
  fieldId?: Maybe<Scalars['String']>,
  hiddenAlias?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface OlapLayerAliasInput {
  alias?: Maybe<Scalars['String']>,
  fieldId?: Maybe<Scalars['String']>,
  hiddenAlias?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
}

export interface OlapLayerAxis {
   __typename?: 'OlapLayerAxis',
  color?: Maybe<Scalars['String']>,
  gridColor?: Maybe<Scalars['String']>,
  isLog?: Maybe<Scalars['Boolean']>,
  lineStyle?: Maybe<OlapLayerLineStyle>,
  logBase?: Maybe<Scalars['Float']>,
  textStyle?: Maybe<OlapLayerTextStyle>,
  x?: Maybe<OlapLayerDirectAxis>,
  y?: Maybe<OlapLayerDirectAxis>,
}

export interface OlapLayerAxisInput {
  color?: Maybe<Scalars['String']>,
  gridColor?: Maybe<Scalars['String']>,
  isLog?: Maybe<Scalars['Boolean']>,
  lineStyle?: Maybe<OlapLayerLineStyleInput>,
  logBase?: Maybe<Scalars['Float']>,
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

export interface OlapLayerChartProperties {
   __typename?: 'OlapLayerChartProperties',
  sorting?: Maybe<OlapLayerSorting>,
}

export interface OlapLayerChartPropertiesInput {
  sorting?: Maybe<OlapLayerSortingInput>,
}

export interface OlapLayerDirectAxis {
   __typename?: 'OlapLayerDirectAxis',
  rotate?: Maybe<Scalars['Float']>,
  withAxisLine?: Maybe<Scalars['Boolean']>,
  withLabel?: Maybe<Scalars['Boolean']>,
  withName?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerDirectAxisInput {
  rotate?: Maybe<Scalars['Float']>,
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
  havingFilters?: Maybe<Array<FormulaTokenInput>>,
  showTotal?: Maybe<Scalars['Boolean']>,
  textDecoration?: Maybe<OlapTextDecoration>,
  whereFilters?: Maybe<Array<FormulaTokenInput>>,
  scannerDrillFields?: Maybe<Array<Scalars['String']>>,
  width?: Maybe<Scalars['Float']>,
  offset?: Maybe<Scalars['Int']>,
  rows?: Maybe<Array<OlapRequestFieldInput>>,
  drillAsidePanelId?: Maybe<Scalars['String']>,
  styles?: Maybe<OlapLayerStylesInput>,
  valueFontSize?: Maybe<Scalars['Int']>,
  tableProperties?: Maybe<OlapLayerTablePropertiesInput>,
  type?: Maybe<OlapLayerType>,
  mapProperties?: Maybe<OlapLayerMapPropertiesInput>,
  text?: Maybe<Scalars['String']>,
  fieldValues?: Maybe<Array<Scalars['String']>>,
  textAlign?: Maybe<OlapTextAlign>,
  positionY?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['UUID']>,
  fieldId?: Maybe<Scalars['String']>,
  positionX?: Maybe<Scalars['Float']>,
  limit?: Maybe<Scalars['Int']>,
  filterField?: Maybe<OlapRequestFieldInput>,
  color?: Maybe<Scalars['String']>,
  defaultSelectedValues?: Maybe<Array<Scalars['String']>>,
  showValueMeasureName?: Maybe<Scalars['Boolean']>,
  sorting?: Maybe<OlapLayerSortingInput>,
  valueFontColor?: Maybe<Scalars['String']>,
  valuePostfix?: Maybe<Scalars['String']>,
  cubeId?: Maybe<Scalars['String']>,
  analysis?: Maybe<AnalysisInput>,
  height?: Maybe<Scalars['Float']>,
  chartType?: Maybe<OlapChartType>,
  fontWeight?: Maybe<OlapFontWeight>,
  hierarchy?: Maybe<OlapHierarchyInput>,
  fontStyle?: Maybe<OlapFontStyle>,
  columns?: Maybe<Array<OlapRequestFieldInput>>,
  chartProperties?: Maybe<OlapLayerChartPropertiesInput>,
  size?: Maybe<Scalars['Int']>,
  filterVisType?: Maybe<FilterVisType>,
  rtx?: Maybe<Array<OlapLayerRtxDataInput>>,
  applyToAllElement?: Maybe<Scalars['Boolean']>,
  relatedElements?: Maybe<Array<Scalars['UUID']>>,
}

export interface OlapLayerLegend {
   __typename?: 'OlapLayerLegend',
  direction?: Maybe<LegendDirection>,
  linesCount?: Maybe<Scalars['Int']>,
  position?: Maybe<LegendPosition>,
  show?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerLegendInput {
  direction?: Maybe<LegendDirection>,
  linesCount?: Maybe<Scalars['Int']>,
  position?: Maybe<LegendPosition>,
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
  marks?: Maybe<Array<OlapLayerMark>>,
  ranges?: Maybe<Array<OlapLayerRanges>>,
  tooltip?: Maybe<OlapLayerTooltip>,
}

export interface OlapLayerMapInput {
  color?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<OlapLayerMarkInput>>,
  ranges?: Maybe<Array<OlapLayerRangesInput>>,
  tooltip?: Maybe<OlapLayerTooltipInput>,
}

export interface OlapLayerMapProperties {
   __typename?: 'OlapLayerMapProperties',
  center?: Maybe<Array<Scalars['Float']>>,
  tile?: Maybe<Scalars['String']>,
  zoom?: Maybe<Scalars['Float']>,
}

export interface OlapLayerMapPropertiesInput {
  center?: Maybe<Array<Scalars['Float']>>,
  tile?: Maybe<Scalars['String']>,
  zoom?: Maybe<Scalars['Float']>,
}

export interface OlapLayerMark {
   __typename?: 'OlapLayerMark',
  color?: Maybe<Scalars['String']>,
  filters?: Maybe<Array<OlapLayerMarkFilter>>,
  position?: Maybe<Scalars['String']>,
  rtx?: Maybe<Array<OlapLayerRtxData>>,
  showLine?: Maybe<Scalars['Boolean']>,
  type?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
}

export interface OlapLayerMarkFilter {
   __typename?: 'OlapLayerMarkFilter',
  dimensions?: Maybe<Array<OlapLayerMarkFilterDimension>>,
  measuresIds?: Maybe<Array<Scalars['String']>>,
}

export interface OlapLayerMarkFilterDimension {
   __typename?: 'OlapLayerMarkFilterDimension',
  id: Scalars['String'],
  index: Scalars['Int'],
  values: Array<Scalars['String']>,
}

export interface OlapLayerMarkFilterDimensionInput {
  id: Scalars['String'],
  index: Scalars['Int'],
  values: Array<Scalars['String']>,
}

export interface OlapLayerMarkFilterInput {
  dimensions?: Maybe<Array<OlapLayerMarkFilterDimensionInput>>,
  measuresIds?: Maybe<Array<Scalars['String']>>,
}

export interface OlapLayerMarkInput {
  color?: Maybe<Scalars['String']>,
  filters?: Maybe<Array<OlapLayerMarkFilterInput>>,
  position?: Maybe<Scalars['String']>,
  rtx?: Maybe<Array<OlapLayerRtxDataInput>>,
  showLine?: Maybe<Scalars['Boolean']>,
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

export interface OlapLayerPie {
   __typename?: 'OlapLayerPie',
  id?: Maybe<Scalars['String']>,
  innerRadius?: Maybe<Scalars['Int']>,
}

export interface OlapLayerPieInput {
  id?: Maybe<Scalars['String']>,
  innerRadius?: Maybe<Scalars['Int']>,
}

export interface OlapLayerPoint {
   __typename?: 'OlapLayerPoint',
  barFill?: Maybe<OlapLayerBarFillStyle>,
  barStroke?: Maybe<OlapLayerShapeStyle>,
  fill?: Maybe<OlapLayerShapeStyle>,
  id?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<OlapLayerMark>>,
  stroke?: Maybe<OlapLayerShapeStyle>,
  tooltip?: Maybe<OlapLayerTooltip>,
}

export interface OlapLayerPointInput {
  barFill?: Maybe<OlapLayerBarFillStyleInput>,
  barStroke?: Maybe<OlapLayerShapeStyleInput>,
  fill?: Maybe<OlapLayerShapeStyleInput>,
  id?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<OlapLayerMarkInput>>,
  stroke?: Maybe<OlapLayerShapeStyleInput>,
  tooltip?: Maybe<OlapLayerTooltipInput>,
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

export interface OlapLayerRtxData {
   __typename?: 'OlapLayerRtxData',
  align?: Maybe<Scalars['String']>,
  children: Array<OlapLayerRtxItem>,
  type?: Maybe<RtxDataType>,
}

export interface OlapLayerRtxDataInput {
  align?: Maybe<Scalars['String']>,
  children?: Maybe<Array<OlapLayerRtxItemInput>>,
  type?: Maybe<RtxDataType>,
}

export interface OlapLayerRtxItem {
   __typename?: 'OlapLayerRtxItem',
  bold?: Maybe<Scalars['Boolean']>,
  children?: Maybe<Array<OlapLayerRtxItemChild>>,
  color?: Maybe<Scalars['String']>,
  element?: Maybe<OlapChartLayer>,
  fontSize?: Maybe<Scalars['Float']>,
  italic?: Maybe<Scalars['Boolean']>,
  linkPanelId?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  type?: Maybe<RtxItemType>,
  value?: Maybe<Scalars['String']>,
}

export interface OlapLayerRtxItemChild {
   __typename?: 'OlapLayerRtxItemChild',
  text?: Maybe<Scalars['String']>,
}

export interface OlapLayerRtxItemChildInput {
  text?: Maybe<Scalars['String']>,
}

export interface OlapLayerRtxItemInput {
  bold?: Maybe<Scalars['Boolean']>,
  children?: Maybe<Array<OlapLayerRtxItemChildInput>>,
  color?: Maybe<Scalars['String']>,
  element?: Maybe<OlapLayerInput>,
  fontSize?: Maybe<Scalars['Float']>,
  italic?: Maybe<Scalars['Boolean']>,
  linkPanelId?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  type?: Maybe<RtxItemType>,
  value?: Maybe<Scalars['String']>,
}

export interface OlapLayerSeria {
   __typename?: 'OlapLayerSeria',
  cumulative?: Maybe<Scalars['Boolean']>,
  donutPadding?: Maybe<Scalars['Int']>,
  donutWidth?: Maybe<Scalars['Int']>,
  gain?: Maybe<Scalars['Boolean']>,
  growthRate?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['String']>,
  innerRadius?: Maybe<Scalars['Int']>,
  lineStyle?: Maybe<OlapLayerLineStyle>,
  marks?: Maybe<Array<OlapLayerMark>>,
  outerRadius?: Maybe<Scalars['Int']>,
  pointStyle?: Maybe<OlapLayerPoint>,
  showTrend?: Maybe<Scalars['Boolean']>,
  smooth?: Maybe<Scalars['Boolean']>,
  stack?: Maybe<Scalars['String']>,
  tooltip?: Maybe<OlapLayerTooltip>,
  trendLine?: Maybe<TrendLine>,
  type?: Maybe<OlapSeriaType>,
}

export interface OlapLayerSeriaInput {
  cumulative?: Maybe<Scalars['Boolean']>,
  donutPadding?: Maybe<Scalars['Int']>,
  donutWidth?: Maybe<Scalars['Int']>,
  gain?: Maybe<Scalars['Boolean']>,
  growthRate?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['String']>,
  innerRadius?: Maybe<Scalars['Int']>,
  lineStyle?: Maybe<OlapLayerLineStyleInput>,
  marks?: Maybe<Array<OlapLayerMarkInput>>,
  outerRadius?: Maybe<Scalars['Int']>,
  pointStyle?: Maybe<OlapLayerPointInput>,
  showTrend?: Maybe<Scalars['Boolean']>,
  smooth?: Maybe<Scalars['Boolean']>,
  stack?: Maybe<Scalars['String']>,
  tooltip?: Maybe<OlapLayerTooltipInput>,
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

export interface OlapLayerSorting {
   __typename?: 'OlapLayerSorting',
  asc?: Maybe<Scalars['Boolean']>,
  type?: Maybe<Scalars['String']>,
}

export interface OlapLayerSortingInput {
  asc?: Maybe<Scalars['Boolean']>,
  type?: Maybe<Scalars['String']>,
}

export interface OlapLayerStyles {
   __typename?: 'OlapLayerStyles',
  aliases?: Maybe<Array<OlapLayerAlias>>,
  axis?: Maybe<OlapLayerAxis>,
  backgroundColor?: Maybe<Scalars['String']>,
  grid?: Maybe<OlapLayerGrid>,
  hGrid?: Maybe<OlapLayerVhGrid>,
  legend?: Maybe<OlapLayerLegend>,
  map?: Maybe<OlapLayerMap>,
  markLines?: Maybe<Array<OlapLayerMarkLine>>,
  pie?: Maybe<OlapLayerPie>,
  points?: Maybe<Array<OlapLayerPoint>>,
  series?: Maybe<Array<OlapLayerSeria>>,
  seriesConfig?: Maybe<OlapLayerSeria>,
  sortingType?: Maybe<SortingType>,
  table?: Maybe<OlapLayerTable>,
  vGrid?: Maybe<OlapLayerVhGrid>,
  valueRounding?: Maybe<Scalars['Int']>,
  zooming?: Maybe<OlapLayerZooming>,
}

export interface OlapLayerStylesInput {
  aliases?: Maybe<Array<OlapLayerAliasInput>>,
  axis?: Maybe<OlapLayerAxisInput>,
  backgroundColor?: Maybe<Scalars['String']>,
  grid?: Maybe<OlapLayerGridInput>,
  hGrid?: Maybe<OlapLayerVhGridInput>,
  legend?: Maybe<OlapLayerLegendInput>,
  map?: Maybe<OlapLayerMapInput>,
  markLines?: Maybe<Array<OlapLayerMarkLineInput>>,
  pie?: Maybe<OlapLayerPieInput>,
  points?: Maybe<Array<OlapLayerPointInput>>,
  series?: Maybe<Array<OlapLayerSeriaInput>>,
  seriesConfig?: Maybe<OlapLayerSeriaInput>,
  sortingType?: Maybe<SortingType>,
  table?: Maybe<OlapLayerTableInput>,
  vGrid?: Maybe<OlapLayerVhGridInput>,
  valueRounding?: Maybe<Scalars['Int']>,
  zooming?: Maybe<OlapLayerZoomingInput>,
}

export interface OlapLayerTable {
   __typename?: 'OlapLayerTable',
  columnWidths?: Maybe<Array<TablePartSize>>,
  horizontalPadding?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  mergeCells?: Maybe<Scalars['Boolean']>,
  rowLines?: Maybe<Array<TablePartSize>>,
  stickyHeader?: Maybe<Scalars['Boolean']>,
  stickySide?: Maybe<Scalars['Boolean']>,
  verticalPadding?: Maybe<Scalars['Int']>,
}

export interface OlapLayerTableInput {
  columnWidths?: Maybe<Array<TablePartSizeInput>>,
  horizontalPadding?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  mergeCells?: Maybe<Scalars['Boolean']>,
  rowLines?: Maybe<Array<TablePartSizeInput>>,
  stickyHeader?: Maybe<Scalars['Boolean']>,
  stickySide?: Maybe<Scalars['Boolean']>,
  verticalPadding?: Maybe<Scalars['Int']>,
}

export interface OlapLayerTableProperties {
   __typename?: 'OlapLayerTableProperties',
  showTotal?: Maybe<Scalars['Boolean']>,
}

export interface OlapLayerTablePropertiesInput {
  showTotal?: Maybe<Scalars['Boolean']>,
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

export interface OlapLayerTooltip {
   __typename?: 'OlapLayerTooltip',
  color?: Maybe<Scalars['String']>,
  filters?: Maybe<Array<OlapLayerMarkFilter>>,
  position?: Maybe<Scalars['String']>,
  rtx?: Maybe<Array<OlapLayerRtxData>>,
  type?: Maybe<Scalars['String']>,
}

export interface OlapLayerTooltipInput {
  color?: Maybe<Scalars['String']>,
  filters?: Maybe<Array<OlapLayerMarkFilterInput>>,
  position?: Maybe<Scalars['String']>,
  rtx?: Maybe<Array<OlapLayerRtxDataInput>>,
  type?: Maybe<Scalars['String']>,
}

export const enum OlapLayerType {
  Chart = 'CHART',
  Filter = 'FILTER',
  Text = 'TEXT'
};

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

export const enum OlapLineType {
  Dashed = 'DASHED',
  Dotted = 'DOTTED',
  Solid = 'SOLID'
};

export const enum OlapMarkLineType {
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
};

export const enum OlapRequestAgg {
  Anyheavy = 'ANYHEAVY',
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
};

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

export const enum OlapRequestArgType {
  Column = 'COLUMN',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  String = 'STRING'
};

export interface OlapRequestConditionInput {
  field: OlapRequestFieldInput,
  value?: Maybe<Scalars['String']>,
}

export interface OlapRequestField {
   __typename?: 'OlapRequestField',
  additionalCalc?: Maybe<AdditionalCalc>,
  agg: OlapRequestAgg,
  args?: Maybe<Array<OlapRequestArg>>,
  calculatedFormula?: Maybe<Array<FormulaToken>>,
  hierarchyId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  index?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  showTotal?: Maybe<Scalars['Boolean']>,
  valueRounding?: Maybe<Scalars['Int']>,
}

export interface OlapRequestFieldInput {
  additionalCalc?: Maybe<AdditionalCalcInput>,
  agg: OlapRequestAgg,
  args?: Maybe<Array<OlapRequestArgInput>>,
  calculatedFormula?: Maybe<Array<FormulaTokenInput>>,
  hierarchyId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  index?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  showTotal?: Maybe<Scalars['Boolean']>,
  valueRounding?: Maybe<Scalars['Int']>,
}

export interface OlapRequestInput {
  conditions?: Maybe<Array<OlapRequestConditionInput>>,
  cubeId?: Maybe<Scalars['String']>,
  fields?: Maybe<Array<OlapRequestFieldInput>>,
  format: OlapRequestType,
  havingFilters?: Maybe<Array<FormulaTokenInput>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  scannerId?: Maybe<Scalars['String']>,
  whereFilters?: Maybe<Array<FormulaTokenInput>>,
}

export const enum OlapRequestType {
  Axis = 'AXIS',
  Flat = 'FLAT'
};

export interface OlapResponse {
   __typename?: 'OlapResponse',
  data?: Maybe<Scalars['Json']>,
}

export const enum OlapSeriaType {
  Bar = 'BAR',
  Line = 'LINE',
  Scatter = 'SCATTER'
};

export const enum OlapTextAlign {
  Center = 'CENTER',
  Justify = 'JUSTIFY',
  Left = 'LEFT',
  Right = 'RIGHT'
};

export const enum OlapTextDecoration {
  LineThrough = 'LINE_THROUGH',
  None = 'NONE',
  Underline = 'UNDERLINE'
};

export interface OlapTextLayer  extends OlapLayer {
   __typename?: 'OlapTextLayer',
  color?: Maybe<Scalars['String']>,
  fontStyle?: Maybe<OlapFontStyle>,
  fontWeight?: Maybe<OlapFontWeight>,
  height?: Maybe<Scalars['Float']>,
  id: Scalars['UUID'],
  positionX?: Maybe<Scalars['Float']>,
  positionY?: Maybe<Scalars['Float']>,
  rtx?: Maybe<Array<OlapLayerRtxData>>,
  size?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
  textAlign?: Maybe<OlapTextAlign>,
  textDecoration?: Maybe<OlapTextDecoration>,
  type?: Maybe<OlapLayerType>,
  width?: Maybe<Scalars['Float']>,
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

export const enum Periodicity {
  Custom = 'CUSTOM',
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  None = 'NONE',
  Quarter = 'QUARTER',
  Week = 'WEEK'
};

export const enum PeriodicityType {
  Days = 'DAYS',
  Hours = 'HOURS',
  Minutes = 'MINUTES',
  Never = 'NEVER',
  Once = 'ONCE'
};

export interface PmChecklist {
   __typename?: 'PmChecklist',
  description?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  tasks?: Maybe<Array<PmChecklistTask>>,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['Timestamp']>,
  userIds?: Maybe<Array<Scalars['Int']>>,
}

export interface PmChecklistTask {
   __typename?: 'PmChecklistTask',
  description?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  planFinishTime?: Maybe<Scalars['Timestamp']>,
  planStartTime?: Maybe<Scalars['Timestamp']>,
  status: PmChecklistTaskStatus,
  title: Scalars['String'],
  userIds?: Maybe<Array<Scalars['Int']>>,
}

export const enum PmChecklistTaskStatus {
  Approoved = 'APPROOVED',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  New = 'NEW'
};

export interface PositionInput {
  value?: Maybe<Scalars['Int']>,
}

export interface Progress {
   __typename?: 'Progress',
  allCount: Scalars['Int'],
  doneCount: Scalars['Int'],
  label: Scalars['String'],
}

export const enum ProgressStatus {
  Created = 'CREATED',
  Done = 'DONE',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Stopped = 'STOPPED'
};

export interface ProjectManagement {
   __typename?: 'ProjectManagement',
  checklists?: Maybe<Array<PmChecklist>>,
  id: Scalars['UUID'],
  insertedAt?: Maybe<Scalars['Timestamp']>,
  object?: Maybe<Object>,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['Timestamp']>,
}

export interface Regression {
   __typename?: 'Regression',
  models?: Maybe<Array<RegressionModel>>,
  predictSize: Scalars['Int'],
}

export interface RegressionCalculatedVarInput {
  agg?: Maybe<OlapRequestAgg>,
  coef: Scalars['Float'],
  coefMax: Scalars['Float'],
  coefMin: Scalars['Float'],
  func: RegressionVarFunc,
  lagsCount: Scalars['Int'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
}

export interface RegressionCalculatedVarV1Input {
  agg: OlapRequestAgg,
  coef: Scalars['Float'],
  coefMax: Scalars['Float'],
  coefMin: Scalars['Float'],
  elementId: Scalars['String'],
  func: RegressionVarFunc,
  lagsCount: Scalars['Int'],
  name: Scalars['String'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
}

export interface RegressionInput {
  models?: Maybe<Array<RegressionModelInput>>,
  predictSize: Scalars['Int'],
}

export interface RegressionModel {
   __typename?: 'RegressionModel',
  intercept?: Maybe<Scalars['Float']>,
  predictId: Scalars['String'],
  r2: Scalars['Float'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
  significanceLevel: Scalars['Float'],
  vars: Array<RegressionVar>,
}

export interface RegressionModelInput {
  intercept?: Maybe<Scalars['Float']>,
  predictId: Scalars['String'],
  r2: Scalars['Float'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
  significanceLevel: Scalars['Float'],
  vars: Array<RegressionCalculatedVarInput>,
}

export interface RegressionModelV1 {
   __typename?: 'RegressionModelV1',
  elementId?: Maybe<Scalars['String']>,
  intercept?: Maybe<Scalars['Float']>,
  predictId: Scalars['String'],
  r2: Scalars['Float'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
  significanceLevel: Scalars['Float'],
  vars: Array<RegressionVarV1>,
}

export interface RegressionModelV1Input {
  elementId?: Maybe<Scalars['String']>,
  intercept?: Maybe<Scalars['Float']>,
  predictId: Scalars['String'],
  r2: Scalars['Float'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
  significanceLevel: Scalars['Float'],
  vars: Array<RegressionCalculatedVarV1Input>,
}

export interface RegressionSeriaInput {
  id: Scalars['String'],
  seria: Array<Scalars['Float']>,
}

export interface RegressionVar {
   __typename?: 'RegressionVar',
  coef: Scalars['Float'],
  coefMax: Scalars['Float'],
  coefMin: Scalars['Float'],
  func: RegressionVarFunc,
  lagsCount: Scalars['Int'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
}

export const enum RegressionVarFunc {
  Cube = 'CUBE',
  Ln = 'LN',
  None = 'NONE',
  Sqrt = 'SQRT',
  Square = 'SQUARE'
};

export interface RegressionVarInput {
  func: RegressionVarFunc,
  lagsCount: Scalars['Int'],
  seriaId: Scalars['String'],
}

export interface RegressionVarV1 {
   __typename?: 'RegressionVarV1',
  agg: OlapRequestAgg,
  coef: Scalars['Float'],
  coefMax: Scalars['Float'],
  coefMin: Scalars['Float'],
  elementId: Scalars['String'],
  func: RegressionVarFunc,
  lagsCount: Scalars['Int'],
  name: Scalars['String'],
  relevant: Scalars['Boolean'],
  seriaId: Scalars['String'],
}

export const enum RequestType {
  Get = 'GET',
  Post = 'POST'
};

export interface RestHttpAnswer {
   __typename?: 'RestHttpAnswer',
  body?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['Int']>,
}

export interface RestParams {
   __typename?: 'RestParams',
  apiKeyName?: Maybe<Scalars['String']>,
  apiKeyValue?: Maybe<Scalars['String']>,
  authMode?: Maybe<AuthMode>,
  authTokenKeys?: Maybe<Array<Scalars['String']>>,
  authTtl?: Maybe<Scalars['Float']>,
  authType?: Maybe<AuthType>,
  authUrl?: Maybe<Scalars['String']>,
  bearerToken?: Maybe<Scalars['String']>,
  delay?: Maybe<Scalars['Float']>,
  endpoints?: Maybe<Array<RestParamsEndpoint>>,
  headers?: Maybe<Array<RestParamsHeader>>,
  login?: Maybe<Scalars['String']>,
  loginFieldname?: Maybe<Scalars['String']>,
  oauth20Prefix?: Maybe<Scalars['String']>,
  oauth20Token?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  passFieldname?: Maybe<Scalars['String']>,
  refreshTokenFieldname?: Maybe<Scalars['String']>,
  refreshTokenKeys?: Maybe<Array<Scalars['String']>>,
  refreshUrl?: Maybe<Scalars['String']>,
  timeout?: Maybe<Scalars['Float']>,
  url?: Maybe<Scalars['String']>,
}

export interface RestParamsEndpoint {
   __typename?: 'RestParamsEndpoint',
  args?: Maybe<Scalars['String']>,
  dateLimitType?: Maybe<DateLimitType>,
  id?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  limitArgName?: Maybe<Scalars['String']>,
  limitOffsetType?: Maybe<LoType>,
  offset?: Maybe<Scalars['Int']>,
  offsetArgName?: Maybe<Scalars['String']>,
  offsetStopValue?: Maybe<Scalars['Int']>,
  pageArgName?: Maybe<Scalars['String']>,
  pageEnd?: Maybe<Scalars['Int']>,
  pageRowCount?: Maybe<Scalars['Int']>,
  pageStart?: Maybe<Scalars['Int']>,
  pagination?: Maybe<Scalars['Boolean']>,
  requestType?: Maybe<RequestType>,
  resultArrayKeys?: Maybe<Array<Scalars['String']>>,
  stopOnLesslimit?: Maybe<Scalars['Boolean']>,
  urlPostfix?: Maybe<Scalars['String']>,
}

export interface RestParamsEndpointInp {
  args?: Maybe<Scalars['String']>,
  dateLimitType?: Maybe<DateLimitType>,
  id?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>,
  limitArgName?: Maybe<Scalars['String']>,
  limitOffsetType?: Maybe<LoType>,
  offset?: Maybe<Scalars['Int']>,
  offsetArgName?: Maybe<Scalars['String']>,
  offsetStopValue?: Maybe<Scalars['Int']>,
  pageArgName?: Maybe<Scalars['String']>,
  pageEnd?: Maybe<Scalars['Int']>,
  pageRowCount?: Maybe<Scalars['Int']>,
  pageStart?: Maybe<Scalars['Int']>,
  pagination?: Maybe<Scalars['Boolean']>,
  requestType?: Maybe<RequestType>,
  resultArrayKeys?: Maybe<Array<Scalars['String']>>,
  stopOnLesslimit?: Maybe<Scalars['Boolean']>,
  urlPostfix?: Maybe<Scalars['String']>,
}

export interface RestParamsHeader {
   __typename?: 'RestParamsHeader',
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
}

export interface RestParamsHeaderInp {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
}

export interface RestParamsInp {
  apiKeyName?: Maybe<Scalars['String']>,
  apiKeyValue?: Maybe<Scalars['String']>,
  authMode?: Maybe<AuthMode>,
  authTokenKeys?: Maybe<Array<Scalars['String']>>,
  authTtl?: Maybe<Scalars['Float']>,
  authType?: Maybe<AuthType>,
  authUrl?: Maybe<Scalars['String']>,
  bearerToken?: Maybe<Scalars['String']>,
  delay?: Maybe<Scalars['Float']>,
  endpoints?: Maybe<Array<RestParamsEndpointInp>>,
  headers?: Maybe<Array<RestParamsHeaderInp>>,
  login?: Maybe<Scalars['String']>,
  loginFieldname?: Maybe<Scalars['String']>,
  oauth20Prefix?: Maybe<Scalars['String']>,
  oauth20Token?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  passFieldname?: Maybe<Scalars['String']>,
  refreshTokenFieldname?: Maybe<Scalars['String']>,
  refreshTokenKeys?: Maybe<Array<Scalars['String']>>,
  refreshUrl?: Maybe<Scalars['String']>,
  timeout?: Maybe<Scalars['Float']>,
  url?: Maybe<Scalars['String']>,
}

export const enum ResultType {
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
};

export interface Role {
   __typename?: 'Role',
  dashboardRead?: Maybe<Scalars['Boolean']>,
  dashboardWrite?: Maybe<Scalars['Boolean']>,
  datasourceRead?: Maybe<Scalars['Boolean']>,
  datasourceWrite?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  etlRead?: Maybe<Scalars['Boolean']>,
  etlWrite?: Maybe<Scalars['Boolean']>,
  externalSystems: Array<ExternalSystem>,
  folderId: Scalars['Int'],
  id: Scalars['Int'],
  indicatorsRead?: Maybe<Scalars['Boolean']>,
  indicatorsWrite?: Maybe<Scalars['Boolean']>,
  olapschemaRead?: Maybe<Scalars['Boolean']>,
  olapschemaWrite?: Maybe<Scalars['Boolean']>,
  rolesRead?: Maybe<Scalars['Boolean']>,
  rolesWrite?: Maybe<Scalars['Boolean']>,
  title: Scalars['String'],
  users: Array<User>,
}

export interface RootMutationType {
   __typename?: 'RootMutationType',
  /** add task to checklist */
  pmChecklistAddTask?: Maybe<PmChecklist>,
  /** Delete hierarchy */
  deleteHierarchy?: Maybe<Scalars['String']>,
  /** Take away object access */
  takeAwayObjectAccess?: Maybe<Scalars['String']>,
  /** init datasource import */
  initImport?: Maybe<Scalars['String']>,
  /** Remove role from user_group */
  removeRoleFromUserGroup?: Maybe<Scalars['String']>,
  /** Get total column stats */
  getTotalColumnStats?: Maybe<Array<ColumnStat>>,
  /** update checklist task */
  pmChecklistUpdateTask?: Maybe<PmChecklist>,
  /** Sign in */
  sessionCreate?: Maybe<Session>,
  /** Invite user to orgfolder */
  inviteUserToOrgfolder?: Maybe<Scalars['String']>,
  /** Pin folder */
  pinFolder?: Maybe<Folder>,
  /** Create data_table_row */
  dataTableRowCreate?: Maybe<DataTableRow>,
  /** Delete data_table_field */
  dataTableFieldDelete?: Maybe<Scalars['String']>,
  /** Update folder user_group */
  updateFolderUserGroup?: Maybe<UserGroup>,
  /** Delete change */
  deleteChange?: Maybe<Array<Column>>,
  /** Update data_table_field show_in_table */
  dataTableFieldUpdateShowInTable?: Maybe<DataTableField>,
  /** Create folder external_system */
  createFolderExternalSystem?: Maybe<ExternalSystem>,
  /** Pin object */
  pinObject?: Maybe<Scalars['String']>,
  /** Get csv export link */
  getCsvExportLink?: Maybe<Scalars['String']>,
  /** Update step */
  updateStep?: Maybe<Step>,
  /** Open folder */
  openFolder?: Maybe<Folder>,
  /** Remove cube_filter from user_group */
  removeCubeFilterFromUserGroup?: Maybe<Array<CubeFilter>>,
  /** Run step */
  runStep?: Maybe<Scalars['String']>,
  /** Update data_table_field is_link */
  dataTableFieldUpdateIsLink?: Maybe<DataTableField>,
  /** Set ext_sys role params */
  setExternalSystemRoleParams?: Maybe<Array<ExternalSystemParams>>,
  /** Update data_table_field uniq */
  dataTableFieldUpdateUniq?: Maybe<DataTableField>,
  /** Create OSE table */
  createOseTable?: Maybe<Scalars['String']>,
  /** Delete indicator */
  deleteIndicator?: Maybe<Scalars['String']>,
  /** Create hierarchy */
  createHierarchy?: Maybe<Hierarchy>,
  /** Set ext_sys group params */
  setExternalSystemGroupParams?: Maybe<Array<ExternalSystemParams>>,
  /** Delete organisation */
  organisationsDelete?: Maybe<Scalars['Boolean']>,
  /** Update indicator */
  updateIndicator?: Maybe<Indicator>,
  /** Export Step to MADD */
  exportStepToMadd?: Maybe<Scalars['String']>,
  /** Delete flow */
  deleteFlow?: Maybe<Scalars['String']>,
  /** Create folder user_group */
  createFolderUserGroup?: Maybe<UserGroup>,
  /** Update data_table */
  dataTableUpdate?: Maybe<DataTable>,
  /** Update data_table_field default_value */
  dataTableFieldUpdateDefaultValue?: Maybe<DataTableField>,
  /** Sign out */
  sessionDelete?: Maybe<Scalars['Boolean']>,
  /** Calculate join */
  calculateJoin?: Maybe<Step>,
  /** Remove external_system from user_group */
  removeExternalSystemFromUserGroup?: Maybe<Scalars['String']>,
  /** Set map_layer filter */
  setMapLayerFilter?: Maybe<MapLayer>,
  /** Delete steps */
  deleteSteps?: Maybe<Scalars['String']>,
  /** Update folder */
  updateFolder?: Maybe<Folder>,
  /** Delete datasources */
  deleteDatasource?: Maybe<Scalars['String']>,
  /** Create data_table_field */
  dataTableFieldCreate?: Maybe<DataTableField>,
  /** Update dashboard */
  olapDashboardUpdate?: Maybe<OlapDashboard>,
  /** Update map_layer */
  mapLayerUpdate?: Maybe<MapLayer>,
  /** Take away folder access */
  takeAwayFolderAccess?: Maybe<Scalars['String']>,
  /** stop datasource import */
  stopImport?: Maybe<Scalars['String']>,
  /** Update flow */
  updateFlow?: Maybe<Flow>,
  /** Create folder role */
  createFolderRole?: Maybe<Role>,
  /** Update folder role */
  updateFolderRole?: Maybe<Role>,
  /** Set where filter */
  setWhereFilter?: Maybe<Step>,
  /** Update organisation */
  organisationsUpdate?: Maybe<Organisation>,
  /** remove map public token */
  mapRemovePublicToken?: Maybe<Map>,
  /** Remove external_system from role */
  removeExternalSystemFromRole?: Maybe<Scalars['String']>,
  /** Create project_management */
  projectManagementCreate?: Maybe<ProjectManagement>,
  /** Delete folder role */
  deleteFolderRole?: Maybe<Scalars['String']>,
  /** Update data_table_field multi_input */
  dataTableFieldUpdateMultiInput?: Maybe<DataTableField>,
  /** Unpin object */
  unpinObject?: Maybe<Scalars['String']>,
  /** Delete folder user_group */
  deleteFolderUserGroup?: Maybe<Scalars['String']>,
  /** Update object */
  updateObject?: Maybe<Object>,
  /** Update field */
  updateField?: Maybe<Field>,
  /** generate map public token */
  mapGenPublicToken?: Maybe<Map>,
  /** Update folder external_system */
  updateFolderExternalSystem?: Maybe<ExternalSystem>,
  /** Create flow */
  createFlow?: Maybe<Flow>,
  /** Update map */
  mapUpdate?: Maybe<Map>,
  /** Delete folder external_system */
  deleteFolderExternalSystem?: Maybe<Scalars['String']>,
  /** Set join steps */
  setJoinSteps?: Maybe<Step>,
  /** Update table */
  updateTable?: Maybe<Table>,
  /** Update data_table_field validation */
  dataTableFieldUpdateValidation?: Maybe<DataTableField>,
  /** update user profile */
  profileUpdate?: Maybe<User>,
  /** send user invite email */
  sendInviteEmail?: Maybe<User>,
  /** Create connection */
  createConnection?: Maybe<Connection>,
  /** Create folder */
  createFolder?: Maybe<Folder>,
  /** Delete map_layer */
  mapLayerDelete?: Maybe<Scalars['String']>,
  /** Update project_management */
  projectManagementUpdate?: Maybe<ProjectManagement>,
  /** Update data_table_field consider_search */
  dataTableFieldUpdateConsiderSearch?: Maybe<DataTableField>,
  /** Update data_table_field position */
  dataTableFieldUpdatePosition?: Maybe<Array<DataTableField>>,
  /** Uninvite user from orgfolder */
  uninviteUserFromOrgfolder?: Maybe<Scalars['String']>,
  /** Delete data_table_row */
  dataTableRowDelete?: Maybe<Scalars['String']>,
  /** Add user to user_group */
  addUserToUserGroup?: Maybe<Scalars['String']>,
  /** Close all folders */
  closeAllFolders?: Maybe<Scalars['String']>,
  /** Delete attachment */
  attachmentDelete?: Maybe<Scalars['String']>,
  /** Update connection */
  updateConnection?: Maybe<Connection>,
  /** remove map private token */
  mapRemovePrivateToken?: Maybe<Map>,
  /** Create map_layer */
  mapLayerCreate?: Maybe<MapLayer>,
  /** remove table from memory */
  removeFromMemory?: Maybe<Table>,
  /** Delete connection */
  deleteConnection?: Maybe<Scalars['String']>,
  /** Update checklist */
  pmChecklistUpdate?: Maybe<PmChecklist>,
  /** Create change */
  createChange?: Maybe<Change>,
  /** Create data_table */
  dataTableCreate?: Maybe<DataTable>,
  /** load table to memory */
  loadToMemory?: Maybe<Table>,
  /** Give object access */
  giveObjectAccess?: Maybe<Scalars['String']>,
  /** Unshare folder */
  unshareFolder?: Maybe<Scalars['String']>,
  /** Get duplicates */
  getDuplicates?: Maybe<Array<Array<Scalars['Int']>>>,
  /** Delete project_management */
  projectManagementDelete?: Maybe<Scalars['String']>,
  /** Create indicator */
  createIndicator?: Maybe<Indicator>,
  /** Create checklist */
  pmChecklistCreate?: Maybe<PmChecklist>,
  /** Delete folder */
  deleteFolder?: Maybe<Scalars['String']>,
  /** Create organisation */
  organisationsCreate?: Maybe<Organisation>,
  /** generate map private token */
  mapGenPrivateToken?: Maybe<Map>,
  /** Create map */
  mapCreate?: Maybe<Map>,
  /** remove step from union */
  removeStepFromUnion?: Maybe<Step>,
  /** import file */
  importFile?: Maybe<Array<Step>>,
  /** Add role to user_group */
  addRoleToUserGroup?: Maybe<Scalars['String']>,
  /** Update data_table_field field_type */
  dataTableFieldUpdateFieldType?: Maybe<DataTableField>,
  /** Remove user from user_group */
  removeUserFromUserGroup?: Maybe<Scalars['String']>,
  /** remove_default_panel_from_folder */
  removeDefaultPanelFromFolder?: Maybe<Scalars['String']>,
  /** Close folder */
  closeFolder?: Maybe<Scalars['String']>,
  /** Give folder access */
  giveFolderAccess?: Maybe<Scalars['String']>,
  /** Add role to user */
  addRoleToUser?: Maybe<Scalars['String']>,
  /** Update data_table_field title */
  dataTableFieldUpdateTitle?: Maybe<DataTableField>,
  /** Export Step to MADD data */
  exportStepToMaddData?: Maybe<Scalars['String']>,
  /** Import data_table */
  dataTableImport?: Maybe<DataTable>,
  /** Delete step */
  deleteStep?: Maybe<Scalars['String']>,
  /** Delete dashboard */
  olapDashboardDelete?: Maybe<Scalars['Boolean']>,
  /** Update data_table_field field_catalog_id */
  dataTableFieldUpdateFieldCatalogId?: Maybe<DataTableField>,
  /** Add step to union */
  addStepToUnion?: Maybe<Step>,
  /** Create step */
  createStep?: Maybe<Step>,
  /** Add steps to union */
  addStepsToUnion?: Maybe<Step>,
  /** Update data_table_field width */
  dataTableFieldUpdateWidth?: Maybe<DataTableField>,
  /** add_default_panel_to_folder */
  addDefaultPanelToFolder?: Maybe<Scalars['String']>,
  /** Export Step */
  exportStep?: Maybe<Scalars['String']>,
  /** Update data_table_field is_video_link */
  dataTableFieldUpdateIsVideoLink?: Maybe<DataTableField>,
  /** Create column */
  createColumn?: Maybe<Column>,
  /** remove task from checklist */
  pmChecklistRemoveTask?: Maybe<PmChecklist>,
  /** Remove role from user */
  removeRoleFromUser?: Maybe<Scalars['String']>,
  /** Create datasource */
  createDatasource?: Maybe<Datasource>,
  /** Add external_system to role */
  addExternalSystemToRole?: Maybe<Scalars['String']>,
  /** Add or replace cube_filter to user_group */
  addOrReplaceCubeFilterToUserGroup?: Maybe<Array<CubeFilter>>,
  /** Delete checklist */
  pmChecklistDelete?: Maybe<Scalars['String']>,
  /** Create dashboard */
  olapDashboardCreate?: Maybe<OlapDashboard>,
  /** Update hierarchy */
  updateHierarchy?: Maybe<Hierarchy>,
  /** Refresh session */
  sessionUpdate?: Maybe<Session>,
  /** Update datasource */
  updateDatasource?: Maybe<Datasource>,
  /** Update data_table_field required */
  dataTableFieldUpdateRequired?: Maybe<DataTableField>,
  /** Create attachment */
  attachmentCreate?: Maybe<Attachment>,
  /** Share folder */
  shareFolder?: Maybe<Scalars['String']>,
  /** Update data_table_row field */
  dataTableRowUpdate?: Maybe<DataTableRowField>,
  /** Unpin folder */
  unpinFolder?: Maybe<Scalars['String']>,
  /** Add external_system to user_group */
  addExternalSystemToUserGroup?: Maybe<Scalars['String']>,
}


export interface RootMutationTypePmChecklistAddTaskArgs {
  checklistId: Scalars['UUID'],
  title: Scalars['String']
}


export interface RootMutationTypeDeleteHierarchyArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeTakeAwayObjectAccessArgs {
  objectId: Scalars['String'],
  userGroupId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeInitImportArgs {
  datasourceId: Scalars['Int'],
  tableId: Scalars['String']
}


export interface RootMutationTypeRemoveRoleFromUserGroupArgs {
  roleId: Scalars['Int'],
  userGroupId: Scalars['Int']
}


export interface RootMutationTypeGetTotalColumnStatsArgs {
  columnIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootMutationTypePmChecklistUpdateTaskArgs {
  checklistId: Scalars['UUID'],
  description?: Maybe<Scalars['String']>,
  planFinishTime?: Maybe<Scalars['Timestamp']>,
  planStartTime?: Maybe<Scalars['Timestamp']>,
  status?: Maybe<PmChecklistTaskStatus>,
  taskId: Scalars['UUID'],
  title?: Maybe<Scalars['String']>,
  userIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootMutationTypeSessionCreateArgs {
  email: Scalars['String'],
  password: Scalars['String']
}


export interface RootMutationTypeInviteUserToOrgfolderArgs {
  folderId: Scalars['Int'],
  userId: Scalars['Int']
}


export interface RootMutationTypePinFolderArgs {
  folderId: Scalars['Int']
}


export interface RootMutationTypeDataTableRowCreateArgs {
  dataTableId: Scalars['UUID']
}


export interface RootMutationTypeDataTableFieldDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeUpdateFolderUserGroupArgs {
  description?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeDeleteChangeArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldUpdateShowInTableArgs {
  id: Scalars['UUID'],
  showInTable: Scalars['Boolean']
}


export interface RootMutationTypeCreateFolderExternalSystemArgs {
  folderId: Scalars['Int'],
  ips?: Maybe<Array<Scalars['String']>>,
  title: Scalars['String']
}


export interface RootMutationTypePinObjectArgs {
  id: Scalars['String']
}


export interface RootMutationTypeGetCsvExportLinkArgs {
  stepId: Scalars['Int']
}


export interface RootMutationTypeUpdateStepArgs {
  dateColumn?: Maybe<Scalars['String']>,
  exportToMadd?: Maybe<Scalars['Boolean']>,
  fullUpdate?: Maybe<Scalars['Boolean']>,
  id: Scalars['Int'],
  outDbParams?: Maybe<Array<OutDbParamsInput>>,
  periodicity?: Maybe<Scalars['Int']>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeOpenFolderArgs {
  id: Scalars['Int'],
  pinnedFolderId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeRemoveCubeFilterFromUserGroupArgs {
  cubeId: Scalars['Int'],
  userGroupId: Scalars['Int']
}


export interface RootMutationTypeRunStepArgs {
  stepId: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldUpdateIsLinkArgs {
  id: Scalars['UUID'],
  isLink: Scalars['Boolean']
}


export interface RootMutationTypeSetExternalSystemRoleParamsArgs {
  externalSystemId: Scalars['Int'],
  params?: Maybe<Array<ExternalSystemParamsInp>>,
  roleId: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldUpdateUniqArgs {
  id: Scalars['UUID'],
  uniq: Scalars['Boolean']
}


export interface RootMutationTypeCreateOseTableArgs {
  indicatorId: Scalars['Int']
}


export interface RootMutationTypeDeleteIndicatorArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeCreateHierarchyArgs {
  tableId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeSetExternalSystemGroupParamsArgs {
  externalSystemId: Scalars['Int'],
  groupId: Scalars['Int'],
  params?: Maybe<Array<ExternalSystemParamsInp>>
}


export interface RootMutationTypeOrganisationsDeleteArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateIndicatorArgs {
  displayColumnIds?: Maybe<Array<Scalars['String']>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<FormulaTokenInput>>,
  id: Scalars['Int'],
  periodicity?: Maybe<Periodicity>,
  periodicityDays?: Maybe<Scalars['Int']>,
  showCountedFormula?: Maybe<Scalars['Boolean']>,
  sortType?: Maybe<SortType>,
  sortValue?: Maybe<Scalars['Float']>,
  sortValueType?: Maybe<SortValueType>,
  title: Scalars['String']
}


export interface RootMutationTypeExportStepToMaddArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDeleteFlowArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeCreateFolderUserGroupArgs {
  description?: Maybe<Scalars['String']>,
  folderId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeDataTableUpdateArgs {
  description?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  mapCenter?: Maybe<Array<Scalars['Float']>>,
  mapLayerStyles?: Maybe<MapLayerStylesInp>,
  mapZoom?: Maybe<Scalars['Float']>,
  tablePositionType?: Maybe<TablePositionType>,
  tablePositionX?: Maybe<Scalars['Int']>,
  tablePositionY?: Maybe<Scalars['Int']>,
  tileLayerLink?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  tooltip?: Maybe<MapLayerTooltipInp>
}


export interface RootMutationTypeDataTableFieldUpdateDefaultValueArgs {
  defaultValue?: Maybe<Array<Scalars['String']>>,
  id: Scalars['UUID']
}


export interface RootMutationTypeCalculateJoinArgs {
  joinId: Scalars['Int'],
  joinType: JoinType,
  leftStepColumnId: Scalars['Int'],
  leftStepId: Scalars['Int'],
  rightStepColumnId: Scalars['Int'],
  rightStepId: Scalars['Int']
}


export interface RootMutationTypeRemoveExternalSystemFromUserGroupArgs {
  externalSystemId: Scalars['Int'],
  groupId: Scalars['Int']
}


export interface RootMutationTypeSetMapLayerFilterArgs {
  filter?: Maybe<Array<FormulaTokenInput>>,
  id: Scalars['UUID']
}


export interface RootMutationTypeDeleteStepsArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootMutationTypeUpdateFolderArgs {
  folderId?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeDeleteDatasourceArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldCreateArgs {
  dataTableId: Scalars['UUID'],
  title?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeOlapDashboardUpdateArgs {
  dashboard: OlapDashboardInput,
  id: Scalars['UUID']
}


export interface RootMutationTypeMapLayerUpdateArgs {
  id: Scalars['UUID'],
  mapLayerStyles?: Maybe<MapLayerStylesInp>,
  modal?: Maybe<MapLayerModalInp>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  tooltip?: Maybe<MapLayerTooltipInp>,
  visible?: Maybe<Scalars['Boolean']>
}


export interface RootMutationTypeTakeAwayFolderAccessArgs {
  folderId: Scalars['Int'],
  userGroupId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeStopImportArgs {
  datasourceId: Scalars['Int'],
  tableId: Scalars['String']
}


export interface RootMutationTypeUpdateFlowArgs {
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeCreateFolderRoleArgs {
  dashboardRead?: Maybe<Scalars['Boolean']>,
  dashboardWrite?: Maybe<Scalars['Boolean']>,
  datasourceRead?: Maybe<Scalars['Boolean']>,
  datasourceWrite?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  etlRead?: Maybe<Scalars['Boolean']>,
  etlWrite?: Maybe<Scalars['Boolean']>,
  folderId: Scalars['Int'],
  indicatorsRead?: Maybe<Scalars['Boolean']>,
  indicatorsWrite?: Maybe<Scalars['Boolean']>,
  olapschemaRead?: Maybe<Scalars['Boolean']>,
  olapschemaWrite?: Maybe<Scalars['Boolean']>,
  rolesRead?: Maybe<Scalars['Boolean']>,
  rolesWrite?: Maybe<Scalars['Boolean']>,
  title: Scalars['String']
}


export interface RootMutationTypeUpdateFolderRoleArgs {
  dashboardRead?: Maybe<Scalars['Boolean']>,
  dashboardWrite?: Maybe<Scalars['Boolean']>,
  datasourceRead?: Maybe<Scalars['Boolean']>,
  datasourceWrite?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  etlRead?: Maybe<Scalars['Boolean']>,
  etlWrite?: Maybe<Scalars['Boolean']>,
  id: Scalars['Int'],
  indicatorsRead?: Maybe<Scalars['Boolean']>,
  indicatorsWrite?: Maybe<Scalars['Boolean']>,
  olapschemaRead?: Maybe<Scalars['Boolean']>,
  olapschemaWrite?: Maybe<Scalars['Boolean']>,
  rolesRead?: Maybe<Scalars['Boolean']>,
  rolesWrite?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeSetWhereFilterArgs {
  stepId: Scalars['Int'],
  whereCond?: Maybe<Array<FormulaTokenInput>>
}


export interface RootMutationTypeOrganisationsUpdateArgs {
  description?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name: Scalars['String'],
  private?: Maybe<Scalars['Boolean']>,
  url: Scalars['String']
}


export interface RootMutationTypeMapRemovePublicTokenArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeRemoveExternalSystemFromRoleArgs {
  externalSystemId: Scalars['Int'],
  roleId: Scalars['Int']
}


export interface RootMutationTypeProjectManagementCreateArgs {
  folderId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeDeleteFolderRoleArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldUpdateMultiInputArgs {
  id: Scalars['UUID'],
  multiInput: Scalars['Boolean']
}


export interface RootMutationTypeUnpinObjectArgs {
  id: Scalars['String']
}


export interface RootMutationTypeDeleteFolderUserGroupArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeUpdateObjectArgs {
  attachmentId?: Maybe<Scalars['String']>,
  folderId?: Maybe<Scalars['Int']>,
  id: Scalars['String'],
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeUpdateFieldArgs {
  description?: Maybe<Scalars['String']>,
  fieldType?: Maybe<FieldType>,
  id: Scalars['String'],
  isFKey?: Maybe<Scalars['Boolean']>,
  isInvisible?: Maybe<Scalars['Boolean']>,
  isLink?: Maybe<Scalars['Boolean']>,
  position?: Maybe<Scalars['Int']>,
  postfix?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeMapGenPublicTokenArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeUpdateFolderExternalSystemArgs {
  id: Scalars['Int'],
  ips?: Maybe<Array<Scalars['String']>>,
  title: Scalars['String']
}


export interface RootMutationTypeCreateFlowArgs {
  folderId?: Maybe<Scalars['Int']>,
  title: Scalars['String']
}


export interface RootMutationTypeMapUpdateArgs {
  center?: Maybe<Array<Scalars['Float']>>,
  id: Scalars['UUID'],
  tileLayerLink?: Maybe<Scalars['String']>,
  zoom?: Maybe<Scalars['Float']>
}


export interface RootMutationTypeDeleteFolderExternalSystemArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeSetJoinStepsArgs {
  joinId: Scalars['Int'],
  leftStepId?: Maybe<Scalars['Int']>,
  rightStepId?: Maybe<Scalars['Int']>
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


export interface RootMutationTypeDataTableFieldUpdateValidationArgs {
  id: Scalars['UUID'],
  validation?: Maybe<DataTableFieldValidationInput>
}


export interface RootMutationTypeProfileUpdateArgs {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
}


export interface RootMutationTypeSendInviteEmailArgs {
  email: Scalars['String'],
  folderId: Scalars['Int']
}


export interface RootMutationTypeCreateConnectionArgs {
  joinType?: Maybe<JoinType>,
  leftTableFieldId?: Maybe<Scalars['String']>,
  leftTableId?: Maybe<Scalars['Int']>,
  rightTableFieldId?: Maybe<Scalars['String']>,
  rightTableId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeCreateFolderArgs {
  folderId?: Maybe<Scalars['Int']>,
  title: Scalars['String']
}


export interface RootMutationTypeMapLayerDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeProjectManagementUpdateArgs {
  id: Scalars['UUID'],
  title: Scalars['String']
}


export interface RootMutationTypeDataTableFieldUpdateConsiderSearchArgs {
  considerSearch: Scalars['Boolean'],
  id: Scalars['UUID']
}


export interface RootMutationTypeDataTableFieldUpdatePositionArgs {
  id: Scalars['UUID'],
  position: Scalars['Int']
}


export interface RootMutationTypeUninviteUserFromOrgfolderArgs {
  folderId: Scalars['Int'],
  userId: Scalars['Int']
}


export interface RootMutationTypeDataTableRowDeleteArgs {
  dataTableId: Scalars['UUID'],
  rowId: Scalars['UUID']
}


export interface RootMutationTypeAddUserToUserGroupArgs {
  userGroupId: Scalars['Int'],
  userId: Scalars['Int']
}


export interface RootMutationTypeCloseAllFoldersArgs {
  exceptIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootMutationTypeAttachmentDeleteArgs {
  id?: Maybe<Scalars['UUID']>
}


export interface RootMutationTypeUpdateConnectionArgs {
  id?: Maybe<Scalars['Int']>,
  joinType?: Maybe<JoinType>,
  leftTableFieldId?: Maybe<Scalars['String']>,
  leftTableId?: Maybe<Scalars['Int']>,
  rightTableFieldId?: Maybe<Scalars['String']>,
  rightTableId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeMapRemovePrivateTokenArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeMapLayerCreateArgs {
  dataTableId: Scalars['UUID'],
  mapId: Scalars['UUID'],
  title?: Maybe<Scalars['String']>,
  visible?: Maybe<Scalars['Boolean']>
}


export interface RootMutationTypeRemoveFromMemoryArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDeleteConnectionArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootMutationTypePmChecklistUpdateArgs {
  description?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  title?: Maybe<Scalars['String']>,
  userIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootMutationTypeCreateChangeArgs {
  changeCaseTypeInput?: Maybe<ChangeCaseTypeInput>,
  changeType?: Maybe<ChangeType>,
  codecInput?: Maybe<CodecInput>,
  columnId?: Maybe<Scalars['Int']>,
  columnIds?: Maybe<Array<Scalars['Int']>>,
  dataTypeInput?: Maybe<DataTypeInput>,
  includeInput?: Maybe<IncludeInput>,
  positionInput?: Maybe<PositionInput>,
  stepId: Scalars['Int'],
  titleInput?: Maybe<TitleInput>,
  unionColumnsInput?: Maybe<UnionColumnsInput>,
  widthInput?: Maybe<WidthInput>
}


export interface RootMutationTypeDataTableCreateArgs {
  folderId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeLoadToMemoryArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeGiveObjectAccessArgs {
  objectId: Scalars['String'],
  userGroupId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeUnshareFolderArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeGetDuplicatesArgs {
  stepId: Scalars['Int']
}


export interface RootMutationTypeProjectManagementDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeCreateIndicatorArgs {
  displayColumnIds?: Maybe<Array<Scalars['String']>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  folderId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<FormulaTokenInput>>,
  periodicity?: Maybe<Periodicity>,
  periodicityDays?: Maybe<Scalars['Int']>,
  showCountedFormula?: Maybe<Scalars['Boolean']>,
  sortType?: Maybe<SortType>,
  sortValue?: Maybe<Scalars['Float']>,
  sortValueType?: Maybe<SortValueType>,
  title: Scalars['String']
}


export interface RootMutationTypePmChecklistCreateArgs {
  description?: Maybe<Scalars['String']>,
  projectManagementId: Scalars['UUID'],
  title: Scalars['String'],
  userIds?: Maybe<Array<Scalars['Int']>>
}


export interface RootMutationTypeDeleteFolderArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeOrganisationsCreateArgs {
  description?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  private?: Maybe<Scalars['Boolean']>,
  url: Scalars['String']
}


export interface RootMutationTypeMapGenPrivateTokenArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeMapCreateArgs {
  folderId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypeRemoveStepFromUnionArgs {
  stepId: Scalars['Int'],
  unionId: Scalars['Int']
}


export interface RootMutationTypeImportFileArgs {
  file?: Maybe<Scalars['Upload']>,
  flowId: Scalars['Int'],
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeAddRoleToUserGroupArgs {
  roleId: Scalars['Int'],
  userGroupId: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldUpdateFieldTypeArgs {
  fieldType: DataTableFieldType,
  id: Scalars['UUID']
}


export interface RootMutationTypeRemoveUserFromUserGroupArgs {
  userGroupId: Scalars['Int'],
  userId: Scalars['Int']
}


export interface RootMutationTypeRemoveDefaultPanelFromFolderArgs {
  folderId: Scalars['Int'],
  panelId: Scalars['UUID'],
  userId: Scalars['Int']
}


export interface RootMutationTypeCloseFolderArgs {
  id: Scalars['Int'],
  pinnedFolderId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeGiveFolderAccessArgs {
  folderId: Scalars['Int'],
  userGroupId?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeAddRoleToUserArgs {
  roleId: Scalars['Int'],
  userId: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldUpdateTitleArgs {
  id: Scalars['UUID'],
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeExportStepToMaddDataArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDataTableImportArgs {
  dataTableId: Scalars['UUID'],
  file?: Maybe<Scalars['Upload']>
}


export interface RootMutationTypeDeleteStepArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeOlapDashboardDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeDataTableFieldUpdateFieldCatalogIdArgs {
  fieldCatalogId?: Maybe<Scalars['String']>,
  id: Scalars['UUID']
}


export interface RootMutationTypeAddStepToUnionArgs {
  stepId: Scalars['Int'],
  unionId: Scalars['Int']
}


export interface RootMutationTypeCreateStepArgs {
  flowId: Scalars['Int'],
  joinType?: Maybe<JoinType>,
  positionX?: Maybe<Scalars['Int']>,
  positionY?: Maybe<Scalars['Int']>,
  sourceStepId?: Maybe<Scalars['Int']>,
  sourceStepIds?: Maybe<Array<Scalars['Int']>>,
  stepType: StepType,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAddStepsToUnionArgs {
  stepIds?: Maybe<Array<Scalars['Int']>>,
  unionId: Scalars['Int']
}


export interface RootMutationTypeDataTableFieldUpdateWidthArgs {
  id: Scalars['UUID'],
  width?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeAddDefaultPanelToFolderArgs {
  folderId: Scalars['Int'],
  panelId: Scalars['UUID'],
  userId: Scalars['Int']
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


export interface RootMutationTypeDataTableFieldUpdateIsVideoLinkArgs {
  id: Scalars['UUID'],
  isVideoLink: Scalars['Boolean']
}


export interface RootMutationTypeCreateColumnArgs {
  formula: Array<FormulaTokenInput>,
  stepId: Scalars['Int'],
  title: Scalars['String']
}


export interface RootMutationTypePmChecklistRemoveTaskArgs {
  checklistId: Scalars['UUID'],
  taskId: Scalars['UUID']
}


export interface RootMutationTypeRemoveRoleFromUserArgs {
  roleId: Scalars['Int'],
  userId: Scalars['Int']
}


export interface RootMutationTypeCreateDatasourceArgs {
  dbParams?: Maybe<DbParamsInp>,
  eisParams?: Maybe<EisParamsInp>,
  folderId?: Maybe<Scalars['Int']>,
  ftpParams?: Maybe<FtpParamsInp>,
  odataParams?: Maybe<OdataParamsInp>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  restParams?: Maybe<RestParamsInp>,
  sourceType?: Maybe<SourceType>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeAddExternalSystemToRoleArgs {
  externalSystemId: Scalars['Int'],
  roleId: Scalars['Int']
}


export interface RootMutationTypeAddOrReplaceCubeFilterToUserGroupArgs {
  cubeFilter: CubeFilterInput,
  userGroupId: Scalars['Int']
}


export interface RootMutationTypePmChecklistDeleteArgs {
  id: Scalars['UUID']
}


export interface RootMutationTypeOlapDashboardCreateArgs {
  dashboard: OlapDashboardInput,
  folderId?: Maybe<Scalars['Int']>
}


export interface RootMutationTypeUpdateHierarchyArgs {
  description?: Maybe<Scalars['String']>,
  dims?: Maybe<Array<HierarchyDimInput>>,
  id: Scalars['Int'],
  isInvisible?: Maybe<Scalars['Boolean']>,
  isOpened?: Maybe<Scalars['Boolean']>,
  position?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeSessionUpdateArgs {
  refreshToken: Scalars['UUID']
}


export interface RootMutationTypeUpdateDatasourceArgs {
  dbParams?: Maybe<DbParamsInp>,
  eisParams?: Maybe<EisParamsInp>,
  ftpParams?: Maybe<FtpParamsInp>,
  id: Scalars['Int'],
  odataParams?: Maybe<OdataParamsInp>,
  periodicityType?: Maybe<PeriodicityType>,
  periodicityValue?: Maybe<Scalars['Float']>,
  restParams?: Maybe<RestParamsInp>,
  sourceType?: Maybe<SourceType>,
  title?: Maybe<Scalars['String']>
}


export interface RootMutationTypeDataTableFieldUpdateRequiredArgs {
  id: Scalars['UUID'],
  required: Scalars['Boolean']
}


export interface RootMutationTypeAttachmentCreateArgs {
  file?: Maybe<Scalars['Upload']>
}


export interface RootMutationTypeShareFolderArgs {
  id: Scalars['Int']
}


export interface RootMutationTypeDataTableRowUpdateArgs {
  catalogValue?: Maybe<Array<Scalars['String']>>,
  coordinatesValue?: Maybe<CoordsInp>,
  dataTableFieldId: Scalars['UUID'],
  dataTableId: Scalars['UUID'],
  dateValue?: Maybe<Array<Scalars['Timestamp']>>,
  datetimeValue?: Maybe<Array<Scalars['Timestamp']>>,
  fileValue?: Maybe<Array<Scalars['String']>>,
  numberValue?: Maybe<Array<Scalars['Float']>>,
  rowId: Scalars['UUID'],
  stringValue?: Maybe<Array<Scalars['String']>>,
  userEnteredValue?: Maybe<Array<Scalars['String']>>
}


export interface RootMutationTypeUnpinFolderArgs {
  folderId: Scalars['Int']
}


export interface RootMutationTypeAddExternalSystemToUserGroupArgs {
  externalSystemId: Scalars['Int'],
  groupId: Scalars['Int']
}

export interface RootQueryType {
   __typename?: 'RootQueryType',
  /** Get data_table */
  dataTableGet?: Maybe<DataTable>,
  /** Get autocomplete */
  getEtlStepAutocomplete?: Maybe<Array<Autocomplete>>,
  /** check_where_formula */
  checkWhereFormula?: Maybe<Scalars['String']>,
  /** Scanner drill */
  scannerDrill?: Maybe<Array<Array<Scalars['String']>>>,
  /** Get folder user_groups */
  getFolderUserGroups?: Maybe<Array<UserGroup>>,
  /** Get folder trees */
  getFolderTree?: Maybe<Trees>,
  /** Get current user organisations */
  organisationsMyGet?: Maybe<Array<Organisation>>,
  /** Get data_table_fields */
  dataTableFieldGet?: Maybe<Array<DataTableField>>,
  /** ls ftp dir */
  lsFtpDir?: Maybe<Array<FtpEnity>>,
  /** Get project_management */
  projectManagementGet?: Maybe<ProjectManagement>,
  /** Get dashboards */
  olapDashboardGet?: Maybe<Array<OlapDashboard>>,
  /** Get indicator base rating */
  getIndicatorBaseRating?: Maybe<Array<Array<Scalars['String']>>>,
  /** Get olap_cube autocomplete */
  getOlapCubeAutocomplete?: Maybe<Array<Autocomplete>>,
  /** Get profile */
  profileGet?: Maybe<User>,
  /** for socket_message to appear in schema */
  getSocketMessage?: Maybe<SocketMessage>,
  /** Get data_table_rows */
  dataTableGetRows?: Maybe<Array<DataTableRow>>,
  /** Get functions list */
  getFunctions?: Maybe<Array<Function>>,
  /** Get checklists */
  pmChecklistsGet?: Maybe<Array<PmChecklist>>,
  /** Get hierarchies */
  getHierarchies?: Maybe<Array<Hierarchy>>,
  /** Get column stats by formula */
  getColumnStatsByFormula?: Maybe<Array<ColumnStat>>,
  /** chech_indicator_formula */
  chechIndicatorFormula?: Maybe<Scalars['String']>,
  /** Get flows */
  getFlows?: Maybe<Array<Flow>>,
  /** Get indicators autocomplete */
  getIndicatorsAutocomplete?: Maybe<Array<IndicatorsAutocomplete>>,
  /** OLAP request */
  olapRequest?: Maybe<OlapResponse>,
  /** Get indicators */
  getIndicators?: Maybe<Array<Indicator>>,
  /** Get column values */
  getColumnValues?: Maybe<Array<Scalars['String']>>,
  /** get db tables */
  getDbTables?: Maybe<Array<DbTable>>,
  /** for entity_created to appear in schema */
  getEntityCreated?: Maybe<EntityCreated>,
  /** Get users */
  getUsers?: Maybe<Array<User>>,
  /** Get field values */
  getFieldValues?: Maybe<Array<Scalars['String']>>,
  /** Get regression models */
  regressionModelGet?: Maybe<RegressionModel>,
  /** get odata tables */
  getOdataTables?: Maybe<Array<Scalars['String']>>,
  /** Get tables */
  getTables?: Maybe<Array<Table>>,
  /** test rest refresh */
  testRestRefresh?: Maybe<RestHttpAnswer>,
  /** Get objects */
  getObjects?: Maybe<Array<Object>>,
  /** Get columns */
  getColumns?: Maybe<Array<Column>>,
  /** Get map */
  mapGet?: Maybe<Map>,
  /** test rest auth */
  testRestAuth?: Maybe<RestHttpAnswer>,
  /** Get datasources */
  getDatasources?: Maybe<Array<Datasource>>,
  /** Get folder external_systems */
  getFolderExternalSystems?: Maybe<Array<ExternalSystem>>,
  /** Get folder roles */
  getFolderRoles?: Maybe<Array<Role>>,
  /** Get steps */
  getSteps?: Maybe<Array<Step>>,
  /** Get shared map */
  mapGetShared?: Maybe<MapShared>,
  /** Get shared data_table row */
  dataTableGetRowShared?: Maybe<DataTableRow>,
}


export interface RootQueryTypeDataTableGetArgs {
  id: Scalars['UUID']
}


export interface RootQueryTypeGetEtlStepAutocompleteArgs {
  search: Scalars['String'],
  stepId: Scalars['Int'],
  types?: Maybe<Array<AutocompleteType>>
}


export interface RootQueryTypeCheckWhereFormulaArgs {
  whereCond: Array<FormulaTokenInput>
}


export interface RootQueryTypeScannerDrillArgs {
  cubeId: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  scanDate: Scalars['String'],
  scannerId: Scalars['String']
}


export interface RootQueryTypeGetFolderUserGroupsArgs {
  folderId: Scalars['Int']
}


export interface RootQueryTypeGetFolderTreeArgs {
  id?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeDataTableFieldGetArgs {
  dataTableId: Scalars['UUID'],
  id?: Maybe<Scalars['UUID']>
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


export interface RootQueryTypeProjectManagementGetArgs {
  id: Scalars['UUID']
}


export interface RootQueryTypeOlapDashboardGetArgs {
  ids?: Maybe<Array<Scalars['UUID']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetIndicatorBaseRatingArgs {
  displayColumnIds?: Maybe<Array<Scalars['String']>>,
  displayFKeyId?: Maybe<Scalars['String']>,
  displayTableId?: Maybe<Scalars['Int']>,
  formula?: Maybe<Array<FormulaTokenInput>>,
  showCountedFormula?: Maybe<Scalars['Boolean']>,
  sortType?: Maybe<SortType>,
  sortValue?: Maybe<Scalars['Float']>,
  sortValueType?: Maybe<SortValueType>
}


export interface RootQueryTypeGetOlapCubeAutocompleteArgs {
  search: Scalars['String'],
  tableId: Scalars['Int'],
  types?: Maybe<Array<AutocompleteType>>
}


export interface RootQueryTypeDataTableGetRowsArgs {
  dataTableId: Scalars['UUID'],
  id?: Maybe<Scalars['UUID']>,
  limit: Scalars['Int'],
  offset: Scalars['Int'],
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypePmChecklistsGetArgs {
  id?: Maybe<Scalars['UUID']>,
  pmId?: Maybe<Scalars['UUID']>
}


export interface RootQueryTypeGetHierarchiesArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeGetColumnStatsByFormulaArgs {
  formula: Array<FormulaTokenInput>,
  stepId: Scalars['Int']
}


export interface RootQueryTypeChechIndicatorFormulaArgs {
  formula?: Maybe<Array<FormulaTokenInput>>
}


export interface RootQueryTypeGetFlowsArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetIndicatorsAutocompleteArgs {
  search: Scalars['String'],
  tableId?: Maybe<Scalars['Int']>,
  types?: Maybe<Array<IndicatorsAutocompleteType>>
}


export interface RootQueryTypeOlapRequestArgs {
  request: OlapRequestInput
}


export interface RootQueryTypeGetIndicatorsArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeGetColumnValuesArgs {
  columnId: Scalars['Int'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
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


export interface RootQueryTypeGetUsersArgs {
  id?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetFieldValuesArgs {
  fieldId: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
}


export interface RootQueryTypeRegressionModelGetArgs {
  predictId: Scalars['String'],
  seriaId: Scalars['String'],
  series: Array<RegressionSeriaInput>,
  vars: Array<RegressionVarInput>
}


export interface RootQueryTypeGetOdataTablesArgs {
  host: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  pass?: Maybe<Scalars['String']>,
  port?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  url: Scalars['String'],
  user?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetTablesArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeTestRestRefreshArgs {
  refreshToken?: Maybe<Scalars['String']>,
  refreshTokenFieldname?: Maybe<Scalars['String']>,
  refreshUrl?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetObjectsArgs {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>,
  types?: Maybe<Array<ObjectType>>
}


export interface RootQueryTypeGetColumnsArgs {
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>,
  stepId?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeMapGetArgs {
  id: Scalars['UUID']
}


export interface RootQueryTypeTestRestAuthArgs {
  authUrl?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  loginFieldname?: Maybe<Scalars['String']>,
  pass?: Maybe<Scalars['String']>,
  passFieldname?: Maybe<Scalars['String']>
}


export interface RootQueryTypeGetDatasourcesArgs {
  ids?: Maybe<Array<Scalars['Int']>>
}


export interface RootQueryTypeGetFolderExternalSystemsArgs {
  folderId: Scalars['Int']
}


export interface RootQueryTypeGetFolderRolesArgs {
  folderId: Scalars['Int']
}


export interface RootQueryTypeGetStepsArgs {
  datasourceId?: Maybe<Scalars['Int']>,
  flowId?: Maybe<Scalars['Int']>,
  ids?: Maybe<Array<Scalars['Int']>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
}


export interface RootQueryTypeDataTableGetRowSharedArgs {
  id?: Maybe<Scalars['UUID']>,
  layerId: Scalars['UUID']
}

export const enum RtxDataType {
  Paragraph = 'PARAGRAPH'
};

export const enum RtxItemType {
  Element = 'ELEMENT',
  Slice = 'SLICE',
  Text = 'TEXT',
  Var = 'VAR'
};

export interface Session {
   __typename?: 'Session',
  expireAt: Scalars['Timestamp'],
  refreshToken: Scalars['UUID'],
  token: Scalars['UUID'],
  user: User,
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

export const enum SortingType {
  DimensionAsc = 'DIMENSION_ASC',
  DimensionDesc = 'DIMENSION_DESC',
  MeasureAsc = 'MEASURE_ASC',
  MeasureDesc = 'MEASURE_DESC'
};

export const enum SortType {
  Asc = 'ASC',
  Desc = 'DESC'
};

export const enum SortValueType {
  Reference = 'REFERENCE',
  ReferenceAvg = 'REFERENCE_AVG',
  Value = 'VALUE'
};

export const enum SourceType {
  Clickhouse = 'CLICKHOUSE',
  Db = 'DB',
  Eis = 'EIS',
  Ftp = 'FTP',
  Odata = 'ODATA',
  Rest = 'REST'
};

export interface Step {
   __typename?: 'Step',
  originalSchemaTitle?: Maybe<Scalars['String']>,
  tableName?: Maybe<Scalars['String']>,
  leftInKeys?: Maybe<Scalars['Int']>,
  rightColumns?: Maybe<Array<Column>>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
  whereCond?: Maybe<Array<FormulaToken>>,
  exportToMadd?: Maybe<Scalars['Boolean']>,
  leftStepColumnId?: Maybe<Scalars['Int']>,
  periodicity?: Maybe<Scalars['Int']>,
  stepIds: Array<Scalars['Int']>,
  stepType: StepType,
  changes: Array<Change>,
  originalTitle?: Maybe<Scalars['String']>,
  rightStepId?: Maybe<Scalars['Int']>,
  leftNotInRecords?: Maybe<Scalars['Int']>,
  columnsCount: Scalars['Int'],
  leftNotInKeys?: Maybe<Scalars['Int']>,
  leftInRecords?: Maybe<Scalars['Int']>,
  rightStepColumnId?: Maybe<Scalars['Int']>,
  positionX?: Maybe<Scalars['Int']>,
  rightInRecords?: Maybe<Scalars['Int']>,
  matchedKeys?: Maybe<Array<Scalars['String']>>,
  rightNotInRecords?: Maybe<Scalars['Int']>,
  insertedAt?: Maybe<Scalars['Timestamp']>,
  id: Scalars['Int'],
  rightNotInKeys?: Maybe<Scalars['Int']>,
  joinType?: Maybe<JoinType>,
  positionY?: Maybe<Scalars['Int']>,
  dupGroupsCount?: Maybe<Scalars['Int']>,
  datasource?: Maybe<Datasource>,
  flow?: Maybe<Flow>,
  leftStepId?: Maybe<Scalars['Int']>,
  rightInKeys?: Maybe<Scalars['Int']>,
  dateColumn?: Maybe<Scalars['String']>,
  rightUnmatchedKeys?: Maybe<Array<Scalars['String']>>,
  fullUpdate?: Maybe<Scalars['Boolean']>,
  leftColumns?: Maybe<Array<Column>>,
  dupColumnsCount?: Maybe<Scalars['Int']>,
  leftUnmatchedKeys?: Maybe<Array<Scalars['String']>>,
  title: Scalars['String'],
  outDbParams?: Maybe<Array<OutDbParams>>,
}

export interface StepProgress {
   __typename?: 'StepProgress',
  processes?: Maybe<Array<Progress>>,
  status?: Maybe<ProgressStatus>,
  stepId?: Maybe<Scalars['Int']>,
}

export const enum StepType {
  Agg = 'AGG',
  Join = 'JOIN',
  Out = 'OUT',
  Pivot = 'PIVOT',
  Source = 'SOURCE',
  Transform = 'TRANSFORM',
  Union = 'UNION'
};

export interface Table {
   __typename?: 'Table',
  connections?: Maybe<Array<Connection>>,
  cubeDescription?: Maybe<Scalars['String']>,
  cubeTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  fields?: Maybe<Array<Field>>,
  hierarchies?: Maybe<Array<Hierarchy>>,
  id: Scalars['Int'],
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

export interface TablePartSize {
   __typename?: 'TablePartSize',
  id?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
}

export interface TablePartSizeInput {
  id?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
}

export const enum TablePositionType {
  Bottom = 'BOTTOM',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
};

export const enum TableType {
  Dimension = 'DIMENSION',
  Fact = 'FACT'
};


export interface TitleInput {
  value: Scalars['String'],
}

export const enum TokenType {
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
};

export interface Tree {
   __typename?: 'Tree',
  folders: Array<Folder>,
  objects: Array<Object>,
}

export interface Trees {
   __typename?: 'Trees',
  pinnedTree: Tree,
  tree: Tree,
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
  value?: Maybe<Array<Scalars['Int']>>,
}


export interface User {
   __typename?: 'User',
  acl?: Maybe<Acl>,
  avatar?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  orgQuota?: Maybe<Scalars['Int']>,
  roles?: Maybe<Array<Role>>,
  status?: Maybe<UserStatus>,
}

export interface UserGroup {
   __typename?: 'UserGroup',
  cubeFilters: Array<CubeFilter>,
  description?: Maybe<Scalars['String']>,
  externalSystems: Array<ExternalSystem>,
  folderId: Scalars['Int'],
  id: Scalars['Int'],
  roles: Array<Role>,
  title: Scalars['String'],
  users: Array<User>,
}

export const enum UserStatus {
  EmailSent = 'EMAIL_SENT',
  RegistrationDone = 'REGISTRATION_DONE'
};


export interface WidthInput {
  value?: Maybe<Scalars['Int']>,
}

export type RichTextInlineElementFragment = (
  { __typename?: 'OlapChartLayer' }
  & Pick<OlapChartLayer, 'chartType' | 'cubeId' | 'width' | 'height' | 'positionX' | 'positionY'>
  & { columns: Maybe<Array<(
    { __typename?: 'OlapRequestField' }
    & OlapRequestFieldFragment
  )>>, rows: Maybe<Array<(
    { __typename?: 'OlapRequestField' }
    & OlapRequestFieldFragment
  )>>, whereFilters: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>>, havingFilters: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>> }
);

export type FormulaTokenRecursiveFragment = (
  { __typename?: 'FormulaToken' }
  & Pick<FormulaToken, 'tokenType' | 'value'>
  & { dataValue: Maybe<(
    { __typename?: 'DataValue' }
    & Pick<DataValue, 'columnId' | 'fieldId' | 'dataTableFieldId'>
  )>, listValue: Maybe<(
    { __typename?: 'ListValue' }
    & Pick<ListValue, 'list' | 'title'>
  )> }
);

export type FuncValueFragment = (
  { __typename?: 'FuncValue' }
  & Pick<FuncValue, 'name'>
  & { args: Array<Array<(
    { __typename?: 'FormulaToken' }
    & { funcValue: Maybe<(
      { __typename?: 'FuncValue' }
      & Pick<FuncValue, 'name'>
      & { args: Array<Array<(
        { __typename?: 'FormulaToken' }
        & FormulaTokenRecursiveFragment
      )>> }
    )> }
    & FormulaTokenRecursiveFragment
  )>> }
);

export type FormulaTokenFragment = (
  { __typename?: 'FormulaToken' }
  & { funcValue: Maybe<(
    { __typename?: 'FuncValue' }
    & FuncValueFragment
  )> }
  & FormulaTokenRecursiveFragment
);

export type FolderMainInfoFragment = (
  { __typename?: 'Folder' }
  & Pick<Folder, 'id' | 'title' | 'isOpened' | 'isLocked' | 'sharedAccess' | 'sharedToken' | 'asOwner'>
  & { invitedUsers: Maybe<Array<(
    { __typename?: 'User' }
    & UserFragment
  )>>, usersAccessList: Maybe<Array<(
    { __typename?: 'User' }
    & UserFragment
  )>>, groupAccessList: Maybe<Array<(
    { __typename?: 'UserGroup' }
    & UserGroupFragment
  )>>, objects: Array<(
    { __typename?: 'Object' }
    & ObjectFragment
  )>, defaultPanels: Array<(
    { __typename?: 'DefaultPanel' }
    & Pick<DefaultPanel, 'panelId' | 'userId'>
  )> }
);

export type FolderFragment = (
  { __typename?: 'Folder' }
  & { folders: Array<(
    { __typename?: 'Folder' }
    & { folders: Array<(
      { __typename?: 'Folder' }
      & { folders: Array<(
        { __typename?: 'Folder' }
        & { folders: Array<(
          { __typename?: 'Folder' }
          & { folders: Array<(
            { __typename?: 'Folder' }
            & FolderMainInfoFragment
          )> }
          & FolderMainInfoFragment
        )> }
        & FolderMainInfoFragment
      )> }
      & FolderMainInfoFragment
    )> }
    & FolderMainInfoFragment
  )> }
  & FolderMainInfoFragment
);

export type ColumnShortFragment = (
  { __typename?: 'Column' }
  & Pick<Column, 'id' | 'title' | 'originalTitle' | 'include'>
);

export type StepShortFragment = (
  { __typename?: 'Step' }
  & Pick<Step, 'id' | 'leftStepId' | 'positionX' | 'positionY' | 'rightStepId' | 'rightUnmatchedKeys' | 'stepIds' | 'stepType' | 'title'>
);

export type RootFoldersFragment = (
  { __typename?: 'Trees' }
  & { tree: (
    { __typename?: 'Tree' }
    & { folders: Array<(
      { __typename?: 'Folder' }
      & Pick<Folder, 'id' | 'title'>
      & { defaultPanels: Array<(
        { __typename?: 'DefaultPanel' }
        & Pick<DefaultPanel, 'userId' | 'panelId'>
      )> }
    )> }
  ) }
);

export type AclFragment = (
  { __typename?: 'Acl' }
  & { etl: (
    { __typename?: 'EtlAcl' }
    & EtlAclFragment
  ), olap: (
    { __typename?: 'OlapAcl' }
    & OlapAclFragment
  ), ose: (
    { __typename?: 'OseAcl' }
    & OseAclFragment
  ), shared: (
    { __typename?: 'SharedAcl' }
    & SharedAclFragment
  ) }
);

export type AdditionalCalcFragment = (
  { __typename?: 'AdditionalCalc' }
  & Pick<AdditionalCalc, 'cumulativeTotal' | 'groupBy' | 'growth' | 'growthRate' | 'linkedFieldId' | 'percentOfTotal'>
);

export type AnalysisFragment = (
  { __typename?: 'Analysis' }
  & { regression: Maybe<(
    { __typename?: 'Regression' }
    & RegressionFragment
  )> }
);

export type AttachmentFragment = (
  { __typename?: 'Attachment' }
  & Pick<Attachment, 'aspectRatio' | 'contentType' | 'id' | 'name' | 'url'>
);

export type AutocompleteFragment = (
  { __typename?: 'Autocomplete' }
  & Pick<Autocomplete, 'name' | 'type'>
  & { column: Maybe<(
    { __typename?: 'Column' }
    & ColumnFragment
  )>, function: Maybe<(
    { __typename?: 'Function' }
    & FunctionFragment
  )> }
);

export type ChangeFragment = (
  { __typename?: 'Change' }
  & Pick<Change, 'after' | 'before' | 'changeType' | 'id' | 'insertedAt'>
  & { column: (
    { __typename?: 'Column' }
    & ColumnFragment
  ) }
);

export type ChatAvatarFragment = (
  { __typename?: 'ChatAvatar' }
  & Pick<ChatAvatar, 'large' | 'small'>
);

export type ChatMessageFragment = (
  { __typename?: 'ChatMessage' }
  & Pick<ChatMessage, 'embed' | 'messageId' | 'replyId' | 'roomId' | 'text' | 'userId'>
  & { reply: Maybe<(
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'messageId'>
  )>, user: Maybe<(
    { __typename?: 'ChatUser' }
    & ChatUserFragment
  )> }
);

export type ChatOnlineFragment = (
  { __typename?: 'ChatOnline' }
  & Pick<ChatOnline, 'id'>
  & { meta: Maybe<(
    { __typename?: 'ChatOnlineMeta' }
    & ChatOnlineMetaFragment
  )> }
);

export type ChatOnlineMetaFragment = (
  { __typename?: 'ChatOnlineMeta' }
  & Pick<ChatOnlineMeta, 'onlineAt'>
);

export type ChatRoomFragment = (
  { __typename?: 'ChatRoom' }
  & Pick<ChatRoom, 'dialog' | 'messageId' | 'metadata' | 'name' | 'roomId' | 'updatedAt'>
  & { lastMessage: Maybe<(
    { __typename?: 'ChatMessage' }
    & ChatMessageFragment
  )>, user: Maybe<(
    { __typename?: 'ChatUser' }
    & ChatUserFragment
  )> }
);

export type ChatUserFragment = (
  { __typename?: 'ChatUser' }
  & Pick<ChatUser, 'id' | 'name'>
  & { avatar: Maybe<(
    { __typename?: 'ChatAvatar' }
    & ChatAvatarFragment
  )> }
);

export type CodecFragment = (
  { __typename?: 'Codec' }
  & Pick<Codec, 'level' | 'type'>
);

export type ColumnFragment = (
  { __typename?: 'Column' }
  & Pick<Column, 'caseType' | 'columnIds' | 'columnName' | 'compressedBytes' | 'dataType' | 'defaultExpr' | 'id' | 'include' | 'insertedAt' | 'nullable' | 'originalTitle' | 'position' | 'removeLetters' | 'removeNumbers' | 'removePunctuation' | 'sourceStepId' | 'stepIds' | 'title' | 'trimSpaces' | 'uncompressedBytes' | 'updatedAt' | 'width'>
  & { changes: Maybe<Array<(
    { __typename?: 'Change' }
    & Pick<Change, 'after' | 'before' | 'changeType' | 'id'>
  )>>, codecs: Maybe<Array<(
    { __typename?: 'Codec' }
    & CodecFragment
  )>>, columnStats: Maybe<Array<(
    { __typename?: 'ColumnStat' }
    & ColumnStatFragment
  )>>, step: (
    { __typename?: 'Step' }
    & Pick<Step, 'id'>
  ) }
);

export type ColumnStatFragment = (
  { __typename?: 'ColumnStat' }
  & Pick<ColumnStat, 'count' | 'value'>
);

export type ConnectedEntitiesFragment = (
  { __typename?: 'ConnectedEntities' }
  & Pick<ConnectedEntities, 'folders' | 'objects'>
);

export type ConnectionFragment = (
  { __typename?: 'Connection' }
  & Pick<Connection, 'id' | 'joinType' | 'leftTableFieldId' | 'leftTableId' | 'rightTableFieldId' | 'rightTableId'>
);

export type CoordsFragment = (
  { __typename?: 'Coords' }
  & Pick<Coords, 'coordsType' | 'lineCoords' | 'pointCoords' | 'polyCoords'>
);

export type CubeFilterFragment = (
  { __typename?: 'CubeFilter' }
  & Pick<CubeFilter, 'cubeId' | 'cubeTitle' | 'draftInput'>
  & { filter: Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )> }
);

export type DashboardAnalysisFragment = (
  { __typename?: 'DashboardAnalysis' }
  & { regression: Maybe<(
    { __typename?: 'DashboardRegression' }
    & DashboardRegressionFragment
  )> }
);

export type DashboardRegressionFragment = (
  { __typename?: 'DashboardRegression' }
  & Pick<DashboardRegression, 'predictSize'>
  & { models: Maybe<Array<(
    { __typename?: 'RegressionModelV1' }
    & RegressionModelV1Fragment
  )>> }
);

export type DataTableFragment = (
  { __typename?: 'DataTable' }
  & Pick<DataTable, 'description' | 'errorCount' | 'id' | 'insertedAt' | 'mapCenter' | 'mapZoom' | 'tablePositionType' | 'tablePositionX' | 'tablePositionY' | 'tileLayerLink' | 'title' | 'updatedAt'>
  & { fields: Array<(
    { __typename?: 'DataTableField' }
    & DataTableFieldFragment
  )>, mapLayerStyles: Maybe<(
    { __typename?: 'MapLayerStyles' }
    & MapLayerStylesFragment
  )>, object: Maybe<(
    { __typename?: 'Object' }
    & ObjectFragment
  )>, tooltip: Maybe<(
    { __typename?: 'MapLayerTooltip' }
    & MapLayerTooltipFragment
  )> }
);

export type DataTableFieldFragment = (
  { __typename?: 'DataTableField' }
  & Pick<DataTableField, 'considerSearch' | 'dataTableId' | 'defaultValue' | 'fieldCatalogId' | 'fieldType' | 'id' | 'insertedAt' | 'isLink' | 'isVideoLink' | 'multiInput' | 'position' | 'required' | 'showInTable' | 'title' | 'uniq' | 'updatedAt' | 'width'>
  & { validation: Maybe<(
    { __typename?: 'DataTableFieldValidation' }
    & DataTableFieldValidationFragment
  )> }
);

export type DataTableFieldValidationFragment = (
  { __typename?: 'DataTableFieldValidation' }
  & Pick<DataTableFieldValidation, 'dateFormat' | 'dateMax' | 'dateMin' | 'datetimeFormat' | 'datetimeMax' | 'datetimeMin' | 'fileFormats' | 'numberMax' | 'numberMin' | 'stringMaxChars' | 'stringMinChars' | 'stringRegexp'>
);

export type DataTableRowFragment = (
  { __typename?: 'DataTableRow' }
  & Pick<DataTableRow, 'createdAt' | 'id'>
  & { fields: Array<(
    { __typename?: 'DataTableRowField' }
    & DataTableRowFieldFragment
  )> }
);

export type DataTableRowFieldFragment = (
  { __typename?: 'DataTableRowField' }
  & Pick<DataTableRowField, 'catalogValue' | 'dataTableFieldId' | 'dateValue' | 'datetimeValue' | 'numberValue' | 'stringValue' | 'userEnteredValue' | 'validationErrors'>
  & { coordinatesValue: Maybe<(
    { __typename?: 'Coords' }
    & CoordsFragment
  )>, fileValue: Maybe<Array<(
    { __typename?: 'Attachment' }
    & AttachmentFragment
  )>> }
);

export type DataValueFragment = (
  { __typename?: 'DataValue' }
  & Pick<DataValue, 'agg' | 'columnId' | 'dataTableFieldId' | 'fieldId' | 'groupFieldId' | 'tableId' | 'title'>
  & { filter: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>> }
);

export type DatasourceFragment = (
  { __typename?: 'Datasource' }
  & Pick<Datasource, 'id' | 'periodicityType' | 'periodicityValue' | 'sourceType' | 'title'>
  & { datasourceProgresses: Maybe<Array<(
    { __typename?: 'DatasourceProgress' }
    & DatasourceProgressFragment
  )>>, datasourceState: Maybe<(
    { __typename?: 'DatasourceState' }
    & DatasourceStateFragment
  )>, dbParams: Maybe<(
    { __typename?: 'DbParams' }
    & DbParamsFragment
  )>, eisParams: Maybe<(
    { __typename?: 'EisParams' }
    & EisParamsFragment
  )>, ftpParams: Maybe<(
    { __typename?: 'FtpParams' }
    & FtpParamsFragment
  )>, object: (
    { __typename?: 'Object' }
    & ObjectFragment
  ), odataParams: Maybe<(
    { __typename?: 'OdataParams' }
    & OdataParamsFragment
  )>, restParams: Maybe<(
    { __typename?: 'RestParams' }
    & RestParamsFragment
  )>, steps: Array<(
    { __typename?: 'Step' }
    & Pick<Step, 'id' | 'title'>
  )> }
);

export type DatasourceProgressFragment = (
  { __typename?: 'DatasourceProgress' }
  & Pick<DatasourceProgress, 'allCount' | 'datasourceId' | 'doneCount' | 'doneDate' | 'futureStartDate' | 'startDate' | 'status' | 'stopDate' | 'tableId'>
  & { processes: Maybe<Array<(
    { __typename?: 'Progress' }
    & ProgressFragment
  )>> }
);

export type DatasourceStateFragment = (
  { __typename?: 'DatasourceState' }
  & Pick<DatasourceState, 'allCount' | 'currentSubsource' | 'datasourceId' | 'doneCount'>
);

export type DbParamsFragment = (
  { __typename?: 'DbParams' }
  & Pick<DbParams, 'db' | 'dbType' | 'host' | 'pass' | 'port' | 'user'>
  & { tables: Maybe<Array<(
    { __typename?: 'DbTable' }
    & DbTableFragment
  )>> }
);

export type DbTableFragment = (
  { __typename?: 'DbTable' }
  & Pick<DbTable, 'id' | 'name' | 'schema'>
);

export type DefaultPanelFragment = (
  { __typename?: 'DefaultPanel' }
  & Pick<DefaultPanel, 'panelId' | 'userId'>
);

export type EisDirFragment = (
  { __typename?: 'EisDir' }
  & Pick<EisDir, 'id' | 'includeSubdirs' | 'path' | 'queries' | 'regexp' | 'title'>
);

export type EisParamsFragment = (
  { __typename?: 'EisParams' }
  & Pick<EisParams, 'host' | 'pass' | 'port' | 'user'>
  & { dirs: Maybe<Array<(
    { __typename?: 'EisDir' }
    & EisDirFragment
  )>> }
);

export type EntityCreatedFragment = (
  { __typename?: 'EntityCreated' }
  & Pick<EntityCreated, 'entity' | 'type'>
);

export type EtlAclFragment = (
  { __typename?: 'EtlAcl' }
  & Pick<EtlAcl, 'datasourceEdit' | 'datasourceRead' | 'flowEdit' | 'flowRead'>
);

export type ExternalSystemFragment = (
  { __typename?: 'ExternalSystem' }
  & Pick<ExternalSystem, 'folderId' | 'id' | 'ips' | 'title'>
  & { params: Array<(
    { __typename?: 'ExternalSystemParams' }
    & ExternalSystemParamsFragment
  )> }
);

export type ExternalSystemParamsFragment = (
  { __typename?: 'ExternalSystemParams' }
  & Pick<ExternalSystemParams, 'active' | 'description' | 'key' | 'value'>
);

export type FieldFragment = (
  { __typename?: 'Field' }
  & Pick<Field, 'datatype' | 'description' | 'fieldType' | 'id' | 'isFKey' | 'isInvisible' | 'isLink' | 'position' | 'postfix' | 'title'>
);

export type FlowFragment = (
  { __typename?: 'Flow' }
  & Pick<Flow, 'id' | 'insertedAt' | 'title' | 'updatedAt'>
  & { acl: Maybe<(
    { __typename?: 'FlowAcl' }
    & FlowAclFragment
  )>, connectedEntities: (
    { __typename?: 'ConnectedEntities' }
    & ConnectedEntitiesFragment
  ), object: (
    { __typename?: 'Object' }
    & ObjectFragment
  ) }
);

export type FlowAclFragment = (
  { __typename?: 'FlowAcl' }
  & Pick<FlowAcl, 'copy' | 'delete' | 'update'>
);

export type FtpDirFragment = (
  { __typename?: 'FtpDir' }
  & Pick<FtpDir, 'id' | 'includeSubdirs' | 'path' | 'regexp' | 'title'>
);

export type FtpEnityFragment = (
  { __typename?: 'FtpEnity' }
  & Pick<FtpEnity, 'name' | 'type'>
);

export type FtpParamsFragment = (
  { __typename?: 'FtpParams' }
  & Pick<FtpParams, 'host' | 'pass' | 'port' | 'user'>
  & { dirs: Maybe<Array<(
    { __typename?: 'FtpDir' }
    & FtpDirFragment
  )>> }
);

export type FunctionFragment = (
  { __typename?: 'Function' }
  & Pick<Function, 'arg1Type' | 'arg2Type' | 'arg3Type' | 'argsCount' | 'description' | 'name' | 'resultType'>
  & { examples: Maybe<Array<(
    { __typename?: 'FunctionExample' }
    & FunctionExampleFragment
  )>> }
);

export type FunctionExampleFragment = (
  { __typename?: 'FunctionExample' }
  & Pick<FunctionExample, 'formula' | 'result'>
);

export type HierarchyFragment = (
  { __typename?: 'Hierarchy' }
  & Pick<Hierarchy, 'description' | 'id' | 'insertedAt' | 'isInvisible' | 'isOpened' | 'position' | 'title' | 'updatedAt'>
  & { dims: Maybe<Array<(
    { __typename?: 'HierarchyDim' }
    & HierarchyDimFragment
  )>> }
);

export type HierarchyDimFragment = (
  { __typename?: 'HierarchyDim' }
  & Pick<HierarchyDim, 'dimId' | 'position'>
);

export type IndicatorFragment = (
  { __typename?: 'Indicator' }
  & Pick<Indicator, 'baseRating' | 'displayColumnIds' | 'displayFKeyId' | 'displayTableId' | 'id' | 'insertedAt' | 'periodicity' | 'periodicityDays' | 'showCountedFormula' | 'sortType' | 'sortValue' | 'sortValueType' | 'title' | 'updatedAt'>
  & { connectedEntities: Maybe<(
    { __typename?: 'ConnectedEntities' }
    & ConnectedEntitiesFragment
  )>, formula: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>>, object: Maybe<(
    { __typename?: 'Object' }
    & ObjectFragment
  )> }
);

export type IndicatorsAutocompleteFragment = (
  { __typename?: 'IndicatorsAutocomplete' }
  & Pick<IndicatorsAutocomplete, 'name' | 'type'>
  & { field: Maybe<(
    { __typename?: 'Field' }
    & FieldFragment
  )>, function: Maybe<(
    { __typename?: 'Function' }
    & FunctionFragment
  )>, table: Maybe<(
    { __typename?: 'Table' }
    & TableFragment
  )> }
);

export type ListValueFragment = (
  { __typename?: 'ListValue' }
  & Pick<ListValue, 'list' | 'title'>
);

export type MapFragment = (
  { __typename?: 'Map' }
  & Pick<Map, 'center' | 'id' | 'insertedAt' | 'privateToken' | 'publicToken' | 'tileLayerLink' | 'updatedAt' | 'zoom'>
  & { layers: Maybe<Array<(
    { __typename?: 'MapLayer' }
    & MapLayerFragment
  )>>, object: Maybe<(
    { __typename?: 'Object' }
    & ObjectFragment
  )> }
);

export type MapLayerFragment = (
  { __typename?: 'MapLayer' }
  & Pick<MapLayer, 'dataTableId' | 'id' | 'insertedAt' | 'mapId' | 'position' | 'title' | 'updatedAt' | 'visible'>
  & { filter: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>>, mapLayerStyles: Maybe<(
    { __typename?: 'MapLayerStyles' }
    & MapLayerStylesFragment
  )>, modal: Maybe<(
    { __typename?: 'MapLayerModal' }
    & MapLayerModalFragment
  )>, tooltip: Maybe<(
    { __typename?: 'MapLayerTooltip' }
    & MapLayerTooltipFragment
  )> }
);

export type MapLayerModalFragment = (
  { __typename?: 'MapLayerModal' }
  & Pick<MapLayerModal, 'backgroundColor' | 'borderColor' | 'borderType' | 'borderWidth' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop'>
  & { blocks: Maybe<Array<(
    { __typename?: 'ModalBlock' }
    & ModalBlockFragment
  )>> }
);

export type MapLayerRtxDataFragment = (
  { __typename?: 'MapLayerRtxData' }
  & Pick<MapLayerRtxData, 'align' | 'type'>
  & { children: Array<(
    { __typename?: 'MapLayerRtxItem' }
    & MapLayerRtxItemFragment
  )> }
);

export type MapLayerRtxItemFragment = (
  { __typename?: 'MapLayerRtxItem' }
  & Pick<MapLayerRtxItem, 'backgroundColor' | 'bold' | 'color' | 'dataTableFieldId' | 'fontSize' | 'italic' | 'text' | 'type'>
  & { children: Maybe<Array<(
    { __typename?: 'MapLayerRtxItemChild' }
    & MapLayerRtxItemChildFragment
  )>> }
);

export type MapLayerRtxItemChildFragment = (
  { __typename?: 'MapLayerRtxItemChild' }
  & Pick<MapLayerRtxItemChild, 'text'>
);

export type MapLayerSharedFragment = (
  { __typename?: 'MapLayerShared' }
  & Pick<MapLayerShared, 'id' | 'mapId' | 'position' | 'title' | 'visible'>
  & { mapLayerStyles: Maybe<(
    { __typename?: 'MapLayerStyles' }
    & MapLayerStylesFragment
  )>, modal: Maybe<(
    { __typename?: 'MapLayerModal' }
    & MapLayerModalFragment
  )>, tooltip: Maybe<(
    { __typename?: 'MapLayerTooltip' }
    & MapLayerTooltipFragment
  )> }
);

export type MapLayerStylesFragment = (
  { __typename?: 'MapLayerStyles' }
  & Pick<MapLayerStyles, 'gridSize' | 'gridType' | 'showArrowLine'>
  & { fillOptions: Maybe<(
    { __typename?: 'MapLayerStylesFillOptions' }
    & MapLayerStylesFillOptionsFragment
  )>, sizeOptions: Maybe<(
    { __typename?: 'MapLayerStylesSizeOptions' }
    & MapLayerStylesSizeOptionsFragment
  )>, stroke: Maybe<(
    { __typename?: 'MapLayerStylesStroke' }
    & MapLayerStylesStrokeFragment
  )> }
);

export type MapLayerStylesFillOptionsFragment = (
  { __typename?: 'MapLayerStylesFillOptions' }
  & Pick<MapLayerStylesFillOptions, 'color' | 'fillType' | 'gridAggType' | 'opacity' | 'scalesDataFieldId' | 'showInLegend'>
  & { scales: Maybe<Array<(
    { __typename?: 'MapLayerStylesFillScale' }
    & MapLayerStylesFillScaleFragment
  )>> }
);

export type MapLayerStylesFillScaleFragment = (
  { __typename?: 'MapLayerStylesFillScale' }
  & Pick<MapLayerStylesFillScale, 'name' | 'scaleFunc' | 'scaleType' | 'showInLegend'>
  & { limits: Maybe<Array<(
    { __typename?: 'MapLayerStylesFillScaleLimit' }
    & MapLayerStylesFillScaleLimitFragment
  )>> }
);

export type MapLayerStylesFillScaleLimitFragment = (
  { __typename?: 'MapLayerStylesFillScaleLimit' }
  & Pick<MapLayerStylesFillScaleLimit, 'colorFrom' | 'colorTo' | 'from' | 'to'>
);

export type MapLayerStylesSizeOptionsFragment = (
  { __typename?: 'MapLayerStylesSizeOptions' }
  & Pick<MapLayerStylesSizeOptions, 'gridAggType' | 'scalesDataFieldId' | 'size' | 'type'>
  & { scales: Maybe<Array<(
    { __typename?: 'MapLayerStylesSizeScale' }
    & MapLayerStylesSizeScaleFragment
  )>> }
);

export type MapLayerStylesSizeScaleFragment = (
  { __typename?: 'MapLayerStylesSizeScale' }
  & Pick<MapLayerStylesSizeScale, 'name' | 'scaleFunc' | 'scaleType' | 'showInLegend'>
  & { limits: Maybe<Array<(
    { __typename?: 'MapLayerStylesSizeScaleLimit' }
    & MapLayerStylesSizeScaleLimitFragment
  )>> }
);

export type MapLayerStylesSizeScaleLimitFragment = (
  { __typename?: 'MapLayerStylesSizeScaleLimit' }
  & Pick<MapLayerStylesSizeScaleLimit, 'from' | 'sizeFrom' | 'sizeTo' | 'to'>
);

export type MapLayerStylesStrokeFragment = (
  { __typename?: 'MapLayerStylesStroke' }
  & Pick<MapLayerStylesStroke, 'color' | 'opacity' | 'size'>
);

export type MapLayerTooltipFragment = (
  { __typename?: 'MapLayerTooltip' }
  & Pick<MapLayerTooltip, 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderType' | 'borderWidth' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop'>
  & { rtx: Maybe<Array<(
    { __typename?: 'MapLayerRtxData' }
    & MapLayerRtxDataFragment
  )>> }
);

export type MapSharedFragment = (
  { __typename?: 'MapShared' }
  & Pick<MapShared, 'center' | 'id' | 'tileLayerLink' | 'zoom'>
  & { layers: Maybe<Array<(
    { __typename?: 'MapLayerShared' }
    & MapLayerSharedFragment
  )>> }
);

export type ModalBlockFragment = (
  { __typename?: 'ModalBlock' }
  & Pick<ModalBlock, 'backgroundColor' | 'borderColor' | 'borderType' | 'borderWidth' | 'localImageUrl' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'type'>
  & { embedLink: Maybe<Array<(
    { __typename?: 'MapLayerRtxData' }
    & MapLayerRtxDataFragment
  )>>, link: Maybe<Array<(
    { __typename?: 'MapLayerRtxData' }
    & MapLayerRtxDataFragment
  )>>, linkText: Maybe<Array<(
    { __typename?: 'MapLayerRtxData' }
    & MapLayerRtxDataFragment
  )>>, remoteImageUrl: Maybe<Array<(
    { __typename?: 'MapLayerRtxData' }
    & MapLayerRtxDataFragment
  )>>, rtx: Maybe<Array<(
    { __typename?: 'MapLayerRtxData' }
    & MapLayerRtxDataFragment
  )>>, videoStreamLink: Maybe<Array<(
    { __typename?: 'MapLayerRtxData' }
    & MapLayerRtxDataFragment
  )>> }
);

export type ObjectFragment = (
  { __typename?: 'Object' }
  & Pick<Object, 'attachmentId' | 'entityId' | 'folderId' | 'id' | 'objectType' | 'title' | 'updatedAt'>
  & { attachment: Maybe<(
    { __typename?: 'Attachment' }
    & AttachmentFragment
  )>, groupAccessList: Array<(
    { __typename?: 'UserGroup' }
    & UserGroupFragment
  )>, usersAccessList: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type OdataParamsFragment = (
  { __typename?: 'OdataParams' }
  & Pick<OdataParams, 'host' | 'pass' | 'port' | 'tables' | 'url' | 'user'>
);

export type OlapAclFragment = (
  { __typename?: 'OlapAcl' }
  & Pick<OlapAcl, 'olapRequest' | 'panelsEdit' | 'panelsRead'>
);

export type OlapChartLayerFragment = (
  { __typename?: 'OlapChartLayer' }
  & Pick<OlapChartLayer, 'chartType' | 'cubeId' | 'drillAsidePanelId' | 'height' | 'id' | 'limit' | 'offset' | 'positionX' | 'positionY' | 'scannerDrillFields' | 'showTotal' | 'showValueMeasureName' | 'type' | 'valueFontColor' | 'valueFontSize' | 'valuePostfix' | 'width'>
  & { analysis: Maybe<(
    { __typename?: 'Analysis' }
    & AnalysisFragment
  )>, chartProperties: Maybe<(
    { __typename?: 'OlapLayerChartProperties' }
    & OlapLayerChartPropertiesFragment
  )>, columns: Maybe<Array<(
    { __typename?: 'OlapRequestField' }
    & OlapRequestFieldFragment
  )>>, havingFilters: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>>, hierarchy: Maybe<(
    { __typename?: 'OlapHierarchy' }
    & OlapHierarchyFragment
  )>, mapProperties: Maybe<(
    { __typename?: 'OlapLayerMapProperties' }
    & OlapLayerMapPropertiesFragment
  )>, rows: Maybe<Array<(
    { __typename?: 'OlapRequestField' }
    & OlapRequestFieldFragment
  )>>, sorting: Maybe<(
    { __typename?: 'OlapLayerSorting' }
    & OlapLayerSortingFragment
  )>, styles: Maybe<(
    { __typename?: 'OlapLayerStyles' }
    & OlapLayerStylesFragment
  )>, tableProperties: Maybe<(
    { __typename?: 'OlapLayerTableProperties' }
    & OlapLayerTablePropertiesFragment
  )>, whereFilters: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>> }
);

export type OlapDashboardFragment = (
  { __typename?: 'OlapDashboard' }
  & Pick<OlapDashboard, 'backgroundColor' | 'borderColor' | 'height' | 'horizontalMargin' | 'id' | 'insertedAt' | 'maxWidth' | 'minWidth' | 'rowHeight' | 'title' | 'updatedAt' | 'verticalMargin' | 'width' | 'workspace'>
  & { analysis: Maybe<(
    { __typename?: 'DashboardAnalysis' }
    & DashboardAnalysisFragment
  )>, layers: Maybe<Array<(
    { __typename?: 'OlapChartLayer' }
    & OlapLayer_OlapChartLayer_Fragment
  ) | (
    { __typename?: 'OlapFilterLayer' }
    & OlapLayer_OlapFilterLayer_Fragment
  ) | (
    { __typename?: 'OlapTextLayer' }
    & OlapLayer_OlapTextLayer_Fragment
  )>>, object: Maybe<(
    { __typename?: 'Object' }
    & ObjectFragment
  )> }
);

export type OlapFilterLayerFragment = (
  { __typename?: 'OlapFilterLayer' }
  & Pick<OlapFilterLayer, 'applyToAllElement' | 'cubeId' | 'defaultSelectedValues' | 'fieldId' | 'fieldValues' | 'filterVisType' | 'height' | 'id' | 'positionX' | 'positionY' | 'relatedElements' | 'type' | 'width'>
  & { filterField: Maybe<(
    { __typename?: 'OlapRequestField' }
    & OlapRequestFieldFragment
  )> }
);

export type OlapHierarchyFragment = (
  { __typename?: 'OlapHierarchy' }
  & Pick<OlapHierarchy, 'id'>
  & { fields: Maybe<Array<(
    { __typename?: 'OlapRequestField' }
    & OlapRequestFieldFragment
  )>> }
);

type OlapLayer_OlapChartLayer_Fragment = (
  { __typename?: 'OlapChartLayer' }
  & OlapChartLayerFragment
);

type OlapLayer_OlapFilterLayer_Fragment = (
  { __typename?: 'OlapFilterLayer' }
  & OlapFilterLayerFragment
);

type OlapLayer_OlapTextLayer_Fragment = (
  { __typename?: 'OlapTextLayer' }
  & OlapTextLayerFragment
);

export type OlapLayerFragment = OlapLayer_OlapChartLayer_Fragment | OlapLayer_OlapFilterLayer_Fragment | OlapLayer_OlapTextLayer_Fragment;

export type OlapLayerAliasFragment = (
  { __typename?: 'OlapLayerAlias' }
  & Pick<OlapLayerAlias, 'alias' | 'fieldId' | 'hiddenAlias' | 'id' | 'name'>
);

export type OlapLayerAxisFragment = (
  { __typename?: 'OlapLayerAxis' }
  & Pick<OlapLayerAxis, 'color' | 'gridColor' | 'isLog' | 'logBase'>
  & { lineStyle: Maybe<(
    { __typename?: 'OlapLayerLineStyle' }
    & OlapLayerLineStyleFragment
  )>, textStyle: Maybe<(
    { __typename?: 'OlapLayerTextStyle' }
    & OlapLayerTextStyleFragment
  )>, x: Maybe<(
    { __typename?: 'OlapLayerDirectAxis' }
    & OlapLayerDirectAxisFragment
  )>, y: Maybe<(
    { __typename?: 'OlapLayerDirectAxis' }
    & OlapLayerDirectAxisFragment
  )> }
);

export type OlapLayerBarFillStyleFragment = (
  { __typename?: 'OlapLayerBarFillStyle' }
  & Pick<OlapLayerBarFillStyle, 'color' | 'opacity'>
);

export type OlapLayerChartPropertiesFragment = (
  { __typename?: 'OlapLayerChartProperties' }
  & { sorting: Maybe<(
    { __typename?: 'OlapLayerSorting' }
    & OlapLayerSortingFragment
  )> }
);

export type OlapLayerDirectAxisFragment = (
  { __typename?: 'OlapLayerDirectAxis' }
  & Pick<OlapLayerDirectAxis, 'rotate' | 'withAxisLine' | 'withLabel' | 'withName'>
);

export type OlapLayerGridFragment = (
  { __typename?: 'OlapLayerGrid' }
  & Pick<OlapLayerGrid, 'color' | 'type'>
  & { lineStyle: Maybe<(
    { __typename?: 'OlapLayerLineStyle' }
    & OlapLayerLineStyleFragment
  )> }
);

export type OlapLayerLegendFragment = (
  { __typename?: 'OlapLayerLegend' }
  & Pick<OlapLayerLegend, 'direction' | 'linesCount' | 'position' | 'show'>
);

export type OlapLayerLineStyleFragment = (
  { __typename?: 'OlapLayerLineStyle' }
  & Pick<OlapLayerLineStyle, 'color' | 'opacity' | 'type' | 'width'>
);

export type OlapLayerMapFragment = (
  { __typename?: 'OlapLayerMap' }
  & Pick<OlapLayerMap, 'color'>
  & { marks: Maybe<Array<(
    { __typename?: 'OlapLayerMark' }
    & OlapLayerMarkFragment
  )>>, ranges: Maybe<Array<(
    { __typename?: 'OlapLayerRanges' }
    & OlapLayerRangesFragment
  )>>, tooltip: Maybe<(
    { __typename?: 'OlapLayerTooltip' }
    & OlapLayerTooltipFragment
  )> }
);

export type OlapLayerMapPropertiesFragment = (
  { __typename?: 'OlapLayerMapProperties' }
  & Pick<OlapLayerMapProperties, 'center' | 'tile' | 'zoom'>
);

export type OlapLayerMarkFragment = (
  { __typename?: 'OlapLayerMark' }
  & Pick<OlapLayerMark, 'color' | 'position' | 'showLine' | 'type' | 'value'>
  & { filters: Maybe<Array<(
    { __typename?: 'OlapLayerMarkFilter' }
    & OlapLayerMarkFilterFragment
  )>>, rtx: Maybe<Array<(
    { __typename?: 'OlapLayerRtxData' }
    & OlapLayerRtxDataFragment
  )>> }
);

export type OlapLayerMarkFilterFragment = (
  { __typename?: 'OlapLayerMarkFilter' }
  & Pick<OlapLayerMarkFilter, 'measuresIds'>
  & { dimensions: Maybe<Array<(
    { __typename?: 'OlapLayerMarkFilterDimension' }
    & OlapLayerMarkFilterDimensionFragment
  )>> }
);

export type OlapLayerMarkFilterDimensionFragment = (
  { __typename?: 'OlapLayerMarkFilterDimension' }
  & Pick<OlapLayerMarkFilterDimension, 'id' | 'index' | 'values'>
);

export type OlapLayerMarkLineFragment = (
  { __typename?: 'OlapLayerMarkLine' }
  & Pick<OlapLayerMarkLine, 'category' | 'color' | 'label' | 'position' | 'type' | 'value'>
);

export type OlapLayerPieFragment = (
  { __typename?: 'OlapLayerPie' }
  & Pick<OlapLayerPie, 'id' | 'innerRadius'>
);

export type OlapLayerPointFragment = (
  { __typename?: 'OlapLayerPoint' }
  & Pick<OlapLayerPoint, 'id'>
  & { barFill: Maybe<(
    { __typename?: 'OlapLayerBarFillStyle' }
    & OlapLayerBarFillStyleFragment
  )>, barStroke: Maybe<(
    { __typename?: 'OlapLayerShapeStyle' }
    & OlapLayerShapeStyleFragment
  )>, fill: Maybe<(
    { __typename?: 'OlapLayerShapeStyle' }
    & OlapLayerShapeStyleFragment
  )>, marks: Maybe<Array<(
    { __typename?: 'OlapLayerMark' }
    & OlapLayerMarkFragment
  )>>, stroke: Maybe<(
    { __typename?: 'OlapLayerShapeStyle' }
    & OlapLayerShapeStyleFragment
  )>, tooltip: Maybe<(
    { __typename?: 'OlapLayerTooltip' }
    & OlapLayerTooltipFragment
  )> }
);

export type OlapLayerRangesFragment = (
  { __typename?: 'OlapLayerRanges' }
  & Pick<OlapLayerRanges, 'color' | 'end' | 'start'>
);

export type OlapLayerRtxDataFragment = (
  { __typename?: 'OlapLayerRtxData' }
  & Pick<OlapLayerRtxData, 'align' | 'type'>
  & { children: Array<(
    { __typename?: 'OlapLayerRtxItem' }
    & OlapLayerRtxItemFragment
  )> }
);

export type OlapLayerRtxItemFragment = (
  { __typename?: 'OlapLayerRtxItem' }
  & Pick<OlapLayerRtxItem, 'bold' | 'color' | 'fontSize' | 'italic' | 'linkPanelId' | 'text' | 'type' | 'value'>
  & { children: Maybe<Array<(
    { __typename?: 'OlapLayerRtxItemChild' }
    & OlapLayerRtxItemChildFragment
  )>>, element: Maybe<(
    { __typename?: 'OlapChartLayer' }
    & RichTextInlineElementFragment
  )> }
);

export type OlapLayerRtxItemChildFragment = (
  { __typename?: 'OlapLayerRtxItemChild' }
  & Pick<OlapLayerRtxItemChild, 'text'>
);

export type OlapLayerSeriaFragment = (
  { __typename?: 'OlapLayerSeria' }
  & Pick<OlapLayerSeria, 'cumulative' | 'donutPadding' | 'donutWidth' | 'gain' | 'growthRate' | 'id' | 'innerRadius' | 'outerRadius' | 'showTrend' | 'smooth' | 'stack' | 'type'>
  & { lineStyle: Maybe<(
    { __typename?: 'OlapLayerLineStyle' }
    & OlapLayerLineStyleFragment
  )>, marks: Maybe<Array<(
    { __typename?: 'OlapLayerMark' }
    & OlapLayerMarkFragment
  )>>, pointStyle: Maybe<(
    { __typename?: 'OlapLayerPoint' }
    & OlapLayerPointFragment
  )>, tooltip: Maybe<(
    { __typename?: 'OlapLayerTooltip' }
    & OlapLayerTooltipFragment
  )>, trendLine: Maybe<(
    { __typename?: 'TrendLine' }
    & TrendLineFragment
  )> }
);

export type OlapLayerShapeStyleFragment = (
  { __typename?: 'OlapLayerShapeStyle' }
  & Pick<OlapLayerShapeStyle, 'color' | 'opacity' | 'size'>
);

export type OlapLayerSortingFragment = (
  { __typename?: 'OlapLayerSorting' }
  & Pick<OlapLayerSorting, 'asc' | 'type'>
);

export type OlapLayerStylesFragment = (
  { __typename?: 'OlapLayerStyles' }
  & Pick<OlapLayerStyles, 'backgroundColor' | 'sortingType' | 'valueRounding'>
  & { aliases: Maybe<Array<(
    { __typename?: 'OlapLayerAlias' }
    & OlapLayerAliasFragment
  )>>, axis: Maybe<(
    { __typename?: 'OlapLayerAxis' }
    & OlapLayerAxisFragment
  )>, grid: Maybe<(
    { __typename?: 'OlapLayerGrid' }
    & OlapLayerGridFragment
  )>, hGrid: Maybe<(
    { __typename?: 'OlapLayerVHGrid' }
    & OlapLayerVhGridFragment
  )>, legend: Maybe<(
    { __typename?: 'OlapLayerLegend' }
    & OlapLayerLegendFragment
  )>, map: Maybe<(
    { __typename?: 'OlapLayerMap' }
    & OlapLayerMapFragment
  )>, markLines: Maybe<Array<(
    { __typename?: 'OlapLayerMarkLine' }
    & OlapLayerMarkLineFragment
  )>>, pie: Maybe<(
    { __typename?: 'OlapLayerPie' }
    & OlapLayerPieFragment
  )>, points: Maybe<Array<(
    { __typename?: 'OlapLayerPoint' }
    & OlapLayerPointFragment
  )>>, series: Maybe<Array<(
    { __typename?: 'OlapLayerSeria' }
    & OlapLayerSeriaFragment
  )>>, seriesConfig: Maybe<(
    { __typename?: 'OlapLayerSeria' }
    & OlapLayerSeriaFragment
  )>, table: Maybe<(
    { __typename?: 'OlapLayerTable' }
    & OlapLayerTableFragment
  )>, vGrid: Maybe<(
    { __typename?: 'OlapLayerVHGrid' }
    & OlapLayerVhGridFragment
  )>, zooming: Maybe<(
    { __typename?: 'OlapLayerZooming' }
    & OlapLayerZoomingFragment
  )> }
);

export type OlapLayerTableFragment = (
  { __typename?: 'OlapLayerTable' }
  & Pick<OlapLayerTable, 'horizontalPadding' | 'id' | 'mergeCells' | 'stickyHeader' | 'stickySide' | 'verticalPadding'>
  & { columnWidths: Maybe<Array<(
    { __typename?: 'TablePartSize' }
    & TablePartSizeFragment
  )>>, rowLines: Maybe<Array<(
    { __typename?: 'TablePartSize' }
    & TablePartSizeFragment
  )>> }
);

export type OlapLayerTablePropertiesFragment = (
  { __typename?: 'OlapLayerTableProperties' }
  & Pick<OlapLayerTableProperties, 'showTotal'>
);

export type OlapLayerTextStyleFragment = (
  { __typename?: 'OlapLayerTextStyle' }
  & Pick<OlapLayerTextStyle, 'color' | 'fontSize'>
);

export type OlapLayerTooltipFragment = (
  { __typename?: 'OlapLayerTooltip' }
  & Pick<OlapLayerTooltip, 'color' | 'position' | 'type'>
  & { filters: Maybe<Array<(
    { __typename?: 'OlapLayerMarkFilter' }
    & OlapLayerMarkFilterFragment
  )>>, rtx: Maybe<Array<(
    { __typename?: 'OlapLayerRtxData' }
    & OlapLayerRtxDataFragment
  )>> }
);

export type OlapLayerVhGridFragment = (
  { __typename?: 'OlapLayerVHGrid' }
  & Pick<OlapLayerVhGrid, 'areas' | 'show'>
);

export type OlapLayerZoomingFragment = (
  { __typename?: 'OlapLayerZooming' }
  & { horizontal: Maybe<(
    { __typename?: 'OlapLayerZoomingOpts' }
    & OlapLayerZoomingOptsFragment
  )>, vertical: Maybe<(
    { __typename?: 'OlapLayerZoomingOpts' }
    & OlapLayerZoomingOptsFragment
  )> }
);

export type OlapLayerZoomingOptsFragment = (
  { __typename?: 'OlapLayerZoomingOpts' }
  & Pick<OlapLayerZoomingOpts, 'enabled' | 'end' | 'start'>
);

export type OlapRequestArgFragment = (
  { __typename?: 'OlapRequestArg' }
  & Pick<OlapRequestArg, 'columnId' | 'cubeId' | 'dataType' | 'dateFormat' | 'label' | 'type' | 'value'>
);

export type OlapRequestFieldFragment = (
  { __typename?: 'OlapRequestField' }
  & Pick<OlapRequestField, 'agg' | 'hierarchyId' | 'id' | 'index' | 'name' | 'showTotal' | 'valueRounding'>
  & { additionalCalc: Maybe<(
    { __typename?: 'AdditionalCalc' }
    & AdditionalCalcFragment
  )>, args: Maybe<Array<(
    { __typename?: 'OlapRequestArg' }
    & OlapRequestArgFragment
  )>>, calculatedFormula: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>> }
);

export type OlapResponseFragment = (
  { __typename?: 'OlapResponse' }
  & Pick<OlapResponse, 'data'>
);

export type OlapTextLayerFragment = (
  { __typename?: 'OlapTextLayer' }
  & Pick<OlapTextLayer, 'color' | 'fontStyle' | 'fontWeight' | 'height' | 'id' | 'positionX' | 'positionY' | 'size' | 'text' | 'textAlign' | 'textDecoration' | 'type' | 'width'>
  & { rtx: Maybe<Array<(
    { __typename?: 'OlapLayerRtxData' }
    & OlapLayerRtxDataFragment
  )>> }
);

export type OrganisationFragment = (
  { __typename?: 'Organisation' }
  & Pick<Organisation, 'description' | 'email' | 'id' | 'name' | 'private' | 'url'>
  & { acl: Maybe<(
    { __typename?: 'Acl' }
    & AclFragment
  )> }
);

export type OseAclFragment = (
  { __typename?: 'OseAcl' }
  & Pick<OseAcl, 'tablesEdit' | 'tablesRead'>
);

export type OutDbParamsFragment = (
  { __typename?: 'OutDbParams' }
  & Pick<OutDbParams, 'db' | 'dbType' | 'exportToDb' | 'host' | 'pass' | 'port' | 'tableName' | 'title' | 'user'>
);

export type PmChecklistFragment = (
  { __typename?: 'PmChecklist' }
  & Pick<PmChecklist, 'description' | 'id' | 'insertedAt' | 'title' | 'updatedAt' | 'userIds'>
  & { tasks: Maybe<Array<(
    { __typename?: 'PmChecklistTask' }
    & PmChecklistTaskFragment
  )>> }
);

export type PmChecklistTaskFragment = (
  { __typename?: 'PmChecklistTask' }
  & Pick<PmChecklistTask, 'description' | 'id' | 'planFinishTime' | 'planStartTime' | 'status' | 'title' | 'userIds'>
);

export type ProgressFragment = (
  { __typename?: 'Progress' }
  & Pick<Progress, 'allCount' | 'doneCount' | 'label'>
);

export type ProjectManagementFragment = (
  { __typename?: 'ProjectManagement' }
  & Pick<ProjectManagement, 'id' | 'insertedAt' | 'title' | 'updatedAt'>
  & { checklists: Maybe<Array<(
    { __typename?: 'PmChecklist' }
    & PmChecklistFragment
  )>>, object: Maybe<(
    { __typename?: 'Object' }
    & ObjectFragment
  )> }
);

export type RegressionFragment = (
  { __typename?: 'Regression' }
  & Pick<Regression, 'predictSize'>
  & { models: Maybe<Array<(
    { __typename?: 'RegressionModel' }
    & RegressionModelFragment
  )>> }
);

export type RegressionModelFragment = (
  { __typename?: 'RegressionModel' }
  & Pick<RegressionModel, 'intercept' | 'predictId' | 'r2' | 'relevant' | 'seriaId' | 'significanceLevel'>
  & { vars: Array<(
    { __typename?: 'RegressionVar' }
    & RegressionVarFragment
  )> }
);

export type RegressionModelV1Fragment = (
  { __typename?: 'RegressionModelV1' }
  & Pick<RegressionModelV1, 'elementId' | 'intercept' | 'predictId' | 'r2' | 'relevant' | 'seriaId' | 'significanceLevel'>
  & { vars: Array<(
    { __typename?: 'RegressionVarV1' }
    & RegressionVarV1Fragment
  )> }
);

export type RegressionVarFragment = (
  { __typename?: 'RegressionVar' }
  & Pick<RegressionVar, 'coef' | 'coefMax' | 'coefMin' | 'func' | 'lagsCount' | 'relevant' | 'seriaId'>
);

export type RegressionVarV1Fragment = (
  { __typename?: 'RegressionVarV1' }
  & Pick<RegressionVarV1, 'agg' | 'coef' | 'coefMax' | 'coefMin' | 'elementId' | 'func' | 'lagsCount' | 'name' | 'relevant' | 'seriaId'>
);

export type RestHttpAnswerFragment = (
  { __typename?: 'RestHttpAnswer' }
  & Pick<RestHttpAnswer, 'body' | 'code'>
);

export type RestParamsFragment = (
  { __typename?: 'RestParams' }
  & Pick<RestParams, 'apiKeyName' | 'apiKeyValue' | 'authMode' | 'authTokenKeys' | 'authTtl' | 'authType' | 'authUrl' | 'bearerToken' | 'delay' | 'login' | 'loginFieldname' | 'oauth20Prefix' | 'oauth20Token' | 'pass' | 'passFieldname' | 'refreshTokenFieldname' | 'refreshTokenKeys' | 'refreshUrl' | 'timeout' | 'url'>
  & { endpoints: Maybe<Array<(
    { __typename?: 'RestParamsEndpoint' }
    & RestParamsEndpointFragment
  )>>, headers: Maybe<Array<(
    { __typename?: 'RestParamsHeader' }
    & RestParamsHeaderFragment
  )>> }
);

export type RestParamsEndpointFragment = (
  { __typename?: 'RestParamsEndpoint' }
  & Pick<RestParamsEndpoint, 'args' | 'dateLimitType' | 'id' | 'limit' | 'limitArgName' | 'limitOffsetType' | 'offset' | 'offsetArgName' | 'offsetStopValue' | 'pageArgName' | 'pageEnd' | 'pageRowCount' | 'pageStart' | 'pagination' | 'requestType' | 'resultArrayKeys' | 'stopOnLesslimit' | 'urlPostfix'>
);

export type RestParamsHeaderFragment = (
  { __typename?: 'RestParamsHeader' }
  & Pick<RestParamsHeader, 'name' | 'value'>
);

export type RoleFragment = (
  { __typename?: 'Role' }
  & Pick<Role, 'dashboardRead' | 'dashboardWrite' | 'datasourceRead' | 'datasourceWrite' | 'description' | 'etlRead' | 'etlWrite' | 'folderId' | 'id' | 'indicatorsRead' | 'indicatorsWrite' | 'olapschemaRead' | 'olapschemaWrite' | 'rolesRead' | 'rolesWrite' | 'title'>
  & { externalSystems: Array<(
    { __typename?: 'ExternalSystem' }
    & ExternalSystemFragment
  )>, users: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type SessionFragment = (
  { __typename?: 'Session' }
  & Pick<Session, 'expireAt' | 'refreshToken' | 'token'>
  & { user: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type SharedAclFragment = (
  { __typename?: 'SharedAcl' }
  & Pick<SharedAcl, 'foldersEdit' | 'foldersRead' | 'objectsEdit' | 'objectsRead' | 'organisationCreate'>
);

type SocketMessage_StepProgress_Fragment = (
  { __typename?: 'StepProgress' }
  & StepProgressFragment
);

type SocketMessage_DatasourceState_Fragment = (
  { __typename?: 'DatasourceState' }
  & DatasourceStateFragment
);

type SocketMessage_DatasourceProgress_Fragment = (
  { __typename?: 'DatasourceProgress' }
  & DatasourceProgressFragment
);

type SocketMessage_ChatOnline_Fragment = (
  { __typename?: 'ChatOnline' }
  & ChatOnlineFragment
);

type SocketMessage_ChatUser_Fragment = (
  { __typename?: 'ChatUser' }
  & ChatUserFragment
);

type SocketMessage_ChatMessage_Fragment = (
  { __typename?: 'ChatMessage' }
  & ChatMessageFragment
);

type SocketMessage_ChatRoom_Fragment = (
  { __typename?: 'ChatRoom' }
  & ChatRoomFragment
);

export type SocketMessageFragment = SocketMessage_StepProgress_Fragment | SocketMessage_DatasourceState_Fragment | SocketMessage_DatasourceProgress_Fragment | SocketMessage_ChatOnline_Fragment | SocketMessage_ChatUser_Fragment | SocketMessage_ChatMessage_Fragment | SocketMessage_ChatRoom_Fragment;

export type StepFragment = (
  { __typename?: 'Step' }
  & Pick<Step, 'columnsCount' | 'dateColumn' | 'dupColumnsCount' | 'dupGroupsCount' | 'exportToMadd' | 'fullUpdate' | 'id' | 'insertedAt' | 'joinType' | 'leftInKeys' | 'leftInRecords' | 'leftNotInKeys' | 'leftNotInRecords' | 'leftStepColumnId' | 'leftStepId' | 'leftUnmatchedKeys' | 'matchedKeys' | 'originalSchemaTitle' | 'originalTitle' | 'periodicity' | 'positionX' | 'positionY' | 'rightInKeys' | 'rightInRecords' | 'rightNotInKeys' | 'rightNotInRecords' | 'rightStepColumnId' | 'rightStepId' | 'rightUnmatchedKeys' | 'stepIds' | 'stepType' | 'tableName' | 'title' | 'updatedAt'>
  & { changes: Array<(
    { __typename?: 'Change' }
    & ChangeFragment
  )>, datasource: Maybe<(
    { __typename?: 'Datasource' }
    & DatasourceFragment
  )>, flow: Maybe<(
    { __typename?: 'Flow' }
    & FlowFragment
  )>, leftColumns: Maybe<Array<(
    { __typename?: 'Column' }
    & ColumnFragment
  )>>, outDbParams: Maybe<Array<(
    { __typename?: 'OutDbParams' }
    & OutDbParamsFragment
  )>>, rightColumns: Maybe<Array<(
    { __typename?: 'Column' }
    & ColumnFragment
  )>>, whereCond: Maybe<Array<(
    { __typename?: 'FormulaToken' }
    & FormulaTokenFragment
  )>> }
);

export type StepProgressFragment = (
  { __typename?: 'StepProgress' }
  & Pick<StepProgress, 'status' | 'stepId'>
  & { processes: Maybe<Array<(
    { __typename?: 'Progress' }
    & ProgressFragment
  )>> }
);

export type TableFragment = (
  { __typename?: 'Table' }
  & Pick<Table, 'cubeDescription' | 'cubeTitle' | 'description' | 'id' | 'inMemory' | 'insertedAt' | 'isInvisible' | 'isOpened' | 'positionX' | 'positionY' | 'tableType' | 'title' | 'updatedAt'>
  & { connections: Maybe<Array<(
    { __typename?: 'Connection' }
    & ConnectionFragment
  )>>, fields: Maybe<Array<(
    { __typename?: 'Field' }
    & FieldFragment
  )>>, hierarchies: Maybe<Array<(
    { __typename?: 'Hierarchy' }
    & HierarchyFragment
  )>>, object: Maybe<(
    { __typename?: 'Object' }
    & ObjectFragment
  )> }
);

export type TablePartSizeFragment = (
  { __typename?: 'TablePartSize' }
  & Pick<TablePartSize, 'id' | 'value'>
);

export type TreeFragment = (
  { __typename?: 'Tree' }
  & { folders: Array<(
    { __typename?: 'Folder' }
    & FolderFragment
  )>, objects: Array<(
    { __typename?: 'Object' }
    & ObjectFragment
  )> }
);

export type TreesFragment = (
  { __typename?: 'Trees' }
  & { pinnedTree: (
    { __typename?: 'Tree' }
    & TreeFragment
  ), tree: (
    { __typename?: 'Tree' }
    & TreeFragment
  ) }
);

export type TrendLineFragment = (
  { __typename?: 'TrendLine' }
  & Pick<TrendLine, 'color' | 'opacity'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'avatar' | 'email' | 'firstName' | 'id' | 'lastName' | 'name' | 'orgQuota' | 'status'>
  & { acl: Maybe<(
    { __typename?: 'Acl' }
    & AclFragment
  )> }
);

export type UserGroupFragment = (
  { __typename?: 'UserGroup' }
  & Pick<UserGroup, 'description' | 'folderId' | 'id' | 'title'>
  & { cubeFilters: Array<(
    { __typename?: 'CubeFilter' }
    & CubeFilterFragment
  )>, externalSystems: Array<(
    { __typename?: 'ExternalSystem' }
    & ExternalSystemFragment
  )>, roles: Array<(
    { __typename?: 'Role' }
    & RoleFragment
  )>, users: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export const ColumnShortFragmentDoc = gql`
    fragment ColumnShort on Column {
  id
  title
  originalTitle
  include
}
    `;
export const StepShortFragmentDoc = gql`
    fragment StepShort on Step {
  id
  leftStepId
  positionX
  positionY
  rightStepId
  rightUnmatchedKeys
  stepIds
  stepType
  title
}
    `;
export const RootFoldersFragmentDoc = gql`
    fragment RootFolders on Trees {
  tree {
    folders {
      id
      title
      defaultPanels {
        userId
        panelId
      }
    }
  }
}
    `;
export const CodecFragmentDoc = gql`
    fragment Codec on Codec {
  level
  type
}
    `;
export const ColumnStatFragmentDoc = gql`
    fragment ColumnStat on ColumnStat {
  count
  value
}
    `;
export const ColumnFragmentDoc = gql`
    fragment Column on Column {
  caseType
  changes {
    after
    before
    changeType
    id
  }
  codecs {
    ...Codec
  }
  columnIds
  columnName
  columnStats {
    ...ColumnStat
  }
  compressedBytes
  dataType
  defaultExpr
  id
  include
  insertedAt
  nullable
  originalTitle
  position
  removeLetters
  removeNumbers
  removePunctuation
  sourceStepId
  step {
    id
  }
  stepIds
  title
  trimSpaces
  uncompressedBytes
  updatedAt
  width
}
    ${CodecFragmentDoc}
${ColumnStatFragmentDoc}`;
export const FunctionExampleFragmentDoc = gql`
    fragment FunctionExample on FunctionExample {
  formula
  result
}
    `;
export const FunctionFragmentDoc = gql`
    fragment Function on Function {
  arg1Type
  arg2Type
  arg3Type
  argsCount
  description
  examples {
    ...FunctionExample
  }
  name
  resultType
}
    ${FunctionExampleFragmentDoc}`;
export const AutocompleteFragmentDoc = gql`
    fragment Autocomplete on Autocomplete {
  column {
    ...Column
  }
  function {
    ...Function
  }
  name
  type
}
    ${ColumnFragmentDoc}
${FunctionFragmentDoc}`;
export const DataTableFieldValidationFragmentDoc = gql`
    fragment DataTableFieldValidation on DataTableFieldValidation {
  dateFormat
  dateMax
  dateMin
  datetimeFormat
  datetimeMax
  datetimeMin
  fileFormats
  numberMax
  numberMin
  stringMaxChars
  stringMinChars
  stringRegexp
}
    `;
export const DataTableFieldFragmentDoc = gql`
    fragment DataTableField on DataTableField {
  considerSearch
  dataTableId
  defaultValue
  fieldCatalogId
  fieldType
  id
  insertedAt
  isLink
  isVideoLink
  multiInput
  position
  required
  showInTable
  title
  uniq
  updatedAt
  validation {
    ...DataTableFieldValidation
  }
  width
}
    ${DataTableFieldValidationFragmentDoc}`;
export const MapLayerStylesFillScaleLimitFragmentDoc = gql`
    fragment MapLayerStylesFillScaleLimit on MapLayerStylesFillScaleLimit {
  colorFrom
  colorTo
  from
  to
}
    `;
export const MapLayerStylesFillScaleFragmentDoc = gql`
    fragment MapLayerStylesFillScale on MapLayerStylesFillScale {
  limits {
    ...MapLayerStylesFillScaleLimit
  }
  name
  scaleFunc
  scaleType
  showInLegend
}
    ${MapLayerStylesFillScaleLimitFragmentDoc}`;
export const MapLayerStylesFillOptionsFragmentDoc = gql`
    fragment MapLayerStylesFillOptions on MapLayerStylesFillOptions {
  color
  fillType
  gridAggType
  opacity
  scales {
    ...MapLayerStylesFillScale
  }
  scalesDataFieldId
  showInLegend
}
    ${MapLayerStylesFillScaleFragmentDoc}`;
export const MapLayerStylesSizeScaleLimitFragmentDoc = gql`
    fragment MapLayerStylesSizeScaleLimit on MapLayerStylesSizeScaleLimit {
  from
  sizeFrom
  sizeTo
  to
}
    `;
export const MapLayerStylesSizeScaleFragmentDoc = gql`
    fragment MapLayerStylesSizeScale on MapLayerStylesSizeScale {
  limits {
    ...MapLayerStylesSizeScaleLimit
  }
  name
  scaleFunc
  scaleType
  showInLegend
}
    ${MapLayerStylesSizeScaleLimitFragmentDoc}`;
export const MapLayerStylesSizeOptionsFragmentDoc = gql`
    fragment MapLayerStylesSizeOptions on MapLayerStylesSizeOptions {
  gridAggType
  scales {
    ...MapLayerStylesSizeScale
  }
  scalesDataFieldId
  size
  type
}
    ${MapLayerStylesSizeScaleFragmentDoc}`;
export const MapLayerStylesStrokeFragmentDoc = gql`
    fragment MapLayerStylesStroke on MapLayerStylesStroke {
  color
  opacity
  size
}
    `;
export const MapLayerStylesFragmentDoc = gql`
    fragment MapLayerStyles on MapLayerStyles {
  fillOptions {
    ...MapLayerStylesFillOptions
  }
  gridSize
  gridType
  showArrowLine
  sizeOptions {
    ...MapLayerStylesSizeOptions
  }
  stroke {
    ...MapLayerStylesStroke
  }
}
    ${MapLayerStylesFillOptionsFragmentDoc}
${MapLayerStylesSizeOptionsFragmentDoc}
${MapLayerStylesStrokeFragmentDoc}`;
export const AttachmentFragmentDoc = gql`
    fragment Attachment on Attachment {
  aspectRatio
  contentType
  id
  name
  url
}
    `;
export const FormulaTokenRecursiveFragmentDoc = gql`
    fragment FormulaTokenRecursive on FormulaToken {
  tokenType
  dataValue {
    columnId
    fieldId
    dataTableFieldId
  }
  listValue {
    list
    title
  }
  value
}
    `;
export const FuncValueFragmentDoc = gql`
    fragment FuncValue on FuncValue {
  name
  args {
    ...FormulaTokenRecursive
    funcValue {
      name
      args {
        ...FormulaTokenRecursive
      }
    }
  }
}
    ${FormulaTokenRecursiveFragmentDoc}`;
export const FormulaTokenFragmentDoc = gql`
    fragment FormulaToken on FormulaToken {
  ...FormulaTokenRecursive
  funcValue {
    ...FuncValue
  }
}
    ${FormulaTokenRecursiveFragmentDoc}
${FuncValueFragmentDoc}`;
export const CubeFilterFragmentDoc = gql`
    fragment CubeFilter on CubeFilter {
  cubeId
  cubeTitle
  draftInput
  filter {
    ...FormulaToken
  }
}
    ${FormulaTokenFragmentDoc}`;
export const ExternalSystemParamsFragmentDoc = gql`
    fragment ExternalSystemParams on ExternalSystemParams {
  active
  description
  key
  value
}
    `;
export const ExternalSystemFragmentDoc = gql`
    fragment ExternalSystem on ExternalSystem {
  folderId
  id
  ips
  params {
    ...ExternalSystemParams
  }
  title
}
    ${ExternalSystemParamsFragmentDoc}`;
export const EtlAclFragmentDoc = gql`
    fragment EtlAcl on EtlAcl {
  datasourceEdit
  datasourceRead
  flowEdit
  flowRead
}
    `;
export const OlapAclFragmentDoc = gql`
    fragment OlapAcl on OlapAcl {
  olapRequest
  panelsEdit
  panelsRead
}
    `;
export const OseAclFragmentDoc = gql`
    fragment OseAcl on OseAcl {
  tablesEdit
  tablesRead
}
    `;
export const SharedAclFragmentDoc = gql`
    fragment SharedAcl on SharedAcl {
  foldersEdit
  foldersRead
  objectsEdit
  objectsRead
  organisationCreate
}
    `;
export const AclFragmentDoc = gql`
    fragment Acl on Acl {
  etl {
    ...EtlAcl
  }
  olap {
    ...OlapAcl
  }
  ose {
    ...OseAcl
  }
  shared {
    ...SharedAcl
  }
}
    ${EtlAclFragmentDoc}
${OlapAclFragmentDoc}
${OseAclFragmentDoc}
${SharedAclFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  acl {
    ...Acl
  }
  avatar
  email
  firstName
  id
  lastName
  name
  orgQuota
  status
}
    ${AclFragmentDoc}`;
export const RoleFragmentDoc = gql`
    fragment Role on Role {
  dashboardRead
  dashboardWrite
  datasourceRead
  datasourceWrite
  description
  etlRead
  etlWrite
  externalSystems {
    ...ExternalSystem
  }
  folderId
  id
  indicatorsRead
  indicatorsWrite
  olapschemaRead
  olapschemaWrite
  rolesRead
  rolesWrite
  title
  users {
    ...User
  }
}
    ${ExternalSystemFragmentDoc}
${UserFragmentDoc}`;
export const UserGroupFragmentDoc = gql`
    fragment UserGroup on UserGroup {
  cubeFilters {
    ...CubeFilter
  }
  description
  externalSystems {
    ...ExternalSystem
  }
  folderId
  id
  roles {
    ...Role
  }
  title
  users {
    ...User
  }
}
    ${CubeFilterFragmentDoc}
${ExternalSystemFragmentDoc}
${RoleFragmentDoc}
${UserFragmentDoc}`;
export const ObjectFragmentDoc = gql`
    fragment Object on Object {
  attachment {
    ...Attachment
  }
  attachmentId
  entityId
  folderId
  groupAccessList {
    ...UserGroup
  }
  id
  objectType
  title
  updatedAt
  usersAccessList {
    ...User
  }
}
    ${AttachmentFragmentDoc}
${UserGroupFragmentDoc}
${UserFragmentDoc}`;
export const MapLayerRtxItemChildFragmentDoc = gql`
    fragment MapLayerRtxItemChild on MapLayerRtxItemChild {
  text
}
    `;
export const MapLayerRtxItemFragmentDoc = gql`
    fragment MapLayerRtxItem on MapLayerRtxItem {
  backgroundColor
  bold
  children {
    ...MapLayerRtxItemChild
  }
  color
  dataTableFieldId
  fontSize
  italic
  text
  type
}
    ${MapLayerRtxItemChildFragmentDoc}`;
export const MapLayerRtxDataFragmentDoc = gql`
    fragment MapLayerRtxData on MapLayerRtxData {
  align
  children {
    ...MapLayerRtxItem
  }
  type
}
    ${MapLayerRtxItemFragmentDoc}`;
export const MapLayerTooltipFragmentDoc = gql`
    fragment MapLayerTooltip on MapLayerTooltip {
  backgroundColor
  borderColor
  borderRadius
  borderType
  borderWidth
  paddingBottom
  paddingLeft
  paddingRight
  paddingTop
  rtx {
    ...MapLayerRtxData
  }
}
    ${MapLayerRtxDataFragmentDoc}`;
export const DataTableFragmentDoc = gql`
    fragment DataTable on DataTable {
  description
  errorCount
  fields {
    ...DataTableField
  }
  id
  insertedAt
  mapCenter
  mapLayerStyles {
    ...MapLayerStyles
  }
  mapZoom
  object {
    ...Object
  }
  tablePositionType
  tablePositionX
  tablePositionY
  tileLayerLink
  title
  tooltip {
    ...MapLayerTooltip
  }
  updatedAt
}
    ${DataTableFieldFragmentDoc}
${MapLayerStylesFragmentDoc}
${ObjectFragmentDoc}
${MapLayerTooltipFragmentDoc}`;
export const CoordsFragmentDoc = gql`
    fragment Coords on Coords {
  coordsType
  lineCoords
  pointCoords
  polyCoords
}
    `;
export const DataTableRowFieldFragmentDoc = gql`
    fragment DataTableRowField on DataTableRowField {
  catalogValue
  coordinatesValue {
    ...Coords
  }
  dataTableFieldId
  dateValue
  datetimeValue
  fileValue {
    ...Attachment
  }
  numberValue
  stringValue
  userEnteredValue
  validationErrors
}
    ${CoordsFragmentDoc}
${AttachmentFragmentDoc}`;
export const DataTableRowFragmentDoc = gql`
    fragment DataTableRow on DataTableRow {
  createdAt
  fields {
    ...DataTableRowField
  }
  id
}
    ${DataTableRowFieldFragmentDoc}`;
export const DataValueFragmentDoc = gql`
    fragment DataValue on DataValue {
  agg
  columnId
  dataTableFieldId
  fieldId
  filter {
    ...FormulaToken
  }
  groupFieldId
  tableId
  title
}
    ${FormulaTokenFragmentDoc}`;
export const DefaultPanelFragmentDoc = gql`
    fragment DefaultPanel on DefaultPanel {
  panelId
  userId
}
    `;
export const EntityCreatedFragmentDoc = gql`
    fragment EntityCreated on EntityCreated {
  entity
  type
}
    `;
export const FtpEnityFragmentDoc = gql`
    fragment FtpEnity on FtpEnity {
  name
  type
}
    `;
export const ConnectedEntitiesFragmentDoc = gql`
    fragment ConnectedEntities on ConnectedEntities {
  folders
  objects
}
    `;
export const IndicatorFragmentDoc = gql`
    fragment Indicator on Indicator {
  baseRating
  connectedEntities {
    ...ConnectedEntities
  }
  displayColumnIds
  displayFKeyId
  displayTableId
  formula {
    ...FormulaToken
  }
  id
  insertedAt
  object {
    ...Object
  }
  periodicity
  periodicityDays
  showCountedFormula
  sortType
  sortValue
  sortValueType
  title
  updatedAt
}
    ${ConnectedEntitiesFragmentDoc}
${FormulaTokenFragmentDoc}
${ObjectFragmentDoc}`;
export const FieldFragmentDoc = gql`
    fragment Field on Field {
  datatype
  description
  fieldType
  id
  isFKey
  isInvisible
  isLink
  position
  postfix
  title
}
    `;
export const ConnectionFragmentDoc = gql`
    fragment Connection on Connection {
  id
  joinType
  leftTableFieldId
  leftTableId
  rightTableFieldId
  rightTableId
}
    `;
export const HierarchyDimFragmentDoc = gql`
    fragment HierarchyDim on HierarchyDim {
  dimId
  position
}
    `;
export const HierarchyFragmentDoc = gql`
    fragment Hierarchy on Hierarchy {
  description
  dims {
    ...HierarchyDim
  }
  id
  insertedAt
  isInvisible
  isOpened
  position
  title
  updatedAt
}
    ${HierarchyDimFragmentDoc}`;
export const TableFragmentDoc = gql`
    fragment Table on Table {
  connections {
    ...Connection
  }
  cubeDescription
  cubeTitle
  description
  fields {
    ...Field
  }
  hierarchies {
    ...Hierarchy
  }
  id
  inMemory
  insertedAt
  isInvisible
  isOpened
  object {
    ...Object
  }
  positionX
  positionY
  tableType
  title
  updatedAt
}
    ${ConnectionFragmentDoc}
${FieldFragmentDoc}
${HierarchyFragmentDoc}
${ObjectFragmentDoc}`;
export const IndicatorsAutocompleteFragmentDoc = gql`
    fragment IndicatorsAutocomplete on IndicatorsAutocomplete {
  field {
    ...Field
  }
  function {
    ...Function
  }
  name
  table {
    ...Table
  }
  type
}
    ${FieldFragmentDoc}
${FunctionFragmentDoc}
${TableFragmentDoc}`;
export const ListValueFragmentDoc = gql`
    fragment ListValue on ListValue {
  list
  title
}
    `;
export const ModalBlockFragmentDoc = gql`
    fragment ModalBlock on ModalBlock {
  backgroundColor
  borderColor
  borderType
  borderWidth
  embedLink {
    ...MapLayerRtxData
  }
  link {
    ...MapLayerRtxData
  }
  linkText {
    ...MapLayerRtxData
  }
  localImageUrl
  paddingBottom
  paddingLeft
  paddingRight
  paddingTop
  remoteImageUrl {
    ...MapLayerRtxData
  }
  rtx {
    ...MapLayerRtxData
  }
  type
  videoStreamLink {
    ...MapLayerRtxData
  }
}
    ${MapLayerRtxDataFragmentDoc}`;
export const MapLayerModalFragmentDoc = gql`
    fragment MapLayerModal on MapLayerModal {
  backgroundColor
  blocks {
    ...ModalBlock
  }
  borderColor
  borderType
  borderWidth
  paddingBottom
  paddingLeft
  paddingRight
  paddingTop
}
    ${ModalBlockFragmentDoc}`;
export const MapLayerFragmentDoc = gql`
    fragment MapLayer on MapLayer {
  dataTableId
  filter {
    ...FormulaToken
  }
  id
  insertedAt
  mapId
  mapLayerStyles {
    ...MapLayerStyles
  }
  modal {
    ...MapLayerModal
  }
  position
  title
  tooltip {
    ...MapLayerTooltip
  }
  updatedAt
  visible
}
    ${FormulaTokenFragmentDoc}
${MapLayerStylesFragmentDoc}
${MapLayerModalFragmentDoc}
${MapLayerTooltipFragmentDoc}`;
export const MapFragmentDoc = gql`
    fragment Map on Map {
  center
  id
  insertedAt
  layers {
    ...MapLayer
  }
  object {
    ...Object
  }
  privateToken
  publicToken
  tileLayerLink
  updatedAt
  zoom
}
    ${MapLayerFragmentDoc}
${ObjectFragmentDoc}`;
export const MapLayerSharedFragmentDoc = gql`
    fragment MapLayerShared on MapLayerShared {
  id
  mapId
  mapLayerStyles {
    ...MapLayerStyles
  }
  modal {
    ...MapLayerModal
  }
  position
  title
  tooltip {
    ...MapLayerTooltip
  }
  visible
}
    ${MapLayerStylesFragmentDoc}
${MapLayerModalFragmentDoc}
${MapLayerTooltipFragmentDoc}`;
export const MapSharedFragmentDoc = gql`
    fragment MapShared on MapShared {
  center
  id
  layers {
    ...MapLayerShared
  }
  tileLayerLink
  zoom
}
    ${MapLayerSharedFragmentDoc}`;
export const RegressionVarV1FragmentDoc = gql`
    fragment RegressionVarV1 on RegressionVarV1 {
  agg
  coef
  coefMax
  coefMin
  elementId
  func
  lagsCount
  name
  relevant
  seriaId
}
    `;
export const RegressionModelV1FragmentDoc = gql`
    fragment RegressionModelV1 on RegressionModelV1 {
  elementId
  intercept
  predictId
  r2
  relevant
  seriaId
  significanceLevel
  vars {
    ...RegressionVarV1
  }
}
    ${RegressionVarV1FragmentDoc}`;
export const DashboardRegressionFragmentDoc = gql`
    fragment DashboardRegression on DashboardRegression {
  models {
    ...RegressionModelV1
  }
  predictSize
}
    ${RegressionModelV1FragmentDoc}`;
export const DashboardAnalysisFragmentDoc = gql`
    fragment DashboardAnalysis on DashboardAnalysis {
  regression {
    ...DashboardRegression
  }
}
    ${DashboardRegressionFragmentDoc}`;
export const RegressionVarFragmentDoc = gql`
    fragment RegressionVar on RegressionVar {
  coef
  coefMax
  coefMin
  func
  lagsCount
  relevant
  seriaId
}
    `;
export const RegressionModelFragmentDoc = gql`
    fragment RegressionModel on RegressionModel {
  intercept
  predictId
  r2
  relevant
  seriaId
  significanceLevel
  vars {
    ...RegressionVar
  }
}
    ${RegressionVarFragmentDoc}`;
export const RegressionFragmentDoc = gql`
    fragment Regression on Regression {
  models {
    ...RegressionModel
  }
  predictSize
}
    ${RegressionModelFragmentDoc}`;
export const AnalysisFragmentDoc = gql`
    fragment Analysis on Analysis {
  regression {
    ...Regression
  }
}
    ${RegressionFragmentDoc}`;
export const OlapLayerSortingFragmentDoc = gql`
    fragment OlapLayerSorting on OlapLayerSorting {
  asc
  type
}
    `;
export const OlapLayerChartPropertiesFragmentDoc = gql`
    fragment OlapLayerChartProperties on OlapLayerChartProperties {
  sorting {
    ...OlapLayerSorting
  }
}
    ${OlapLayerSortingFragmentDoc}`;
export const AdditionalCalcFragmentDoc = gql`
    fragment AdditionalCalc on AdditionalCalc {
  cumulativeTotal
  groupBy
  growth
  growthRate
  linkedFieldId
  percentOfTotal
}
    `;
export const OlapRequestArgFragmentDoc = gql`
    fragment OlapRequestArg on OlapRequestArg {
  columnId
  cubeId
  dataType
  dateFormat
  label
  type
  value
}
    `;
export const OlapRequestFieldFragmentDoc = gql`
    fragment OlapRequestField on OlapRequestField {
  additionalCalc {
    ...AdditionalCalc
  }
  agg
  args {
    ...OlapRequestArg
  }
  calculatedFormula {
    ...FormulaToken
  }
  hierarchyId
  id
  index
  name
  showTotal
  valueRounding
}
    ${AdditionalCalcFragmentDoc}
${OlapRequestArgFragmentDoc}
${FormulaTokenFragmentDoc}`;
export const OlapHierarchyFragmentDoc = gql`
    fragment OlapHierarchy on OlapHierarchy {
  fields {
    ...OlapRequestField
  }
  id
}
    ${OlapRequestFieldFragmentDoc}`;
export const OlapLayerMapPropertiesFragmentDoc = gql`
    fragment OlapLayerMapProperties on OlapLayerMapProperties {
  center
  tile
  zoom
}
    `;
export const OlapLayerAliasFragmentDoc = gql`
    fragment OlapLayerAlias on OlapLayerAlias {
  alias
  fieldId
  hiddenAlias
  id
  name
}
    `;
export const OlapLayerLineStyleFragmentDoc = gql`
    fragment OlapLayerLineStyle on OlapLayerLineStyle {
  color
  opacity
  type
  width
}
    `;
export const OlapLayerTextStyleFragmentDoc = gql`
    fragment OlapLayerTextStyle on OlapLayerTextStyle {
  color
  fontSize
}
    `;
export const OlapLayerDirectAxisFragmentDoc = gql`
    fragment OlapLayerDirectAxis on OlapLayerDirectAxis {
  rotate
  withAxisLine
  withLabel
  withName
}
    `;
export const OlapLayerAxisFragmentDoc = gql`
    fragment OlapLayerAxis on OlapLayerAxis {
  color
  gridColor
  isLog
  lineStyle {
    ...OlapLayerLineStyle
  }
  logBase
  textStyle {
    ...OlapLayerTextStyle
  }
  x {
    ...OlapLayerDirectAxis
  }
  y {
    ...OlapLayerDirectAxis
  }
}
    ${OlapLayerLineStyleFragmentDoc}
${OlapLayerTextStyleFragmentDoc}
${OlapLayerDirectAxisFragmentDoc}`;
export const OlapLayerGridFragmentDoc = gql`
    fragment OlapLayerGrid on OlapLayerGrid {
  color
  lineStyle {
    ...OlapLayerLineStyle
  }
  type
}
    ${OlapLayerLineStyleFragmentDoc}`;
export const OlapLayerVhGridFragmentDoc = gql`
    fragment OlapLayerVHGrid on OlapLayerVHGrid {
  areas
  show
}
    `;
export const OlapLayerLegendFragmentDoc = gql`
    fragment OlapLayerLegend on OlapLayerLegend {
  direction
  linesCount
  position
  show
}
    `;
export const OlapLayerMarkFilterDimensionFragmentDoc = gql`
    fragment OlapLayerMarkFilterDimension on OlapLayerMarkFilterDimension {
  id
  index
  values
}
    `;
export const OlapLayerMarkFilterFragmentDoc = gql`
    fragment OlapLayerMarkFilter on OlapLayerMarkFilter {
  dimensions {
    ...OlapLayerMarkFilterDimension
  }
  measuresIds
}
    ${OlapLayerMarkFilterDimensionFragmentDoc}`;
export const OlapLayerRtxItemChildFragmentDoc = gql`
    fragment OlapLayerRtxItemChild on OlapLayerRtxItemChild {
  text
}
    `;
export const RichTextInlineElementFragmentDoc = gql`
    fragment RichTextInlineElement on OlapChartLayer {
  chartType
  columns {
    ...OlapRequestField
  }
  cubeId
  rows {
    ...OlapRequestField
  }
  whereFilters {
    ...FormulaToken
  }
  havingFilters {
    ...FormulaToken
  }
  width
  height
  positionX
  positionY
}
    ${OlapRequestFieldFragmentDoc}
${FormulaTokenFragmentDoc}`;
export const OlapLayerRtxItemFragmentDoc = gql`
    fragment OlapLayerRtxItem on OlapLayerRtxItem {
  bold
  children {
    ...OlapLayerRtxItemChild
  }
  color
  element {
    ...RichTextInlineElement
  }
  fontSize
  italic
  linkPanelId
  text
  type
  value
}
    ${OlapLayerRtxItemChildFragmentDoc}
${RichTextInlineElementFragmentDoc}`;
export const OlapLayerRtxDataFragmentDoc = gql`
    fragment OlapLayerRtxData on OlapLayerRtxData {
  align
  children {
    ...OlapLayerRtxItem
  }
  type
}
    ${OlapLayerRtxItemFragmentDoc}`;
export const OlapLayerMarkFragmentDoc = gql`
    fragment OlapLayerMark on OlapLayerMark {
  color
  filters {
    ...OlapLayerMarkFilter
  }
  position
  rtx {
    ...OlapLayerRtxData
  }
  showLine
  type
  value
}
    ${OlapLayerMarkFilterFragmentDoc}
${OlapLayerRtxDataFragmentDoc}`;
export const OlapLayerRangesFragmentDoc = gql`
    fragment OlapLayerRanges on OlapLayerRanges {
  color
  end
  start
}
    `;
export const OlapLayerTooltipFragmentDoc = gql`
    fragment OlapLayerTooltip on OlapLayerTooltip {
  color
  filters {
    ...OlapLayerMarkFilter
  }
  position
  rtx {
    ...OlapLayerRtxData
  }
  type
}
    ${OlapLayerMarkFilterFragmentDoc}
${OlapLayerRtxDataFragmentDoc}`;
export const OlapLayerMapFragmentDoc = gql`
    fragment OlapLayerMap on OlapLayerMap {
  color
  marks {
    ...OlapLayerMark
  }
  ranges {
    ...OlapLayerRanges
  }
  tooltip {
    ...OlapLayerTooltip
  }
}
    ${OlapLayerMarkFragmentDoc}
${OlapLayerRangesFragmentDoc}
${OlapLayerTooltipFragmentDoc}`;
export const OlapLayerMarkLineFragmentDoc = gql`
    fragment OlapLayerMarkLine on OlapLayerMarkLine {
  category
  color
  label
  position
  type
  value
}
    `;
export const OlapLayerPieFragmentDoc = gql`
    fragment OlapLayerPie on OlapLayerPie {
  id
  innerRadius
}
    `;
export const OlapLayerBarFillStyleFragmentDoc = gql`
    fragment OlapLayerBarFillStyle on OlapLayerBarFillStyle {
  color
  opacity
}
    `;
export const OlapLayerShapeStyleFragmentDoc = gql`
    fragment OlapLayerShapeStyle on OlapLayerShapeStyle {
  color
  opacity
  size
}
    `;
export const OlapLayerPointFragmentDoc = gql`
    fragment OlapLayerPoint on OlapLayerPoint {
  barFill {
    ...OlapLayerBarFillStyle
  }
  barStroke {
    ...OlapLayerShapeStyle
  }
  fill {
    ...OlapLayerShapeStyle
  }
  id
  marks {
    ...OlapLayerMark
  }
  stroke {
    ...OlapLayerShapeStyle
  }
  tooltip {
    ...OlapLayerTooltip
  }
}
    ${OlapLayerBarFillStyleFragmentDoc}
${OlapLayerShapeStyleFragmentDoc}
${OlapLayerMarkFragmentDoc}
${OlapLayerTooltipFragmentDoc}`;
export const TrendLineFragmentDoc = gql`
    fragment TrendLine on TrendLine {
  color
  opacity
}
    `;
export const OlapLayerSeriaFragmentDoc = gql`
    fragment OlapLayerSeria on OlapLayerSeria {
  cumulative
  donutPadding
  donutWidth
  gain
  growthRate
  id
  innerRadius
  lineStyle {
    ...OlapLayerLineStyle
  }
  marks {
    ...OlapLayerMark
  }
  outerRadius
  pointStyle {
    ...OlapLayerPoint
  }
  showTrend
  smooth
  stack
  tooltip {
    ...OlapLayerTooltip
  }
  trendLine {
    ...TrendLine
  }
  type
}
    ${OlapLayerLineStyleFragmentDoc}
${OlapLayerMarkFragmentDoc}
${OlapLayerPointFragmentDoc}
${OlapLayerTooltipFragmentDoc}
${TrendLineFragmentDoc}`;
export const TablePartSizeFragmentDoc = gql`
    fragment TablePartSize on TablePartSize {
  id
  value
}
    `;
export const OlapLayerTableFragmentDoc = gql`
    fragment OlapLayerTable on OlapLayerTable {
  columnWidths {
    ...TablePartSize
  }
  horizontalPadding
  id
  mergeCells
  rowLines {
    ...TablePartSize
  }
  stickyHeader
  stickySide
  verticalPadding
}
    ${TablePartSizeFragmentDoc}`;
export const OlapLayerZoomingOptsFragmentDoc = gql`
    fragment OlapLayerZoomingOpts on OlapLayerZoomingOpts {
  enabled
  end
  start
}
    `;
export const OlapLayerZoomingFragmentDoc = gql`
    fragment OlapLayerZooming on OlapLayerZooming {
  horizontal {
    ...OlapLayerZoomingOpts
  }
  vertical {
    ...OlapLayerZoomingOpts
  }
}
    ${OlapLayerZoomingOptsFragmentDoc}`;
export const OlapLayerStylesFragmentDoc = gql`
    fragment OlapLayerStyles on OlapLayerStyles {
  aliases {
    ...OlapLayerAlias
  }
  axis {
    ...OlapLayerAxis
  }
  backgroundColor
  grid {
    ...OlapLayerGrid
  }
  hGrid {
    ...OlapLayerVHGrid
  }
  legend {
    ...OlapLayerLegend
  }
  map {
    ...OlapLayerMap
  }
  markLines {
    ...OlapLayerMarkLine
  }
  pie {
    ...OlapLayerPie
  }
  points {
    ...OlapLayerPoint
  }
  series {
    ...OlapLayerSeria
  }
  seriesConfig {
    ...OlapLayerSeria
  }
  sortingType
  table {
    ...OlapLayerTable
  }
  vGrid {
    ...OlapLayerVHGrid
  }
  valueRounding
  zooming {
    ...OlapLayerZooming
  }
}
    ${OlapLayerAliasFragmentDoc}
${OlapLayerAxisFragmentDoc}
${OlapLayerGridFragmentDoc}
${OlapLayerVhGridFragmentDoc}
${OlapLayerLegendFragmentDoc}
${OlapLayerMapFragmentDoc}
${OlapLayerMarkLineFragmentDoc}
${OlapLayerPieFragmentDoc}
${OlapLayerPointFragmentDoc}
${OlapLayerSeriaFragmentDoc}
${OlapLayerTableFragmentDoc}
${OlapLayerZoomingFragmentDoc}`;
export const OlapLayerTablePropertiesFragmentDoc = gql`
    fragment OlapLayerTableProperties on OlapLayerTableProperties {
  showTotal
}
    `;
export const OlapChartLayerFragmentDoc = gql`
    fragment OlapChartLayer on OlapChartLayer {
  analysis {
    ...Analysis
  }
  chartProperties {
    ...OlapLayerChartProperties
  }
  chartType
  columns {
    ...OlapRequestField
  }
  cubeId
  drillAsidePanelId
  havingFilters {
    ...FormulaToken
  }
  height
  hierarchy {
    ...OlapHierarchy
  }
  id
  limit
  mapProperties {
    ...OlapLayerMapProperties
  }
  offset
  positionX
  positionY
  rows {
    ...OlapRequestField
  }
  scannerDrillFields
  showTotal
  showValueMeasureName
  sorting {
    ...OlapLayerSorting
  }
  styles {
    ...OlapLayerStyles
  }
  tableProperties {
    ...OlapLayerTableProperties
  }
  type
  valueFontColor
  valueFontSize
  valuePostfix
  whereFilters {
    ...FormulaToken
  }
  width
}
    ${AnalysisFragmentDoc}
${OlapLayerChartPropertiesFragmentDoc}
${OlapRequestFieldFragmentDoc}
${FormulaTokenFragmentDoc}
${OlapHierarchyFragmentDoc}
${OlapLayerMapPropertiesFragmentDoc}
${OlapLayerSortingFragmentDoc}
${OlapLayerStylesFragmentDoc}
${OlapLayerTablePropertiesFragmentDoc}`;
export const OlapFilterLayerFragmentDoc = gql`
    fragment OlapFilterLayer on OlapFilterLayer {
  applyToAllElement
  cubeId
  defaultSelectedValues
  fieldId
  fieldValues
  filterField {
    ...OlapRequestField
  }
  filterVisType
  height
  id
  positionX
  positionY
  relatedElements
  type
  width
}
    ${OlapRequestFieldFragmentDoc}`;
export const OlapTextLayerFragmentDoc = gql`
    fragment OlapTextLayer on OlapTextLayer {
  color
  fontStyle
  fontWeight
  height
  id
  positionX
  positionY
  rtx {
    ...OlapLayerRtxData
  }
  size
  text
  textAlign
  textDecoration
  type
  width
}
    ${OlapLayerRtxDataFragmentDoc}`;
export const OlapLayerFragmentDoc = gql`
    fragment OlapLayer on OlapLayer {
  ...OlapChartLayer
  ...OlapFilterLayer
  ...OlapTextLayer
}
    ${OlapChartLayerFragmentDoc}
${OlapFilterLayerFragmentDoc}
${OlapTextLayerFragmentDoc}`;
export const OlapDashboardFragmentDoc = gql`
    fragment OlapDashboard on OlapDashboard {
  analysis {
    ...DashboardAnalysis
  }
  backgroundColor
  borderColor
  height
  horizontalMargin
  id
  insertedAt
  layers {
    ...OlapLayer
  }
  maxWidth
  minWidth
  object {
    ...Object
  }
  rowHeight
  title
  updatedAt
  verticalMargin
  width
  workspace
}
    ${DashboardAnalysisFragmentDoc}
${OlapLayerFragmentDoc}
${ObjectFragmentDoc}`;
export const OlapResponseFragmentDoc = gql`
    fragment OlapResponse on OlapResponse {
  data
}
    `;
export const OrganisationFragmentDoc = gql`
    fragment Organisation on Organisation {
  acl {
    ...Acl
  }
  description
  email
  id
  name
  private
  url
}
    ${AclFragmentDoc}`;
export const PmChecklistTaskFragmentDoc = gql`
    fragment PmChecklistTask on PmChecklistTask {
  description
  id
  planFinishTime
  planStartTime
  status
  title
  userIds
}
    `;
export const PmChecklistFragmentDoc = gql`
    fragment PmChecklist on PmChecklist {
  description
  id
  insertedAt
  tasks {
    ...PmChecklistTask
  }
  title
  updatedAt
  userIds
}
    ${PmChecklistTaskFragmentDoc}`;
export const ProjectManagementFragmentDoc = gql`
    fragment ProjectManagement on ProjectManagement {
  checklists {
    ...PmChecklist
  }
  id
  insertedAt
  object {
    ...Object
  }
  title
  updatedAt
}
    ${PmChecklistFragmentDoc}
${ObjectFragmentDoc}`;
export const RestHttpAnswerFragmentDoc = gql`
    fragment RestHttpAnswer on RestHttpAnswer {
  body
  code
}
    `;
export const SessionFragmentDoc = gql`
    fragment Session on Session {
  expireAt
  refreshToken
  token
  user {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const ProgressFragmentDoc = gql`
    fragment Progress on Progress {
  allCount
  doneCount
  label
}
    `;
export const StepProgressFragmentDoc = gql`
    fragment StepProgress on StepProgress {
  processes {
    ...Progress
  }
  status
  stepId
}
    ${ProgressFragmentDoc}`;
export const DatasourceStateFragmentDoc = gql`
    fragment DatasourceState on DatasourceState {
  allCount
  currentSubsource
  datasourceId
  doneCount
}
    `;
export const DatasourceProgressFragmentDoc = gql`
    fragment DatasourceProgress on DatasourceProgress {
  allCount
  datasourceId
  doneCount
  doneDate
  futureStartDate
  processes {
    ...Progress
  }
  startDate
  status
  stopDate
  tableId
}
    ${ProgressFragmentDoc}`;
export const ChatOnlineMetaFragmentDoc = gql`
    fragment ChatOnlineMeta on ChatOnlineMeta {
  onlineAt
}
    `;
export const ChatOnlineFragmentDoc = gql`
    fragment ChatOnline on ChatOnline {
  id
  meta {
    ...ChatOnlineMeta
  }
}
    ${ChatOnlineMetaFragmentDoc}`;
export const ChatAvatarFragmentDoc = gql`
    fragment ChatAvatar on ChatAvatar {
  large
  small
}
    `;
export const ChatUserFragmentDoc = gql`
    fragment ChatUser on ChatUser {
  avatar {
    ...ChatAvatar
  }
  id
  name
}
    ${ChatAvatarFragmentDoc}`;
export const ChatMessageFragmentDoc = gql`
    fragment ChatMessage on ChatMessage {
  embed
  messageId
  reply {
    messageId
  }
  replyId
  roomId
  text
  user {
    ...ChatUser
  }
  userId
}
    ${ChatUserFragmentDoc}`;
export const ChatRoomFragmentDoc = gql`
    fragment ChatRoom on ChatRoom {
  dialog
  lastMessage {
    ...ChatMessage
  }
  messageId
  metadata
  name
  roomId
  updatedAt
  user {
    ...ChatUser
  }
}
    ${ChatMessageFragmentDoc}
${ChatUserFragmentDoc}`;
export const SocketMessageFragmentDoc = gql`
    fragment SocketMessage on SocketMessage {
  ...StepProgress
  ...DatasourceState
  ...DatasourceProgress
  ...ChatOnline
  ...ChatUser
  ...ChatMessage
  ...ChatRoom
}
    ${StepProgressFragmentDoc}
${DatasourceStateFragmentDoc}
${DatasourceProgressFragmentDoc}
${ChatOnlineFragmentDoc}
${ChatUserFragmentDoc}
${ChatMessageFragmentDoc}
${ChatRoomFragmentDoc}`;
export const ChangeFragmentDoc = gql`
    fragment Change on Change {
  after
  before
  changeType
  column {
    ...Column
  }
  id
  insertedAt
}
    ${ColumnFragmentDoc}`;
export const DbTableFragmentDoc = gql`
    fragment DbTable on DbTable {
  id
  name
  schema
}
    `;
export const DbParamsFragmentDoc = gql`
    fragment DbParams on DbParams {
  db
  dbType
  host
  pass
  port
  tables {
    ...DbTable
  }
  user
}
    ${DbTableFragmentDoc}`;
export const EisDirFragmentDoc = gql`
    fragment EisDir on EisDir {
  id
  includeSubdirs
  path
  queries
  regexp
  title
}
    `;
export const EisParamsFragmentDoc = gql`
    fragment EisParams on EisParams {
  dirs {
    ...EisDir
  }
  host
  pass
  port
  user
}
    ${EisDirFragmentDoc}`;
export const FtpDirFragmentDoc = gql`
    fragment FtpDir on FtpDir {
  id
  includeSubdirs
  path
  regexp
  title
}
    `;
export const FtpParamsFragmentDoc = gql`
    fragment FtpParams on FtpParams {
  dirs {
    ...FtpDir
  }
  host
  pass
  port
  user
}
    ${FtpDirFragmentDoc}`;
export const OdataParamsFragmentDoc = gql`
    fragment OdataParams on OdataParams {
  host
  pass
  port
  tables
  url
  user
}
    `;
export const RestParamsEndpointFragmentDoc = gql`
    fragment RestParamsEndpoint on RestParamsEndpoint {
  args
  dateLimitType
  id
  limit
  limitArgName
  limitOffsetType
  offset
  offsetArgName
  offsetStopValue
  pageArgName
  pageEnd
  pageRowCount
  pageStart
  pagination
  requestType
  resultArrayKeys
  stopOnLesslimit
  urlPostfix
}
    `;
export const RestParamsHeaderFragmentDoc = gql`
    fragment RestParamsHeader on RestParamsHeader {
  name
  value
}
    `;
export const RestParamsFragmentDoc = gql`
    fragment RestParams on RestParams {
  apiKeyName
  apiKeyValue
  authMode
  authTokenKeys
  authTtl
  authType
  authUrl
  bearerToken
  delay
  endpoints {
    ...RestParamsEndpoint
  }
  headers {
    ...RestParamsHeader
  }
  login
  loginFieldname
  oauth20Prefix
  oauth20Token
  pass
  passFieldname
  refreshTokenFieldname
  refreshTokenKeys
  refreshUrl
  timeout
  url
}
    ${RestParamsEndpointFragmentDoc}
${RestParamsHeaderFragmentDoc}`;
export const DatasourceFragmentDoc = gql`
    fragment Datasource on Datasource {
  datasourceProgresses {
    ...DatasourceProgress
  }
  datasourceState {
    ...DatasourceState
  }
  dbParams {
    ...DbParams
  }
  eisParams {
    ...EisParams
  }
  ftpParams {
    ...FtpParams
  }
  id
  object {
    ...Object
  }
  odataParams {
    ...OdataParams
  }
  periodicityType
  periodicityValue
  restParams {
    ...RestParams
  }
  sourceType
  steps {
    id
    title
  }
  title
}
    ${DatasourceProgressFragmentDoc}
${DatasourceStateFragmentDoc}
${DbParamsFragmentDoc}
${EisParamsFragmentDoc}
${FtpParamsFragmentDoc}
${ObjectFragmentDoc}
${OdataParamsFragmentDoc}
${RestParamsFragmentDoc}`;
export const FlowAclFragmentDoc = gql`
    fragment FlowAcl on FlowAcl {
  copy
  delete
  update
}
    `;
export const FlowFragmentDoc = gql`
    fragment Flow on Flow {
  acl {
    ...FlowAcl
  }
  connectedEntities {
    ...ConnectedEntities
  }
  id
  insertedAt
  object {
    ...Object
  }
  title
  updatedAt
}
    ${FlowAclFragmentDoc}
${ConnectedEntitiesFragmentDoc}
${ObjectFragmentDoc}`;
export const OutDbParamsFragmentDoc = gql`
    fragment OutDbParams on OutDbParams {
  db
  dbType
  exportToDb
  host
  pass
  port
  tableName
  title
  user
}
    `;
export const StepFragmentDoc = gql`
    fragment Step on Step {
  changes {
    ...Change
  }
  columnsCount
  datasource {
    ...Datasource
  }
  dateColumn
  dupColumnsCount
  dupGroupsCount
  exportToMadd
  flow {
    ...Flow
  }
  fullUpdate
  id
  insertedAt
  joinType
  leftColumns {
    ...Column
  }
  leftInKeys
  leftInRecords
  leftNotInKeys
  leftNotInRecords
  leftStepColumnId
  leftStepId
  leftUnmatchedKeys
  matchedKeys
  originalSchemaTitle
  originalTitle
  outDbParams {
    ...OutDbParams
  }
  periodicity
  positionX
  positionY
  rightColumns {
    ...Column
  }
  rightInKeys
  rightInRecords
  rightNotInKeys
  rightNotInRecords
  rightStepColumnId
  rightStepId
  rightUnmatchedKeys
  stepIds
  stepType
  tableName
  title
  updatedAt
  whereCond {
    ...FormulaToken
  }
}
    ${ChangeFragmentDoc}
${DatasourceFragmentDoc}
${FlowFragmentDoc}
${ColumnFragmentDoc}
${OutDbParamsFragmentDoc}
${FormulaTokenFragmentDoc}`;
export const FolderMainInfoFragmentDoc = gql`
    fragment FolderMainInfo on Folder {
  id
  title
  isOpened
  isLocked
  sharedAccess
  sharedToken
  invitedUsers {
    ...User
  }
  usersAccessList {
    ...User
  }
  groupAccessList {
    ...UserGroup
  }
  objects {
    ...Object
  }
  asOwner
  defaultPanels {
    panelId
    userId
  }
}
    ${UserFragmentDoc}
${UserGroupFragmentDoc}
${ObjectFragmentDoc}`;
export const FolderFragmentDoc = gql`
    fragment Folder on Folder {
  ...FolderMainInfo
  folders {
    ...FolderMainInfo
    folders {
      ...FolderMainInfo
      folders {
        ...FolderMainInfo
        folders {
          ...FolderMainInfo
          folders {
            ...FolderMainInfo
          }
        }
      }
    }
  }
}
    ${FolderMainInfoFragmentDoc}`;
export const TreeFragmentDoc = gql`
    fragment Tree on Tree {
  folders {
    ...Folder
  }
  objects {
    ...Object
  }
}
    ${FolderFragmentDoc}
${ObjectFragmentDoc}`;
export const TreesFragmentDoc = gql`
    fragment Trees on Trees {
  pinnedTree {
    ...Tree
  }
  tree {
    ...Tree
  }
}
    ${TreeFragmentDoc}`;