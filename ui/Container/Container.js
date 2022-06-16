import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  @media screen and (max-width: 575px) {
    min-width: 97vw;
  }

  @media screen and (min-width: 576px) {
    max-width: 1024px;
  }
`;
//@media screen and (min-width: 768px) {
//  max-width: 720px;
//}
//@media screen and (min-width: 992px) {
//  max-width: 960px;
//}
//@media screen and (min-width: 1200px) {
//  max-width: 900px;
//}
//@media screen and (min-width: 1400px) {
//  max-width: 1024px;
//}

const Container = ({ children }) => {
  return <Styled>{children}</Styled>;
};

export default Container;
