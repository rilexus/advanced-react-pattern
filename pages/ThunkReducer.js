import React, { useReducer } from "react";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import { P } from "../ui/P";
import Link from "next/link";
import prefixBasePath from "../utils/prefixBasePath";
import { Code } from "../ui/Code";

const reducer = (state, action) => {
  if (action.type === "any-action") {
    // TODO: handle action here
    return state;
  }
  return state;
};

const initialState = {};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handle = () => {
    dispatch({ type: "any-action" });
  };

  return (
    <div>
      <button onClick={handle}>Click</button>
    </div>
  );
};

const loadingReducer = (state, action) => {
  if (action.type === "fetching") {
    // TODO: handle action here
    return state;
  }
  if (action.type === "fetched") {
    // TODO: handle action here
    return state;
  }
  if (action.type === "error") {
    // TODO: handle action here
    return state;
  }
  return state;
};
// =========================================
// const initialLoadingState = {
//   loading: false,
//   data: null,
//   error: null,
// };

// const LoadingReducer = () => {
//   const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);
//
//   const handle = () => {
//     dispatch({ type: "loading" });
//
//     fetch()
//       .then((data) => {
//         dispatch({ type: "fetched", data });
//       })
//       .catch((error) => {});
//     dispatch({ type: "error", error });
//   };
//
//   return (
//     <div>
//       <button onClick={handle}>Click</button>
//     </div>
//   );
// };
// =========================================
const initialLoadingState = {
  loading: false,
  data: null,
  error: null,
};

// const fetchAndDispatch = (dispatch) => {
//   dispatch({ type: "loading" });
//
//   fetch()
//     .then((data) => {
//       dispatch({ type: "fetched", data });
//     })
//     .catch((error) => {});
//   dispatch({ type: "error", error });
// };

const fetchAndDispatch = (arg1, arg2, arg3 /* ... */) => {
  return (dispatch) => {
    dispatch({ type: "loading" });

    fetch()
      .then((data) => {
        dispatch({ type: "fetched", data });
      })
      .catch((error) => {});
    dispatch({ type: "error", error });
  };
};

const fetchUser = ({ byId }) => {
  return (dispatch) => {
    dispatch({ type: "loading" });

    fetch(`/user/${byId}`)
      .then((data) => {
        dispatch({ type: "fetched", data });
      })
      .catch((error) => {});
    dispatch({ type: "error", error });
  };
};

const LoadingReducer = () => {
  const [state, nativeDispatch] = useReducer(
    loadingReducer,
    initialLoadingState
  );

  const dispatch = (actionOrFunction) => {
    if (typeof actionOrFunction === "function") {
      actionOrFunction(nativeDispatch);
    } else {
      nativeDispatch(actionOrFunction);
    }
  };

  const handle = () => {
    fetchUser({ byId: "1234" })(dispatch);
  };

  return (
    <div>
      <button onClick={handle}>Click</button>
    </div>
  );
};
// import { useReducer as nativeUseReducerHook } from "react";
//
// const useReducer = (reducer, initState, initializer) => {
//   const [state, nativeDispatch] = nativeUseReducerHook(
//     reducer,
//     initState,
//     initializer
//   );
//
//   const dispatch = (actionOrFunction) => {
//     if (typeof actionOrFunction === "function") {
//       actionOrFunction(nativeDispatch);
//     } else {
//       nativeDispatch(actionOrFunction);
//     }
//   };
//
//   return [state, dispatch];
// };
//
// export { useReducer };

