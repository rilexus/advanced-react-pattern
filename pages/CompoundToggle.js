import React, { createContext, useContext, useState } from "react";
import { Code } from "../ui/Code";
import Container from "../ui/Container/Container";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";

const ToggleContext = createContext({
  on: false,
  toggle: () => {},
});

function useToggleContext() {
  return useContext(ToggleContext);
}

export function Toggle({ children, initValue }) {
  const [on, setOn] = useState(() => initValue || false);

  const toggle = () => setOn((prevOn) => !prevOn); // save the ref

  return (
    <ToggleContext.Provider value={{ toggle, on }}>
      {children}
    </ToggleContext.Provider>
  );
}

function On({ children }) {
  const { on } = useToggleContext();
  return on ? <div>{children}</div> : null;
}

function Off({ children }) {
  const { on } = useToggleContext();
  return on ? null : <div>{children}</div>;
}

function Button({ children }) {
  const { toggle } = useToggleContext();
  return <button onClick={toggle}>{children}</button>;
}

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

const Compound = () => {
  return (
    <Toggle>
      <Toggle.On>On</Toggle.On>
      <Toggle.Off>Off</Toggle.Off>
      <Toggle.Button>Toggle</Toggle.Button>
    </Toggle>
  );
};

const CompoundToggle = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <h1>Compound Component</h1>
          <Compound />
          <Code>
            {"const Compound = () => {\n" +
              "  return (\n" +
              "    <Toggle>\n" +
              "      <Toggle.On>On</Toggle.On>\n" +
              "      <Toggle.Off>Off</Toggle.Off>\n" +
              "      <Toggle.Button>Toggle</Toggle.Button>\n" +
              "    </Toggle>\n" +
              "  );\n" +
              "};"}
          </Code>
          <Code>
            {"export function Toggle({ children, initValue }) {\n" +
              "  const [on, setOn] = useState(() => initValue || false);\n" +
              "\n" +
              "  const toggle = () => setOn((prevOn) => !prevOn); // save the ref\n" +
              "\n" +
              "  return (\n" +
              "    <ToggleContext.Provider value={{ toggle, on }}>\n" +
              "      {children}\n" +
              "    </ToggleContext.Provider>\n" +
              "  );\n" +
              "}"}
          </Code>
          <Code>
            {"function On({ children }) {\n" +
              "  const { on } = useToggleContext();\n" +
              "  return on ? <div>{children}</div> : null;\n" +
              "}\n" +
              "\n" +
              "function Off({ children }) {\n" +
              "  const { on } = useToggleContext();\n" +
              "  return on ? null : <div>{children}</div>;\n" +
              "}\n" +
              "\n" +
              "function Button({ children }) {\n" +
              "  const { toggle } = useToggleContext();\n" +
              "  return <button onClick={toggle}>{children}</button>;\n" +
              "}\n" +
              "\n" +
              "Toggle.On = On;\n" +
              "Toggle.Off = Off;\n" +
              "Toggle.Button = Button;"}
          </Code>
        </div>
      }
    ></Layout>
  );
};

export default CompoundToggle;
