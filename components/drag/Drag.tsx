import React, { useState } from "react";

const Drag = () => {
  const [event, setEvent] = useState("");
  const [printValue, setPrintValue] = useState("");

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    setEvent(e.type);
    setPrintValue(JSON.stringify(e.touches));
  };

  const handleTouchMove = (e) => {
    const { type } = e;
    const clientY = e.clientY || e.touches[0].clientY;
    const clientX = e.clientX || e.touches[0].clientX;

    setEvent(type);
    setPrintValue(`${clientY}`);

    setPos({ x: clientX, y: clientY });
  };

  const handleTouchEnd = (e) => {
    setEvent(e.type);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div>{event}</div>
      <div>{printValue}</div>
      <div
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        draggable={true}
        style={{
          width: "50px",
          height: "50px",
          position: "absolute",
          top: `${pos.y}px`,
          left: `${pos.x}px`,
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export { Drag };
