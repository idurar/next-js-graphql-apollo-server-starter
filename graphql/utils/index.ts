const path = require('path');
const fs = require('fs');
const glob = require('fast-glob');

export type resolverType = {
  Query?: {};
  Mutation?: {};
};

export const combineResolvers = (
  resolvers: resolverType[],
): resolverType => {
  let Query = {};
  let Mutation = {};

  resolvers.map((resolver: resolverType) => {
    if (resolver.hasOwnProperty('Query')) {
      Query = { ...Query, ...resolver.Query };
    }

    if (resolver.hasOwnProperty('Mutation')) {
      Mutation = { ...Mutation, ...resolver.Mutation };
    }
  });

  return { Query, Mutation };
};

export const mergeSchemas = (pathfiles: string): string[] => {
  let schemas: string[] = [];
  glob.sync(pathfiles).forEach(function (file: any) {
    try {
      const data: string = fs.readFileSync(
        path.resolve(file),
        'utf8',
      );
      schemas.push(data);
    } catch (err) {
      throw new Error(
        "Oops Error ! Couldn't merge definitions Type , check schemas",
      );
    }
  });

  return schemas;
};
