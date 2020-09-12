import { createReducer } from "./createReducer";

describe("createReducer", () => {
  it("should return state if no type in action", function () {
    const reducer = createReducer({
      name: "name",
      initState: {},
      reducers: {},
    });

    expect(
      reducer.reducer({ val: 1 }, { /*type: "ACTION", */ payload: "load" })
    ).toStrictEqual({ val: 1 });
  });

  it("should return an object with reduce function attribute", function () {
    const reducer = createReducer({
      name: "name",
      initState: {},
      reducers: {},
    });

    expect(typeof reducer.reducer).toBe("function");
  });

  it("should call based actions", function () {
    const callback = jest.fn();
    const reducer = createReducer({
      name: "name",
      initState: {},
      reducers: {
        ACTION: callback,
      },
    });
    reducer.reducer({}, { type: "ACTION" });
    expect(callback).toBeCalled();
  });

  it("should call the returned function from the reducer", function () {
    const callback = jest.fn();
    const reducer = createReducer({
      name: "name",
      initState: {},
      reducers: {
        ACTION: () => {
          return callback;
        },
      },
    });
    reducer.reducer({}, { type: "ACTION" });
    expect(callback).toBeCalled();
  });

  it("should call the returned function from the reducer with state and action", function () {
    const callback = jest.fn();
    const reducer = createReducer({
      name: "name",
      initState: "stateValue",
      reducers: {
        ACTION: () => {
          return callback;
        },
      },
    });
    reducer.reducer("stateValue", { type: "ACTION" });
    expect(callback).toBeCalledWith("stateValue", { type: "ACTION" });
  });

  it("should call functions in the returned object", function () {
    const callback = jest.fn();
    const reducer = createReducer({
      name: "name",
      initState: { newValue: 42 },
      reducers: {
        ACTION: () => {
          return {
            newValue: callback,
          };
        },
      },
    });
    reducer.reducer({ newValue: 42 }, { type: "ACTION" });
    expect(callback).toBeCalledWith({ newValue: 42 }, { type: "ACTION" });
  });

  it("should not effect other values in the state", function () {
    const reducer = createReducer({
      name: "name",
      initState: { newValue: 42, otherValue: 1 },
      reducers: {
        ACTION: (state) => {
          return {
            ...state,
            newValue: (state, action) => action.payload,
          };
        },
      },
    });
    const newState = reducer.reducer(
      { newValue: 42, otherValue: 1 },
      { type: "ACTION", payload: 43 }
    );

    expect(newState).toStrictEqual({ newValue: 43, otherValue: 1 });
  });
});
