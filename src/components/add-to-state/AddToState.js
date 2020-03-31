import React, {useCallback, useState} from 'react';

function useSpreedToState(initialState = {}) {
	const [state, _setState] = useState(initialState);
	
	const setState = (changes) => {
		_setState({...state, ...changes});
	};
	
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
	
	const handleChange = (changeEvent) => {
		const {name, value} = changeEvent.target;
		spreedToState( {[name]: value} );
	}
	
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
