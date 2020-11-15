import { loader } from 'graphql.macro';

export * from './types/SendAnswers';

export const SEND_ANSWERS = loader('./query.gql');
