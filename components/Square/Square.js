import React from "react";

const Square = ({ color = "blue", width = "4rem", height = "4rem" }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: height,
        width: width,
        display: "inline-block",
      }}
    />
  );
};

export default Square;
