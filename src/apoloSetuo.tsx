import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";

const cache = new InMemoryCache();
console.log(process.env);
const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = "cec81ac623c9525e0b943362d6b21642eda87842";

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
} as any);

export default client;