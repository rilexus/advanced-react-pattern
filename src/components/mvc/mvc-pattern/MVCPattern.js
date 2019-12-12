import React, {
	createContext,
	useRef,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react';

const ModelContext = createContext({});
const ModelContextProvider = ModelContext.Provider;
const useModelContext = () => useContext(ModelContext);

const ControllerContext = createContext({});
const ControllerContextProvider = ControllerContext.Provider;
const useControllerContext = () => useContext(ControllerContext);

const useContext_ = () => {
	return [useControllerContext(),useModelContext()]
};


const Model = ({children}) => {
	const [counter, _setCounter] = useState(0);
	const setCounter = useCallback((number)=> _setCounter(number),[counter]);
	const values = useMemo(()=>({counter, setCounter}), [counter]);
	
	return (
		<ModelContextProvider value={values}>
			{children}
		</ModelContextProvider>
	);
};

const Controller = ({children}) => {
	const {counter, setCounter: _setCounter} = useModelContext();

	const increment = useCallback(() => _setCounter(counter + 1), [counter]);
	const decrement = useCallback(() => _setCounter(counter - 1), [counter]);
	const reset = useCallback(() => _setCounter(0), [counter]);
	
	const setCounter = useCallback((number)=> {
		if (!number) _setCounter(0);
		else if (typeof number === 'string') _setCounter(parseInt(number,10))
		else _setCounter(number);
	},[counter])
	
	const values = useMemo(()=>({
		setCounter,
		counter,
		increment,
		decrement,
		reset
	}),[counter]);
	
	return (
		<ControllerContextProvider value={values}>
			{children}
		</ControllerContextProvider>
	);
};

const StyledInput = ({value, onChange}) => {

	return (
		<input
			value={value}
			style={{
				padding: '5px',
				borderRadius: '5px'
			}}
			onChange={
				({target:{value}}) => onChange(value)
			}
			type="number"/>
	)
}

const StyledCounter = ({value}) => {
	return <div style={{fontSize: '3rem', fontWeight: 700}}>{value}</div>
};

const View = ({getSome, data}) => {
	const {counter, decrement, increment, reset, setCounter } = useControllerContext();
	
	return (
		<div>
			<StyledCounter value={counter}/>
			<button onClick={decrement}>-</button>
			<button onClick={reset}>reset</button>
			<button onClick={increment}>+</button>
			<br/>
			<StyledInput value={counter} onChange={setCounter}/>
		</div>
	);
};

export const MVC = () => {
	return (
		<Model>
			<Controller>
				<View data={[]}/>
			</Controller>
		</Model>
	)
}
