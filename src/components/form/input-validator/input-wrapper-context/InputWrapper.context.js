import { createContext, useContext } from "react";

export const InputWrapperContext = createContext({
  // TODO: add default props
});

export const useInputWrapperContext = () => useContext(InputWrapperContext);
