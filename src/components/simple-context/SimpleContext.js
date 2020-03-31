import React, {createContext, useState} from 'react';

const Context = createContext({});

const SimpleContextProvider = Context.Provider;
SimpleContextProvider.displayName = 'SimpleContextProvider'; // add displayName for react dev tools

export const SimpleContextConsumer = Context.Consumer;




const SimpleContext = ({children}) => {
  const [value, setValue] = useState('default value')

  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <Context.Provider value={{value, handleChange}}>
      {children}
    </Context.Provider>
  );
};

export default SimpleContext;