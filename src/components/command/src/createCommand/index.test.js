import createCommand from "./index";
import Command from "../command";

describe('createCommand', function () {
  it('should return a function', function () {
    const command = createCommand(() => {})
    expect(typeof command).toBe('function')
  });

  it('should return a callback which returns an instance on Command', function () {
    const command = createCommand(() => {})
    expect(command() instanceof Command).toBe(true)
  });

  it('should pass arguments to the worker function', function () {
    const fn = jest.fn()
    const command = createCommand(fn)
    command(1,2,3).execute(4,5,6)
    expect(fn).toBeCalledWith(4, 5, 6, 1, 2, 3)
  });
})