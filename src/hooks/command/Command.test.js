import Command from "./Command";

describe("Command", function () {
  it('should have an "expect" function', function () {
    const command = new Command(() => {});
    expect(typeof command.execute).toBe("function");
  });

  describe("execute", function () {
    it("should pass arguments to the callback passed to the constructor", function () {
      const fn = jest.fn();
      const command = new Command(fn);
      command.execute(1, 2, 3);
      expect(fn).toBeCalledWith(1, 2, 3);
    });

    it("should return value returned from the callback passed to the constructor", function () {
      const command = new Command((value) => value + 1);
      expect(command.execute(42)).toBe(43);
    });
  });
});