const ThunkReducer = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <h1>Thunk Reducer</h1>
          <P>
            this article builds on top of the previous &quot;Reducer Hook&quot;
            article. If you do not know how the &quot;useReducer&quot; hook
            works, take a look{" "}
            <Link href={prefixBasePath("/ReducerHook")}>
              <a>here</a>
            </Link>
          </P>
          <P>A typical useReducer implementation looks like this:</P>
          <Code>
            {"const reducer = (state, action) => {\n" +
              '  if (action.type === "any-action") {\n' +
              "    // TODO: handle action here\n" +
              "    return state;\n" +
              "  }\n" +
              "  return state;\n" +
              "};\n" +
              "\n" +
              "const initialState = {};\n" +
              "\n" +
              "const Reducer = () => {\n" +
              "  const [state, dispatch] = useReducer(reducer, initialState);\n" +
              "\n" +
              "  const handle = () => {\n" +
              '    dispatch({ type: "any-action" });\n' +
              "  };\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={handle}>Click</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            Sometimes its necessary to dispatch multiple actions during the
            execution of one function. For example, if you would like to fetch
            data, display a loading message and handle an error during the
            process like so:
          </P>
          <Code highlight={[{ start: 27, end: 33 }]}>
            {"const loadingReducer = (state, action) => {\n" +
              '  if (action.type === "fetching") {\n' +
              "    // TODO: handle action here\n" +
              "    return state;\n" +
              "  }\n" +
              '  if (action.type === "fetched") {\n' +
              "    // TODO: handle action here\n" +
              "    return state;\n" +
              "  }\n" +
              '  if (action.type === "error") {\n' +
              "    // TODO: handle action here\n" +
              "    return state;\n" +
              "  }\n" +
              "  return state;\n" +
              "};\n" +
              "\n" +
              "const initialLoadingState = {\n" +
              "  loading: false,\n" +
              "  data: null,\n" +
              "  error: null,\n" +
              "};\n" +
              "\n" +
              "const LoadingReducer = () => {\n" +
              "  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n" +
              "\n" +
              "  const handle = () => {\n" +
              '    dispatch({ type: "loading" });\n' +
              "    fetch()\n" +
              "      .then((data) => {\n" +
              '        dispatch({ type: "fetched", data });\n' +
              "      })\n" +
              "      .catch((error) => {});\n" +
              '    dispatch({ type: "error", error });\n' +
              "  };\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={handle}>Click</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            This works but its not very handy and messy to test. We can move the
            dispatch and fetch logic to a dedicated function like so:
          </P>
          <Code
            highlight={[
              { start: 1, end: 10 },
              { start: 16, end: 16 },
            ]}
          >
            {"const fetchAndDispatch = (dispatch) => {\n" +
              '  dispatch({ type: "loading" });\n' +
              "\n" +
              "  fetch()\n" +
              "    .then((data) => {\n" +
              '      dispatch({ type: "fetched", data });\n' +
              "    })\n" +
              "    .catch((error) => {});\n" +
              '  dispatch({ type: "error", error });\n' +
              "};\n" +
              "\n" +
              "const LoadingReducer = () => {\n" +
              "  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n" +
              "\n" +
              "  const handle = () => {\n" +
              "    fetchAndDispatch(dispatch);\n" +
              "  };\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={handle}>Click</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            This is definitely a better solution. We pass the dispatch function
            as an argument to the &quot;fetchAndDispatch&quot; function. Now the
            function is pretty good testable:
          </P>
          <Code>
            {'describe("fetchAndDispatch", () => {\n' +
              '  it("should dispatch actions", () => {\n' +
              '    fetch.mockImplementationOnce(() => Promise.reject("API is down"));\n' +
              "    \n" +
              "    const mockedDispatch = jest.fn();\n" +
              "    fetchAndDispatch(mockedDispatch);\n" +
              "    \n" +
              "    expect(mockedDispatch).toBeCalledWith({type: 'fetching'})\n" +
              "    expect(mockedDispatch).toBeCalledWith({type: 'error'})\n" +
              "    // TODO: test the happy path\n" +
              "  });\n" +
              "});"}
          </Code>
          <P>
            but we do not have a good way to pass additional arguments to the
            function anymore.
          </P>
          <Code highlight={[{ start: 1, end: 1 }]}>
            {"const fetchAndDispatch = (dispatch, arg1, arg2, arg3 /* ... */) => {\n" +
              '  dispatch({ type: "loading" });\n' +
              "\n" +
              "  fetch()\n" +
              "    .then((data) => {\n" +
              '      dispatch({ type: "fetched", data });\n' +
              "    })\n" +
              "    .catch((error) => {});\n" +
              '  dispatch({ type: "error", error });\n' +
              "};"}
          </Code>
          <P>
            What we can do is to return a function which accepts the
            &quot;dispatch&quot; function:
          </P>
          <Code highlight={[{ start: 2, end: 11 }]}>
            {"const fetchAndDispatch = (arg1, arg2, arg3 /* ... */) => {\n" +
              "  return (dispatch) => {\n" +
              '    dispatch({ type: "loading" });\n' +
              "\n" +
              "    fetch()\n" +
              "      .then((data) => {\n" +
              '        dispatch({ type: "fetched", data });\n' +
              "      })\n" +
              "      .catch((error) => {});\n" +
              '    dispatch({ type: "error", error });\n' +
              "  };\n" +
              "};"}
          </Code>
          <P>A concrete implementation of this pattern can be:</P>
          <Code>
            {"const fetchUser = ({ byId }) => {\n" +
              "  return (dispatch) => {\n" +
              '    dispatch({ type: "loading" });\n' +
              "\n" +
              "    fetch(`/user/${byId}`)\n" +
              "      .then((data) => {\n" +
              '        dispatch({ type: "fetched", data });\n' +
              "      })\n" +
              "      .catch((error) => {});\n" +
              '    dispatch({ type: "error", error });\n' +
              "  };\n" +
              "};"}
          </Code>
          <P>And the component would look like this:</P>
          <Code highlight={[{ start: 5, end: 5 }]}>
            {"const LoadingReducer = () => {\n" +
              "  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n" +
              "\n" +
              "  const handle = () => {\n" +
              '    fetchUser({ byId: "1234" })(dispatch);\n' +
              "  };\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={handle}>Click</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            If you think that it looks bad, I agree! I would prefer reverse the
            order of the calls like so:
          </P>
          <Code highlight={[{ start: 5, end: 5 }]}>
            {"const LoadingReducer = () => {\n" +
              "  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n" +
              "\n" +
              "  const handle = () => {\n" +
              '    dispatch(fetchUser({ byId: "1234" }));\n' +
              "  };\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={handle}>Click</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            To make this possible, the dispatch function would need to accept a
            function as an argument. The native &quot;dispatch&quot; provided by
            &quot;react&quot; does not support that. To make something similar,
            we can extend on the native &quot;dispatch&quot;:
          </P>
          <Code
            highlight={[
              { start: 2, end: 2 },
              { start: 8, end: 12 },
            ]}
          >
            {"const LoadingReducer = () => {\n" +
              "  const [state, nativeDispatch] = useReducer(\n" +
              "    loadingReducer,\n" +
              "    initialLoadingState\n" +
              "  );\n" +
              "\n" +
              "  const dispatch = (actionOrFunction) => {\n" +
              '    if (typeof actionOrFunction === "function") {\n' +
              "      actionOrFunction(nativeDispatch);\n" +
              "    } else {\n" +
              "      nativeDispatch(actionOrFunction);\n" +
              "    }\n" +
              "  };\n" +
              "\n" +
              "  const handle = () => {\n" +
              '    dispatch(fetchUser({ byId: "1234" }));\n' +
              "  };\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={handle}>Click</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            Implementing the custom dispatch every time we need it, is time
            consuming and annoying. Therefore, I would suggest to move it to a
            custom hook:
          </P>
          <Code
            highlight={[
              { start: 1, end: 1 },
              { start: 4, end: 4 },
            ]}
          >
            {'import { useReducer as nativeUseReducerHook } from "react";\n' +
              "\n" +
              "const useReducer = (reducer, initState, initializer) => {\n" +
              "  const [state, nativeDispatch] = nativeUseReducerHook(\n" +
              "    reducer,\n" +
              "    initState,\n" +
              "    initializer\n" +
              "  );\n" +
              "\n" +
              "  const dispatch = (actionOrFunction) => {\n" +
              '    if (typeof actionOrFunction === "function") {\n' +
              "      actionOrFunction(nativeDispatch);\n" +
              "    } else {\n" +
              "      nativeDispatch(actionOrFunction);\n" +
              "    }\n" +
              "  };\n" +
              "\n" +
              "  return [state, dispatch];\n" +
              "};\n" +
              "\n" +
              "export { useReducer };"}
          </Code>
          <P>
            From now on, as long as we use the custom hook, we can pass
            functions to the &quot;dispatch&quot; function and dispatch actions
            asynchronously easily.
          </P>
          <P>
            If you would like to read more about this pattern, feel free to take
            a look{" "}
            <Link href={"https://redux.js.org/usage/writing-logic-thunks"}>
              <a>here</a>
            </Link>
            .
          </P>
        </div>
      }
    ></Layout>
  );
};

export default ThunkReducer;
