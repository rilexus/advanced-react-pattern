import React, { useReducer, useState } from "react";
import { Code } from "../ui/Code";
import Container from "../ui/Container/Container";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import { P } from "../ui/P";
import fetchData from "../components/Prefetch/fetchData";

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

// const reducer = (state, action) => state /* add logic here */;
// const Component = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     data: null,
//     error: null,
//     status: false /* indicate if data is being fetched */,
//   });
//
//   const handleClick = () => {
//     dispatch({
//       type: "start-fetching" /* show loading spinner or something */,
//     });
//     fetchData()
//       .then((data) => {
//         dispatch({ type: "data-fetched", data });
//       })
//       .catch((error) => {
//         dispatch({ type: "fetching-error", error });
//       });
//   };
//
//   return (
//     <div>
//       <div>{JSON.stringify(state)}</div>
//       <button onClick={handleClick}>Call API</button>
//     </div>
//   );
// };

const ThunkReducer = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <main>
            <article>
              <h1>Thunk Reducer</h1>

              <P>First I would like to point your attention to this code:</P>
              <Code>
                {"const reducer = (state, action) => state /* add logic here */;\n" +
                  "const Component = () => {\n" +
                  "  const [state, dispatch] = useReducer(reducer, {\n" +
                  "    data: null,\n" +
                  "    error: null,\n" +
                  "    status: false /* indicate if data is being fetched */,\n" +
                  "  });\n" +
                  "\n" +
                  "  const handleClick = () => {\n" +
                  "    dispatch({\n" +
                  '      type: "start-fetching" /* show loading spinner or something */,\n' +
                  "    });\n" +
                  "    fetchData()\n" +
                  "      .then((data) => {\n" +
                  '        dispatch({ type: "data-fetched", data });\n' +
                  "      })\n" +
                  "      .catch((error) => {\n" +
                  '        dispatch({ type: "fetching-error", error });\n' +
                  "      });\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <div>\n" +
                  "      <div>{JSON.stringify(state)}</div>\n" +
                  "      <button onClick={handleClick}>Call API</button>\n" +
                  "    </div>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <P>The order of execution is as follows:</P>
              <ol>
                <li>user clicks on the button</li>
                <li>handleClick is called</li>
                <li>dispatch is called</li>
                <li>fetchData is called</li>
                <li></li>
              </ol>
              <hr />
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
            </article>
          </main>
        </div>
      }
    ></Layout>
  );
};

export default ThunkReducer;
