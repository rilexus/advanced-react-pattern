export function createReducer({name, initState, reducers}) {
  const reducer = function (state = initState, action) {
    const {type} = action;
    if (type in reducers) {
      const actionReducer = reducers[type];
      return actionReducer(state, action);
    }
    return state
  }

  return {
    reducer
  }
}