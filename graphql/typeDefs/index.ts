const path = require('path');
const fs = require('fs');
const glob = require('fast-glob');

let arr: any[] = [];
const pathfiles = 'graphql/typeDefs/types/*.gql';

glob.sync(pathfiles).forEach(function (file: any) {
  try {
    const data = fs.readFileSync(path.resolve(file), 'utf8');

    arr.push(data);
  } catch (err) {
    console.error(err);
  }
});

export default arr;

//module.exports = mergeTypeDefs(typesArray);
