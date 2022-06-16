import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

const ContextHooksProvider = Context.Provider;
ContextHooksProvider.displayName = "ContextHooksProvider"; // add displayName for react dev tools

// export const ContextHooksProviderConsumer = Context.Consumer; // no need for consumer, if useSimpleContext is used

export function useSimpleContext() {
  return useContext(Context);
}

function ContextHooks({ children }) {
  const [value, setValue] = useState("default context hook value");

  const handleChange = (value) => setValue(value);

  return (
    <ContextHooksProvider value={{ value, handleChange }}>
      {children}
    </ContextHooksProvider>
  );
}

export default ContextHooks;
