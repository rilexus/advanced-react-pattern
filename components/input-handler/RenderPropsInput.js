import React, { useCallback, useMemo, useState } from "react";

const RenderPropsInput = ({ children }) => {
  const [value, _setValue] = useState("");

  const setValue = (e) => {
    const { value: _value } = e.target;
    _setValue(() => _value);
  };

  const values = useMemo(() => ({ value, setValue }), [value]);
  return children(values);
};

export default RenderPropsInput;
