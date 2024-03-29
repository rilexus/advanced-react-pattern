import React, { useState } from "react";
import Container from "../../ui/Container/Container";
import styled from "styled-components";

const ArrowBack = ({
  stroke = "currentColor",
  fill = "currentColor",
  height = "1em",
  width = "1em",
  ...props
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      height={height}
      width={width}
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
    </svg>
  );
};

const StyledSidebar = styled.div`
  height: 100vh;
  background: rgba(255, 255, 255, 0.76);
  top: 0;
  backdrop-filter: blur(10px);
  left: 0;
  padding-left: 2rem;
  transition: transform 200ms;
  width: 300px;
  position: fixed;
`;

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState("open");

  const open = () => {
    setOpen("open");
  };
  const close = () => {
    setOpen("close");
  };

  const toggle = () => {
    if (isOpen === "open") {
      close();
    } else {
      open();
    }
  };

  return (
    <StyledSidebar
      style={{
        transform: `translate(${isOpen === "open" ? 0 : -350}px)`,
        boxShadow: `${
          isOpen === "open"
            ? `
            0 0px 6px -1px rgb(0 0 0/0.1),
            0 0px 4px -2px rgb(0 0 0/0.1)`
            : "none"
        }
           `,
      }}
    >
      <button
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "3rem",
          border: "1px solid #d8d8d8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          right: isOpen === "open" ? "-1rem" : "-5rem",
          transition: "transform 200ms",
          transform: `rotate(${isOpen === "open" ? 0 : 180}deg)`,
        }}
        onClick={toggle}
      >
        <ArrowBack height={"1rem"} width={"1rem"} />
      </button>
      {children}
    </StyledSidebar>
  );
};

const Layout = ({ navigation, content }) => {
  return (
    <div>
      <Container>
        <div>{content}</div>
        <Sidebar>{navigation}</Sidebar>
      </Container>
    </div>
  );
};

export default Layout;
