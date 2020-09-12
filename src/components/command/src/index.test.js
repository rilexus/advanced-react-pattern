import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useCommand from "./index";
import Command from "./command";
import createCommand from "./createCommand";

describe("useCommand", () => {
  it("should return passed state", function () {
    const { result } = renderHook(() => useCommand({ value: 42 }));
    expect(result.current[0]).toStrictEqual({ value: 42 });
  });

  it("should return a function", function () {
    const {
      result: { current: commandValue },
    } = renderHook(() => useCommand({ value: 42 }));
    expect(typeof commandValue[1]).toBe("function");
  });

  it("should return an execute function", function () {
    const {
      result,
      /*
        do not deconstruct "current"!
        see: <https://react-hooks-testing-library.com/usage/basic-hooks#updates> Note

      */
    } = renderHook(({ state }) => useCommand(state), {
      initialProps: {
        state: 1,
      },
    });

    const add = (num) => new Command((state) => state + num);

    act(() => {
      const execute = result.current[1];
      execute(add(1));
    });

    expect(result.current[0]).toBe(2);
  });

  it("should map provided commands in the command object", function () {
    const subOne = createCommand((state) => state - 1);

    const { result } = renderHook(() =>
      useCommand(0, {
        addOne: () => new Command((state) => state + 1),
        subOne: subOne,
      })
    );

    act(() => {
      const addOne = result.current[2].addOne;
      const subOne = result.current[2].subOne;
      addOne();
      subOne();
    });

    expect(result.current[0]).toBe(0);
  });
});
