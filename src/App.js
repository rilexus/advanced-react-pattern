import React, { createContext, useContext, useEffect, useState } from "react";
import StateInitializerToggle from "./components/state-initializers/StateInitializerToggle";
import StateReducerToggle from "./components/state-reducer/StateReducerToggle";
import AddToState from "./components/add-to-state/AddToState";
import ReducerHookToggle from "./components/reducer-hook/ReducerHookToggle";
import ThunkReducerPattern from "./components/thunk-reducer/ThunkReducer";
import RenderPropsToggle from "./components/render-props/RenderPropsToggle";
import RenderPropsInput from "./components/input-handler/RenderPropsInput";
import PropCollectionInput from "./components/props-collection/PropCollectionInput";
import SimpleContext, {
  SimpleContextConsumer,
} from "./components/simple-context/SimpleContext";
import ContextHooks from "./components/context-hooks/ContextHooks";
import { ContextHookInput } from "./components/context-hooks/Input";
import { CompoundToggle } from "./components/compound-toggle/CompoundToggle";
import { ReduxConnected } from "./components/redux-connected/ReduxConnected";
import { MVC } from "./components/mvc/mvc-pattern/MVCPattern";

// import InputValidator from "./components/form/input-validator/InputValidator";
// import InputController from "./components/form/input-controller/InputController";

import { User } from "./components/redux/connected-component";
import Redux from "./components/redux/redux";

import Test from "./components/test/test";
import Commando from "./components/command/Commando";
import Grid from "./components/grid/Grid";

function debounce(callback, time) {
  let timeoutID = -1;

  // this function will be called, if the delta(t) between executions is >= 350ms
  return function () {
    const functionContext = this;
    const functionArguments = arguments;

    const abortExecution = () => {
      clearTimeout(timeoutID);
    };

    const executeCallback = () => {
      abortExecution();
      callback.apply(functionContext, functionArguments);
    };

    const delayExecution = (duration) => {
      timeoutID = setTimeout(executeCallback, duration);
    };

    abortExecution();
    delayExecution(time);
  };
}

function throttle(callback, time) {
  let canExecute = true;
  return function (/* arguments */) {
    // this function will be called at max. every 1000ms, if called periodically
    const args = arguments;
    const self = this;

    const blockExecution = () => {
      canExecute = false; // block next execution for `${time}ms`
    };

    const releaseExecution = () => {
      console.timeEnd("Throttled for");
      canExecute = true;
    };

    const executeCallback = () => {
      // bind "this" and passed arguments to the callback
      console.time("Throttled for");
      callback.apply(self, args);
    };

    const makeExecutableAfter = (period) => {
      setTimeout(releaseExecution, period);
    };

    if (canExecute) {
      blockExecution();
      executeCallback();
      makeExecutableAfter(time);
    }
  };
}

const debouncedLog = debounce((e) => {
  console.log("debouncedLog");
}, 350);

const throttledLog = throttle(() => {
  console.log("throttledLog");
}, 2000);

function App() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  const handleState = (state, changes) => {
    setCount(count + 1);
    if (count < 5) {
      return { ...state, ...changes };
    }
    return state;
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => throttledLog(e)} />
      {/*State Initializers*/}
      {/*<StateInitializerToggle initialState={true} />*/}

      {/*State Reducer*/}
      {/*<StateReducerToggle reduceState={handleState}/>*/}

      {/*Add To State*/}
      {/*<AddToState/>*/}

      {/*Reducer Hook*/}
      {/*<ReducerHookToggle/>*/}

      {/*Thunk Dispatch*/}
      {/*<ThunkReducerPattern />*/}

      {/*Render Props 1*/}
      {/*<RenderPropsToggle>*/}
      {/*  {({on,toggle}) => (*/}
      {/*    <div>*/}
      {/*      <div>{on? 'On': 'Off'}</div>*/}
      {/*      <button onClick={toggle}>Toggle</button>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</RenderPropsToggle>*/}

      {/*Render Props 2*/}
      {/*<RenderPropsInput>*/}
      {/*  {({ value, setValue }) => (*/}
      {/*    <div>*/}
      {/*      <div>*/}
      {/*        <label htmlFor={'renderinput'}>*/}
      {/*          render props input*/}
      {/*        </label>*/}
      {/*      </div>*/}
      {/*      <input value={value} id={'renderinput'} onChange={(e) => setValue(e)} type="text" placeholder={'Enter a value'}/>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</RenderPropsInput>*/}

      {/*Props Collection*/}
      {/*<PropCollectionInput>*/}
      {/*  {({touched, isDirty, getProps}) => {*/}
      {/*    return (*/}
      {/*      <div>*/}
      {/*        <div>*/}
      {/*          <label htmlFor="prop-collection">Prop Collection</label>*/}
      {/*        </div>*/}
      {/*        <input*/}
      {/*          id={'prop-collection'}*/}
      {/*          type="text"*/}
      {/*          {...getProps({onChange: (e)=>console.log(e)})}*/}
      {/*          style={{*/}
      {/*            outline: 'none',*/}
      {/*            border: touched ? '1px solid red': null*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  }}*/}
      {/*</PropCollectionInput>*/}

      {/*<SimpleContext>*/}
      {/*  <SimpleContextConsumer>*/}
      {/*    {({value, handleChange})=> <input type="text" value={value} onChange={({target:{value}})=>handleChange(value)}/>}*/}
      {/*  </SimpleContextConsumer>*/}
      {/*</SimpleContext>*/}

      {/*<ContextHooks>*/}
      {/*  <ContextHookInput />*/}
      {/*</ContextHooks>*/}

      {/*<CompoundToggle>*/}
      {/*  <div>*/}
      {/*    Some*/}
      {/*  </div>*/}
      {/*  <CompoundToggle.Button>Toggle</CompoundToggle.Button>*/}
      {/*  <CompoundToggle.On>On</CompoundToggle.On>*/}
      {/*  <CompoundToggle.Off>Off</CompoundToggle.Off>*/}
      {/*</CompoundToggle>*/}

      {/*<ReduxConnected/>*/}

      {/*MVC Pattern*/}
      {/*<MVC/>*/}
      <Commando />

      {/*<Redux>*/}
      {/*  <User name={'Stan'}/>*/}
      {/*</Redux>*/}
      <Grid />
    </div>
  );
}

export default App;
