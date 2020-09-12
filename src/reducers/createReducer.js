export function createReducer({ name, initState, reducers }) {
  const reducer = function (state = initState, action) {
    const callFunctionsInObject = (obj) => {
      return Object.entries(obj).reduce((acc, [name, valueOrFunction]) => {
        return {
          ...acc,
          [name]:
            typeof valueOrFunction === "function"
              ? valueOrFunction(state, action)
              : valueOrFunction,
        };
      }, {});
    };

    const { type: actionType } = action;
    if (!actionType) {
      console.warn("No type defined in the action.");
      return state;
    }
    if (actionType in reducers) {
      const actionReducer = reducers[actionType];
      const reducedState = actionReducer(state, action);

      if (typeof reducedState === "function") {
        return reducedState(state, action);
      } else if (
        typeof reducedState === "object" &&
        !Array.isArray(reducedState)
      ) {
        return callFunctionsInObject(reducedState);
      }

      return reducedState;
    }
    return state;
  };

  return {
    name,
    reducer,
  };
}
