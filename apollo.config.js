module.exports = {
  client: {
    excludes: ['src/lib/gql/generated'],
    includes: ['src/lib/gql/**/*.ts'],
    service: {
      name: 'fpanel',
      localSchemaFile: 'schema.graphql',
    },
  },
}
