import { loader } from 'graphql.macro';

export * from './types/SubscribeToChat';

export const SUBSCRIBE_TO_CHAT = loader('./query.gql');
