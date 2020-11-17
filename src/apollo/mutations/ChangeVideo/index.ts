import { loader } from 'graphql.macro';

export * from './types/ChangeVideo';

export const CHANGE_VIDEO = loader('./query.gql');
