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

export default { Query, Mutation };
