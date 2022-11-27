import React from "react";

const Flex = ({ justify = "start", children, direction = "row" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justify,
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
