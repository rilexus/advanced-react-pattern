import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import H1 from "../ui/H1/H1";
import { P } from "../ui/P";
import { Code } from "../ui/Code";

const useUndoState = (initialState) => {
  const [state, _setState] = useState({
    past: [],
    initialState: initialState,
    current: initialState,
    future: [],
  });

  const setState = (newState) => {
    _setState((oldState) => {
      let newPast = [];
      if (oldState.past.length <= 10) {
        newPast = [...oldState.past, oldState.current];
      } else {
        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;
        newPast = [...rest, oldState.current];
      }
      return {
        ...oldState,
        past: newPast,
        current:
          typeof newState === "function"
            ? newState(oldState.current)
            : newState,
        future: [],
      };
    });
  };

  const undo = () => {
    _setState((oldState) => {
      if (oldState.past.length === 0) {
        return oldState;
      }
      const newFuture = [...oldState.future, oldState.current];

      let newPast = [...oldState.past];
      const newState = newPast.pop();

      return {
        ...oldState,
        past: newPast,
        current: newState,
        future: newFuture,
      };
    });
  };

  const redo = () => {
    _setState((oldState) => {
      if (oldState.future.length === 0) {
        return oldState;
      }
      const newPast = [...oldState.past, oldState.current];

      const newFuture = [...oldState.future];
      const newState = newFuture.pop();

      return {
        ...oldState,
        past: newPast,
        current: newState,
        future: newFuture,
      };
    });
  };

  const reset = () => {
    _setState((oldState) => {
      return {
        ...oldState,
        past: [],
        current: state.initialState,
        future: [],
      };
    });
  };

  return [
    state.current,
    setState,
    {
      undo,
      redo,
      reset,
      canUndo: state.past.length > 0,
      canRedo: state.future.length > 0,
    },
  ];
};

