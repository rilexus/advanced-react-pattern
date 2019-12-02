import React, {useReducer} from 'react';


function reducer(state, action) {
	const {type} = action;
	if (type === 'toggle-of') return {...state, on: false};
	if (type === 'toggle-on') return {...state, on: true};
	return state
}

const Toggle = () => {
	const [state, dispatch] = useReducer(reducer, {on: false});
	
	const handleClick = () => {
		const {on} = state;
		if (on) dispatch({type: 'toggle-of'});
		else dispatch({type: 'toggle-on'});
	};
	
	return (
		<div>
			{state.on? 'On': 'Off'}
			<br/>
			<button onClick={handleClick}>Click</button>
		</div>
	
	);
};

export default Toggle;
