import React from "react";

const VerticalSpacer = ({ space = "0px" }) => {
  return (
    <div
      style={{
        paddingTop: space,
      }}
    />
  );
};

export default VerticalSpacer;
