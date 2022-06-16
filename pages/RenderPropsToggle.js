import React, { useState } from "react";
import Code from "../ui/Code/Code";
import Container from "../ui/Container/Container";

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const onClick = () => setOn((oldOn) => !oldOn);

  return children({ on, onClick });
};

const Component = () => {
  return (
    <div>
      <Toggle default={true}>
        {({ on, onClick }) => {
          return <button onClick={onClick}>{on ? "On" : "Off"}</button>;
        }}
      </Toggle>
    </div>
  );
};

const RenderProps = () => {
  return (
    <Container>
      <h1>Render Props</h1>
      <Code>
        {"const Toggle = ({ children }) => {\n" +
          "  const [on, setOn] = useState(false);\n" +
          "  const onClick = () => setOn((oldOn) => !oldOn);\n" +
          "\n" +
          "  return children({ on, onClick });\n" +
          "};\n" +
          "\n" +
          "const Component = () => {\n" +
          "  return (\n" +
          "    <div>\n" +
          "      <Toggle default={true}>\n" +
          "        {({ on, onClick }) => {\n" +
          '          return <button onClick={onClick}>{on ? "On" : "Off"}</button>;\n' +
          "        }}\n" +
          "      </Toggle>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
    </Container>
  );
};

export default RenderProps;
