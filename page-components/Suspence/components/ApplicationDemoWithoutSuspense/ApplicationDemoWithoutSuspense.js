import React, { useEffect, useRef, useState } from "react";
import useToggle from "../../../../hooks/useToggle/useToggle";
import sleep from "../../../../utils/sleep";

const lazy = (factory) => {
  // return a React component function
  return function LazyWrapper(props) {
    const [, rerender] = useToggle();
    const ref = useRef(() => null);
    useEffect(() => {
      // load JS module right away, LazyWrapper lazy is called
      factory()
        // wait for the JS module to be resolved
        .then(({ default: Component }) => {
          ref.current = Component;

          rerender();
        })
        .catch((e) => {
          // handle error
        });
    }, []);

    const Component = ref.current;
    return <Component {...props} />;
  };
};

const Backlog = lazy(async () => {
  await sleep(1000);
  return import(
    /* webpackChunkName: "Backlog" */ "./components/Backlog/Backlog"
  );
});
const Board = lazy(async () => {
  await sleep(1000);
  return import(/* webpackChunkName: "Board" */ "./components/Board/Board");
});
const Release = lazy(async () => {
  await sleep(1000);
  return import(
    /* webpackChunkName: "Release" */ "./components/Release/Release"
  );
});

const ApplicationDemoWithoutSuspense = () => {
  const [component, setComponent] = useState("Backlog");
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
      }}
    >
      <div
        style={{
          marginRight: "1rem",
          paddingRight: "1rem",
          border: "1px solid grey",
        }}
      >
        <i>Sidebar</i>
        <div>
          <button onClick={() => setComponent("Backlog")}>Backlog</button>
        </div>
        <div>
          <button onClick={() => setComponent("Board")}>Board</button>
        </div>
        <div>
          <button onClick={() => setComponent("Release")}>Release</button>
        </div>
      </div>
      <div>
        <i>View</i>
        <div
          style={{
            height: "15rem",
          }}
        >
          {component === "Backlog" && <Backlog />}
          {component === "Board" && <Board />}
          {component === "Release" && <Release />}
        </div>
      </div>
    </div>
  );
};

export default ApplicationDemoWithoutSuspense;
