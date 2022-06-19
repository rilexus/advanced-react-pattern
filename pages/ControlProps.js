import React from "react";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";

const ControlProps = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <h1>Control Props</h1>
        </div>
      }
    ></Layout>
  );
};

export default ControlProps;
