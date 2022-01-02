import { combineResolvers } from '@/graphql/utils';

import propriety from './propriety';
import user from './user';
import review from './review';

const resolversList = [propriety, user, review];

export default combineResolvers(resolversList);
