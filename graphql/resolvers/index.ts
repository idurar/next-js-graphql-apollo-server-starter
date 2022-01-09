import { combineResolvers, resolverType } from 'fast-graphql';

import propriety from './propriety';
import user from './user';
import review from './review';

const resolvers: resolverType[] = [propriety, user, review];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;
