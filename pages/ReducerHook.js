import React, { useState } from "react";
import { Code } from "../ui/Code";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import { P } from "../ui/P";

function reducer(state, action) {
  const { type } = action;
  if (type === "toggle-of") {
    return { ...state, on: false };
  }
  if (type === "toggle-on") {
    return { ...state, on: true };
  }
  return state;
}

const toggelOfActionCreator = () => {
  return { type: "toggle-of" };
};

function Toggle() {
  const [state, dispatch] = useReducer(reducer, { on: false });

  const handleClick = () => {
    const { on } = state;

    if (on) {
      dispatch(toggelOfActionCreator());
    } else {
      dispatch({ type: "toggle-on" });
    }
  };

  return (
    <div>
      {state.on ? "On" : "Off"}
      <br />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

// const Component = () => {
//   const [formValues, setFormValues] = useState({
//     city: "",
//     tel: "",
//     street: "",
//     name: "",
//     surname: "",
//   });
//   // ... add other user and address states
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/api/user", {
//       method: "post",
//       body: JSON.stringify(formValues),
//     });
//   };
//
//   const createOnChangeHandler = (name) => {
//     return (e) => {
//       const value = e.target.value;
//       setFormValues((state) => ({ ...state, [name]: value }));
//     };
//   };
//
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={formValues.name}
//           onChange={createOnChangeHandler("name")}
//         />
//         <input
//           type="text"
//           value={formValues.surname}
//           onChange={createOnChangeHandler("surname")}
//         />
//         <input
//           type="tel"
//           value={formValues.tel}
//           onChange={createOnChangeHandler("tel")}
//         />
//         <input
//           type="text"
//           value={formValues.street}
//           onChange={createOnChangeHandler("street")}
//         />
//         <input
//           type="text"
//           value={formValues.city}
//           onChange={createOnChangeHandler("city")}
//         />
//         <button type={"submit"}>Submit</button>
//       </form>
//     </div>
//   );
// };

// const Component = () => {
//   const [formValues, setFormValues] = useState({
//     city: {
//       error: null,
//       value: "",
//     },
//     tel: {
//       error: null,
//       value: "",
//     },
//     street: {
//       error: null,
//       value: "",
//     },
//     name: {
//       error: null,
//       value: "",
//     },
//     surname: {
//       error: null,
//       value: "",
//     },
//   });
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/api/user", {
//       method: "post",
//       body: JSON.stringify(formValues),
//     });
//   };
//
//   const validate = (state, value) => {
//     // TODO:
//     //  implement validation based on the current state and the current value,
//     //  return error string e.g. "Must of length ..."
//     return null;
//   };
//
//   const createOnChangeHandler = (name) => {
//     return (e) => {
//       const value = e.target.value;
//
//       const error = validate(formValues, value);
//
//       setFormValues((state) => ({
//         ...state,
//         [name]: { ...state[name], value, error },
//       }));
//     };
//   };
//
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={formValues.name.value}
//           onChange={createOnChangeHandler("name")}
//         />
//         <input
//           type="text"
//           value={formValues.surname.value}
//           onChange={createOnChangeHandler("surname")}
//         />
//         <input
//           type="tel"
//           value={formValues.tel.value}
//           onChange={createOnChangeHandler("tel")}
//         />
//         <input
//           type="text"
//           value={formValues.street.value}
//           onChange={createOnChangeHandler("street")}
//         />
//         <input
//           type="text"
//           value={formValues.city.value}
//           onChange={createOnChangeHandler("city")}
//         />
//         <button type={"submit"}>Submit</button>
//       </form>
//     </div>
//   );
// };

// const initialState = {
//   city: {
//     error: null,
//     value: "",
//   },
//   tel: {
//     error: null,
//     value: "",
//   },
//   street: {
//     error: null,
//     value: "",
//   },
//   name: {
//     error: null,
//     value: "",
//   },
//   surname: {
//     error: null,
//     value: "",
//   },
// };
//
// const validate = (state, value) => {
//   // TODO:
//   //  implement validation based on the current state and the current value,
//   //  return error string e.g. "Must of length ..."
//   return null;
// };
//
// const getNewState = (state, { name, value }) => {
//   const error = validate(state, value);
//
//   return {
//     ...state,
//     [name]: { ...state[name], value, error },
//   };
// };
//
// const Component = (reduceState = getNewState, state = initialState) => {
//   const [formValues, setFormValues] = useState(state);
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/api/user", {
//       method: "post",
//       body: JSON.stringify(formValues),
//     });
//   };
//
//   const createOnChangeHandler = (name) => {
//     return (e) => {
//       const value = e.target.value;
//       const newState = reduceState(formValues, { name, value });
//       setFormValues(newState);
//     };
//   };
//
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={formValues.name.value}
//           onChange={createOnChangeHandler("name")}
//         />
//         <input
//           type="text"
//           value={formValues.surname.value}
//           onChange={createOnChangeHandler("surname")}
//         />
//         <input
//           type="tel"
//           value={formValues.tel.value}
//           onChange={createOnChangeHandler("tel")}
//         />
//         <input
//           type="text"
//           value={formValues.street.value}
//           onChange={createOnChangeHandler("street")}
//         />
//         <input
//           type="text"
//           value={formValues.city.value}
//           onChange={createOnChangeHandler("city")}
//         />
//         <button type={"submit"}>Submit</button>
//       </form>
//     </div>
//   );
// };

const useStateReducer = (getNewState, initialState) => {
  const [state, setState] = useState(initialState);

  const reduceState = (action) => {
    const newState = getNewState(state, action);
    setState(newState);
  };

  return [state, reduceState];
};

const initialState = {
  city: {
    error: null,
    value: "",
  },
  tel: {
    error: null,
    value: "",
  },
  street: {
    error: null,
    value: "",
  },
  name: {
    error: null,
    value: "",
  },
  surname: {
    error: null,
    value: "",
  },
};

const validate = (state, value) => {
  // TODO:
  //  implement validation based on the current state and the current value,
  //  return error string e.g. "Must of length ..."
  return null;
};

// const getNewState = (state, { name, value }) => {
//   const error = validate(state, value);
//
//   return {
//     ...state,
//     [name]: { ...state[name], value, error },
//   };
// };
//
// const Component = (reducer = getNewState, state = initialState) => {
//   const [formValues, dispatch] = useStateReducer(reducer, state);
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/api/user", {
//       method: "post",
//       body: JSON.stringify(formValues),
//     });
//   };
//
//   const createOnChangeHandler = (name) => {
//     return (e) => {
//       const value = e.target.value;
//       dispatch({ name, value });
//     };
//   };
//
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={formValues.name.value}
//           onChange={createOnChangeHandler("name")}
//         />
//         {/*nothing changed here*/}
//       </form>
//     </div>
//   );
// };

const getNewState = (state, { type, name, value }) => {
  if (type === "onChange") {
    const error = validate(state, value);
    return {
      ...state,
      [name]: { ...state[name], value, error },
    };
  }
  if (type === "onBlur") {
    // TODO:
    //   handle onBlur event
    return state;
  }
};

const Component = (reducer = getNewState, state = initialState) => {
  const [formValues, dispatch] = useStateReducer(reducer, state);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify(formValues),
    });
  };

  const createOnChangeHandler = (name) => {
    return (e) => {
      const value = e.target.value;
      dispatch({ type: "onChange", name, value });
    };
  };

  const createOnClickHandler = (name) => {
    return (e) => {
      const value = e.target.value;
      dispatch({ type: "onClick", name, value });
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onClick={createOnClickHandler("name")}
          value={formValues.name.value}
          onChange={createOnChangeHandler("name")}
        />
        {/*nothing changed here*/}
      </form>
    </div>
  );
};

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

