import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export * from './queries';
export * from './mutations';

const GRAPHQL_URL = process.env.NODE_ENV === 'production'
  ? 'http://api.fin-fest.ru/graphql'
  : 'https://fin-fest.loca.lt/graphql';

const defaultLink = new HttpLink({
  uri: GRAPHQL_URL,
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  fetch,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = authLink.concat(defaultLink);

export const client = new ApolloClient({
  link,
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV !== 'production',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
