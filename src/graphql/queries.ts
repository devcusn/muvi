/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!) {
    getMessages(id: $id) {
      id
      message
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        movieID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFavoriteMovie = /* GraphQL */ `
  query GetFavoriteMovie($id: ID!) {
    getFavoriteMovie(id: $id) {
      id
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFavoriteMovies = /* GraphQL */ `
  query ListFavoriteMovies(
    $filter: ModelFavoriteMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movieID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
