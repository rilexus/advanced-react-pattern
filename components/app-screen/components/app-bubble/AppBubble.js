import React from "react";
import styled from "styled";

const Bubble = styled.div`
  background-color: indianred;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
`;

const AppBubble = ({ x = 0, y = 0, scale = 1 }) => {
  return (
    <Bubble
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      }}
    />
  );
};

export default AppBubble;
