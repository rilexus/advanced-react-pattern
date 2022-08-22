import React from "react";

const Color = ({ children, color }) => {
  return (
    <div
      style={{
        color: color,
      }}
    >
      {children}
    </div>
  );
};

export default Color;
