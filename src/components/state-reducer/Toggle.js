import React, {useState} from 'react';

const Toggle = ({reduceState}) => {
	const [state, setState] = useState({on: false});
	
	const setToState = (changes) => {
		if (reduceState){
			const newState = reduceState(state, changes);
			setState({...newState})
		} else {
			setState({...state, ...changes})
		}
	};
	
	const handleClick = () => {
		setToState({on: !state.on})
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
