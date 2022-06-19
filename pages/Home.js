import React from "react";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <h1>React Advanced Patters</h1>
        </div>
      }
    ></Layout>
  );
};

export default Home;
