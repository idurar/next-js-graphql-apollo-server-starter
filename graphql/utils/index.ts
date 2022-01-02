const path = require('path');
const fs = require('fs');
const glob = require('fast-glob');

export const combineResolvers = (props: any[]) => {
  let Query = {};
  let Mutation = {};

  props.map((x: any) => {
    if (x.hasOwnProperty('Query')) {
      Query = { ...Query, ...x.Query };
    }

    if (x.hasOwnProperty('Mutation')) {
      Mutation = { ...Mutation, ...x.Mutation };
    }
  });

  return { Query, Mutation };
};

export const mergeSchemas = (
  pathfiles: string = 'graphql/typeDefs/*.gql',
): string[] => {
  let schemas: string[] = [];

  glob.sync(pathfiles).forEach(function (file: any) {
    try {
      const data = fs.readFileSync(path.resolve(file), 'utf8');
      schemas.push(data);
    } catch (err) {
      throw new Error(
        "Oops Error ! Couldn't merge definitions Type , check schemas",
      );
    }
  });

  return schemas;
};
