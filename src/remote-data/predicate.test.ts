import { error, initial, pending, ok } from "./constructor.js";
import { isError, isInitial, isPending, isOk } from "./predicate.js";

describe("predicate", () => {
  it("isInitial", () => {
    expect(isInitial(initial())).toBeTruthy();
  });

  it("isPending", () => {
    expect(isPending(pending())).toBeTruthy();
  });

  it("isOk", () => {
    expect(isOk(ok(1))).toBeTruthy();
  });

  it("isError", () => {
    expect(isError(error(1))).toBeTruthy();
  });
});
