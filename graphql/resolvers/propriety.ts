import { resolverType } from 'fast-graphql';

import * as schemaType from '@/graphql/generated/schemaType';

const Query = {
  proprietyList: () => {
    return [{ title: 'Nextjs' }];
  },

  propriety: (
    _parent: any,
    _args: schemaType.QueryProprietyArgs,
    _context: any
  ) => {
    console.log('🚀 ~ file: propriety.ts ~ line 15 ~ _context', _context);
    const { id } = _args;
    console.log('🚀 ~ file: propriety.ts ~ line 9 ~ _args', id);
    return { title: 'Nextjs' };
  },
};

const Mutation = {
  addPropriety: (body: any) => {
    return { title: 'this is addPropriety mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
