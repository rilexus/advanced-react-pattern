import React, { useState } from "react";

const A = ({ transition }) => {
  // const [localState, setLocalState] = useState(1);
  // const {value, dispatch} = useInterStateContext()
  return (
    <div>
      <div>A</div>
      <div>
        <button onClick={() => transition("B")}>next to B</button>
      </div>
    </div>
  );
};

const B = ({ transition }) => {
  // const [localState, setLocalState] = useState(1);
  // const {value, dispatch} = useInterStateContext()
  return (
    <div>
      <div>B</div>
      <div>
        <button onClick={() => transition("C")}>next to C</button>
      </div>
    </div>
  );
};

const C = ({ transition }) => {
  // const [localState, setLocalState] = useState(1);
  // const {value, dispatch} = useInterStateContext()
  return (
    <div>
      <div>C</div>
      <div>
        <button onClick={() => transition("A")}>next to A</button>
      </div>
    </div>
  );
};

const StateSwitch = ({ visibleComponent, transition }) => {
  const interceptTransition = (toState) => {
    console.log(toState);
    transition(toState);
  };

  switch (visibleComponent) {
    case "A": {
      return <A transition={interceptTransition} />;
    }
    case "B": {
      return <B transition={interceptTransition} />;
    }
    case "C": {
      return <C transition={interceptTransition} />;
    }
  }
};

const States = () => {
  const [currentState, setCurrentState] = useState("A");

  const transition = (toState) => {
    setCurrentState(toState);
  };
  // provide interStateContext here
  return (
    <StateSwitch transition={transition} visibleComponent={currentState} />
  );
};

export default States;
