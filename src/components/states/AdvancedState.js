import React, { useEffect, useReducer } from "react";
import { Switch } from "./components/Switch";
import { useInput } from "./hooks/useInput";

const createTransition = (transition, state) => {
  return () => {
    transition(state);
  };
};

const A = ({ transition }) => {
  const transitionToB = createTransition(transition, "B");
  const { inputs, register } = useInput();

  useEffect(() => {
    const value = (inputs["A"] && inputs["A"].value) || "";
    if (value === "123") {
      transitionToB();
    }
  }, [inputs]);

  return (
    <div>
      <div>A</div>
      <div>
        <input type="text" name={"A"} ref={register()} />
      </div>
      <div>
        <button onClick={transitionToB}>to B</button>
      </div>
    </div>
  );
};

const B = ({ transition }) => {
  const transitionToC = createTransition(transition, "C");

  return (
    <div>
      <div>B</div>
      <div>
        <button onClick={transitionToC}>to C</button>
      </div>
    </div>
  );
};

const C = ({ transition }) => {
  const transitionToA = createTransition(transition, "A");
  return (
    <div>
      <div>C</div>
      <div>
        <button onClick={transitionToA}>to A</button>
      </div>
    </div>
  );
};

const transitionReducer = (currentState, nextState) => nextState;
const AdvancedState = () => {
  const [currentState, transition] = useReducer(transitionReducer, "A");

  return (
    <div
      style={{
        border: "1px solid black",
        width: "500px",
        height: "300px",
      }}
    >
      <Switch value={currentState}>
        <Switch.Case value={"A"}>
          <A transition={transition} />
        </Switch.Case>
        <Switch.Case value={"B"}>
          <B transition={transition} />
        </Switch.Case>
        <Switch.Case value={"C"}>
          <C transition={transition} />
        </Switch.Case>
      </Switch>
    </div>
  );
};

export default AdvancedState;
