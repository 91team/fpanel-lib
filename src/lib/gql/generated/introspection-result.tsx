export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string
      name: string
      possibleTypes: {
        name: string
      }[]
    }[]
  }
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'OlapLayer',
        possibleTypes: [
          {
            name: 'OlapChartLayer',
          },
          {
            name: 'OlapFilterLayer',
          },
          {
            name: 'OlapTextLayer',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'SocketMessage',
        possibleTypes: [
          {
            name: 'StepProgress',
          },
          {
            name: 'DatasourceState',
          },
          {
            name: 'DatasourceProgress',
          },
          {
            name: 'ChatOnline',
          },
          {
            name: 'ChatUser',
          },
          {
            name: 'ChatMessage',
          },
          {
            name: 'ChatRoom',
          },
        ],
      },
    ],
  },
}
export default result
