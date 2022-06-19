import React from "react";
import { Code } from "../ui/Code";
import Container from "../ui/Container/Container";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";

function EventLoggerDecorator({ children }) {
  return React.Children.map(children, (child) => {
    const childrenOwnProps = child.props;

    const newProps = {}; // NOTE: you can use the "reduce" function here.
    Object.entries(childrenOwnProps).forEach(([propKey, propValue]) => {
      // Intercept all event handlers.
      if (propKey.startsWith("on")) {
        newProps[propKey] = (...args) => {
          // Log to the console.
          console.log(`[EventLogger]: ${propKey}`);
          // Call child event handler.
          propValue(...args);
        };
      }
    });

    return React.cloneElement(child, newProps);
  });
}

const BackgroundDecorator = ({ children }) => {
  return React.Children.map(children, (child) => {
    const style = {
      ...child.props.style,
      backgroundColor: "#aadef6",
    };
    return React.cloneElement(child, { style });
  });
};

// const Component = () => {
//   return (
//     <div>
//       <BackgroundDecorator>
//         <div>Any other element</div>
//         <br />
//         <div>Any other element</div>
//         <br />
//       </BackgroundDecorator>
//     </div>
//   );
// };

const Component = () => {
  return (
    <div>
      <BackgroundDecorator>
        <div
          onClick={() => {
            // On every click the console output will be:
            // * "[EventLogger]: onClick"
            // * "Click on div"
            console.log("Click on div");
          }}
        >
          Any other element
        </div>
        <br />
        <div>Any other element</div>
        <br />
      </BackgroundDecorator>
    </div>
  );
};

const Decorator = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <h1>Decorator</h1>
          <Component />
          <Code>
            {"const Component = () => {\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <BackgroundDecorator>\n" +
              "        <div>Any other element</div>\n" +
              "        <br />\n" +
              "        <div>Any other element</div>\n" +
              "        <br />\n" +
              "      </BackgroundDecorator>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <Code>
            {"const BackgroundDecorator = ({ children }) => {\n" +
              "  return React.Children.map(children, (child) => {\n" +
              "    const style = {\n" +
              "      ...child.props.style,\n" +
              '      backgroundColor: "#aadef6",\n' +
              "    };\n" +
              "    return React.cloneElement(child, { style });\n" +
              "  });\n" +
              "};"}
          </Code>
          <Code>
            {"const Component = () => {\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <EventLoggerDecorator>\n" +
              "        <div\n" +
              "          onClick={() => {\n" +
              "            // On every click the console output will be:\n" +
              '            // * "[EventLogger]: onClick"\n' +
              '            // * "Click on div"\n' +
              '            console.log("Click on div");\n' +
              "          }}\n" +
              "        >\n" +
              "          Any other element\n" +
              "        </div>\n" +
              "        <br />\n" +
              "        <div>Any other element</div>\n" +
              "        <br />\n" +
              "      </EventLoggerDecorator>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <Code>
            {"function EventLoggerDecorator({ children }) {\n" +
              "  return React.Children.map(children, (child) => {\n" +
              "    const childrenOwnProps = child.props;\n" +
              "\n" +
              '    const newProps = {}; // NOTE: you can use the "reduce" function here.\n' +
              "    Object.entries(childrenOwnProps).forEach(([propKey, propValue]) => {\n" +
              "      // Intercept all event handlers.\n" +
              '      if (propKey.startsWith("on")) {\n' +
              "        newProps[propKey] = (...args) => {\n" +
              "          // Log to the console.\n" +
              "          console.log(`[EventLogger]: ${propKey}`);\n" +
              "          // Call child event handler.\n" +
              "          propValue(...args);\n" +
              "        };\n" +
              "      }\n" +
              "    });\n" +
              "\n" +
              "    return React.cloneElement(child, newProps);\n" +
              "  });\n" +
              "}"}
          </Code>
        </div>
      }
    ></Layout>
  );
};

export default Decorator;
