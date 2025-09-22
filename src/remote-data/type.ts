import type { ERROR_TAG, INITIAL_TAG, OK_TAG, PENDING_TAG } from "./tag.js";

export interface Initial {
  readonly tag: typeof INITIAL_TAG;
}

export interface Pending {
  readonly tag: typeof PENDING_TAG;
}

export interface Ok<T> {
  readonly tag: typeof OK_TAG;
  readonly value: T;
}

export interface Error<E> {
  readonly tag: typeof ERROR_TAG;
  readonly value: E;
}

export type RemoteData<T, E> = Initial | Pending | Ok<T> | Error<E>;
