import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";

const cache = new InMemoryCache();
console.log(process.env);
const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const GITHUB_PERSONAL_ACCESS_TOKEN = "cef2ef2cf27c4f57ec51153dd374e0226fc9a822";

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