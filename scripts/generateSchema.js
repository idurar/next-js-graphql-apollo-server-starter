const fs = require('fs');
const { mergeSchemas } = require('fast-graphql');

const mergedSchemas = mergeSchemas('graphql/typeDefs/*.gql');

const schema = mergedSchemas.join(' ');

fs.writeFile('./schema.graphql', schema, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

console.log('  ✔ Schema Generated : schema.graphql');
