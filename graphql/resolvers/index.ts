import { combineResolvers, resolverType } from 'fast-graphql';

import propriety from './propriety';
import user from './user';
import review from './review';

const resolversList: resolverType[] = [propriety, user, review];

const cominedResolvers = combineResolvers(resolversList);

export default cominedResolvers;
