import { ApolloClient, InMemoryCache } from '@apollo/client';
export * from './queries';
export * from './mutations';

export const client = new ApolloClient({
  uri: 'https://fin-fest.loca.it',
  cache: new InMemoryCache(),
});
