import React, { useContext, useState } from "react";
import { createContext } from "react";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import { Code } from "../ui/Code";
import Flex from "../ui/Flex/Flex";

const RolesContext = createContext({});

const useRoles = (props, role) => {
  const roleProps = useContext(RolesContext);
  return { ...roleProps[role], role, ...props };
};

const Button = ({ children, role, ...props }) => {
  props = useRoles(props, role || "button");
  return <button {...props}>{children}</button>;
};

const Counter = ({ children, initValue = 0 }) => {
  const [value, setState] = useState(initValue);

  const roles = {
    input: {
      value,
      onChange: (e) => {
        const { value } = e.target;
        setState(() => Number(value));
      },
      type: "number",
    },
    increment: {
      onClick: () => {
        setState((s) => s + 1);
      },
    },
    decrement: {
      onClick: () => {
        setState((s) => s - 1);
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

const Roles = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <main>
            <article>
              <h1>Role Pattern</h1>
              <Flex justify={"center"}>
                <Counter initValue={1}>
                  <Button role={"increment"}>+</Button>
                  <Input />
                  <Button role={"decrement"}>-</Button>
                </Counter>
              </Flex>
              <Code>
                {"\n" +
                  "<Counter initValue={1}>\n" +
                  '  <Button role={"increment"}>+</Button>\n' +
                  "  <Input />\n" +
                  '  <Button role={"decrement"}>-</Button>\n' +
                  "</Counter>"}
              </Code>
              <Code>
                {"const Counter = ({ children, initValue = 0 }) => {\n" +
                  "  const [value, setState] = useState(initValue);\n" +
                  "\n" +
                  "  const roles = {\n" +
                  "    input: {\n" +
                  "      value,\n" +
                  "      onChange: (e) => {\n" +
                  "        const { value } = e.target;\n" +
                  "        setState(() => Number(value));\n" +
                  "      },\n" +
                  '      type: "number",\n' +
                  "    },\n" +
                  "    increment: {\n" +
                  "      onClick: () => {\n" +
                  "        setState((s) => s + 1);\n" +
                  "      },\n" +
                  "    },\n" +
                  "    decrement: {\n" +
                  "      onClick: () => {\n" +
                  "        setState((s) => s - 1);\n" +
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
                  "\n" +
                  "const useRoles = (props, role) => {\n" +
                  "  const roleProps = useContext(RolesContext);\n" +
                  "  return { ...roleProps[role], role, ...props };\n" +
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