const ReducerHook = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <main>
            <article>
              <h1>Reducer Hook</h1>
              <P>
                <i>
                  After this article you will understand how the useReducer hook
                  works and why we need it.
                </i>
              </P>
              <P>
                The useReducer hook helps you with handling a big state object
                which data needs to be processed with complex logic. And it
                creates pretty, uniform interface to other components.
              </P>
              <P>Lets look at an example.</P>
              <Code>
                {"const Component = () => {\n" +
                  '  const [name, setName] = useState("");\n' +
                  '  const [surname, setSurname] = useState("");\n' +
                  '  const [tel, setTel] = useState("");\n' +
                  '  const [street, setStreet] = useState("");\n' +
                  '  const [city, setCity] = useState("");\n' +
                  "  // ... add other user and address states\n" +
                  "\n" +
                  "  const handleSubmit = (e) => {\n" +
                  "    e.preventDefault();\n" +
                  '    fetch("/api/user", {\n' +
                  '      method: "post",\n' +
                  "      body: JSON.stringify({\n" +
                  "        name,\n" +
                  "        surname,\n" +
                  "        tel,\n" +
                  "        city,\n" +
                  "        street,\n" +
                  "        /* add other values */\n" +
                  "      }),\n" +
                  "    });\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <div>\n" +
                  "      <form onSubmit={handleSubmit}>\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={name}\n" +
                  "          onChange={(e) => {\n" +
                  "            setName(e.target.value);\n" +
                  "          }}\n" +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={surname}\n" +
                  "          onChange={(e) => {\n" +
                  "            setSurname(e.target.value);\n" +
                  "          }}\n" +
                  "        />\n" +
                  "        <input\n" +
                  '          type="tel"\n' +
                  "          value={tel}\n" +
                  "          onChange={(e) => {\n" +
                  "            setTel(e.target.value);\n" +
                  "          }}\n" +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={street}\n" +
                  "          onChange={(e) => {\n" +
                  "            setStreet(e.target.value);\n" +
                  "          }}\n" +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={city}\n" +
                  "          onChange={(e) => {\n" +
                  "            setCity(e.target.value);\n" +
                  "          }}\n" +
                  "        />\n" +
                  '        <button type={"submit"}>Submit</button>\n' +
                  "      </form>\n" +
                  "    </div>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <P>
                As you can see this is a form. A form is usually not complicated
                but they are almost every time pretty complex from the
                programmer perspective. Take a moment and remember the times you
                needed to write validation logic for a form.
              </P>
              <img
                src={"https://media.giphy.com/media/Wh3ugh7bXTxUk/giphy.gif"}
                alt=""
              />
              <P>
                For this example ill stick with 5 inputs but in the reality, you
                we would have many more. Imagine options input, select inputs,
                file upload etc. Lets rewrite this component in such a way that
                its manageable and extendable.
              </P>
              <Code>
                {"const Component = () => {\n" +
                  "  const [formValues, setFormValues] = useState({\n" +
                  '    city: "",\n' +
                  '    tel: "",\n' +
                  '    street: "",\n' +
                  '    name: "",\n' +
                  '    surname: "",\n' +
                  "  });\n" +
                  "  // ... add other user and address states\n" +
                  "\n" +
                  "  const handleSubmit = (e) => {\n" +
                  "    e.preventDefault();\n" +
                  '    fetch("/api/user", {\n' +
                  '      method: "post",\n' +
                  "      body: JSON.stringify(formValues),\n" +
                  "    });\n" +
                  "  };\n" +
                  "\n" +
                  "  const createOnChangeHandler = (name) => {\n" +
                  "    return (e) => {\n" +
                  "      const value = e.target.value;\n" +
                  "      setFormValues((state) => ({ ...state, [name]: value }));\n" +
                  "    };\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <div>\n" +
                  "      <form onSubmit={handleSubmit}>\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.name}\n" +
                  '          onChange={createOnChangeHandler("name")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.surname}\n" +
                  '          onChange={createOnChangeHandler("surname")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="tel"\n' +
                  "          value={formValues.tel}\n" +
                  '          onChange={createOnChangeHandler("tel")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.street}\n" +
                  '          onChange={createOnChangeHandler("street")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.city}\n" +
                  '          onChange={createOnChangeHandler("city")}\n' +
                  "        />\n" +
                  '        <button type={"submit"}>Submit</button>\n' +
                  "      </form>\n" +
                  "    </div>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <P>
                That looks better. We have a single state and one single
                function to update it. But we still lack the validation tho.
              </P>
              <P>We could come up with something like this.</P>
              <Code>
                {"const Component = () => {\n" +
                  "  const [formValues, setFormValues] = useState({\n" +
                  "    city: {\n" +
                  "      error: null,\n" +
                  '      value: "",\n' +
                  "    },\n" +
                  "    tel: {\n" +
                  "      error: null,\n" +
                  '      value: "",\n' +
                  "    },\n" +
                  "    street: {\n" +
                  "      error: null,\n" +
                  '      value: "",\n' +
                  "    },\n" +
                  "    name: {\n" +
                  "      error: null,\n" +
                  '      value: "",\n' +
                  "    },\n" +
                  "    surname: {\n" +
                  "      error: null,\n" +
                  '      value: "",\n' +
                  "    },\n" +
                  "  });\n" +
                  "\n" +
                  "  const handleSubmit = (e) => {\n" +
                  "    e.preventDefault();\n" +
                  '    fetch("/api/user", {\n' +
                  '      method: "post",\n' +
                  "      body: JSON.stringify(formValues),\n" +
                  "    });\n" +
                  "  };\n" +
                  "\n" +
                  "  const validate = (state, value) => {\n" +
                  "    // TODO:\n" +
                  "    //  implement validation based on the current state and the current value,\n" +
                  '    //  return error string e.g. "Must of length ..."\n' +
                  "    return null;\n" +
                  "  };\n" +
                  "\n" +
                  "  const createOnChangeHandler = (name) => {\n" +
                  "    return (e) => {\n" +
                  "      const value = e.target.value;\n" +
                  "\n" +
                  "      const error = validate(formValues, value);\n" +
                  "\n" +
                  "      setFormValues((state) => ({\n" +
                  "        ...state,\n" +
                  "        [name]: { ...state[name], value, error },\n" +
                  "      }));\n" +
                  "    };\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <div>\n" +
                  "      <form onSubmit={handleSubmit}>\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.name.value}\n" +
                  '          onChange={createOnChangeHandler("name")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.surname.value}\n" +
                  '          onChange={createOnChangeHandler("surname")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="tel"\n' +
                  "          value={formValues.tel.value}\n" +
                  '          onChange={createOnChangeHandler("tel")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.street.value}\n" +
                  '          onChange={createOnChangeHandler("street")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.city.value}\n" +
                  '          onChange={createOnChangeHandler("city")}\n' +
                  "        />\n" +
                  '        <button type={"submit"}>Submit</button>\n' +
                  "      </form>\n" +
                  "    </div>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <P>
                I provide a validation function and the state is larger. As you
                can see, the component grows. And as soon as we start handling
                onClick and on onBlur events, because we do not like to display
                error messages as soon as the user makes a mistake, the
                component will explode in complexity. The state, the validation
                function and the event handler needs to go!
              </P>
              <Code>
                {"const initialState = {\n" +
                  "  city: {\n" +
                  "    error: null,\n" +
                  '    value: "",\n' +
                  "  },\n" +
                  "  tel: {\n" +
                  "    error: null,\n" +
                  '    value: "",\n' +
                  "  },\n" +
                  "  street: {\n" +
                  "    error: null,\n" +
                  '    value: "",\n' +
                  "  },\n" +
                  "  name: {\n" +
                  "    error: null,\n" +
                  '    value: "",\n' +
                  "  },\n" +
                  "  surname: {\n" +
                  "    error: null,\n" +
                  '    value: "",\n' +
                  "  },\n" +
                  "};\n" +
                  "\n" +
                  "const validate = (state, value) => {\n" +
                  "  // TODO:\n" +
                  "  //  implement validation based on the current state and the current value,\n" +
                  '  //  return error string e.g. "Must of length ..."\n' +
                  "  return null;\n" +
                  "};\n" +
                  "\n" +
                  "const getNewState = (state, { name, value }) => {\n" +
                  "  const error = validate(state, value);\n" +
                  "\n" +
                  "  return {\n" +
                  "    ...state,\n" +
                  "    [name]: { ...state[name], value, error },\n" +
                  "  };\n" +
                  "};\n" +
                  "\n" +
                  "const Component = (reduceState = getNewState, state = initialState) => {\n" +
                  "  const [formValues, setFormValues] = useState(state);\n" +
                  "\n" +
                  "  const handleSubmit = (e) => {\n" +
                  "    e.preventDefault();\n" +
                  '    fetch("/api/user", {\n' +
                  '      method: "post",\n' +
                  "      body: JSON.stringify(formValues),\n" +
                  "    });\n" +
                  "  };\n" +
                  "\n" +
                  "  const createOnChangeHandler = (name) => {\n" +
                  "    return (e) => {\n" +
                  "      const value = e.target.value;\n" +
                  "      const newState = reduceState(formValues, { name, value });\n" +
                  "      setFormValues(newState);\n" +
                  "    };\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <div>\n" +
                  "      <form onSubmit={handleSubmit}>\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.name.value}\n" +
                  '          onChange={createOnChangeHandler("name")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.surname.value}\n" +
                  '          onChange={createOnChangeHandler("surname")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="tel"\n' +
                  "          value={formValues.tel.value}\n" +
                  '          onChange={createOnChangeHandler("tel")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.street.value}\n" +
                  '          onChange={createOnChangeHandler("street")}\n' +
                  "        />\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.city.value}\n" +
                  '          onChange={createOnChangeHandler("city")}\n' +
                  "        />\n" +
                  '        <button type={"submit"}>Submit</button>\n' +
                  "      </form>\n" +
                  "    </div>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <P>
                I have moved out the initial state outside of the component and
                provide it as a default prop to the component. The validation
                and the state merging is outside now as well. Because of this
                the component and all the logic is pretty easy to unit test as
                too.
              </P>
              <img
                src="https://media.giphy.com/media/hXDrTueJWAscK3xWQ2/giphy.gif"
                alt=""
              />
              <P>
                We can refactor the useState and the reduceState function to
                something like this.
              </P>
              <Code>
                {"const useStateReducer = (getNewState, initialState) => {\n" +
                  "  const [state, setState] = useState(initialState);\n" +
                  "\n" +
                  "  const reduceState = (action) => {\n" +
                  "    const newState = getNewState(state, action);\n" +
                  "    setState(newState);\n" +
                  "  };\n" +
                  "\n" +
                  "  return [state, reduceState];\n" +
                  "};"}
              </Code>
              <P>
                Now we do not need to set the new state ourself. The custom hook
                does that for us. The form implementation looks like this now.
              </P>
              <Code>
                {"const Component = (reducer = getNewState, state = initialState) => {\n" +
                  "  const [formValues, dispatch] = useStateReducer(reducer, state);\n" +
                  "\n" +
                  "  const handleSubmit = (e) => {\n" +
                  "    e.preventDefault();\n" +
                  '    fetch("/api/user", {\n' +
                  '      method: "post",\n' +
                  "      body: JSON.stringify(formValues),\n" +
                  "    });\n" +
                  "  };\n" +
                  "\n" +
                  "  const createOnChangeHandler = (name) => {\n" +
                  "    return (e) => {\n" +
                  "      const value = e.target.value;\n" +
                  "      dispatch({ name, value });\n" +
                  "    };\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <div>\n" +
                  "      <form onSubmit={handleSubmit}>\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  "          value={formValues.name.value}\n" +
                  '          onChange={createOnChangeHandler("name")}\n' +
                  "        />\n" +
                  "        {/*nothing changed here*/}\n" +
                  "      </form>\n" +
                  "    </div>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <P>
                Now if we would like to handle the onClick and onBlur events as
                well, we can easily do that by adjusting the getState function
                and adding a new attribute to the dispatch object.
              </P>
              <Code>
                {"const getNewState = (state, { type, name, value }) => {\n" +
                  '  if (type === "onChange") {\n' +
                  "    const error = validate(state, value);\n" +
                  "    return {\n" +
                  "      ...state,\n" +
                  "      [name]: { ...state[name], value, error },\n" +
                  "    };\n" +
                  "  }\n" +
                  '  if (type === "onBlur") {\n' +
                  "    // TODO:\n" +
                  "    //   handle onBlur event\n" +
                  "    return state;\n" +
                  "  }\n" +
                  "};\n" +
                  "\n" +
                  "const Component = (reducer = getNewState, state = initialState) => {\n" +
                  "  const [formValues, dispatch] = useStateReducer(reducer, state);\n" +
                  "\n" +
                  "  const handleSubmit = (e) => {\n" +
                  "    e.preventDefault();\n" +
                  '    fetch("/api/user", {\n' +
                  '      method: "post",\n' +
                  "      body: JSON.stringify(formValues),\n" +
                  "    });\n" +
                  "  };\n" +
                  "\n" +
                  "  const createOnChangeHandler = (name) => {\n" +
                  "    return (e) => {\n" +
                  "      const value = e.target.value;\n" +
                  '      dispatch({ type: "onChange", name, value });\n' +
                  "    };\n" +
                  "  };\n" +
                  "\n" +
                  "  const createOnClickHandler = (name) => {\n" +
                  "    return (e) => {\n" +
                  "      const value = e.target.value;\n" +
                  '      dispatch({ type: "onClick", name, value });\n' +
                  "    };\n" +
                  "  };\n" +
                  "\n" +
                  "  return (\n" +
                  "    <div>\n" +
                  "      <form onSubmit={handleSubmit}>\n" +
                  "        <input\n" +
                  '          type="text"\n' +
                  '          onClick={createOnClickHandler("name")}\n' +
                  "          value={formValues.name.value}\n" +
                  '          onChange={createOnChangeHandler("name")}\n' +
                  "        />\n" +
                  "        {/*nothing changed here*/}\n" +
                  "      </form>\n" +
                  "    </div>\n" +
                  "  );"}
              </Code>
              <P>
                The only thing left to do is to rename the custom hook and we
                would get the implementation of the useReducer.
              </P>
              <Code>
                {"const useReducer = (reducer, initialState) => {\n" +
                  "  const [state, setState] = useState(initialState);\n" +
                  "\n" +
                  "  const dispatch = (action) => {\n" +
                  "    const newState = reducer(state, action);\n" +
                  "    setState(newState);\n" +
                  "  };\n" +
                  "\n" +
                  "  return [state, dispatch];\n" +
                  "};"}
              </Code>
              <P>
                That is the benefit of the useReducer hook: the component stays
                small and cute. All the heavy logic is outside of it. And
                everything is testable.
              </P>
              <img
                src="https://media.giphy.com/media/xSM46ernAUN3y/giphy.gif"
                alt=""
              />
            </article>
          </main>
        </div>
      }
    ></Layout>
  );
};

export default ReducerHook;
