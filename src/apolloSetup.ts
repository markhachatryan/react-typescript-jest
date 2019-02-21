import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";

const cache = new InMemoryCache();
console.log(process.env);
const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const GITHUB_PERSONAL_ACCESS_TOKEN = "281192404f2d44f42c8177ea5f28b3f9077a7348";

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
} as any);

export default client;