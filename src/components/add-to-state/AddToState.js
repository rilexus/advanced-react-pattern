import React, {useCallback, useState} from 'react';

function useSpreedToState(initialState = {}) {
	const [state, _setState] = useState(initialState);
	
	const setState = useCallback((changes) => {
		_setState({...state, ...changes});
	}, [state,_setState]);
	
	return [state, setState]
	
}


const FieldNames = {
	name: 'name',
	surname: 'surname'
}

const defaultState = {
	[FieldNames.name]: '',
	[FieldNames.surname]: ''
};

const AddToState = () => {
	const [state, spreedToState] = useSpreedToState(defaultState);
	
	const handleChange = useCallback((changeEvent) => {
		const {name, value}= changeEvent.target;
		spreedToState({[name]: value});
	}, [spreedToState])
	
	const reset = () => {
		spreedToState(defaultState)
	};
	
	return (
		<div>
			<div>
				<input
					type="text"
					name={FieldNames.name}
					value={state[FieldNames.name]}
					onChange={handleChange}
					placeholder={FieldNames.name}
				/>
			</div>
			<div>
				<input
					type="text"
					name={FieldNames.surname}
					value={state[FieldNames.surname]}
					onChange={handleChange}
					placeholder={FieldNames.surname}
				/>
			</div>
			<div>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
};

export default AddToState;
