import React, {useState} from 'react';
import Command from "./src/command";
import useCommand from "./src";



// function Command(worker) {
//   function execute(state){
//     return worker(state)
//   }
// }


const add = (num) =>  {
  return new Command((componentState) => {
    return {...componentState, value: componentState.value + num}
  })
}

// const sub = (num) =>  {
//   return new Command((componentState) => {
//     return {...componentState, value: componentState.value - 1}
//   })
// }

const createCommand = (worker) => {
  return (...args/* action */) => {
    return new Command((state) => worker(state, ...args))
  }
}

const sub = createCommand/*(createReducer)*/(/* reducer function */ (state, number/* action */) => {
  return {...state, value: state.value - number}
})

const commandMap = {subtractValue: sub}

const Commando = () => {
  const [state, execute, { subtractValue }] = useCommand({value: 1}, /* reducer map */ commandMap)

  return (
    <div>
      <div>{state.value}</div>
      <div>
        <button value={3} onClick={() => execute(add(1))}>Add</button>
        <button onClick={() => subtractValue(1)}>Sub</button>
      </div>
    </div>
  );
};

export default Commando;