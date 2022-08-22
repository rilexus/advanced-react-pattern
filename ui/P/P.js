import React from "react";
import styled, { css } from "styled-components";

const pCss = css`
  margin-bottom: 1.4211em;
  font-size: 1.125rem;
  color: #1a1a1a;

  line-height: 1.4211;
  font-weight: 400;
  letter-spacing: 0.012em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
`;

const StyledP = styled.p`
  ${pCss};
`;

const P = (props) => {
  return <StyledP {...props} style={props.style} />;
};

export default P;
