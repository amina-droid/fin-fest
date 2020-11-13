import { loader } from 'graphql.macro';

export * from './types/GetReviews';

export const GET_REVIEWS = loader('./query.gql');
