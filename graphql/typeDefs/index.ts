import { mergeSchemas } from 'fast-graphql';

const pathfiles = './graphql/typeDefs/*.gql';

const mergedSchemas = mergeSchemas({ pathfiles });

export default mergedSchemas;
