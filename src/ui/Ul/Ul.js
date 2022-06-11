import React from "react";

const Ul = (props) => {
  return (
    <ul
      style={{
        paddingLeft: "1rem",
        ...props.style,
      }}
      {...props}
    />
  );
};

export default Ul;
