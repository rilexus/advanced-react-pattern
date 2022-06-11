import React from "react";
import { useSimpleContext } from "./ContextHooks";

export const ContextHookInput = () => {
  const { value, handleChange } = useSimpleContext();

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </div>
  );
};
