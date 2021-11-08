import gql from 'graphql-tag'

export const AclFragment = gql`
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
`

export const AdditionalCalcFragment = gql`
  fragment AdditionalCalc on AdditionalCalc {
    cumulativeTotal
    groupBy
    growth
    growthRate
    linkedFieldId
    percentOfTotal
  }
`

export const AnalysisFragment = gql`
  fragment Analysis on Analysis {
    regression {
      ...Regression
    }
  }
`

export const AttachmentFragment = gql`
  fragment Attachment on Attachment {
    aspectRatio
    contentType
    id
    name
    url
  }
`

export const AutocompleteFragment = gql`
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
`

export const ChangeFragment = gql`
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
`

export const ChatAvatarFragment = gql`
  fragment ChatAvatar on ChatAvatar {
    large
    small
  }
`

export const ChatMessageFragment = gql`
  fragment ChatMessage on ChatMessage {
    embed
    messageId
    reply {
      ...ChatMessage
    }
    replyId
    roomId
    text
    user {
      ...ChatUser
    }
    userId
  }
`

export const ChatOnlineFragment = gql`
  fragment ChatOnline on ChatOnline {
    id
    meta {
      ...ChatOnlineMeta
    }
  }
`

export const ChatOnlineMetaFragment = gql`
  fragment ChatOnlineMeta on ChatOnlineMeta {
    onlineAt
  }
`

export const ChatRoomFragment = gql`
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
`

export const ChatUserFragment = gql`
  fragment ChatUser on ChatUser {
    avatar {
      ...ChatAvatar
    }
    id
    name
  }
`

export const CodecFragment = gql`
  fragment Codec on Codec {
    level
    type
  }
`

export const ColumnFragment = gql`
  fragment Column on Column {
    caseType
    changes {
      ...Change
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
      ...Step
    }
    stepIds
    title
    trimSpaces
    uncompressedBytes
    updatedAt
    width
  }
`

export const ColumnStatFragment = gql`
  fragment ColumnStat on ColumnStat {
    count
    value
  }
`

export const ConnectedEntitiesFragment = gql`
  fragment ConnectedEntities on ConnectedEntities {
    folders
    objects
  }
`

export const ConnectionFragment = gql`
  fragment Connection on Connection {
    id
    joinType
    leftTableFieldId
    leftTableId
    rightTableFieldId
    rightTableId
  }
`

export const CoordsFragment = gql`
  fragment Coords on Coords {
    coordsType
    lineCoords
    pointCoords
    polyCoords
  }
`

export const CubeFilterFragment = gql`
  fragment CubeFilter on CubeFilter {
    cubeId
    cubeTitle
    draftInput
    filter {
      ...FormulaToken
    }
  }
`

export const DashboardAnalysisFragment = gql`
  fragment DashboardAnalysis on DashboardAnalysis {
    regression {
      ...DashboardRegression
    }
  }
`

export const DashboardRegressionFragment = gql`
  fragment DashboardRegression on DashboardRegression {
    models {
      ...RegressionModelV1
    }
    predictSize
  }
`

export const DataTableFragment = gql`
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
`

export const DataTableFieldFragment = gql`
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
`

export const DataTableFieldValidationFragment = gql`
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
`

export const DataTableRowFragment = gql`
  fragment DataTableRow on DataTableRow {
    createdAt
    fields {
      ...DataTableRowField
    }
    id
  }
`

export const DataTableRowFieldFragment = gql`
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
`

export const DataValueFragment = gql`
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
`

export const DatasourceFragment = gql`
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
      ...Step
    }
    title
  }
`

export const DatasourceProgressFragment = gql`
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
`

export const DatasourceStateFragment = gql`
  fragment DatasourceState on DatasourceState {
    allCount
    currentSubsource
    datasourceId
    doneCount
  }
`

export const DbParamsFragment = gql`
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
`

export const DbTableFragment = gql`
  fragment DbTable on DbTable {
    id
    name
    schema
  }
`

export const DefaultPanelFragment = gql`
  fragment DefaultPanel on DefaultPanel {
    panelId
    userId
  }
`

export const EisDirFragment = gql`
  fragment EisDir on EisDir {
    id
    includeSubdirs
    path
    queries
    regexp
    title
  }
`

export const EisParamsFragment = gql`
  fragment EisParams on EisParams {
    dirs {
      ...EisDir
    }
    host
    pass
    port
    user
  }
`

export const EntityCreatedFragment = gql`
  fragment EntityCreated on EntityCreated {
    entity
    type
  }
`

export const EtlAclFragment = gql`
  fragment EtlAcl on EtlAcl {
    datasourceEdit
    datasourceRead
    flowEdit
    flowRead
  }
`

