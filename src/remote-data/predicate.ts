import { ERROR_TAG, INITIAL_TAG, OK_TAG, PENDING_TAG } from "./tag.js";
import type { Error, Initial, Pending, RemoteData, Ok } from "./type.js";

export const isInitial = <T, E>(
  remoteData: RemoteData<T, E>
): remoteData is Initial => remoteData.tag === INITIAL_TAG;

export const isPending = <T, E>(
  remoteData: RemoteData<T, E>
): remoteData is Pending => remoteData.tag === PENDING_TAG;

export const isOk = <T, E>(remoteData: RemoteData<T, E>): remoteData is Ok<T> =>
  remoteData.tag === OK_TAG;

export const isError = <T, E>(
  remoteData: RemoteData<T, E>
): remoteData is Error<E> => remoteData.tag === ERROR_TAG;
