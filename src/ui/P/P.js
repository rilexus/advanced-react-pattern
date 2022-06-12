import React from "react";
import useStyle from "../../hooks/useStyle/useStyle";

const P = (props) => {
  const s = useStyle(
    {
      ...props.style,
      lineHeight: "1.4",
      fontSize: "1rem",
    },
    []
  );
  return <p {...props} style={s} />;
};

export default P;
