
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
        "name": "Geography",
        "possibleTypes": [
          {
            "name": "Point"
          },
          {
            "name": "LineString"
          },
          {
            "name": "Polygon"
          }
        ]
      }
    ]
  }
};
      export default result;
    