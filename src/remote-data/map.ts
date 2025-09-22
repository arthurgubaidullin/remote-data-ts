import { error, ok } from "./constructor.js";
import { isError, isOk } from "./predicate.js";
import type { RemoteData } from "./type.js";

export const map =
  <T, T2>(f: (value: T) => T2) =>
  <E>(remoteData: RemoteData<T, E>): RemoteData<T2, E> => {
    if (isOk(remoteData)) {
      return ok(f(remoteData.value));
    }
    return remoteData;
  };

export const mapError =
  <E, E2>(f: (value: E) => E2) =>
  <T>(remoteData: RemoteData<T, E>): RemoteData<T, E2> => {
    if (isError(remoteData)) {
      return error(f(remoteData.value));
    }
    return remoteData;
  };
