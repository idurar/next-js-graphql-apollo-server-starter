import { resolverType } from 'fast-graphql';

import * as schemaType from '@/graphql/generated/schemaType';

const Query = {
  userList: (): schemaType.Query['userList'] => {
    return [{ email: 'Nextjs', id: 'sqdqsd', photo: 'qsdqsdqs' }];
  },

  user: (id: schemaType.User['id']): schemaType.Query['user'] => {
    return { email: 'Nextjs', id: 'sqdqsd', photo: 'qsdqsdqs' };
  },
};

const Mutation = {
  addUser: (body: any) => {
    return { name: 'this is addUser mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
