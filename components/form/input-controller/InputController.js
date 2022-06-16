import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const InputControllerContext = createContext({});
const useInputControllerContext = () => useContext(InputControllerContext);

/**
 *
 * @param {*}         children
 * @param {*}         restProps
 * @param {Object}    [initState]
 * @param {function}  [onStateChange]
 * @returns {*}
 */
function InputController({
  children,
  initState,
  valid = true,
  onStateChange,
  onChange,
  onBlur,
  value,
  name,
  onClick,
  onFocus,
  className,
  ...controllerProps
}) {
  const defaultState = {
    name: name,
    value: value,
    valid: valid,
    touched: false,
    blurred: false,
    focused: false,
    dirty: false, // user tipped in component
  };
  const [inputState, setInputState] = useState(() => defaultState);

  const setToState = useCallback(
    (changes) => {
      if (onStateChange) {
        setInputState((currentState) => onStateChange(currentState, changes));
      } else {
        setInputState((currentState) => ({ ...currentState, ...changes }));
      }
    },
    [inputState]
  );

  useEffect(() => {
    setToState(initState || defaultState);
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { value: currentValue } = e.target;
      setToState({ value: currentValue, dirty: true });
    },
    [inputState]
  );

  const handleBlur = (e) => {
    setToState({ blurred: true, focused: false });
  };

  const handleClick = (e) => {
    if (!inputState.touched) {
      setToState({ touched: true });
    }
  };

  const handleFocus = (e) => {
    if (!inputState.focused) {
      setToState({ focused: true });
    }
  };

  const buildClassNames = (className = "") => {
    const { blurred, touched, dirty, focused, valid } = inputState;
    const classNames = className.split(" ");
    if (blurred) {
      classNames.push("blurred");
    }
    if (touched) {
      classNames.push("touched");
    }
    if (dirty) {
      classNames.push("dirty");
    }
    if (focused) {
      classNames.push("focused");
    }
    if (valid) {
      classNames.push("valid");
    }
    if (!valid) {
      classNames.push("invalid");
    }
    return classNames.join(" ");
  };

  const getBindingProps = ({ ...inputProps } = {}) => {
    return {
      ...inputProps,
      ...controllerProps,
      value: value || inputState.value,
      onChange: (e) => {
        onChange && onChange(e);
        handleChange(e);
      },
      onBlur: (e) => {
        onBlur && onBlur(e);
        handleBlur(e);
      },
      onFocus: (e) => {
        onFocus && onFocus(e);
        handleFocus(e);
      },
      onClick: (e) => {
        onClick && onClick(e);
        handleClick(e);
      },
      className: buildClassNames(className),
    };
  };

  const renderProps = useMemo(() => {
    return {
      state: inputState,
      bindProps: getBindingProps,
    };
  }, [inputState]);

  return (
    <InputControllerContext.Provider value={{ valid: inputState.valid }}>
      {children(renderProps)}
    </InputControllerContext.Provider>
  );
}

function Valid({ children }) {
  const { valid } = useInputControllerContext();

  return valid ? children : null;
}

function Invalid({ children }) {
  const { valid } = useInputControllerContext();

  return valid ? null : children;
}

InputController.Valid = Valid;
InputController.Invalid = Invalid;

export default InputController;
