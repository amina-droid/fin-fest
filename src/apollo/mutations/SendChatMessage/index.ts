import { loader } from 'graphql.macro';

export * from './types/SendChatMessage';

export const SEND_CHAT_MESSAGE = loader('./query.gql');
