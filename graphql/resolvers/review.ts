import { resolverType } from 'fast-graphql';

const Query = {
  reviewByUser: (id: any) => {
    return { id: 'reviewByUser' };
  }
};

const Mutation = {
  addReview: (body: any) => {
    return { name: 'this is addReview mutuation' };
  }
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
