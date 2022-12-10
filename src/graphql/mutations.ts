/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessages = /* GraphQL */ `
  mutation CreateMessages(
    $input: CreateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    createMessages(input: $input, condition: $condition) {
      id
      message
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages(
    $input: UpdateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    updateMessages(input: $input, condition: $condition) {
      id
      message
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages(
    $input: DeleteMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    deleteMessages(input: $input, condition: $condition) {
      id
      message
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFavoriteMovie = /* GraphQL */ `
  mutation CreateFavoriteMovie(
    $input: CreateFavoriteMovieInput!
    $condition: ModelFavoriteMovieConditionInput
  ) {
    createFavoriteMovie(input: $input, condition: $condition) {
      id
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFavoriteMovie = /* GraphQL */ `
  mutation UpdateFavoriteMovie(
    $input: UpdateFavoriteMovieInput!
    $condition: ModelFavoriteMovieConditionInput
  ) {
    updateFavoriteMovie(input: $input, condition: $condition) {
      id
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFavoriteMovie = /* GraphQL */ `
  mutation DeleteFavoriteMovie(
    $input: DeleteFavoriteMovieInput!
    $condition: ModelFavoriteMovieConditionInput
  ) {
    deleteFavoriteMovie(input: $input, condition: $condition) {
      id
      movieID
      createdAt
      updatedAt
      owner
    }
  }
`;
