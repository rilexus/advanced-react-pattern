import { deltaFriction } from "./delta-friction";

describe("delta-friction", () => {
  it("should return 0 if value is equal min", function () {
    expect(deltaFriction(1, 1, 10)).toBe(0);
  });

  it("should return 0 if value is smaller min", function () {
    expect(deltaFriction(2, 1, 10)).toBe(0);
  });

  it("should return 0.5 if value is delta/2", function () {
    expect(deltaFriction(0, 5, 10)).toBe(0.5);
  });

  it("should return 1 if value is equal max", function () {
    expect(deltaFriction(0, 10, 10)).toBe(1);
  });

  it("should return 1 if value is bigger max", function () {
    expect(deltaFriction(0, 11, 10)).toBe(1);
  });
});
