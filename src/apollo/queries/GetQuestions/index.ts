import { loader } from 'graphql.macro';

export * from './types/GetQuestions';

export const GET_QUESTIONS = loader('./query.gql');
