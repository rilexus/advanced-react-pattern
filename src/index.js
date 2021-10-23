import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux";
import { rootReducer, RootReducerActionTypes, undoable } from "./reducers/rootReducer";
import {fetchUsersSaga} from "./components/saga/Saga";
import { composeWithDevTools } from "redux-devtools-extension";

const api = () =>
  new Promise((res) => {
    setTimeout(() => {
      res(42);
    }, 1000);
  });

const asyncMiddleware = ({}) => (next) => async (action) => {
  const res = next(action);
  if (action.type === RootReducerActionTypes.setName) {
    const r = await api();
    console.log(r);
  }
  return res;
};

const middleware = ({}) => (next) => (action) => {
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  
  const composeEnhancers = composeWithDevTools(applyMiddleware(asyncMiddleware, middleware, sagaMiddleware));
  
  const store = createStore(
    combineReducers({
      user: undoable(rootReducer.reducer),
    }),
    undefined,
    composeEnhancers,
    
  );
  
  sagaMiddleware.run(fetchUsersSaga)
  return store
}

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
