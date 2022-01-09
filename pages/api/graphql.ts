import type { NextApiRequest, NextApiResponse } from 'next';
import graphqlServer from '@/graphql/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await graphqlServer({ req, res });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
