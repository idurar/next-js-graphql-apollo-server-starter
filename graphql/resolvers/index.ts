const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolversArray = loadFilesSync(path.join(__dirname, '.'), {
  extensions: ['gql'],
});
// console.log(
//   '🚀 ~ file: index.ts ~ line 8 ~ resolversArray ~ resolversArray',
//   resolversArray,
// );

// module.exports = mergeResolvers(resolversArray);

const resolvers = mergeResolvers(resolversArray);
export default resolvers;
