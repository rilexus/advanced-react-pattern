import React, {useState} from 'react';

const bind = (o, func) => {
  return Object.entries(o).reduce((acc, [name, worker]) => {

    if (typeof worker === "function"){
      return {
        ...acc,
        [name]: (...args) => func(worker(...args))
      }
    }
    return acc
  }, {})
}

const useCommando = (initialState, commands = {}) => {
  const [ state, setState ] = useState(() => initialState)

  const execute = (command) => {
    setState(prevState => command.execute(prevState))
  }

  const bindCommands = bind(commands, execute)

  return [state, execute, bindCommands]
}

function Command(worker) {
  function execute(state){
    return worker(state)
  }
  return {
    execute
  }
}

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

const Commando = () => {
  const [state, execute, { subtractValue }] = useCommando({value: 1}, /* reducer map */ {subtractValue: sub})

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