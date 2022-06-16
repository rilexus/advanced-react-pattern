import { useEffect, useState } from "react";

export const usePromise = (promise) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    promise
      .then((data) => {
        // console.log(data);
        setState((prev) => ({ ...prev, data: data, isLoading: false }));
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error: error, isLoading: false }));
      });
  }, []);

  return state;
};
