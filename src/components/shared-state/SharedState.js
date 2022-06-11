import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
} from "react";

const SharedStateContext = createContext({});
const SharedStateContextProvider = SharedStateContext.Provider;
const useSharedStateContext = () => useContext(SharedStateContext);

export const useSharedState = (stateName, initialState = {}) => {
  const [state, setState] = useState(initialState);
  const { getStates, registerState, removeState } = useSharedStateContext();

  useEffect(() => {
    // after each state change register new state getter function
    if (stateName)
      registerState({
        [stateName]: function getState() {
          return state;
        },
      });

    return () => {
      if (stateName) removeState(stateName);
    };
  }, [state, registerState, removeState, stateName]);

  return [state, setState, getStates];
};

const SharedStateProvider = ({ children }) => {
  const stateGetters = useRef({});

  const registerState = (
    registration = { stateName: /*stateGetter*/ () => ({}) }
  ) => {
    stateGetters.current = { ...stateGetters.current, ...registration };
  };

  const removeState = (withName) => {
    const { [withName]: remove, ...rest } = stateGetters.current;
    stateGetters.current = { ...rest };
  };

  const getStates = (withNames) => {
    const states = stateGetters.current;

    if (!withNames) {
      const allStates = () => {
        const toSingleObject = (acc, [stateName, getState]) => {
          return { ...acc, [stateName]: getState() };
        };
        return Object.entries(states).reduce(toSingleObject, {});
      };

      return allStates();
    }

    if (typeof withNames === "string") {
      return states[withNames]?.();
    }

    if (Array.isArray(withNames)) {
      return Object.entries(states).reduce((acc, [name, getState]) => {
        if (withNames.includes(name)) return { ...acc, [name]: getState() };
        return acc;
      }, {});
    }
  };

  const contextValues = useMemo(
    () => ({
      getStates,
      registerState,
      removeState,
    }),
    []
  );

  return (
    <SharedStateContextProvider value={contextValues}>
      {children}
    </SharedStateContextProvider>
  );
};

export const withSharedState = (Component) => {
  return forwardRef((props, ref) => (
    <SharedStateProvider>
      <Component ref={ref} {...props} />
    </SharedStateProvider>
  ));
};
