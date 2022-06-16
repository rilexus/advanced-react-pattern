import React, { useReducer } from "react";
import { Code } from "../ui/Code";
import Container from "../ui/Container/Container";

function reducer(state, action) {
  const { type, payload } = action;

  return {
    ...state,
    ...payload,
  };
}

function useThunkReducer(reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch = (action) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };

  return [state, thunkDispatch];
}

function callAPI(dispatch) {
  dispatch({ type: "call api", payload: { data: "Calling API..." } });
  setTimeout(() => {
    const data = "Got data after 2sec.";
    dispatch({ type: "call api", payload: { data } });
  }, 2000);
}

function fetchUser(id) {
  return (dispatch) => {
    dispatch({ type: "user-fetched", payload: { data: "" } });
  };
}

const Thunk = () => {
  const [state, dispatch] = useThunkReducer(reducer, { data: "" });

  return (
    <div>
      <div>{JSON.stringify(state.data)}</div>
      <button onClick={() => dispatch(callAPI /*pass function as action*/)}>
        Call API
      </button>
      <button onClick={() => dispatch(fetchUser(1234))}>Fetch User</button>
    </div>
  );
};

const ThunkReducer = () => {
  return (
    <Container>
      <h1>Thunk Reducer</h1>
      <Thunk />
      <Code>
        {"function callAPI(dispatch) {\n" +
          '  dispatch({ type: "call api", payload: { data: "Calling API..." } });\n' +
          "  setTimeout(() => {\n" +
          '    const data = "Got data after 2sec.";\n' +
          '    dispatch({ type: "call api", payload: { data } });\n' +
          "  }, 2000);\n" +
          "}\n" +
          "\n" +
          "function fetchUser(id) {\n" +
          "  return (dispatch) => {\n" +
          '    dispatch({ type: "user-fetched", payload: { data: "" } });\n' +
          "  };\n" +
          "}\n" +
          "\n" +
          "const Thunk = () => {\n" +
          '  const [state, dispatch] = useThunkReducer(reducer, { data: "" });\n' +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          "      <div>{JSON.stringify(state.data)}</div>\n" +
          "      <button onClick={() => dispatch(callAPI /*pass function as action*/)}>\n" +
          "        Call API\n" +
          "      </button>\n" +
          "      <button onClick={() => dispatch(fetchUser(1234))}>Fetch User</button>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <Code>
        {"function useThunkReducer(reducer, initialState) {\n" +
          "  const [state, dispatch] = useReducer(reducer, initialState);\n" +
          "\n" +
          "  const thunkDispatch = (action) => {\n" +
          '    if (typeof action === "function") {\n' +
          "      action(dispatch);\n" +
          "    } else {\n" +
          "      dispatch(action);\n" +
          "    }\n" +
          "  };\n" +
          "\n" +
          "  return [state, thunkDispatch];\n" +
          "}"}
      </Code>
    </Container>
  );
};

export default ThunkReducer;
