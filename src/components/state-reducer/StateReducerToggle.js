import React, {useState} from 'react';


const StateReducerToggle = ({reduceState}) => {
	const [state, setState] = useState({on: false});

	const setToState = (changes) => {
		if (reduceState){
			setState({...reduceState(state, changes)})
		} else {
			setState({...state, ...changes})
		}
	};

	const handleClick = () => setToState({on: !state.on});
	
	return (
		<div>
			{state.on? 'On': 'Off'}
			<br/>
			<button onClick={handleClick}>Click</button>
		</div>
	);
};

export default StateReducerToggle;
