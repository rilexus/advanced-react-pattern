import React, {useState} from 'react';

const Toggle = ({initOn}) => {
	const defaultState = {on: false};
	
	const [on, setOn] = useState(() => initOn || defaultState.on);
	
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

export default Toggle;
