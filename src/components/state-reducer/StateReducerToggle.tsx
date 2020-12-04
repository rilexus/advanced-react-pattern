import React, {useState} from 'react';

interface Props<State, Change> {
	reduceState?: (state: State, change: { on: boolean }) => State
}

const StateReducerToggle = ({reduceState}: Props<{on: boolean}, {on: boolean}>) => {
	const [state, setState] = useState({on: false});

	const setToState = (changes: { on: boolean }) => {
		if (reduceState){
			setState({...reduceState(state, changes)})
		} else {
			setState((state) => ({...state, ...changes}))
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
