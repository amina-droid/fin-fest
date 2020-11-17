import { loader } from 'graphql.macro';

export * from './types/SubscribeToNewVideo';

export const SUBSCRIBE_TO_NEW_VIDEO = loader('./query.gql');
