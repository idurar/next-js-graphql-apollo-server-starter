const path = require('path');
const fs = require('fs');
const glob = require('fast-glob');

let typeDefs: string[] = [];
const pathfiles = 'graphql/typeDefs/*.gql';

glob.sync(pathfiles).forEach(function (file: any) {
  try {
    const data = fs.readFileSync(path.resolve(file), 'utf8');
    typeDefs.push(data);
  } catch (err) {
    // console.error(err);
  }
});

export default typeDefs;
