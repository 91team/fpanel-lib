
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "SocketMessage",
        "possibleTypes": [
          {
            "name": "StepProgress"
          },
          {
            "name": "DatasourceState"
          },
          {
            "name": "DatasourceProgress"
          },
          {
            "name": "ChatOnline"
          },
          {
            "name": "ChatUser"
          },
          {
            "name": "ChatMessage"
          },
          {
            "name": "ChatRoom"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "OlapLayer",
        "possibleTypes": [
          {
            "name": "OlapChartLayer"
          },
          {
            "name": "OlapTextLayer"
          }
        ]
      }
    ]
  }
};
      export default result;
    