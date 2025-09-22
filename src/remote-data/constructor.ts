import { ERROR_TAG, INITIAL_TAG, OK_TAG, PENDING_TAG } from "./tag.js";
import type { Error, Initial, Pending, Ok, RemoteData } from "./type.js";

const INITIAL: Initial = Object.freeze({ tag: INITIAL_TAG });

export const initial = <T, E>(): RemoteData<T, E> => INITIAL;

const PENDING: Pending = Object.freeze({ tag: PENDING_TAG });

export const pending = <T, E>(): RemoteData<T, E> => PENDING;

export const ok = <T, E>(value: T): RemoteData<T, E> =>
  Object.freeze({ tag: OK_TAG, value } satisfies Ok<T>);

export const error = <T, E>(value: E): RemoteData<T, E> =>
  Object.freeze({ tag: ERROR_TAG, value } satisfies Error<E>);
