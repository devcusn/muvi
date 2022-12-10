import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly movieID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly movieID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Messages = LazyLoading extends LazyLoadingDisabled ? EagerMessages : LazyMessages

export declare const Messages: (new (init: ModelInit<Messages>) => Messages) & {
  copyOf(source: Messages, mutator: (draft: MutableModel<Messages>) => MutableModel<Messages> | void): Messages;
}

type EagerFavoriteMovie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteMovie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly movieID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFavoriteMovie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteMovie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly movieID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FavoriteMovie = LazyLoading extends LazyLoadingDisabled ? EagerFavoriteMovie : LazyFavoriteMovie

export declare const FavoriteMovie: (new (init: ModelInit<FavoriteMovie>) => FavoriteMovie) & {
  copyOf(source: FavoriteMovie, mutator: (draft: MutableModel<FavoriteMovie>) => MutableModel<FavoriteMovie> | void): FavoriteMovie;
}