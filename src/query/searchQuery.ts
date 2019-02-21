import gql from 'graphql-tag'

const SEARCH_QUERY= gql` query search ($Search: String! )
{
  search(query: $Search, type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          name
          id
          url
          viewerHasStarred
          owner {
            id
          }
        }
      }
    }
  }
}
`;


export { SEARCH_QUERY }