import { useState } from "react";

const useCounter = (initValue = 0) => {
  const [value, setValue] = useState(initValue);

  return {
    value,
    increment: () => {
      setValue((v) => v + 1);
    },
    decrement: () => {
      setValue((v) => v - 1);
    },
  };
};

export default useCounter;
