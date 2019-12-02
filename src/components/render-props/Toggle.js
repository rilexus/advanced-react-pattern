import React, {useCallback, useMemo, useState} from 'react';

const Toggle = ({children}) => {
	const [on, setOn] = useState(false);
	
	const toggle = useCallback(()=> setOn((oldOn)=>!oldOn),[]);
	
	const values = useMemo(()=>({on,toggle}),[on]);
	
	return children(values);
};

export default Toggle;
