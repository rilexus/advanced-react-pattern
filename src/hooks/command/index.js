import { useCallback, useState } from "react";

const isPromise = (command) => typeof command.then === "function";
const isThunk = (command) => typeof command === "function";

/*
* Usage:
* const simpleAddCommand = createCommand((state, number) => ({
  ...state,
  value: state.value + number,
}));

const addThunk = (num) => {
  return (execute) => execute(add(num));
};

const Commando = () => {
  const [state, execute] = useCommand({ value: 1 });
  return (
    <div>
      <div>{state.value}</div>
      <div>
        <button onClick={() => execute(simpleAddCommand(1))}>
          Add one (1)
        </button>
      </div>
    </div>
  );
};
* */
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
