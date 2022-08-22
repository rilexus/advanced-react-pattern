import React from "react";
import styled from "styled-components";
import { l, md, sm, xl } from "../css/media-queries";

const Styled = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 992px;
  ${sm`
    width: 99vw;
  `};
  ${md`
    width: 90vw;
  `};
  ${l`
    width: 70vw;
  `};
  ${xl`
    width: 40vw;
  `};
`;

const Container = ({ children }) => {
  return <Styled>{children}</Styled>;
};

export default Container;
