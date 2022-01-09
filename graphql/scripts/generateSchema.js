const { generateSchema } = require('fast-graphql');

const inputPath = './graphql/typeDefs/*.gql';
const outPath = './graphql/schema.graphql';

generateSchema({ inputPath, outPath });
