import { useCallback, useState } from "react";

const isPromise = (command) => typeof command.then === "function";
const isThunk = (command) => typeof command === "function";

const useCommand = (initialState) => {
  const [state, setState] = useState(() => initialState);

  const execute = useCallback(
    (command) => {
      if (isThunk(command)) {
        command(execute);
        return;
      }
      const stateOrPromise = command.execute(state);

      if (isPromise(stateOrPromise)) {
        stateOrPromise.then(setState);
      } else {
        setState(stateOrPromise);
      }
    },
    [setState, state]
  );

  return [state, execute];
};

export default useCommand;
