import type { NextApiRequest, NextApiResponse } from 'next';
import { gql } from 'apollo-server-micro';

import typeDefs from '@/graphql/typeDefs';

const schema = gql(typeDefs.join(' '));

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  setTimeout(() => {
    try {
      res.status(200).json({ success: true, result: schema });
    } catch (error) {
      res.status(503).json({ success: false, error, result: null });
    }
  }, 1000);
}
