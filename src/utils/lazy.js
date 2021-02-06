import React, { useEffect, useRef, useState } from "react";

const lazy = (importer, name) => {
  return (props) => {
    const ref = useRef(null);
    const [resolved, setResolved] = useState(false);

    useEffect(() => {
      const resolve = async () => {
        const module = await importer();
        if (name) {
          ref.current = module[name];
        } else {
          ref.current = module;
        }
      };
      resolve().then(() => {
        setResolved(true);
      });
    }, []);
    if (!ref.current) {
      return null;
    }

    return React.cloneElement(ref.current(), props);
  };
};
export { lazy };
