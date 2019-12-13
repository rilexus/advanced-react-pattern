import React, {useState} from 'react';
import './App.css';
import InputValidator from "./components/form/input-validator/InputValidator";
import InputController from "./components/form/input-controller/InputController";

// import ThunkReducerPattern from "./components/thunk-reducer/ThunkReducer";
// import AddToState from "./components/add-to-state/AddToState";
// import Toggle from "./components/reducer-hook/Toggle";
// import {MVC} from "./components/mvc/mvc-pattern/MVCPattern";
// import Redux from "./components/redux/redux";
// import {User} from "./components/redux/connected-component";
// import {MVC} from "./components/mvc/mvc-pattern/MVCPattern";
// import Toggle from "./components/reducer-hook/Toggle";
// import Toggle from "./components/state-reducer/Toggle";
// import Toggle from "./components/state-initializers/Toggle";
// import Input from "./components/props-collection/Input";
// import InputHandler from "./components/render-props/Input";
// import Toggle from "./components/render-props/Toggle";
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
      {/*  <Toggle.Button>Toggle</Toggle.Button>*/}
      {/*  <div>*/}
      {/*    Some*/}
      {/*  </div>*/}
      {/*  <Toggle.On>On</Toggle.On>*/}
      {/*  <Toggle.Off>Off</Toggle.Off>*/}
      {/*</Toggle>*/}


      {/*Render Props 1*/}
      {/*<hr/>*/}
      {/*<Toggle>*/}
      {/*  {({on,toggle}) => (*/}
      {/*      <div>*/}
      {/*        <div>{on? 'On': 'Off'}</div>*/}
      {/*        <button onClick={toggle}>Toggle</button>*/}
      {/*      </div>*/}
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
      {/*  {({touched, isDirty, getProps}) => (*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      {...getProps({*/}
      {/*        onChange: (e)=>console.log(e)*/}
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
      {/*<Toggle initOn={false}/>*/}
      
      
      {/*State Reducer*/}
      {/*<Toggle*/}
      {/*    reduceState={handleState}*/}
      {/*/>*/}
      
      {/*Reducer Hook*/}
      {/*<Toggle/>*/}
      
      {/*MVC Pattern*/}
      {/*<MVC/>*/}

      {/*<Redux>*/}
      {/*  <User name={'Stan'}/>*/}
      {/*</Redux>*/}

      {/*MVC Pattern*/}
      {/*<MVC/>*/}
      
      {/*Thunk Dispatch*/}
      {/*<ThunkReducerPattern/>*/}
      
      {/*Add To State*/}
      {/*<AddToState/>*/}

      <InputValidator>
        {({handleInputControllerStateChange})=>(
          <InputController
            valid={false}
            name={'inputName'}
            placeholder={'input'}
            onChange={()=>{
              // console.log('controller changes')
            }}
            className={'myClass'}
            onStateChange={handleInputControllerStateChange}>
            {({bindProps, state})=>(
              <div>
                <div>
                  <InputController.Valid>
                    VALID
                  </InputController.Valid>
                </div>
                <input
                  {...bindProps()}
                />
                <div>
                  <InputController.Invalid>
                    IN-VALID
                  </InputController.Invalid>
                </div>
              </div>
            )}
          </InputController>
        )}
      </InputValidator>
    </div>
  );
}

export default App;
