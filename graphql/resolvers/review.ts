const Query = {
  reviewByUser: (id: any) => {
    return { id: 'reviewByUser' };
  },
};

const Mutation = {
  addReview: (body: any) => {
    return { name: 'this is addReview mutuation' };
  },
};

export default { Query, Mutation };
