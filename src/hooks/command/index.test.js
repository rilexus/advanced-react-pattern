import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useCommand from "./index";
import Command, { createCommand } from "./Command";

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
});
