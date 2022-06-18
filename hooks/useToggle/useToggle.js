import { useReducer } from "react";

const reduce = (state) => !state;

const useToggle = (reducer = reduce, initialState = false) => {
  return useReducer(reducer, initialState);
};

export default useToggle;
