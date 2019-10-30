import { gql } from "apollo-boost";

const REPO_QUERY = gql`
  query Myrepositories($last: Int!) {
    viewer {
      repositories(last: $last) {
        edges {
          node {
            id
            name
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;

const USER_QUERY = gql`
  {
    viewer {
      name
      email
    }
  }
`;

export { REPO_QUERY, USER_QUERY };
