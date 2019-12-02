import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const ToggleContext = createContext({});

function useToggleContext () {
	const context = useContext(ToggleContext);
	return context
}

export function Toggle ({children}) {
	const [on, setOn] = useState(false);
	
	// const toggle = () => setOn(!on); // simple
	// const toggle = () => setOn(prevOn => !prevOn); // callback
	const toggle = useCallback(() => setOn(prevOn => !prevOn),[]); // save the ref
	
	// const contextValue = {toggle, on};
	const contextValue = useMemo(()=>({toggle, on}),[on]);
	
	return (
		<ToggleContext.Provider value={contextValue}>
			{children}
		</ToggleContext.Provider>
	);
}

function On(){
	const {on} = useToggleContext();
	
	return on ? <div>ON</div> : null
}

function Off(){
	const {on} = useToggleContext();
	
	return on ?  null: <div>Off</div>
}

function Button(){
	const {toggle} = useToggleContext();
	return <button onClick={toggle}>Toggle</button>
}

Toggle.On = On; // may be by it self, just nice to have
Toggle.Off = Off;
Toggle.Button = Button;


