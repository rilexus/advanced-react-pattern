import React from "react";
import useStyle from "../../hooks/useStyle/useStyle";

const H2 = (props) => {
  const s = useStyle(
    {
      margin: "1rem 0 1rem 0",
      ...props.style,
    },
    [props.style]
  );
  return <h2 {...props} style={s} />;
};

export default H2;
