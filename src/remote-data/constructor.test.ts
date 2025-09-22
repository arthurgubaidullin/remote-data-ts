import { error, initial, pending, ok } from "./constructor.js";

describe("constructor", () => {
  it("initial", () => {
    expect(initial()).toEqual(initial());
  });

  it("pending", () => {
    expect(pending()).toEqual(pending());
  });

  it("ok", () => {
    expect(ok(1)).toEqual(ok(1));
  });

  it("error", () => {
    expect(error(1)).toEqual(error(1));
  });
});
