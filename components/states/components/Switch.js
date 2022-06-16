import React, { createContext, useContext } from "react";

const SwitchContext = createContext();
const useSwitchContext = () => useContext(SwitchContext);

const Switch = ({ value, children }) => {
  return (
    <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>
  );
};

const Case = ({ value, children }) => {
  const context = useSwitchContext();

  return context === value ? children : null;
};

Switch.Case = Case;

export { Switch };
