import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
  memo,
  useMemo,
} from "react";
import { func } from "prop-types";

const ReduxStateContext = createContext({});
const ReduxDispatchContext = createContext({});

const useApplicationState = () => useContext(ReduxStateContext);
const useApplicationDispatch = () => useContext(ReduxDispatchContext);

export const useApplicationContext = () => {
  return [useApplicationState(), useApplicationDispatch()];
};

const applicationReducer = (state = {}, action) => {
  const { type, payload } = action;

  if (type === "fetched-user") {
    return {
      ...state,
      ...payload,
    };
  }

  return state;
};
const isFunction = (val) => typeof val === "function";

const ReduxProvider = ({ children, initState }) => {
  const [applicationState, _dispatch] = useReducer(
    applicationReducer,
    initState
  );

  const dispatch = useCallback(
    (action) => {
      if (isFunction(action)) {
        action(_dispatch);
      } else {
        _dispatch(action);
      }
    },
    [_dispatch]
  );

  return (
    <ReduxStateContext.Provider value={applicationState}>
      <ReduxDispatchContext.Provider value={dispatch}>
        {children}
      </ReduxDispatchContext.Provider>
    </ReduxStateContext.Provider>
  );
};

function createUseDispatch() {
  return function useDispatch() {
    const dispatch = useContext(ReduxDispatchContext);
    return useCallback((...a) => dispatch(...a), [dispatch]);
  };
}
function createSelectorHook() {
  return function useSelector(selector) {
    const state = useContext(ReduxStateContext);
    const selected = selector(state);
    return useMemo(() => selector, [selected]);
  };
}
export const useSelector = createSelectorHook();

// make the store dispatch function available
export const useDispatch = createUseDispatch();

// demonstrate how the connect function from redux is implemented
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return function Connected(props) {
      const [applicationState, dispatch] = useApplicationContext();

      const selectedState = useMemo(
        () => mapStateToProps(applicationState, props),
        [applicationState, props]
      );
      const selectedDispatch = useMemo(
        () => mapDispatchToProps(dispatch, props),
        [dispatch, props]
      );

      const connectedValues = useMemo(
        () => ({
          ...selectedState,
          ...selectedDispatch,
          ...props,
        }),
        [selectedState, selectedDispatch, props]
      );

      const MemComponent = memo(function Wrapper(pr) {
        return <Component {...pr} />;
      });
      return <MemComponent {...connectedValues} />;
    };
  };
}

export default ReduxProvider;
