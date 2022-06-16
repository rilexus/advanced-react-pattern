import { interpolation } from "./interpolate";

describe("interpolate", () => {
  it("should return min if value is equal to 0", function () {
    expect(interpolation(1, 10, 0)).toBe(1);
  });

  it("should return max if value is 1", function () {
    expect(interpolation(0, 10, 1)).toBe(10);
  });

  it("should return (max-min)/2 if value is 0.5", function () {
    expect(interpolation(0, 10, 0.5)).toBe(5);
  });
});
