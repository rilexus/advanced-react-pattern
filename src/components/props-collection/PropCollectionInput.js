import React, {useCallback, useMemo, useState} from 'react';

const PropCollectionInput = ({children}) => {

	
	const [value , _setValue ] = useState('');
	const [isDirty , setDirty ] = useState(false);
	const [touched , setTouched ] = useState(false);
	
	
	
	const setValue = useCallback((e) => {
		const {value: _value} = e.target;
		_setValue(() => _value);
		if (!isDirty) setDirty(() => true);
	},[value]);
	
	
	
	const touch = useCallback(()=> {
		if (!touched) setTouched(true)
	},[touched]);
	
	
	
	const getProps = ({onChange, ...rest}) => {

		return {
			...rest,
			value,
			onChange: (e) => {
				onChange && onChange(e);
				setValue(e)
			},
			onClick: touch,
		}
	};

	return children({isDirty, touched, getProps})
};

export default PropCollectionInput;
