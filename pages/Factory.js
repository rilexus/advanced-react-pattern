import React from "react";
import Code from "../ui/Code/Code";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";

const TextInput = () => {
  return <input type="text" />;
};

const NumberInput = () => {
  return <input type="number" />;
};

const CheckboxInput = () => {
  return <input type="checkbox" />;
};

const Input = () => {
  return <input type="checkbox" />;
};

const Checkbox = () => {
  return <input type="checkbox" />;
};

const InputFactory = ({ type }) => {
  switch (type) {
    case "text":
      return <TextInput />;
    case "number":
      return <NumberInput />;
    case "checkbox":
      return <CheckboxInput />;
    default:
      return null;
  }
};

const components = {
  ["input"]: Input,
  ["checkbox"]: Checkbox,
  ["number"]: NumberInput,
};

const DynamicComponent = ({ name, withProps }) => {
  if (!!components[name]) {
    const Component = components[name];
    return <Component {...withProps} />;
  }
  return null;
};

const SupportedHTMLTags = {
  div: true,
  span: true,
  li: true,
};

const createComponent = (tag) => {
  return tag in SupportedHTMLTags ? React.createElement(tag) : null;
};

(function () {
  Object.entries(SupportedHTMLTags).forEach(([tag]) => {
    createComponent[tag] = (props) => React.createElement(tag, props);
  });
})();

// const DivComponent = createComponent('div')
const DivComponent = createComponent.div({ prop: 1 });
const Component = () => {
  return <DivComponent />;
};

const Factory = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <h1>Factory</h1>
          <a href="https://github.com/rilexus/advanced-react-pattern/blob/master/src/components/factory/Factory.jsx">
            GitHub: Components Factory
          </a>
          <div>
            <h2>Switch</h2>
            <Code>
              {"const TextInput = () => {\n" +
                '  return <input type={"text"} />;\n' +
                "};\n" +
                "\n" +
                "const NumberInput = () => {\n" +
                '  return <input type={"numbe"} />;\n' +
                "};\n" +
                "\n" +
                "const CheckboxInput = () => {\n" +
                '  return <input type={"checkbox"} />;\n' +
                "};\n" +
                "\n" +
                "const Input = () => {\n" +
                '  return <input type={"checkbox"} />;\n' +
                "};\n" +
                "\n" +
                "const Checkbox = () => {\n" +
                '  return <input type={"checkbox"} />;\n' +
                "};\n" +
                "\n" +
                "const InputFactory = ({ type }) => {\n" +
                "  switch (type) {\n" +
                '    case "text":\n' +
                "      return <TextInput />;\n" +
                '    case "number":\n' +
                "      return <NumberInput />;\n" +
                '    case "checkbox":\n' +
                "      return <CheckboxInput />;\n" +
                "    default:\n" +
                "      return null;\n" +
                "  }\n" +
                "};"}
            </Code>
          </div>
          <div>
            <h2>Dynamic</h2>
            <Code>
              {"const components = {\n" +
                '  ["input"]: Input,\n' +
                '  ["checkbox"]: Checkbox,\n' +
                '  ["number"]: NumberInput,\n' +
                "};\n" +
                "\n" +
                "const DynamicComponent = ({ name, withProps }) => {\n" +
                "  if (!!components[name]) {\n" +
                "    const Component = components[name];\n" +
                "    return <Component {...withProps} />;\n" +
                "  }\n" +
                "  return null;\n" +
                "};"}
            </Code>
          </div>
          <div>
            <h2>Static</h2>
            <Code>
              {"const SupportedHTMLTags = {\n" +
                "  div: true,\n" +
                "  span: true,\n" +
                "  li: true,\n" +
                "};\n" +
                "\n" +
                "const createComponent = (tag) => {\n" +
                "  return tag in SupportedHTMLTags ? React.createElement(tag) : null;\n" +
                "};\n" +
                "\n" +
                "(function () {\n" +
                "  Object.entries(SupportedHTMLTags).forEach(([tag]) => {\n" +
                "    createComponent[tag] = (props) => React.createElement(tag, props);\n" +
                "  });\n" +
                "})();\n" +
                "\n" +
                "// const DivComponent = createComponent('div')\n" +
                "const DivComponent = createComponent.div({ prop: 1 });\n" +
                "const Component = () => {\n" +
                "  return <DivComponent />;\n" +
                "};"}
            </Code>
          </div>
        </div>
      }
    ></Layout>
  );
};

export default Factory;
