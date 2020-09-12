import { createReducer } from "./createReducer";

export const RootReducerActionTypes = {
  defaultAction: "[ROOT_REDUCER]DEFAULT_ACTION",
  setName: "[ROOT_REDUCER]SET_NAME",
};

// move this function to own file
function reducerDefaultAction(state, defaultAction) {
  // do something with the action, reduce to state
  return { ...state }; // return
}

function reducerUserName(userState, action) {
  const { name } = action.payload;
  return {
    ...userState,
    name,
  };
}

const userState = {
  name: "stan",
};

export const rootReducer = createReducer({
  initState: userState,
  reducers: {
    [RootReducerActionTypes.defaultAction]: (state, action) =>
      reducerDefaultAction(state, action),
    [RootReducerActionTypes.setName]: reducerUserName,
  },
});
