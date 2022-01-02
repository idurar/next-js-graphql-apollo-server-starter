import { mergeSchemas } from '@/graphql/utils';

const mergedSchemas = mergeSchemas('graphql/typeDefs/*.gql');

export default mergedSchemas;
