import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState;
    }

    return null;
  });

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(value === null ? fallbackState : value)
    );
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
