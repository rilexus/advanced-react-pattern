import React from "react";
import styled from "styled-components";

const Styled = styled.li`
  white-space: nowrap;
  line-height: 1.5;
`;

const Li = ({ children }) => {
  return <Styled>{children}</Styled>;
};

export default Li;
