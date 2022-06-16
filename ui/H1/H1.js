import React from "react";
import useStyle from "../../hooks/useStyle/useStyle";

const H1 = (props) => {
  const s = useStyle(
    {
      fontSize: "2rem",
      ...props.style,
    },
    [props.style]
  );
  return <h1 {...props} style={s} />;
};

export default H1;
