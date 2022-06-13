import React, { useState } from "react";
import { Code } from "../../ui/Code";
import Container from "../../ui/Container/Container";

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    setState((oldState) => {
      const newState = reducer(oldState, action);
      return newState;
    });
  };

  return [state, dispatch];
};

function reducer(state, action) {
  const { type } = action;
  if (type === "toggle-of") {
    return { ...state, on: false };
  }
  if (type === "toggle-on") {
    return { ...state, on: true };
  }
  return state;
}

const toggelOfActionCreator = () => {
  return { type: "toggle-of" };
};

function Toggle() {
  const [state, dispatch] = useReducer(reducer, { on: false });

  const handleClick = () => {
    const { on } = state;

    if (on) {
      dispatch(toggelOfActionCreator());
    } else {
      dispatch({ type: "toggle-on" });
    }
  };

  return (
    <div>
      {state.on ? "On" : "Off"}
      <br />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

const ReducerHook = () => {
  return (
    <div>
      <Container>
        <h1>Reducer Hook</h1>
        <Code>
          {"function reducer(state, action) {\n" +
            "  const { type } = action;\n" +
            '  if (type === "toggle-of") {\n' +
            "    return { ...state, on: false };\n" +
            "  }\n" +
            '  if (type === "toggle-on") {\n' +
            "    return { ...state, on: true };\n" +
            "  }\n" +
            "  return state;\n" +
            "}\n" +
            "\n" +
            "const toggelOfActionCreator = () => {\n" +
            '  return { type: "toggle-of" };\n' +
            "};\n" +
            "\n" +
            "function Toggle() {\n" +
            "  const [state, dispatch] = useReducer(reducer, { on: false });\n" +
            "\n" +
            "  const handleClick = () => {\n" +
            "    const { on } = state;\n" +
            "\n" +
            "    if (on) {\n" +
            "      dispatch(toggelOfActionCreator());\n" +
            "    } else {\n" +
            '      dispatch({ type: "toggle-on" });\n' +
            "    }\n" +
            "  };\n" +
            "\n" +
            "  return (\n" +
            "    <div>\n" +
            '      {state.on ? "On" : "Off"}\n' +
            "      <br />\n" +
            "      <button onClick={handleClick}>Click</button>\n" +
            "    </div>\n" +
            "  );\n" +
            "}"}
        </Code>
        <Code>
          {"const useReducer = (reducer, initialState) => {\n" +
            "  const [state, setState] = useState(initialState);\n" +
            "\n" +
            "  const dispatch = (action) => {\n" +
            "    setState((oldState) => {\n" +
            "      const newState = reducer(oldState, action);\n" +
            "      return newState;\n" +
            "    });\n" +
            "  };\n" +
            "\n" +
            "  return [state, dispatch];\n" +
            "};"}
        </Code>
      </Container>
    </div>
  );
};

export default ReducerHook;
