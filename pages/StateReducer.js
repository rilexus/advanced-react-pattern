import React, { useReducer, useState } from "react";
import { Code } from "../ui/Code";
import Container from "../ui/Container/Container";

const toggleReducer = (state, action) => {
  const { type } = action;
  if (type === "toggle") {
    return !state;
  }
  return state;
};

const useToggle = (
  initial = false,
  reducer = toggleReducer /* can be overwritten */
) => {
  const [on, dispatch] = useReducer(reducer, initial);

  const toggle = () => dispatch({ type: "toggle" });
  const reset = () => dispatch({ type: "reset" });

  return { on, toggle, reset };
};

const Toggle = ({ reduceState }) => {
  const [state, setState] = useState({ on: false });

  const setToState = (changes) => {
    setState((oldState) => {
      if (!reduceState) {
        return { ...oldState, ...changes };
      }

      return reduceState(oldState, changes);
    });
  };

  const handleClick = () => setToState({ on: !state.on });

  return (
    <div>
      <button onClick={handleClick}>{state.on ? "On" : "Off"}</button>
    </div>
  );
};

const Component = () => {
  const [count, setCount] = useState(0);

  const reduceState = (state, changes) => {
    if (count === 5) {
      return state;
    }
    setCount((c) => c + 1);
    return { ...state, ...changes };
  };

  return (
    <div>
      <div>Count: {count} (max. 5)</div>
      <Toggle reduceState={reduceState}></Toggle>
    </div>
  );
};

const StateReducer = () => {
  return (
    <div>
      <Container>
        <h1>State Reducer</h1>
        <div>
          <Component />
        </div>
        <div>
          <Code>
            {"const Component = () => {\n" +
              "  const [count, setCount] = useState(0);\n" +
              "\n" +
              "  const reduceState = (state, changes) => {\n" +
              "    if (count === 5) {\n" +
              "      return state;\n" +
              "    }\n" +
              "    setCount((c) => c + 1);\n" +
              "    return { ...state, ...changes };\n" +
              "  };\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <div>Count: {count} (max. 5)</div>\n" +
              "      <Toggle reduceState={reduceState}></Toggle>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <Code>
            {"const Toggle = ({ reduceState }) => {\n" +
              "  const [state, setState] = useState({ on: false });\n" +
              "\n" +
              "  const setToState = (changes) => {\n" +
              "    setState((oldState) => {\n" +
              "      if (!reduceState) {\n" +
              "        return { ...oldState, ...changes };\n" +
              "      }\n" +
              "\n" +
              "      return reduceState(oldState, changes);\n" +
              "    });\n" +
              "  };\n" +
              "\n" +
              "  const handleClick = () => setToState({ on: !state.on });\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              '      <button onClick={handleClick}>{state.on ? "On" : "Off"}</button>\n' +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <Code>
            {"const useToggle = (\n" +
              "  initial = false,\n" +
              "  reducer = toggleReducer /* can be overwritten */\n" +
              ") => {\n" +
              "  const [on, dispatch] = useReducer(reducer, initial);\n" +
              "\n" +
              '  const toggle = () => dispatch({ type: "toggle" });\n' +
              '  const reset = () => dispatch({ type: "reset" });\n' +
              "\n" +
              "  return { on, toggle, reset };\n" +
              "};"}
          </Code>
        </div>
      </Container>
    </div>
  );
};

export default StateReducer;
