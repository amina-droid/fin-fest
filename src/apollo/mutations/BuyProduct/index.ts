import { loader } from 'graphql.macro';

export * from './types/BuyProduct';

export const BUY_PRODUCT = loader('./query.gql');
