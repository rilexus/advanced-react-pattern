import React, {useReducer} from 'react';


type ToggleOffAction = { type: 'toggle-of' }
type ToggleOnAction = { type: 'toggle-on' }
type ToggleActions =
	| ToggleOffAction
	| ToggleOnAction;


interface State {
	on: boolean
}


function reducer(state:State, action: ToggleActions): State {
	const {type} = action;
	if (type === 'toggle-of') {
		return {...state, on: false}
	}
	if (type === 'toggle-on') {
		return {...state, on: true}
	}
	return state
}

const toggelOfActionCreator = (): ToggleActions => {
	return {type: 'toggle-of'}
};

function ReducerHookToggle() {
	const [state, dispatch] = useReducer(reducer, {on: false});
	
	const handleClick = () => {
		const {on} = state;

		if (on) {
			dispatch(toggelOfActionCreator());
		}
		else {
			dispatch({type: 'toggle-on'});
		}
	};
	
	return (
		<div>
			{state.on? 'On': 'Off'}
			<br/>
			<button onClick={handleClick}>Click</button>
		</div>
	
	);
};

export default ReducerHookToggle;
