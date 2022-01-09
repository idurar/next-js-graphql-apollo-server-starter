import { resolverType } from 'fast-graphql';

import * as schemaType from '@/graphql/generated/schemaType';

const Query = {
  userList: (): schemaType.Query['userList'] => {
    return [{ email: 'Nextjs', id: 'sqdqsd', photo: 'qsdqsdqs' }];
  },

  user: (parent: any, args: any, ctx: any): schemaType.Query['user'] => {
    const { id } = args;
    console.log('🚀 ~ file: user.ts ~ line 17 ~ id', id);
    return { email: 'Nextjs', id: 'sqdqsd', photo: 'qsdqsdqs' };
  }
};

const Mutation = {
  addUser: (body: any) => {
    return { name: 'this is addUser mutuation' };
  }
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
