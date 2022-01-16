const { generateSchema } = require('fast-graphql');

const inputPath = './graphql/typeDefs/*.gql';
const schemaPath = './graphql/schema.graphql';
const typeDefsPath = './graphql/typeDefs/index.ts';

generateSchema({ inputPath, schemaPath, typeDefsPath });
