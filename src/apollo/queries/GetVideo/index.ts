import { loader } from 'graphql.macro';

export * from './types/GetVideo';

export const GET_VIDEO = loader('./query.gql');
