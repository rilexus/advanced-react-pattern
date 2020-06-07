import React, {useCallback, useReducer} from 'react';

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

function useThunkReducer(reducer, initialState) {
	const [state, dispatch] = useReducer(reducer,initialState);

	const thunkDispatch = (action) => {
		// if action is a function let action(function) call dispatch by itself else dispatch(action)
		if (typeof action === 'function') action(dispatch);
		else dispatch(action);
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
