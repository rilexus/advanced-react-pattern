import React, {useCallback, useReducer} from 'react';
import {any} from "prop-types";

const ActionTypes = {
	callAPI: '[CALL-API]GOT-DATA'
}


// move this function to a different file
function callAPI(dispatch) {
	// simulate async call

	setTimeout(() => {
		// pass data from API call
		const data = "Got async data!";
		dispatch({type: ActionTypes.callAPI, payload: {data}})
		
	},1000)

}

function fetchUser(id) {
	return (dispatch) => {
		// fetch here
		dispatch({type: 'user-fetched'})
	}
}

function reducer (state, action) {
	console.log('reducer action: ', action);
	const {type, payload} = action;
	if (type === ActionTypes.callAPI){
		return  {
			...state,
			...payload
		}
	}
	return state
}
type Action = { type: string }
type Dispatcher = (action: Action) => void
type ThunkAction = Action | ((dispatcher: Dispatcher) => void)

type Reducer<State,Action = any> = (state: State, action: Action) => State
type ThunkDispatcher = (action: ThunkAction) => void

// type the reducer function
function useThunkReducer<State>(reducer: Reducer<State, ThunkAction>, initialState: State): [State, ThunkDispatcher] {
	const [state, dispatch] = useReducer(reducer, initialState);

	const thunkDispatch = (action) => {
		if (typeof action === 'function') {
			action(dispatch);
		} else {
			dispatch(action);
		}
	};

	return [state, thunkDispatch]
}


const ThunkReducerPattern = () => {
	const [state, thunkDispatch] = useThunkReducer(reducer, {data: null});
	
	return (
		<div>
			<div>
				{state.data}
			</div>
			<button onClick={()=>thunkDispatch(callAPI)}>FETCH</button>
			<button onClick={()=>thunkDispatch(fetchUser('userId'))}>FETCH</button>
		</div>
	);
};

export default ThunkReducerPattern;
