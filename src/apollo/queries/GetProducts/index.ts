import { loader } from 'graphql.macro';

export * from './types/GetProducts';

export const GET_PRODUCTS = loader('./query.gql');
