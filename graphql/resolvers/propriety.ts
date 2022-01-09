import { resolverType } from 'fast-graphql';

import * as schemaType from '@/graphql/generated/schemaType';

const Query = {
  proprietyList: (parent: any, args: any, ctx: any) => {
    return [{ title: 'Nextjs' }];
  },

  propriety: (parent: any, args: any, ctx: any): schemaType.Query['propriety'] => {
    const { id } = args;

    return { title: 'Nextjs', id };
  }
};

const Mutation = {
  addPropriety: (parent: any, args: any, ctx: any): schemaType.Mutation['addPropriety'] => {
    return { title: 'this is addPropriety mutuation' };
  }
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
