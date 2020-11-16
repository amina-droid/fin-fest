import { loader } from 'graphql.macro';

export * from './types/GetLastChatMessages';

export const GET_LAST_CHAT_MESSAGES = loader('./query.gql');
