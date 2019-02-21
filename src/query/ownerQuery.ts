import gql from "graphql-tag";

const OWNER_REPOSITORY = gql`
query getOwner ($login: String!) {
   user(login: $login ){
    avatarUrl
    email
    isDeveloperProgramMember
    location
    isHireable
    name
  }
}
`;

export {OWNER_REPOSITORY }