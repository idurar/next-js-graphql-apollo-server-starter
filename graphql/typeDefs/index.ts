import { mergeSchemas } from 'fast-graphql';

const mergedSchemas = mergeSchemas('graphql/typeDefs/*.gql');

export default mergedSchemas;
