import React, { useCallback, useMemo } from "react";

const InputValidator = ({ children }) => {
  const valueIsValid = (value) => {
    return !!(value && value.length > 5);
  };

  const validateState = (state) => {
    const { value } = state;
    state.valid = valueIsValid(value);
    return state;
  };

  const handleInputControllerStateChange = useCallback(
    (inputState, changes) => {
      const newState = { ...inputState, ...changes };
      return validateState(newState);
    },
    []
  );

  const renderProps = useMemo(() => {
    return {
      handleInputControllerStateChange,
    };
  }, []);

  return children(renderProps);
};

export default InputValidator;
