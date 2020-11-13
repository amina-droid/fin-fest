import { loader } from 'graphql.macro';

export * from './types/GetUserCount';

export const GET_USER_COUNT = loader('./query.gql');
