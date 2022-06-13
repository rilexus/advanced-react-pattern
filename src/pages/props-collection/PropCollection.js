import React, { useCallback, useState } from "react";
import { Code } from "../../ui/Code";
import Container from "../../ui/Container/Container";

const useInputController = () => {
  const [value, _setValue] = useState("");
  const [isDirty, setDirty] = useState(false);
  const [touched, setTouched] = useState(false);

  const setValue = useCallback(
    (e) => {
      const { value: _value } = e.target;
      _setValue(() => _value);
      if (!isDirty) setDirty(() => true);
    },
    [value]
  );

  const handleClick = useCallback(() => {
    if (!touched) setTouched(true);
  }, [touched]);

  const register = ({ onChange, ...rest }) => {
    return {
      value,
      onChange: (e) => {
        onChange && onChange(e);
        setValue(e);
      },
      onClick: handleClick,
      ...rest,
    };
  };

  return [value, register];
};

const Component2 = () => {
  const [value, register] = useInputController();
  return <input type="text" {...register()} />;
};

const InputController = ({ children }) => {
  const [value, _setValue] = useState("");
  const [isDirty, setDirty] = useState(false);
  const [touched, setTouched] = useState(false);

  const setValue = useCallback(
    (e) => {
      const { value: _value } = e.target;
      _setValue(() => _value);
      if (!isDirty) setDirty(() => true);
    },
    [value]
  );

  const handleClick = useCallback(() => {
    if (!touched) setTouched(true);
  }, [touched]);

  const register = ({ onChange, ...rest }) => {
    return {
      value,
      onChange: (e) => {
        onChange && onChange(e);
        setValue(e);
      },
      onClick: handleClick,
      ...rest,
    };
  };

  return children({ isDirty, touched, register });
};

const Component1 = () => {
  return (
    <InputController>
      {({ register, isDirty, touched }) => {
        return <input type="text" {...register()} />;
      }}
    </InputController>
  );
};

const PropsCollection = () => {
  return (
    <div>
      <Container>
        <div>
          <h1>Props Collection</h1>
        </div>
        <div>
          <h2>Render Props</h2>
          <Code>
            {"const Component = () => {\n" +
              "  return (\n" +
              "    <InputController>\n" +
              "      {({ register, isDirty, touched }) => {\n" +
              '        return <input type="text" {...register()} />;\n' +
              "      }}\n" +
              "    </InputController>\n" +
              "  );\n" +
              "};"}
          </Code>
          <Code>
            {"const InputController = ({ children }) => {\n" +
              '  const [value, _setValue] = useState("");\n' +
              "  const [isDirty, setDirty] = useState(false);\n" +
              "  const [touched, setTouched] = useState(false);\n" +
              "\n" +
              "  const setValue = useCallback(\n" +
              "    (e) => {\n" +
              "      const { value: _value } = e.target;\n" +
              "      _setValue(() => _value);\n" +
              "      if (!isDirty) setDirty(() => true);\n" +
              "    },\n" +
              "    [value]\n" +
              "  );\n" +
              "\n" +
              "  const handleClick = useCallback(() => {\n" +
              "    if (!touched) setTouched(true);\n" +
              "  }, [touched]);\n" +
              "\n" +
              "  const register = ({ onChange, ...rest }) => {\n" +
              "    return {\n" +
              "      value,\n" +
              "      onChange: (e) => {\n" +
              "        onChange && onChange(e);\n" +
              "        setValue(e);\n" +
              "      },\n" +
              "      onClick: handleClick,\n" +
              "      ...rest,\n" +
              "    };\n" +
              "  };\n" +
              "\n" +
              "  return children({ isDirty, touched, register });\n" +
              "};"}
          </Code>
        </div>
        <div>
          <h2>Hook</h2>
          <Code>
            {"const useInputController = () => {\n" +
              '  const [value, _setValue] = useState("");\n' +
              "  const [isDirty, setDirty] = useState(false);\n" +
              "  const [touched, setTouched] = useState(false);\n" +
              "\n" +
              "  const setValue = useCallback(\n" +
              "    (e) => {\n" +
              "      const { value: _value } = e.target;\n" +
              "      _setValue(() => _value);\n" +
              "      if (!isDirty) setDirty(() => true);\n" +
              "    },\n" +
              "    [value]\n" +
              "  );\n" +
              "\n" +
              "  const handleClick = useCallback(() => {\n" +
              "    if (!touched) setTouched(true);\n" +
              "  }, [touched]);\n" +
              "\n" +
              "  const register = ({ onChange, ...rest }) => {\n" +
              "    return {\n" +
              "      value,\n" +
              "      onChange: (e) => {\n" +
              "        onChange && onChange(e);\n" +
              "        setValue(e);\n" +
              "      },\n" +
              "      onClick: handleClick,\n" +
              "      ...rest,\n" +
              "    };\n" +
              "  };\n" +
              "\n" +
              "  return [value, register];\n" +
              "};\n"}
          </Code>
          <Code>
            {"const Component = () => {\n" +
              "  const [value, register] = useInputController();\n" +
              '  return <input type="text" {...register()} />;\n' +
              "};"}
          </Code>
        </div>
      </Container>
    </div>
  );
};
export default PropsCollection;