export const ExternalSystemFragment = gql`
  fragment ExternalSystem on ExternalSystem {
    folderId
    id
    ips
    params {
      ...ExternalSystemParams
    }
    title
  }
`

export const ExternalSystemParamsFragment = gql`
  fragment ExternalSystemParams on ExternalSystemParams {
    active
    description
    key
    value
  }
`

export const FieldFragment = gql`
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
`

export const FlowFragment = gql`
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
`

export const FlowAclFragment = gql`
  fragment FlowAcl on FlowAcl {
    copy
    delete
    update
  }
`

export const FolderFragment = gql`
  fragment Folder on Folder {
    asOwner
    defaultPanels {
      ...DefaultPanel
    }
    folders {
      ...Folder
    }
    groupAccessList {
      ...UserGroup
    }
    id
    invitedUsers {
      ...User
    }
    isLocked
    isOpened
    objects {
      ...Object
    }
    sharedAccess
    sharedToken
    title
    userQuota
    usersAccessList {
      ...User
    }
  }
`

export const FormulaTokenFragment = gql`
  fragment FormulaToken on FormulaToken {
    dataValue {
      ...DataValue
    }
    funcValue {
      ...FuncValue
    }
    listValue {
      ...ListValue
    }
    tokenType
    value
  }
`

export const FtpDirFragment = gql`
  fragment FtpDir on FtpDir {
    id
    includeSubdirs
    path
    regexp
    title
  }
`

export const FtpEnityFragment = gql`
  fragment FtpEnity on FtpEnity {
    name
    type
  }
`

export const FtpParamsFragment = gql`
  fragment FtpParams on FtpParams {
    dirs {
      ...FtpDir
    }
    host
    pass
    port
    user
  }
`

export const FuncValueFragment = gql`
  fragment FuncValue on FuncValue {
    arg1 {
      ...FormulaToken
    }
    arg2 {
      ...FormulaToken
    }
    arg3 {
      ...FormulaToken
    }
    args {
      ...FormulaToken
    }
    name
  }
`

export const FunctionFragment = gql`
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
`

export const FunctionExampleFragment = gql`
  fragment FunctionExample on FunctionExample {
    formula
    result
  }
`

export const HierarchyFragment = gql`
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
`

export const HierarchyDimFragment = gql`
  fragment HierarchyDim on HierarchyDim {
    dimId
    position
  }
`

export const IndicatorFragment = gql`
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
`

export const IndicatorsAutocompleteFragment = gql`
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
`

export const ListValueFragment = gql`
  fragment ListValue on ListValue {
    list
    title
  }
`

export const MapFragment = gql`
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
`

export const MapLayerFragment = gql`
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
`

export const MapLayerModalFragment = gql`
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
`

export const MapLayerRtxDataFragment = gql`
  fragment MapLayerRtxData on MapLayerRtxData {
    align
    children {
      ...MapLayerRtxItem
    }
    type
  }
`

export const MapLayerRtxItemFragment = gql`
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
`

export const MapLayerRtxItemChildFragment = gql`
  fragment MapLayerRtxItemChild on MapLayerRtxItemChild {
    text
  }
`

export const MapLayerSharedFragment = gql`
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
`

export const MapLayerStylesFragment = gql`
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
`

export const MapLayerStylesFillOptionsFragment = gql`
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
`

export const MapLayerStylesFillScaleFragment = gql`
  fragment MapLayerStylesFillScale on MapLayerStylesFillScale {
    limits {
      ...MapLayerStylesFillScaleLimit
    }
    name
    scaleFunc
    scaleType
    showInLegend
  }
`

export const MapLayerStylesFillScaleLimitFragment = gql`
  fragment MapLayerStylesFillScaleLimit on MapLayerStylesFillScaleLimit {
    colorFrom
    colorTo
    from
    to
  }
`

export const MapLayerStylesSizeOptionsFragment = gql`
  fragment MapLayerStylesSizeOptions on MapLayerStylesSizeOptions {
    gridAggType
    scales {
      ...MapLayerStylesSizeScale
    }
    scalesDataFieldId
    size
    type
  }
`

export const MapLayerStylesSizeScaleFragment = gql`
  fragment MapLayerStylesSizeScale on MapLayerStylesSizeScale {
    limits {
      ...MapLayerStylesSizeScaleLimit
    }
    name
    scaleFunc
    scaleType
    showInLegend
  }
`

export const MapLayerStylesSizeScaleLimitFragment = gql`
  fragment MapLayerStylesSizeScaleLimit on MapLayerStylesSizeScaleLimit {
    from
    sizeFrom
    sizeTo
    to
  }
`

export const MapLayerStylesStrokeFragment = gql`
  fragment MapLayerStylesStroke on MapLayerStylesStroke {
    color
    opacity
    size
  }
`

