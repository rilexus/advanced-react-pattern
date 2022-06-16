import React, { useEffect, useState } from "react";
import fetchData from "./fetchData";

const Padding = ({ children }) => {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      {children}
    </div>
  );
};

const ComponentA = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((d) => {
      setData(d);
    });
  }, []);

  return (
    <div
      style={{
        height: "26rem",
        border: "1px solid black",
      }}
    >
      <div>Component A</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <Padding>{!data ? <div>Loading...</div> : <div>{children}</div>}</Padding>
    </div>
  );
};

const ComponentB = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((d) => {
      setData(d);
    });
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <div>Component B</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <Padding>{!data ? <div>Loading...</div> : <div>{children}</div>}</Padding>
    </div>
  );
};
const ComponentC = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((d) => {
      setData(d);
    });
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <div>Component C</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <Padding>{!data ? <div>Loading...</div> : <div>{children}</div>}</Padding>
    </div>
  );
};

const ComponentD = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((d) => {
      setData(d);
    });
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <div>Component D</div>
      <div>Data: {data && JSON.stringify(data)}</div>
      <Padding>{!data ? <div>Loading...</div> : <div>{children}</div>}</Padding>
    </div>
  );
};

const Waterfall = () => {
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

export default Waterfall;
