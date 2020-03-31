import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

export const ToggleContext = createContext({});

export function useToggleContext () {
	const context = useContext(ToggleContext);
	if (!context){
		throw new Error('Some')
	}
	return context
}

export function CompoundToggle ({children, initValue}) {
	const [on, setOn] = useState(() => initValue || false);
	
	// const toggle = () => setOn(!on); // simple
	// const toggle = () => setOn(prevOn => !prevOn); // callback
	const toggle = () => setOn(prevOn => !prevOn); // save the ref
	
	// const contextValue = {toggle, on};
	// const contextValue = useMemo(()=>({toggle, on}),[on]);

	return (
		<ToggleContext.Provider value={{toggle, on}}>
			{children}
		</ToggleContext.Provider>
	);
}

function On({children}){
	const {on} = useToggleContext();
	
	return on ? <div>{children}</div> : null
}

function Off({children}){
	const {on} = useToggleContext();
	
	return on ?  null: <div>{children}</div>
}

function Button({children}){
	const {toggle} = useToggleContext();
	return <button data-testid={"toggle.button"} onClick={toggle}>{children}</button>
}

CompoundToggle.On = On; // may be by it self, just nice to have
CompoundToggle.Off = Off;
CompoundToggle.Button = Button;


