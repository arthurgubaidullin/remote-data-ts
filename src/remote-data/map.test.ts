import { pipe } from "@arthurgubaidullin/pipe-ts";
import { error, initial, ok, pending } from "./constructor.js";
import { map, mapError } from "./map.js";

const add1 = (value: number): number => value + 1;

describe("map", () => {
  it("map", () => {
    expect(pipe(initial<number, unknown>(), map(add1))).toEqual(initial());
    expect(pipe(pending<number, unknown>(), map(add1))).toEqual(pending());
    expect(pipe(ok(1), map(add1))).toEqual(ok(2));
    expect(pipe(ok(1), map(add1), map(add1))).toEqual(ok(3));
    expect(pipe(error<number, unknown>(1), map(add1))).toEqual(error(1));
  });

  it("mapFailure", () => {
    expect(pipe(initial<unknown, number>(), mapError(add1))).toEqual(initial());
    expect(pipe(pending<unknown, number>(), mapError(add1))).toEqual(pending());
    expect(pipe(ok<unknown, number>(1), mapError(add1))).toEqual(ok(1));
    expect(pipe(error(1), mapError(add1))).toEqual(error(2));
    expect(pipe(error(1), mapError(add1), mapError(add1))).toEqual(error(3));
  });
});
