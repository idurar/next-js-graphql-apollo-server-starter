import { mergeSchemas } from 'fast-graphql';
const path = require('path');
// import { loadFilesSync } from '@graphql-tools/load-files';

const pathfiles = 'graphql/typeDefs/*.gql';
console.log('🚀 ~ file: index.ts ~ line 6 ~ pathfiles', pathfiles);

const mergedSchemas = mergeSchemas({ pathfiles });

export default mergedSchemas;
