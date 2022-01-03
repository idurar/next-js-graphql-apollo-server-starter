import { resolverType } from 'fast-graphql';

const Query = {
  userList: () => {
    return [{ name: 'Nextjs' }];
  },

  user: (id: any) => {
    return { name: 'Nextjs' };
  },
};

const Mutation = {
  addUser: (body: any) => {
    return { name: 'this is addUser mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
