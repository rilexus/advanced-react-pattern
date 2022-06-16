import React from "react";
import { SimpleContextConsumer } from "./SimpleContext";

const A = () => {
  return (
    <SimpleContextConsumer>
      {({ value }) => {
        return <div>{value}</div>;
      }}
    </SimpleContextConsumer>
  );
};

export default A;
