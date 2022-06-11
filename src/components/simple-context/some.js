import React from "react";
import { SimpleContextConsumer } from "./SimpleContext";

const Some = () => {
  return (
    <SimpleContextConsumer>
      {({ value, handleChange }) => (
        <input
          type="text"
          value={value}
          onChange={({ target: { value } }) => handleChange(value)}
        />
      )}
    </SimpleContextConsumer>
  );
};

export default Some;
