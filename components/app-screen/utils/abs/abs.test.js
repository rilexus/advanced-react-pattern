import { abs } from "./abs";

describe("abs", () => {
  it("should return positive number if given a negative number", function () {
    expect(abs(-3)).toBe(3);
  });

  it("should return positive number if given a positive number", function () {
    expect(abs(1)).toBe(1);
  });

  it("should return zero if given zero", function () {
    expect(abs(0)).toBe(0);
  });
});
