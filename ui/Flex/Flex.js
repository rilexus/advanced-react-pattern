import React from "react";

const Flex = ({ children, direction = "row" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
