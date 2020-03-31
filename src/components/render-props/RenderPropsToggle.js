import React, { useState} from 'react';

const RenderPropsToggle = ({children}) => {
	const [on, setOn] = useState(false);
	const toggle = ()=> setOn((oldOn)=>!oldOn);

	return children({on,toggle});
};

export default RenderPropsToggle;
