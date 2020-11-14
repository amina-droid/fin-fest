import { loader } from 'graphql.macro';

export * from './types/GetUserScores';

export const GET_USER_SCORES = loader('./query.gql');
