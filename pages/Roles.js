import React, { useContext, useState } from "react";
import { createContext } from "react";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import { Code } from "../ui/Code";
import Flex from "../ui/Flex/Flex";

const RolesContext = createContext({});
const useRoles = (props, role) => {
  const allRoles = useContext(RolesContext);
  return {
    ...allRoles[role], // role specific props
    role,
    ...props,
  };
};

const Button = ({ children, role, ...props }) => {
  props = useRoles(props, role || "button");
  return <button {...props}>{children}</button>;
};

const Counter = ({ children, initValue = 0 }) => {
  const [value, setState] = useState(initValue);

  const roles = {
    input: {
      // props or the "input" role
      value,
      onChange: (e) => {
        const { value } = e.target;
        setState(() => Number(value));
      },
      type: "number",
    },
    increment: {
      // props or the "increment" role
      onClick: () => {
        // click handling function
        setState((s) => s + 1);
      },
    },
    decrement: {
      // props or the "decrement" role
      onClick: () => {
        // click handling function
        setState((s) => s - 1);
      },
    },
    overZeroWarning: {
      children: value > 0 ? "Over Zero" : null,
      style: {
        color: "red",
      },
    },
    underZeroWarning: {
      children: value < 0 ? "Under Zero" : null,
      style: {
        color: "blue",
      },
    },
  };

  return (
    <RolesContext.Provider value={roles}>{children}</RolesContext.Provider>
  );
};

const Input = ({ role, ...props }) => {
  props = useRoles(props, role || "input");
  return <input {...props} />;
};

const WarningText = ({ role, ...props }) => {
  props = useRoles(props, role);
  return <p {...props} />;
};

const Roles = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <main>
            <article>
              <h1>Role Pattern</h1>
              <Counter initValue={1}>
                <Flex justify={"center"}>
                  <Button role={"increment"}>+</Button>
                  <Input />
                  <Button role={"decrement"}>-</Button>
                </Flex>
                <Flex justify={"center"}>
                  <WarningText role={"underZeroWarning"} />
                  <WarningText role={"overZeroWarning"} />
                </Flex>
              </Counter>
              <Code>
                {"<Counter initValue={1}>\n" +
                  '  <Flex justify={"center"}>\n' +
                  '    <Button role={"increment"}>+</Button>\n' +
                  "    <Input />\n" +
                  '    <Button role={"decrement"}>-</Button>\n' +
                  "  </Flex>\n" +
                  '  <Flex justify={"center"}>\n' +
                  '    <WarningText role={"underZeroWarning"} />\n' +
                  '    <WarningText role={"overZeroWarning"} />\n' +
                  "  </Flex>\n" +
                  "</Counter>"}
              </Code>
              <Code>
                {"const Counter = ({ children, initValue = 0 }) => {\n" +
                  "  const [value, setState] = useState(initValue);\n" +
                  "\n" +
                  "  const roles = {\n" +
                  "    input: {\n" +
                  '      // props or the "input" role\n' +
                  "      value,\n" +
                  "      onChange: (e) => {\n" +
                  "        const { value } = e.target;\n" +
                  "        setState(() => Number(value));\n" +
                  "      },\n" +
                  '      type: "number",\n' +
                  "    },\n" +
                  "    increment: {\n" +
                  '      // props or the "increment" role\n' +
                  "      onClick: () => {\n" +
                  "        // click handling function\n" +
                  "        setState((s) => s + 1);\n" +
                  "      },\n" +
                  "    },\n" +
                  "    decrement: {\n" +
                  '      // props or the "decrement" role\n' +
                  "      onClick: () => {\n" +
                  "        // click handling function\n" +
                  "        setState((s) => s - 1);\n" +
                  "      },\n" +
                  "    },\n" +
                  "    overZeroWarning: {\n" +
                  '      children: value > 0 ? "Over Zero" : null,\n' +
                  "      style: {\n" +
                  '        color: "red",\n' +
                  "      },\n" +
                  "    },\n" +
                  "    underZeroWarning: {\n" +
                  '      children: value < 0 ? "Under Zero" : null,\n' +
                  "      style: {\n" +
                  '        color: "blue",\n' +
                  "      },\n" +
                  "    },\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <RolesContext.Provider value={roles}>{children}</RolesContext.Provider>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <Code>
                {"const RolesContext = createContext({});\n" +
                  "const useRoles = (props, role) => {\n" +
                  "  const allRoles = useContext(RolesContext);\n" +
                  "  return {\n" +
                  "    ...allRoles[role], // role specific props\n" +
                  "    role,\n" +
                  "    ...props,\n" +
                  "  };\n" +
                  "};"}
              </Code>
              <Code>
                {"const Button = ({ children, role, ...props }) => {\n" +
                  '  props = useRoles(props, role || "button");\n' +
                  "  return <button {...props}>{children}</button>;\n" +
                  "};"}
              </Code>
              <Code>
                {"const Input = ({ role, ...props }) => {\n" +
                  '  props = useRoles(props, role || "input");\n' +
                  "  return <input {...props} />;\n" +
                  "};"}
              </Code>
            </article>
          </main>
        </div>
      }
    />
  );
};

export default Roles;
