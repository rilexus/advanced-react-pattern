import { useState } from "react";

export const EVENTS = {
  BLUR: "blur",
  CHANGE: "change",
  INPUT: "input",
};
const setEventHandlers = (ref, handler) => {
  if (!ref) {
    return;
  }
  ref.addEventListener(EVENTS.INPUT, handler);
};

const useInput = () => {
  const [fieldsState, setFieldsState] = useState({});

  const registerField = (ref) => {
    if (!ref) {
      return;
    }
    const { name, value } = ref;
    const field = fieldsState[name];

    if (!field) {
      setFieldsState((p) => {
        return {
          ...p,
          [name]: {
            value,
          },
        };
      });
      setEventHandlers(ref, (event) => {
        const { name, value } = event.target;
        setFieldsState((p) => {
          return {
            ...p,
            [name]: {
              value,
            },
          };
        });
      });
    }
  };
  return {
    inputs: fieldsState,
    register: () => {
      return (ref) => {
        registerField(ref);
      };
    },
  };
};

export { useInput };
