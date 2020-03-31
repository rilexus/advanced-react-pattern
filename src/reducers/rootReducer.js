
// move to own file
export const RootReducerActionTypes = {
  defaultAction: '[ROOT_REDUCER]DEFAULT_ACTION',
  setName: '[ROOT_REDUCER]SET_NAME'
}

// move this function to own file
function reducerDefaultAction(state, defaultAction) {
  // do something with the action, reduce to state
  return {...state} // return
}

function reducerUserName(state, action) {

  const {name} = action.payload
  return {
    ...state,
    user: {
      ...state.user,
      name
    }
  }
}

const initState = {
  user: {
    name: 'stan'
  }
}

export function rootReducer (state = initState, action) {
  const {type} = action

  switch (type) {
    case RootReducerActionTypes.defaultAction:{
      // do something with the action
      return reducerDefaultAction(state, action) // reducer to state
    }
    case RootReducerActionTypes.setName: {
      return reducerUserName(state, action)
    }
    // other cases here
    default: return state
  }
}