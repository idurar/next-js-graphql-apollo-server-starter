import { resolverType } from 'fast-graphql';

const Query = {
  proprietyList: () => {
    return [{ title: 'Nextjs' }];
  },

  propriety: (id: string) => {
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
