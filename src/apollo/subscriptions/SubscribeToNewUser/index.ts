import { loader } from 'graphql.macro';

export * from './types/SubscribeToNewUser';

export const SUBSCRIBE_TO_NEW_USER = loader('./query.gql');
