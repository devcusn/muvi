/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessagesInput = {
  id?: string | null,
  message?: string | null,
  movieID?: string | null,
};

export type ModelMessagesConditionInput = {
  message?: ModelStringInput | null,
  movieID?: ModelStringInput | null,
  and?: Array< ModelMessagesConditionInput | null > | null,
  or?: Array< ModelMessagesConditionInput | null > | null,
  not?: ModelMessagesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Messages = {
  __typename: "Messages",
  id: string,
  message?: string | null,
  movieID?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateMessagesInput = {
  id: string,
  message?: string | null,
  movieID?: string | null,
};

export type DeleteMessagesInput = {
  id: string,
};

export type CreateFavoriteMovieInput = {
  id?: string | null,
  movieID: string,
};

export type ModelFavoriteMovieConditionInput = {
  movieID?: ModelStringInput | null,
  and?: Array< ModelFavoriteMovieConditionInput | null > | null,
  or?: Array< ModelFavoriteMovieConditionInput | null > | null,
  not?: ModelFavoriteMovieConditionInput | null,
};

export type FavoriteMovie = {
  __typename: "FavoriteMovie",
  id: string,
  movieID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFavoriteMovieInput = {
  id: string,
  movieID?: string | null,
};

export type DeleteFavoriteMovieInput = {
  id: string,
};

export type ModelMessagesFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  movieID?: ModelStringInput | null,
  and?: Array< ModelMessagesFilterInput | null > | null,
  or?: Array< ModelMessagesFilterInput | null > | null,
  not?: ModelMessagesFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMessagesConnection = {
  __typename: "ModelMessagesConnection",
  items:  Array<Messages | null >,
  nextToken?: string | null,
};

export type ModelFavoriteMovieFilterInput = {
  id?: ModelIDInput | null,
  movieID?: ModelStringInput | null,
  and?: Array< ModelFavoriteMovieFilterInput | null > | null,
  or?: Array< ModelFavoriteMovieFilterInput | null > | null,
  not?: ModelFavoriteMovieFilterInput | null,
};

export type ModelFavoriteMovieConnection = {
  __typename: "ModelFavoriteMovieConnection",
  items:  Array<FavoriteMovie | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  movieID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFavoriteMovieFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  movieID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFavoriteMovieFilterInput | null > | null,
  or?: Array< ModelSubscriptionFavoriteMovieFilterInput | null > | null,
};

export type CreateMessagesMutationVariables = {
  input: CreateMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type CreateMessagesMutation = {
  createMessages?:  {
    __typename: "Messages",
    id: string,
    message?: string | null,
    movieID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMessagesMutationVariables = {
  input: UpdateMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type UpdateMessagesMutation = {
  updateMessages?:  {
    __typename: "Messages",
    id: string,
    message?: string | null,
    movieID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMessagesMutationVariables = {
  input: DeleteMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type DeleteMessagesMutation = {
  deleteMessages?:  {
    __typename: "Messages",
    id: string,
    message?: string | null,
    movieID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFavoriteMovieMutationVariables = {
  input: CreateFavoriteMovieInput,
  condition?: ModelFavoriteMovieConditionInput | null,
};

export type CreateFavoriteMovieMutation = {
  createFavoriteMovie?:  {
    __typename: "FavoriteMovie",
    id: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFavoriteMovieMutationVariables = {
  input: UpdateFavoriteMovieInput,
  condition?: ModelFavoriteMovieConditionInput | null,
};

export type UpdateFavoriteMovieMutation = {
  updateFavoriteMovie?:  {
    __typename: "FavoriteMovie",
    id: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFavoriteMovieMutationVariables = {
  input: DeleteFavoriteMovieInput,
  condition?: ModelFavoriteMovieConditionInput | null,
};

export type DeleteFavoriteMovieMutation = {
  deleteFavoriteMovie?:  {
    __typename: "FavoriteMovie",
    id: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetMessagesQueryVariables = {
  id: string,
};

export type GetMessagesQuery = {
  getMessages?:  {
    __typename: "Messages",
    id: string,
    message?: string | null,
    movieID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessagesConnection",
    items:  Array< {
      __typename: "Messages",
      id: string,
      message?: string | null,
      movieID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFavoriteMovieQueryVariables = {
  id: string,
};

export type GetFavoriteMovieQuery = {
  getFavoriteMovie?:  {
    __typename: "FavoriteMovie",
    id: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFavoriteMoviesQueryVariables = {
  filter?: ModelFavoriteMovieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoriteMoviesQuery = {
  listFavoriteMovies?:  {
    __typename: "ModelFavoriteMovieConnection",
    items:  Array< {
      __typename: "FavoriteMovie",
      id: string,
      movieID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessagesSubscription = {
  onCreateMessages?:  {
    __typename: "Messages",
    id: string,
    message?: string | null,
    movieID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessagesSubscription = {
  onUpdateMessages?:  {
    __typename: "Messages",
    id: string,
    message?: string | null,
    movieID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessagesSubscription = {
  onDeleteMessages?:  {
    __typename: "Messages",
    id: string,
    message?: string | null,
    movieID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFavoriteMovieSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteMovieFilterInput | null,
  owner?: string | null,
};

export type OnCreateFavoriteMovieSubscription = {
  onCreateFavoriteMovie?:  {
    __typename: "FavoriteMovie",
    id: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFavoriteMovieSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteMovieFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFavoriteMovieSubscription = {
  onUpdateFavoriteMovie?:  {
    __typename: "FavoriteMovie",
    id: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFavoriteMovieSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteMovieFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFavoriteMovieSubscription = {
  onDeleteFavoriteMovie?:  {
    __typename: "FavoriteMovie",
    id: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
