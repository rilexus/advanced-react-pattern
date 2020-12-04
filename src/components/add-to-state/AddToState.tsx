import React, { useState } from 'react';

type Tuple<A,B> = [A,B]
type Return<State> = Tuple<State, (change: Partial<State>) => void>

function useSpreedToState<State>(initialState: State): Return<State> {
	const [state, _setState] = useState<State>(initialState);
	
	const setState = (change: Partial<State>) => {
		_setState({...state, ...change});
	};
	
	return [state, setState]
	
}


enum FieldNames {
	name = 'name',
	surname =  'surname',
}

type DefaultStateType = {
	[FieldNames.name]: string,
	[FieldNames.surname]: string
}

const defaultState: DefaultStateType = {
	[FieldNames.name]: '',
	[FieldNames.surname]: ''
};

export const AddToState = () => {
	const [state, spreedToState] = useSpreedToState<DefaultStateType>(defaultState);
	
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

