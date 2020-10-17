import React, { useEffect, useState } from "react";
import Command, { createCommand } from "./src/command";
import useCommand from "./src";
import { usePromise } from "../../hooks/use-promise";

// function Command(worker) {
//   function execute(state){
//     return worker(state)
//   }
// }

const add = (num) => {
  return new Command((componentState) => {
    return { ...componentState, value: componentState.value + num };
  });
};

const sleep = (time) => new Promise((res) => setTimeout(res, time));

const asyncAddCommand = createCommand(async (state, number) => ({
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
      </div>
    </div>
  );
};

export default Commando;
