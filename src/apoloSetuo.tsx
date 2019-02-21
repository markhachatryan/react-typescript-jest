import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";

const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = "aa9bf520a939e539d585f86c083a7de54a674503";

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