export const MapLayerTooltipFragment = gql`
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
`

export const MapSharedFragment = gql`
  fragment MapShared on MapShared {
    center
    id
    layers {
      ...MapLayerShared
    }
    tileLayerLink
    zoom
  }
`

export const ModalBlockFragment = gql`
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
`

export const ObjectFragment = gql`
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
`

export const OdataParamsFragment = gql`
  fragment OdataParams on OdataParams {
    host
    pass
    port
    tables
    url
    user
  }
`

export const OlapAclFragment = gql`
  fragment OlapAcl on OlapAcl {
    olapRequest
    panelsEdit
    panelsRead
  }
`

export const OlapChartLayerFragment = gql`
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
`

export const OlapDashboardFragment = gql`
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
`

export const OlapFilterLayerFragment = gql`
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
`

export const OlapHierarchyFragment = gql`
  fragment OlapHierarchy on OlapHierarchy {
    fields {
      ...OlapRequestField
    }
    id
  }
`

export const OlapLayerFragment = gql`
  fragment OlapLayer on OlapLayer {
    ...OlapChartLayer
    ...OlapFilterLayer
    ...OlapTextLayer
  }
`

export const OlapLayerAliasFragment = gql`
  fragment OlapLayerAlias on OlapLayerAlias {
    alias
    fieldId
    hiddenAlias
    id
    name
  }
`

export const OlapLayerAxisFragment = gql`
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
`

export const OlapLayerBarFillStyleFragment = gql`
  fragment OlapLayerBarFillStyle on OlapLayerBarFillStyle {
    color
    opacity
  }
`

export const OlapLayerChartPropertiesFragment = gql`
  fragment OlapLayerChartProperties on OlapLayerChartProperties {
    sorting {
      ...OlapLayerSorting
    }
  }
`

export const OlapLayerDirectAxisFragment = gql`
  fragment OlapLayerDirectAxis on OlapLayerDirectAxis {
    rotate
    withAxisLine
    withLabel
    withName
  }
`

export const OlapLayerGridFragment = gql`
  fragment OlapLayerGrid on OlapLayerGrid {
    color
    lineStyle {
      ...OlapLayerLineStyle
    }
    type
  }
`

export const OlapLayerLegendFragment = gql`
  fragment OlapLayerLegend on OlapLayerLegend {
    direction
    linesCount
    position
    show
  }
`

export const OlapLayerLineStyleFragment = gql`
  fragment OlapLayerLineStyle on OlapLayerLineStyle {
    color
    opacity
    type
    width
  }
`

export const OlapLayerMapFragment = gql`
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
`

export const OlapLayerMapPropertiesFragment = gql`
  fragment OlapLayerMapProperties on OlapLayerMapProperties {
    center
    tile
    zoom
  }
`

export const OlapLayerMarkFragment = gql`
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
`

export const OlapLayerMarkFilterFragment = gql`
  fragment OlapLayerMarkFilter on OlapLayerMarkFilter {
    dimensions {
      ...OlapLayerMarkFilterDimension
    }
    measuresIds
  }
`

export const OlapLayerMarkFilterDimensionFragment = gql`
  fragment OlapLayerMarkFilterDimension on OlapLayerMarkFilterDimension {
    id
    index
    values
  }
`

export const OlapLayerMarkLineFragment = gql`
  fragment OlapLayerMarkLine on OlapLayerMarkLine {
    category
    color
    label
    position
    type
    value
  }
`

export const OlapLayerPieFragment = gql`
  fragment OlapLayerPie on OlapLayerPie {
    id
    innerRadius
  }
`

export const OlapLayerPointFragment = gql`
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
`

export const OlapLayerRangesFragment = gql`
  fragment OlapLayerRanges on OlapLayerRanges {
    color
    end
    start
  }
`

export const OlapLayerRtxDataFragment = gql`
  fragment OlapLayerRtxData on OlapLayerRtxData {
    align
    children {
      ...OlapLayerRtxItem
    }
    type
  }
`

export const OlapLayerRtxItemFragment = gql`
  fragment OlapLayerRtxItem on OlapLayerRtxItem {
    bold
    children {
      ...OlapLayerRtxItemChild
    }
    color
    element {
      ...OlapChartLayer
    }
    fontSize
    italic
    linkPanelId
    text
    type
    value
  }
`

export const OlapLayerRtxItemChildFragment = gql`
  fragment OlapLayerRtxItemChild on OlapLayerRtxItemChild {
    text
  }
`

export const OlapLayerSeriaFragment = gql`
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
`

export const OlapLayerShapeStyleFragment = gql`
  fragment OlapLayerShapeStyle on OlapLayerShapeStyle {
    color
    opacity
    size
  }
`

