import React, {useState} from 'react';
import './App.css';


// import InputValidator from "./components/form/input-validator/InputValidator";
// import InputController from "./components/form/input-controller/InputController";



import {User} from "./components/redux/connected-component";
import Redux from "./components/redux/redux";

import { MVC } from "./components/mvc/mvc-pattern/MVCPattern";


import SimpleContext, {SimpleContextConsumer} from "./components/simple-context/SimpleContext";
import ContextHooks from "./components/context-hooks/ContextHooks";
import {ContextHookInput} from "./components/context-hooks/Input";
import ThunkReducerPattern from "./components/thunk-reducer/ThunkReducer";
import ReducerHookToggle from "./components/reducer-hook/ReducerHookToggle";


import StateReducerToggle from "./components/state-reducer/StateReducerToggle";
import StateInitializerToggle from "./components/state-initializers/StateInitializerToggle";
import AddToState from "./components/add-to-state/AddToState";

import RenderPropsInput from "./components/input-handler/RenderPropsInput";
import RenderPropsToggle from "./components/render-props/RenderPropsToggle";
import PropCollectionInput from "./components/props-collection/PropCollectionInput";
import {CompoundToggle} from "./components/compound-toggle/CompoundToggle";
import {ReduxConnected} from "./components/redux-connected/ReduxConnected";



function App() {
  const [count, setCount] = useState(0);


  const handleState = (state, changes) => {
    setCount(count + 1);
    if (count < 5) {
      return {...state, ...changes}
    }
    return state
  }


  return (
    <div className="App">

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
      {/*<hr/>*/}
      {/*<RenderPropsToggle>*/}
      {/*  {({on,toggle}) => (*/}
      {/*    <div>*/}
      {/*      <div>{on? 'On': 'Off'}</div>*/}
      {/*      <button onClick={toggle}>Toggle</button>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</RenderPropsToggle>*/}

      {/*Render Props 2*/}
      {/*<hr/>*/}
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
      {/*<hr/>*/}
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

      <ContextHooks>
        <ContextHookInput />
      </ContextHooks>

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

      {/*<Redux>*/}
      {/*  <User name={'Stan'}/>*/}
      {/*</Redux>*/}

    </div>
  );
}

export default App;