const UndoExample = () => {
  const [value, setValue, { undo, redo, reset, canUndo, canRedo }] =
    useUndoState("");
  return (
    <div>
      <input
        placeholder={"Type"}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button disabled={!canUndo} onClick={undo}>
        undo
      </button>
      <button disabled={!canRedo} onClick={redo}>
        redo
      </button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

const useUndo = (initialState) => {
  const [state, _setState] = useState({
    current: initialState,
    past: [],
  });

  const undo = () => {
    _setState((oldState) => {
      if (oldState.past.length === 0) {
        return oldState;
      }
      const newPast = [...oldState.past];
      const pastValue = newPast.pop();

      return {
        ...oldState,
        past: newPast,
        current: pastValue,
      };
    });
  };

  const setState = (newState) => {
    _setState((oldState) => {
      const value =
        typeof newState === "function" ? newState(oldState) : newState;

      let newPast = [];
      if (oldState.past.length <= 10) {
        newPast = [...oldState.past];
      } else {
        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;
        newPast = [...rest];
      }

      return {
        ...oldState,
        past: [...newPast, oldState.current],
        current: value,
      };
    });
  };

  return [state.current, setState, { undo }];
};

const Component = () => {
  const [state, setState, { undo }] = useUndo("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={state} />
      <button onClick={undo}>undo</button>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <H1>Undo State</H1>
      <P>
        Very common requirements in some what complex web applications is the
        &ldquo;undo&ldquo; functionality. The user wants to undo the recent
        changes made in the application by pressing a button. You&apos;ll know
        this behaviour when you press &ldquo;command-z&ldquo; on mac or
        &ldquo;strg-z&ldquo; on windows.
      </P>
      <P>Example:</P>
      <UndoExample />
      <P>
        Translating this requirements in to react would means setting the
        current state of a component to the previous states.
      </P>
      <P>First we would need a component any state:</P>
      <Code>
        {"const Component = () => {\n" +
          '  const [state, setState] = useState("");\n' +
          "\n" +
          "  const handleChange = (e) => {\n" +
          "    setState(e.target.value);\n" +
          "  };\n" +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          '      <input type="text" onChange={handleChange} value={state} />\n' +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <P>
        When we set a new state, We would need to keep track of all the previous
        states:
      </P>
      <Code
        highlight={[
          { start: 3, end: 4 },
          { start: 10, end: 14 },
        ]}
      >
        {"const Component = () => {\n" +
          "  const [state, setState] = useState({\n" +
          '    current: "",\n' +
          "    past: [],\n" +
          "  });\n" +
          "\n" +
          "  const handleChange = (e) => {\n" +
          "    setState((oldState) => {\n" +
          "      const { value } = e.target;\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: [...oldState.past, oldState.current],\n" +
          "        current: value,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          '      <input type="text" onChange={handleChange} value={state.current} />\n' +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <P>
        We save all the past states by adding the current value from the
        oldState to the past array and in the same time add the new value to the
        current.
      </P>
      <Code highlight={[{ start: 12, end: 13 }]}>
        {"const Component = () => {\n" +
          "  const [state, setState] = useState({\n" +
          '    current: "",\n' +
          "    past: [],\n" +
          "  });\n" +
          "\n" +
          "  const handleChange = (e) => {\n" +
          "    setState((oldState) => {\n" +
          "      const { value } = e.target;\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: [...oldState.past, oldState.current],\n" +
          "        current: value,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          '      <input type="text" onChange={handleChange} value={state.current} />\n' +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <P>
        Now to undo the state change, we would need to take the last value from
        the past and save it in the current.
      </P>
      <Code
        highlight={[
          { start: 23, end: 24 },
          { start: 28, end: 29 },
        ]}
      >
        {"const Component = () => {\n" +
          "  const [state, setState] = useState({\n" +
          '    current: "",\n' +
          "    past: [],\n" +
          "  });\n" +
          "\n" +
          "  const handleChange = (e) => {\n" +
          "    setState((oldState) => {\n" +
          "      const { value } = e.target;\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: [...oldState.past, oldState.current],\n" +
          "        current: value,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "\n" +
          "  const undo = () => {\n" +
          "    setState((oldState) => {\n" +
          "      if (oldState.past.length === 0) {\n" +
          "        return oldState;\n" +
          "      }\n" +
          "      const newPast = [...oldState.past];\n" +
          "      const pastValue = newPast.pop();\n" +
          "\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: newPast,\n" +
          "        current: pastValue,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          '      <input type="text" onChange={handleChange} value={state.current} />\n' +
          "      <button onClick={undo}>undo</button>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <P>
        First we make sure that we have values in the past. If we do not, we
        return the old state. If we have past states, we break the reference to
        the old past array, pop the last value and save everything to the new
        state.
      </P>
      <P>
        While this works, we have an issue! The past array could grow until we
        run out of memory. We can prevent this from happening, by limiting the
        length of the past array. If the array grows beyond a certain limit, we
        remove values from the beginning of the array, effectively limiting the
        amount of past states.
      </P>
      <Code highlight={[{ start: 11, end: 17 }]}>
        {"const Component = () => {\n" +
          "  const [state, setState] = useState({\n" +
          '    current: "",\n' +
          "    past: [],\n" +
          "  });\n" +
          "\n" +
          "  const handleChange = (e) => {\n" +
          "    setState((oldState) => {\n" +
          "      const { value } = e.target;\n" +
          "\n" +
          "      let newPast = [];\n" +
          "      if (oldState.past.length <= 10) {\n" +
          "        newPast = [...oldState.past];\n" +
          "      } else {\n" +
          "        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;\n" +
          "        newPast = [...rest];\n" +
          "      }\n" +
          "\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: [...newPast, oldState.current],\n" +
          "        current: value,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "\n" +
          "  const undo = () => {\n" +
          "    setState((oldState) => {\n" +
          "      if (oldState.past.length === 0) {\n" +
          "        return oldState;\n" +
          "      }\n" +
          "      const newPast = [...oldState.past];\n" +
          "      const pastValue = newPast.pop();\n" +
          "\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: newPast,\n" +
          "        current: pastValue,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "  \n" +
          "  return (\n" +
          "    <div>\n" +
          '      <input type="text" onChange={handleChange} value={state.current} />\n' +
          "      <button onClick={undo}>undo</button>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <P>
        If we have more then 10 past states, we remove the first (the oldest)
        state, preventing the past from growing.
      </P>
      <P>
        The current implementation works. Lets make this code reusable and move
        it in to a dedicated hook.
      </P>
      <Code highlight={[{ start: 48, end: 48 }]}>
        {"const useUndo = (initialState) => {\n" +
          "  const [state, _setState] = useState({\n" +
          "    current: initialState,\n" +
          "    past: [],\n" +
          "  });\n" +
          "\n" +
          "  const undo = () => {\n" +
          "    _setState((oldState) => {\n" +
          "      if (oldState.past.length === 0) {\n" +
          "        return oldState;\n" +
          "      }\n" +
          "      const newPast = [...oldState.past];\n" +
          "      const pastValue = newPast.pop();\n" +
          "\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: newPast,\n" +
          "        current: pastValue,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "\n" +
          "  const setState = (newState) => {\n" +
          "    _setState((oldState) => {\n" +
          "      const value =\n" +
          '        typeof newState === "function" ? newState(oldState) : newState;\n' +
          "\n" +
          "      let newPast = [];\n" +
          "      if (oldState.past.length <= 10) {\n" +
          "        newPast = [...oldState.past];\n" +
          "      } else {\n" +
          "        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;\n" +
          "        newPast = [...rest];\n" +
          "      }\n" +
          "\n" +
          "      return {\n" +
          "        ...oldState,\n" +
          "        past: [...newPast, oldState.current],\n" +
          "        current: value,\n" +
          "      };\n" +
          "    });\n" +
          "  };\n" +
          "\n" +
          "  return [state.current, { setState, undo }];\n" +
          "};\n" +
          "\n" +
          "const Component = () => {\n" +
          '  const [state, { setState, undo }] = useUndo("");\n' +
          "\n" +
          "  const handleChange = (e) => {\n" +
          "    setState(e.target.value);\n" +
          "  };\n" +
          "\n" +
          "  return (\n" +
          "    <div>\n" +
          '      <input type="text" onChange={handleChange} value={state} />\n' +
          "      <button onClick={undo}>undo</button>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
      <P>
        It would be great to redo changes again. If the user undoes changes,
        goes in to the past, it would be great to go in to the future again to
        the last changes. I would encourage you to implement this feature
        yourself. If youre interested in seeing the end result, feel free to
        open the drop down.
      </P>
      <details>
        <summary
          style={{
            cursor: "pointer",
          }}
        >
          End result
        </summary>
        <Code>
          {"const useUndo = (initialState) => {\n" +
            "  const [state, _setState] = useState({\n" +
            "    past: [],\n" +
            "    initialState: initialState,\n" +
            "    current: initialState,\n" +
            "    future: [],\n" +
            "  });\n" +
            "\n" +
            "  const setState = (newState) => {\n" +
            "    _setState((oldState) => {\n" +
            "      let newPast = [];\n" +
            "      if (oldState.past.length <= 10) {\n" +
            "        newPast = [...oldState.past, oldState.current];\n" +
            "      } else {\n" +
            "        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;\n" +
            "        newPast = [...rest, oldState.current];\n" +
            "      }\n" +
            "      return {\n" +
            "        ...oldState,\n" +
            "        past: newPast,\n" +
            "        current:\n" +
            '          typeof newState === "function"\n' +
            "            ? newState(oldState.current)\n" +
            "            : newState,\n" +
            "        future: [],\n" +
            "      };\n" +
            "    });\n" +
            "  };\n" +
            "\n" +
            "  const undo = () => {\n" +
            "    _setState((oldState) => {\n" +
            "      if (oldState.past.length === 0) {\n" +
            "        return oldState;\n" +
            "      }\n" +
            "      const newFuture = [...oldState.future, oldState.current];\n" +
            "\n" +
            "      let newPast = [...oldState.past];\n" +
            "      const newState = newPast.pop();\n" +
            "\n" +
            "      return {\n" +
            "        ...oldState,\n" +
            "        past: newPast,\n" +
            "        current: newState,\n" +
            "        future: newFuture,\n" +
            "      };\n" +
            "    });\n" +
            "  };\n" +
            "\n" +
            "  const redo = () => {\n" +
            "    _setState((oldState) => {\n" +
            "      if (oldState.future.length === 0) {\n" +
            "        return oldState;\n" +
            "      }\n" +
            "      const newPast = [...oldState.past, oldState.current];\n" +
            "\n" +
            "      const newFuture = [...oldState.future];\n" +
            "      const newState = newFuture.pop();\n" +
            "\n" +
            "      return {\n" +
            "        ...oldState,\n" +
            "        past: newPast,\n" +
            "        current: newState,\n" +
            "        future: newFuture,\n" +
            "      };\n" +
            "    });\n" +
            "  };\n" +
            "\n" +
            "  const reset = () => {\n" +
            "    _setState((oldState) => {\n" +
            "      return {\n" +
            "        ...oldState,\n" +
            "        past: [],\n" +
            "        current: state.initialState,\n" +
            "        future: [],\n" +
            "      };\n" +
            "    });\n" +
            "  };\n" +
            "\n" +
            "  return [\n" +
            "    state.current,\n" +
            "    {\n" +
            "      setState,\n" +
            "      undo,\n" +
            "      redo,\n" +
            "      reset,\n" +
            "      canUndo: state.past.length > 0,\n" +
            "      canRedo: state.future.length > 0,\n" +
            "    },\n" +
            "  ];\n" +
            "};"}
        </Code>
      </details>
    </div>
  );
};

const UndoState = () => {
  return <Layout navigation={<Navigation />} content={<Content />} />;
};

export default UndoState;
