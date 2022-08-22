import React from "react";
import styled, { css } from "styled-components";

const h1Css = css`
  font-size: 48px;
  line-height: 1.08349;
  font-weight: 700;
  letter-spacing: -0.003em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
`;

const StyledH1 = styled.h1`
  ${h1Css};
`;
const H1 = (props) => {
  return <StyledH1 {...props} />;
};

export default H1;
