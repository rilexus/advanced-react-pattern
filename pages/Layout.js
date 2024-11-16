import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import Flex from "../ui/Flex/Flex";
import { createContext, useContext } from "react";
import { Code } from "../ui/Code";
import useCounter from "../hooks/useCounter/useCounter";

const RolesContext = createContext({});
const useRoles = (props, role) => {
  const allRoles = useContext(RolesContext);
  return {
    ...allRoles[role], // role specific props
    role,
    ...props,
  };
};

const Counter = ({ children, initValue = 0 }) => {
  const { value, increment, decrement } = useCounter(initValue);

  const roles = {
    value: {
      value,
    },
    increment: {
      onClick: increment,
    },
    decrement: {
      onClick: decrement,
    },
    error: {
      children: value < 0 ? "Error" : null,
    },
  };

  return (
    <RolesContext.Provider value={roles}>{children}</RolesContext.Provider>
  );
};

const CounterLayout = ({ value, increment, decrement, error }) => {
  return (
    <div>
      <Flex justify={"center"}>
        <div>{increment}</div>
        <div>{value}</div>
        <div>{decrement}</div>
      </Flex>
      <Flex justify={"center"}>{error}</Flex>
    </div>
  );
};

const Text = ({ role, children, ...props }) => {
  props = useRoles(props, role);
  if (role === "value") {
    return <div {...props}>{props.value}</div>;
  }
  if (props.children) {
    return <div {...props}>{props.children}</div>;
  }
  return <div {...props}>{children}</div>;
};

const Button = ({ role, children, ...props }) => {
  props = useRoles(props, role);
  return <button {...props}>{children}</button>;
};

const LayoutPage = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <main>
          <h1>Layout</h1>
          <Counter>
            <CounterLayout
              value={<Text role={"value"} />}
              decrement={<Button role={"increment"}>+</Button>}
              increment={<Button role={"decrement"}>-</Button>}
              error={<Text role={"error"} />}
            />
          </Counter>
          <Code>
            {"<Counter>\n" +
              "  <CounterLayout\n" +
              '    value={<Text role={"value"} />}\n' +
              '    decrement={<Button role={"increment"}>+</Button>}\n' +
              '    increment={<Button role={"decrement"}>-</Button>}\n' +
              '    description={<Text role={"error"} />}\n' +
              "  />\n" +
              "</Counter>"}
          </Code>
          <Code>
            {"<ThisWebsiteLayout\n" +
              "  navigation={<Navigation />}\n" +
              "  content={<main>\n" +
              "      <article>\n" +
              "        <h1>Layout</h1>\n" +
              '        <Code>{"..."}</Code>\n' +
              "      </article>\n" +
              "    </main>}\n" +
              "/>"}
          </Code>
        </main>
      }
    />
  );
};

export default LayoutPage;
