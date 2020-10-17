import React from "react";
import AppBubble from "./components/app-bubble/AppBubble";
import styled from "@emotion/styled";
import { deltaFriction } from "./utils/delta-friction/delta-friction";
import { cubicOut } from "eases";

const Container = styled.div``;

const abs = (value) => (value < 0 ? value * -1 : value);

const AppScreen = () => {
  const containerWidth = 500;
  const containerHeight = 500;

  const scale = (x, y) => {
    const a = deltaFriction(-10, Math.min(x, y), containerWidth / 2);
    const res = cubicOut(a);
    console.log(res);

    return res;
  };

  const x = 100;
  const y = 10;

  return (
    <Container
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      }}
    >
      <AppBubble x={x} y={y} scale={scale(x, y)} />
      <AppBubble />
      <AppBubble />
      <AppBubble />
      <AppBubble />
      <AppBubble />
      <AppBubble />
    </Container>
  );
};

export default AppScreen;
