import React, {useState} from 'react';
import './App.css';
// import ThunkReducerPattern from "./components/thunk-reducer/ThunkReducer";
// import AddToState from "./components/add-to-state/AddToState";
// import Toggle from "./components/reducer-hook/Toggle";
// import {MVC} from "./components/mvc/mvc-pattern/MVCPattern";
// import Toggle from "./components/state-reducer/Toggle";
// import Toggle from "./components/state-initializers/Toggle";
// import Toggle from "./components/render-props/Toggle";
// import InputHandler from "./components/render-props/Input";
// import Input from "./components/props-collection/Input";
// import {Toggle} from "./components/compound-toggle/Toggle";

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
      {/*<Toggle>*/}
      {/*  <Toggle.On/>*/}
      {/*  <Toggle.Off/>*/}
      {/*  <Toggle.Button/>*/}
      {/*</Toggle>*/}
      
      {/*Render Props 1*/}
      {/*<hr/>*/}
      {/*<Toggle>*/}
      {/*  {({on,toggle}) => (*/}
      {/*    <div>*/}
      {/*      <div>{on? 'On': 'Off'}</div>*/}
      {/*      <button onClick={toggle}>Toggle</button>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</Toggle>*/}
      
      
      {/*Render Props 2*/}
      {/*<hr/>*/}
      {/*<InputHandler>*/}
      {/*  {({value, setValue})=>(*/}
      {/*    <input value={value} onChange={(e)=> setValue(e)} type="text"/>*/}
      {/*  )}*/}
      {/*</InputHandler>*/}
      
      {/*Props Collection*/}
      {/*<hr/>*/}
      {/*<Input>*/}
      {/*  {({touched, isDirty,getProps}) => (*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      {...getProps({*/}
      {/*        onChange: console.log*/}
      {/*      })}*/}
      {/*      style={{*/}
      {/*        outline: 'none',*/}
      {/*        border: isDirty ? '1px solid red': null*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</Input>*/}
      
      {/*State Initializers*/}
      {/*<hr/>*/}
      {/*<Toggle initOn={true}/>*/}
      
      
      {/*State Reducer*/}
      {/*<Toggle reduceState={handleState}/>*/}
      
      {/*Reducer Hook*/}
      {/*<Toggle/>*/}
      
      {/*MVC Pattern*/}
      {/*<MVC/>*/}
      
      {/*Thunk Dispatch*/}
      {/*<ThunkReducerPattern/>*/}
      
      {/*Add To State*/}
      {/*<AddToState/>*/}
    </div>
  );
}

export default App;
