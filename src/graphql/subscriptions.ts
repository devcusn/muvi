/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages(
    $filter: ModelSubscriptionMessagesFilterInput
    $owner: String
  ) {
    onCreateMessages(filter: $filter, owner: $owner) {
      id
      message
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMessages = /* GraphQL */ `
  subscription OnUpdateMessages(
    $filter: ModelSubscriptionMessagesFilterInput
    $owner: String
  ) {
    onUpdateMessages(filter: $filter, owner: $owner) {
      id
      message
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMessages = /* GraphQL */ `
  subscription OnDeleteMessages(
    $filter: ModelSubscriptionMessagesFilterInput
    $owner: String
  ) {
    onDeleteMessages(filter: $filter, owner: $owner) {
      id
      message
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFavoriteMovie = /* GraphQL */ `
  subscription OnCreateFavoriteMovie(
    $filter: ModelSubscriptionFavoriteMovieFilterInput
    $owner: String
  ) {
    onCreateFavoriteMovie(filter: $filter, owner: $owner) {
      id
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFavoriteMovie = /* GraphQL */ `
  subscription OnUpdateFavoriteMovie(
    $filter: ModelSubscriptionFavoriteMovieFilterInput
    $owner: String
  ) {
    onUpdateFavoriteMovie(filter: $filter, owner: $owner) {
      id
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFavoriteMovie = /* GraphQL */ `
  subscription OnDeleteFavoriteMovie(
    $filter: ModelSubscriptionFavoriteMovieFilterInput
    $owner: String
  ) {
    onDeleteFavoriteMovie(filter: $filter, owner: $owner) {
      id
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
