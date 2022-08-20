import React from "react";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";

const BlogLayout = ({ children }) => {
  return <Layout content={children} navigation={<Navigation />} />;
};

export default BlogLayout;
