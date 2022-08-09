import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repository {
    repositories {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query Query {
    me {
      id
      username
    }
  }
`;