export const OlapLayerSortingFragment = gql`
  fragment OlapLayerSorting on OlapLayerSorting {
    asc
    type
  }
`

export const OlapLayerStylesFragment = gql`
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
`

export const OlapLayerTableFragment = gql`
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
`

export const OlapLayerTablePropertiesFragment = gql`
  fragment OlapLayerTableProperties on OlapLayerTableProperties {
    showTotal
  }
`

export const OlapLayerTextStyleFragment = gql`
  fragment OlapLayerTextStyle on OlapLayerTextStyle {
    color
    fontSize
  }
`

export const OlapLayerTooltipFragment = gql`
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
`

export const OlapLayerVHGridFragment = gql`
  fragment OlapLayerVHGrid on OlapLayerVHGrid {
    areas
    show
  }
`

export const OlapLayerZoomingFragment = gql`
  fragment OlapLayerZooming on OlapLayerZooming {
    horizontal {
      ...OlapLayerZoomingOpts
    }
    vertical {
      ...OlapLayerZoomingOpts
    }
  }
`

export const OlapLayerZoomingOptsFragment = gql`
  fragment OlapLayerZoomingOpts on OlapLayerZoomingOpts {
    enabled
    end
    start
  }
`

export const OlapRequestArgFragment = gql`
  fragment OlapRequestArg on OlapRequestArg {
    columnId
    cubeId
    dataType
    dateFormat
    label
    type
    value
  }
`

export const OlapRequestFieldFragment = gql`
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
`

export const OlapResponseFragment = gql`
  fragment OlapResponse on OlapResponse {
    data
  }
`

export const OlapTextLayerFragment = gql`
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
`

export const OrganisationFragment = gql`
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
`

export const OseAclFragment = gql`
  fragment OseAcl on OseAcl {
    tablesEdit
    tablesRead
  }
`

export const OutDbParamsFragment = gql`
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
`

export const PmChecklistFragment = gql`
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
`

export const PmChecklistTaskFragment = gql`
  fragment PmChecklistTask on PmChecklistTask {
    description
    id
    planFinishTime
    planStartTime
    status
    title
    userIds
  }
`

export const ProgressFragment = gql`
  fragment Progress on Progress {
    allCount
    doneCount
    label
  }
`

export const ProjectManagementFragment = gql`
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
`

export const RegressionFragment = gql`
  fragment Regression on Regression {
    models {
      ...RegressionModel
    }
    predictSize
  }
`

export const RegressionModelFragment = gql`
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
`

export const RegressionModelV1Fragment = gql`
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
`

export const RegressionVarFragment = gql`
  fragment RegressionVar on RegressionVar {
    coef
    coefMax
    coefMin
    func
    lagsCount
    relevant
    seriaId
  }
`

export const RegressionVarV1Fragment = gql`
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
`

export const RestHttpAnswerFragment = gql`
  fragment RestHttpAnswer on RestHttpAnswer {
    body
    code
  }
`

export const RestParamsFragment = gql`
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
`

export const RestParamsEndpointFragment = gql`
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
`

export const RestParamsHeaderFragment = gql`
  fragment RestParamsHeader on RestParamsHeader {
    name
    value
  }
`

export const RoleFragment = gql`
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
`

export const SessionFragment = gql`
  fragment Session on Session {
    expireAt
    refreshToken
    token
    user {
      ...User
    }
  }
`

export const SharedAclFragment = gql`
  fragment SharedAcl on SharedAcl {
    foldersEdit
    foldersRead
    objectsEdit
    objectsRead
    organisationCreate
  }
`

export const SocketMessageFragment = gql`
  fragment SocketMessage on SocketMessage {
    ...StepProgress
    ...DatasourceState
    ...DatasourceProgress
    ...ChatOnline
    ...ChatUser
    ...ChatMessage
    ...ChatRoom
  }
`

export const StepFragment = gql`
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
`

export const StepProgressFragment = gql`
  fragment StepProgress on StepProgress {
    processes {
      ...Progress
    }
    status
    stepId
  }
`

export const TableFragment = gql`
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
`

export const TablePartSizeFragment = gql`
  fragment TablePartSize on TablePartSize {
    id
    value
  }
`

export const TreeFragment = gql`
  fragment Tree on Tree {
    folders {
      ...Folder
    }
    objects {
      ...Object
    }
  }
`

export const TreesFragment = gql`
  fragment Trees on Trees {
    pinnedTree {
      ...Tree
    }
    tree {
      ...Tree
    }
  }
`

export const TrendLineFragment = gql`
  fragment TrendLine on TrendLine {
    color
    opacity
  }
`

export const UserFragment = gql`
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
    roles {
      ...Role
    }
    status
  }
`

export const UserGroupFragment = gql`
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
`
