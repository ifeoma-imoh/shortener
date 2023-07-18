import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerURL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<URL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly long?: string | null;
  readonly short?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyURL = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<URL, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly long?: string | null;
  readonly short?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type URL = LazyLoading extends LazyLoadingDisabled ? EagerURL : LazyURL

export declare const URL: (new (init: ModelInit<URL>) => URL) & {
  copyOf(source: URL, mutator: (draft: MutableModel<URL>) => MutableModel<URL> | void): URL;
}