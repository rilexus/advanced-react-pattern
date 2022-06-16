import React from "react";
import { createAtomicState } from "../../utils/createAtomicState";

const useCounterState = createAtomicState(42, {
  plus: (state, value) => state + value,
  minus: (state, value) => state - value,
});
const useFirstNameInputState = createAtomicState(
  {
    value: "",
    dirty: false,
  },
  {
    onChange: (state, event) => {
      const { value } = event.target;
      return { ...state, dirty: true, value };
    },
  }
);

const FirstNameInput = () => {
  const [input, inputHandlers] = useFirstNameInputState();
  return (
    <input
      type="text"
      //@ts-ignore
      value={input?.value}
      //@ts-ignore
      onChange={inputHandlers?.onChange}
    />
  );
};

const Plus = () => {
  //@ts-ignore
  const [count, { plus }] = useCounterState();
  // const [input] = useFirstNameInputState()
  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            plus(1);
          }}
        >
          Plus
        </button>
      </div>
      <FirstNameInput />
    </div>
  );
};

const Minus = () => {
  //@ts-ignore
  const [countValue, { minus }] = useCounterState();
  const [inputState] = useFirstNameInputState();

  return (
    <div>
      <div>{countValue}</div>
      <div>
        <button
          onClick={() => {
            minus(1);
          }}
        >
          Minus
        </button>
        <div>{inputState.value}</div>
      </div>
    </div>
  );
};

const AtomicState = () => {
  return (
    <div>
      <Plus />
      <Minus />
    </div>
  );
};

export { AtomicState };
