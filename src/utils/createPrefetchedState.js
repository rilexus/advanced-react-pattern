import { useCallback, useEffect, useState } from "react";

const useRerender = () => {
  const [_, setState] = useState(false);

  return useCallback(() => {
    setState((p) => !p);
  }, [_, setState]);
};

function createFetchedState(resolver) {
  const ERROR = "error";
  const RESOLVED = "resolved";
  const FETCHING = "fetching";

  let status = FETCHING; // initial status
  let result = null;
  let error = null;

  const promised = resolver();
  // subscribe to the promise as soon as this function is called
  promised.then(
    (_data) => {
      status = RESOLVED;
      result = _data;
    },
    (_error) => {
      status = ERROR;
      error = _error;
    }
  );

  return () => {
    // return a hook function
    const rerender = useRerender();

    useEffect(() => {
      if (status === FETCHING) {
        // if this hook renders before the promise is resolved
        promised.then(() => {
          // await the result, rerender the component
          rerender();
        });
      }
    }, []);

    return [result, error];
  };
}

export { createFetchedState };
