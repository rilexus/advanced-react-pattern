import React, {useCallback, useMemo, useState} from 'react';

const Input = ({children}) => {
	const [value , _setValue ] = useState('');
	
	const setValue = useCallback((e) => {
		const {value: _value} = e.target;
		_setValue(() => _value)
	},[value]);
	
	const values = useMemo(()=>({value, setValue}),[value]);
	return children(values)
};

export default Input;
