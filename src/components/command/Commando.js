import React from "react";
import Command, { createCommand } from "../../hooks/command/Command";
import useCommand from "../../hooks/command";

const add = (num) => {
  return new Command((componentState) => {
    return { ...componentState, value: componentState.value + num };
  });
};

const asyncAddCommand = createCommand(async (state, number) => ({
  ...state,
  value: state.value + number,
}));

const simpleAddCommand = createCommand((state, number) => ({
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
        <button onClick={() => execute(asyncAddCommand(1))}>
          Add One (Promise)
        </button>
        <button onClick={() => execute(addThunk(1))}>Add One (Thunk)</button>
        <button onClick={() => execute(simpleAddCommand(1))}>
          Add one (Simple Command)
        </button>
      </div>
    </div>
  );
};

export default Commando;
