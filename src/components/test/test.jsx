import React, { useEffect, useState } from "react";

const Test = ({ value }) => {
  const [state] = useState(() => value);

  useEffect(() => {
    console.log("test state: ", state);
  }, [value]);

  return <div>test</div>;
};

export default Test;
