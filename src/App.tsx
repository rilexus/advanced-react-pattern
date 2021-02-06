import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import StateInitializerToggle from "./components/state-initializers/StateInitializerToggle";
import StateReducerToggle from "./components/state-reducer/StateReducerToggle";
import {AddToState} from "./components/add-to-state/AddToState";
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
import ReduxProvider from "./components/redux/reduxProvider";

import Test from "./components/test/test";
import Commando from "./components/command/Commando";
import Grid from "./components/grid/Grid";
import { usePromise } from "./hooks/use-promise";
import States from "./components/states/States";
import AppScreen from "./components/app-screen/AppScreen";
import AdvancedState from "./components/states/AdvancedState";
import {lazy} from "./utils/lazy";
import {fromEvent, map, Observable, tap} from "./utils/Observable";

const Button = lazy(() => import('@stan-ui/buttons'), 'Button')

function interval(time) {
  let id:any = null;
  let count = 0;
  return (obs) => new Observable(({ next, done }) => {
    id = setInterval(() => {
      count = count + time;
      next(count);
    }, time);

    return {
      unsubscribe: () => {
        if (id) {
          clearInterval(id);
          id = null;
        }
      },
    };
  });
}


const obs = interval(1000)


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

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current){
      Observable.pipe(
        fromEvent(ref.current, "click"),
        tap((v) => {
          console.log(v)
        }),
      ).subscribe({
          next: v => {
          }
        })
    }
  } , [ref.current])


  return (
    <div className="App" ref={ref}>
      {/*<button onClick={() => getButton().then(({Button}) => {*/}
      {/*  console.log(Button)*/}
      {/*})}>getButton</button>*/}

      <Button onClick={() => {
        console.log('click')
      }}>button</Button>
      {/*State Initializers*/}
      {/*<StateInitializerToggle initialState={true} />*/}

      {/*State Reducer*/}
      {/*<StateReducerToggle reduceState={handleState} />*/}

      {/*Add To State*/}
      {/*<AddToState/>*/}

      {/*Reducer Hook*/}
      {/*<ReducerHookToggle/>*/}

      {/*Thunk Dispatch*/}
      <ThunkReducerPattern />

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
      {/*<Commando />*/}

      {/*<ReduxProvider initState={{ user: { name: "stan" } }}>*/}
      {/*  <User name={"Stan"} />*/}
      {/*</ReduxProvider>*/}
      {/*<States />*/}
      {/*<AdvancedState />*/}
      {/*<AppScreen />*/}
    </div>
  );
}

export default App;
