import { loader } from 'graphql.macro';

export * from './types/GetVideos';

export const GET_VIDEOS = loader('./query.gql');
