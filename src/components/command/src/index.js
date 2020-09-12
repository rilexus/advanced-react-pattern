import { useCallback, useMemo, useState } from "react";

const bind = (o, func) => {
  return Object.entries(o).reduce((acc, [name, worker]) => {
    if (typeof worker === "function") {
      return {
        ...acc,
        [name]: (...args) => func(worker(...args)),
      };
    }
    return acc;
  }, {});
};

const useCommand = (initialState, commands = {}) => {
  const [state, setState] = useState(() => initialState);

  const execute = useCallback(
    (command) => setState((prevState) => command.execute(prevState)),
    [setState]
  );

  const bindCommands = useMemo(() => bind(commands, execute), [
    commands,
    execute,
  ]);

  return [state, execute, bindCommands];
};

export default useCommand;
