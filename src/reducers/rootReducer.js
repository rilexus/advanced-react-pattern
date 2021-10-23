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


const undoable = (reducer) => {
  const initState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }
  return (state = initState, action) => {
    const {past, present, future} = state
    
    switch (action.type) {
      case 'UNDO':{
        if (past.length === 0){
          return state
        }
        
        const newPresent = past[past.length - 1]
        const newPast = past.slice(0, past.length -1)
        
        return {
          present: newPresent,
          past: newPast,
          future:[present, ...future]
        }
      }
      case 'REDO': {
        if (future.length === 0){
          return state
        }
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      }
      default:{
        const newPresent = reducer(present, action)
        
        if (present === newPresent){
          return state
        }
        
        return {
          present: newPresent,
          past: past.length > 5 ? [...past.slice(-4), present]:[...past, present],
          future:[]
        }
      }
    }
    
    
  }
}

const rootReducer = createReducer({
  initState: userState,
  reducers: {
    [RootReducerActionTypes.defaultAction]: (state, action) =>
      reducerDefaultAction(state, action),
    [RootReducerActionTypes.setName]: reducerUserName,
    USER_FETCH_SUCCEEDED: (state, action) => {
      console.log(action)
      return state
    }
  },
});

export {undoable, rootReducer}
