import React, {useState} from 'react';

const defaultState = {on: false};

const StateInitializerToggle = ({initialState}) => {
	const [on, setOn] = useState(() => initialState || defaultState.on);
	
	return (
		<div>
			{on ? 'On' : 'Off'}
			<br/>
			<button onClick={()=>setOn(!on)}>Toggle</button>
			<br/>
			<button onClick={()=> setOn(defaultState.on)}>Reset</button>
		</div>
	);
};

export default StateInitializerToggle;
