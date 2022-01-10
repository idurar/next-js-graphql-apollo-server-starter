import { resolverType } from 'fast-graphql';
import { places } from '@/data';

import * as schema from '@/graphql/generated/schemaType';

const Query = {
  placeList: (parent: any, args: any, ctx: any): schema.Query['placeList'] => {
    return places;
  },

  place: (parent: any, args: any, ctx: any): schema.Query['place'] => {
    const { id } = args;
    return places[0];
  },
};

const Mutation = {
  addPlace: (parent: any, args: any, ctx: any) => {
    return { title: 'this is addPlace mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
