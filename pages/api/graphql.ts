import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer, gql } from 'apollo-server-micro';
import {
  makeExecutableSchema,
  addResolversToSchema,
} from '@graphql-tools/schema';
// const typeDefs = require('@/graphql/typeDefs');

// const resolvers = require('@/graphql/resolvers');
import typeDefs from '@/graphql/typeDefs';
// import resolvers from '@/graphql/resolvers';

console.log('🚀 ~ file: graphql.ts ~ line 8 ~ typeDefs', typeDefs);
// console.log('🚀 ~ file: graphql.ts ~ line 12 ~ resolvers', resolvers);

// const typeDefs = `
//   type Query {
//     users: [User!]!
//   }
//   type User {
//     name: String
//   }
// `;

const resolvers = {
  Query: {
    users(parent: any, args: any, context: any) {
      return [{ name: 'Nextjs' }];
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// async function createContext({ req, res }: { req: any; res: any }) {
//   // const { user, accessToken } = getSession(req, res);
//   return {};
// }

// const schemaWithResolvers = addResolversToSchema({
//   schema,
//   resolvers,
// });

const apolloServer = new ApolloServer({
  schema,
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
