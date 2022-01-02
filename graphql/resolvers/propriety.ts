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

export default { Query, Mutation };
