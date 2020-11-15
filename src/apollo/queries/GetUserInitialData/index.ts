import { loader } from 'graphql.macro';

export * from './types/GetUserInitialData';

export const GET_USER_INITIAL_DATA = loader('./query.gql');
