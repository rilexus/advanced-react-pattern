import React from "react";
import fetchData from "./fetchData";
import { prefetch } from "../../utils/prefetch";

const useData = prefetch(
  async () => fetchData() /* start fetching users before react kicks in */
);

const useDataB = prefetch(
  async () => fetchData() /* start fetching users before react kicks in */
);

const useDataC = prefetch(
  async () => fetchData() /* start fetching users before react kicks in */
);
const useDataD = prefetch(
  async () => fetchData() /* start fetching users before react kicks in */
);

const ComponentA = ({ children }) => {
  const [data] = useData();

  return (
    <div
      style={{
        height: "34rem",
        border: "1px solid black",
      }}
    >
      <div>Component A</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <div style={{ padding: "3rem" }}>
        {!data ? <div>Loading...</div> : <div>{children}</div>}
      </div>
    </div>
  );
};

const ComponentB = ({ children }) => {
  const [data] = useDataB();

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <div>Component B</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <div style={{ padding: "3rem" }}>
        {!data ? <div>Loading...</div> : <div>{children}</div>}
      </div>
    </div>
  );
};
const ComponentC = ({ children }) => {
  const [data] = useDataC();

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <div>Component C</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <div style={{ padding: "3rem" }}>
        {!data ? <div>Loading...</div> : <div>{children}</div>}
      </div>
    </div>
  );
};

const ComponentD = ({ children }) => {
  const [data] = useDataD();

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <div>Component D</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <div style={{ padding: "3rem" }}>
        {!data ? <div>Loading...</div> : <div>{children}</div>}
      </div>
    </div>
  );
};

const ParallelFetch = () => {
  return (
    <div>
      <ComponentA>
        <ComponentB>
          <ComponentC>
            <ComponentD />
          </ComponentC>
        </ComponentB>
      </ComponentA>
    </div>
  );
};

export default ParallelFetch;
