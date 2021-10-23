import React, {
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const Transition = ({
  children,
  timeout,
  onExited,
  ["in"]: _in,
  appear,
}: any) => {
  const [state, setState] = useState("IDLE");

  useEffect(() => {
    let timeoutId: any = null;
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
  }, [_in, appear]);

  const elem = useMemo(() => children(state), [state]);
  return <div>{elem}</div>;
};

const TransitionGroup = ({ children }: any) => {
  const childrenStore = useRef<any>([]);
  const [childrenStates, setChildrenState] = useState({});

  const handleExited = (key: string) => {};

  childrenStore.current = React.Children.map(children, (child) => {
    const clone = cloneElement(child, {
      in: true,
      onExited: handleExited,
    });
    return clone;
  });

  return <div>{children}</div>;
};

export { TransitionGroup, Transition };
