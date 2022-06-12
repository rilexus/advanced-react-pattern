import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Code } from "../../ui/Code";

const Align = forwardRef(({ children }, ref) => {
  const [align, setAlight] = useState("start");

  useImperativeHandle(ref, () => ({
    // import React, { useImperativeHandle } from "react";
    left: () => {
      setAlight("start");
    },
    right: () => {
      setAlight("end");
    },
    center: () => {
      setAlight("center");
    },
    between: () => {
      setAlight("space-between");
    },
  }));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: align,
      }}
    >
      {children}
    </div>
  );
});

const Rect = ({ color = "red" }) => {
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",
        background: color,
      }}
    />
  );
};

const Component = () => {
  const alignElementRef = useRef();

  const left = () => {
    // The Align element exposes custom functions.
    alignElementRef.current.left();
  };

  const between = () => {
    alignElementRef.current.between();
  };

  const center = () => {
    alignElementRef.current.center();
  };

  const right = () => {
    alignElementRef.current.right();
  };

  return (
    <div>
      <Align ref={alignElementRef}>
        <Rect color={"red"} />
        <Rect color={"blue"} />
        <Rect color={"green"} />
      </Align>
      <div>
        <button onClick={left}>Left</button>
        <button onClick={center}>Center</button>
        <button onClick={between}>Between</button>
        <button onClick={right}>Right</button>
      </div>
    </div>
  );
};

const ImperativeHandler = () => {
  return (
    <div>
      <h1>Imperative Handler</h1>
      <Component />
      <Code>
        {"const Component = () => {\n" +
          "  const alignElementRef = useRef();\n" +
          "\n" +
          "  const left = () => {\n" +
          "    // The Align element exposes custom functions.\n" +
          "    alignElementRef.current.left();\n" +
          "  };\n" +
          "\n" +
          "  const between = () => {\n" +
          "    alignElementRef.current.between();\n" +
          "  };\n" +
          "\n" +
          "  const center = () => {\n" +
          "    alignElementRef.current.center();\n" +
          "  };\n" +
          "\n" +
          "  const right = () => {\n" +
          "    alignElementRef.current.right();\n" +
          "  };\n" +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          "      <Align ref={alignElementRef}>\n" +
          '        <Rect color={"red"} />\n' +
          '        <Rect color={"blue"} />\n' +
          '        <Rect color={"green"} />\n' +
          "      </Align>\n" +
          "      <div>\n" +
          "        <button onClick={left}>Left</button>\n" +
          "        <button onClick={center}>Center</button>\n" +
          "        <button onClick={between}>Between</button>\n" +
          "        <button onClick={right}>Right</button>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <Code>
        {"const Align = forwardRef(({ children }, ref) => {\n" +
          '  const [align, setAlight] = useState("start");\n' +
          "\n" +
          "  useImperativeHandle(ref, () => ({\n" +
          '    // import { useImperativeHandle } from "react";\n' +
          "    left: () => {\n" +
          '      setAlight("start");\n' +
          "    },\n" +
          "    right: () => {\n" +
          '      setAlight("end");\n' +
          "    },\n" +
          "    center: () => {\n" +
          '      setAlight("center");\n' +
          "    },\n" +
          "    between: () => {\n" +
          '      setAlight("space-between");\n' +
          "    },\n" +
          "  }));\n" +
          "\n" +
          "  return (\n" +
          "    <div\n" +
          "      style={{\n" +
          '        display: "flex",\n' +
          "        justifyContent: align,\n" +
          "      }}\n" +
          "    >\n" +
          "      {children}\n" +
          "    </div>\n" +
          "  );\n" +
          "});"}
      </Code>
    </div>
  );
};

export default ImperativeHandler;
