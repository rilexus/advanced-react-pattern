import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const Transition = ({ children, timeout, onExited, ["in"]: _in, appear }) => {
  const [state, setState] = useState("IDLE");

  useEffect(() => {
    let timeoutId = null;
    if (_in || appear) {
      setState(() => "entering");

      timeoutId = setTimeout(() => {
        setState(() => "entered");
      }, timeout);
    }
    if (!_in && state === "entered") {
      setState(() => "exiting");

      timeoutId = setTimeout(() => {
        setState(() => {
          onExited && onExited();
          return "exited";
        });
      }, timeout);
    }
    return () => {
      clearTimeout(timeoutId);
    };
    //eslint-disable-next-line
  }, [_in, appear]);

  const elem = useMemo(() => children(state), [children, state]);
  return <div>{elem}</div>;
};

const TransitionGroup = ({ children }) => {
  const childrenStore = useRef([]);
  const [childrenStates, setChildrenState] = useState({});

  const handleExited = (key) => {};

  childrenStore.current = Children.map(children, (child) => {
    const clone = cloneElement(child, {
      in: true,
      onExited: handleExited,
    });
    return clone;
  });

  return <div>{children}</div>;
};

export { TransitionGroup, Transition };
