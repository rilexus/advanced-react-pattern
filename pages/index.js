import Navigation from "../components/Navigation/Navigation";
import Container from "../ui/Container/Container";
import Flex from "../ui/Flex/Flex";
import { Title } from "../ui/typography";
import { P } from "../ui/P";
import { Code } from "../ui/Code";
import { useEffect, useState } from "react";

// const render = (Component, node) => {};
//
// let state = null;
// const useState = (initialState) => {
//   if (state === null) {
//     // set state initially, once
//     state = initialState;
//   }
//   const setState = (newState) => {
//     // set new value to state
//     state = newState;
//     // re-render the Component on every setState call
//     render(<Component />, document.getElementById("root"));
//   };
//
//   // return current state value
//   return [state, setState];
// };
//
// const Component = () => {
//   const [state, setState] = useState("click me");
//   return (
//     <button
//       onClick={() => {
//         setState("clicked");
//       }}
//     >
//       {state}
//     </button>
//   );
// };
//
// render(<Component />, document.getElementById("root"));

// const Component = () => {
//   const [count, setCount] = useState(10);
//
//   if (count === 0) {
//     dispatch({ type: "some-action" });
//   }
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount((c) => c - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

// const Component = () => {
//   const [count, setCount] = useState(10);
//
//   useEffect(() => {
//     if (count === 0) {
//       dispatch({ type: "some-action" });
//     }
//   }, [count]);
//
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount((c) => c - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

// const Component = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
//
//   useEffect(() => {
//     setFullName(`${firstName} ${lastName}`);
//   }, [firstName, lastName]);
//
//   return (
//     <div>
//       <div>{fullName}</div>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => setFirstName(e.target.value)}
//           value={firstName}
//         />
//         <input
//           type="text"
//           onChange={(e) => setLastName(e.target.value)}
//           value={lastName}
//         />
//       </div>
//     </div>
//   );
// };

// const Component = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//
//   const fullName = `${firstName} ${lastName}`;
//
//   return (
//     <div>
//       <div>{fullName}</div>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => setFirstName(e.target.value)}
//           value={firstName}
//         />
//         <input
//           type="text"
//           onChange={(e) => setLastName(e.target.value)}
//           value={lastName}
//         />
//       </div>
//     </div>
//   );
// };

// const Component = () => {
//   return React.createElement(() => {
//     console.log("here");
//     return React.createElement("div", null, "Some");
//   }, null);
// };

const Component = () => {
  const [state, setState] = useState();
  if (condition) {
    const [otherState, setOther] = useState();
  }
  if (condition) {
    useEffect(() => {
      console.log("here");
    }, []);
  }
  return <div>Some</div>;
};

const App = () => {
  return (
    <Container>
      <Flex>
        <div
          style={{
            marginRight: "1rem",
          }}
        >
          <Navigation />
        </div>
        <div>
          <Title as={"h1"}>Advanced React Patterns</Title>
          <P>
            I would like to clarify a misconception that a lot of junior to mid
            level developers have regarding react components. Namely that a
            react component is not some magic, it is a regular javascript
            function and can be treated like one.
          </P>
          <P>
            The first moment of confusion for me was that one time as I spoke
            with a junior developer and I have proposed to change this
            implementation:
          </P>

          <Code>
            {"const Component = () => {\n" +
              "  const [count, setCount] = useState(10);\n" +
              "\n" +
              "  useEffect(() => {\n" +
              "    if (count === 0) {\n" +
              '      dispatch({ type: "some-action" });\n' +
              "    }\n" +
              "  }, [count]);\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button\n" +
              "        onClick={() => {\n" +
              "          setCount((c) => c - 1);\n" +
              "        }}\n" +
              "      >\n" +
              "        Decrement\n" +
              "      </button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>to this one:</P>
          <Code>
            {"const Component = () => {\n" +
              "  const [count, setCount] = useState(10);\n" +
              "\n" +
              "  if (count === 0) {\n" +
              '    dispatch({ type: "some-action" });\n' +
              "  }\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button\n" +
              "        onClick={() => {\n" +
              "          setCount((c) => c - 1);\n" +
              "        }}\n" +
              "      >\n" +
              "        Decrement\n" +
              "      </button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            essentially I have proposed to remove the useEffect from the
            component.
          </P>
          <P>
            At that moment I could sense the confusion of the developer. No!
            Thats not how it suppose to work. We need the useEffect, so react
            knows when the counter has changed. He says. But react knows when
            the counter has changed after you called the setState function. I
            reply. Yes true, but how does react suppose to know when to call the
            dispatch function? He says. It does no need to know that. I say. But
            then the dispatch will not be called ... . He says. We went like
            this for couple of minutes till I understood that he has a
            conception of components where he could execute calculations only in
            hooks like useMemo, useCallback, useEffect and functions defined
            inside the hook. The execution context of the components function is
            of limit!
          </P>
          <P>
            To make sure that I understood his misconception correctly, I have
            asked him to write a component, the user can enter his first name in
            one input, the last name in another and the component should display
            the full name.
          </P>
          <P>This was his solution:</P>
          <Code>
            {"const Component = () => {\n" +
              '  const [firstName, setFirstName] = useState("");\n' +
              '  const [lastName, setLastName] = useState("");\n' +
              '  const [fullName, setFullName] = useState("");\n' +
              "\n" +
              "  useEffect(() => {\n" +
              "    setFullName(`${firstName} ${lastName}`);\n" +
              "  }, [firstName, lastName]);\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <div>{fullName}</div>\n" +
              "      <div>\n" +
              "        <input\n" +
              '          type="text"\n' +
              "          onChange={(e) => setFirstName(e.target.value)}\n" +
              "          value={firstName}\n" +
              "        />\n" +
              "        <input\n" +
              '          type="text"\n' +
              "          onChange={(e) => setLastName(e.target.value)}\n" +
              "          value={lastName}\n" +
              "        />\n" +
              "      </div>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img
              src="https://media.giphy.com/media/SVgKToBLI6S6DUye1Y/giphy.gif"
              alt=""
            />
          </div>
          <P>I have proposed this solution</P>
          <Code>
            {"const Component = () => {\n" +
              '  const [firstName, setFirstName] = useState("");\n' +
              '  const [lastName, setLastName] = useState("");\n' +
              "\n" +
              "  const fullName = `${firstName} ${lastName}`;\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <div>{fullName}</div>\n" +
              "      <div>\n" +
              "        <input\n" +
              '          type="text"\n' +
              "          onChange={(e) => setFirstName(e.target.value)}\n" +
              "          value={firstName}\n" +
              "        />\n" +
              "        <input\n" +
              '          type="text"\n' +
              "          onChange={(e) => setLastName(e.target.value)}\n" +
              "          value={lastName}\n" +
              "        />\n" +
              "      </div>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>I could see gears spinning in his head.</P>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img
              src="https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif"
              alt=""
            />
          </div>
          <P>
            No wonders, the &quot;if statement&quot; did not make any sense to
            him.
          </P>
          <P>
            I think the confusion results because of the counterintuitive
            behavior of useState and other react hooks. Just imagine a
            javascript function will be called again because you call another
            function within it.
          </P>
          <P>
            I would like to provide a mental model to demonstrate that a react
            component is simply a javascript function.
          </P>
          <P>
            First, one needs to understand what happens with the jsx code during
            the build time. This code:
          </P>
          <Code>
            {"const ComponentA = () => {\n" +
              "  const [state, setState] = useState(1);\n" +
              '  console.log("here")\t\t\n' +
              "  return <div>Some</div>\n" +
              "}\n" +
              "\n" +
              "const Component = () => {\n" +
              "  return <ComponentA/>\n" +
              "}"}
          </Code>
          <P>is going to be transpiled to this code:</P>
          <Code>
            {"const ComponentA = () => {\n" +
              "  const [state, setState] = useState(1);\n" +
              '  console.log("here");\n' +
              '  return createElement("div", null, "Some");\n' +
              "};\n" +
              "\n" +
              "const Component = () => {\n" +
              "  return createElement(ComponentA, null);\n" +
              "};"}
          </Code>
          <P>We can rewrite this code like this:</P>
          <Code>
            {"const Component = () => {\n" +
              "  return createElement(() => {\n" +
              "    const [state, setState] = useState(1);\n" +
              '    console.log("here");\n' +
              '    return createElement("div", null, "Some");\n' +
              "  }, null);\n" +
              "};"}
          </Code>
          <P>We pass a function</P>
          <Code>
            {"() => {\n" +
              "  const [state, setState] = useState(1);\n" +
              '  console.log("here");\n' +
              '  return createElement("div", null, "Some");\n' +
              "}"}
          </Code>
          <P>
            to the "createElement" function. Essentially saying to react: Please
            call this function for us. Now everytime we call "setState", we say
            to react, please call this function again. Effectively, we say
            please call our component again.
          </P>
          <P>Take a look in to the implementation of this component:</P>
          <Code>
            {"const Component = () => {\n" +
              '  const [state, setState] = useState("click me");\n' +
              "  return (\n" +
              "    <button\n" +
              "      onClick={() => {\n" +
              '        setState("clicked");\n' +
              "      }}\n" +
              "    >\n" +
              "      {state}\n" +
              "    </button>\n" +
              "  );\n" +
              "};\n" +
              "\n" +
              'render(<Component />, document.getElementById("root"));'}
          </Code>
          <P>
            There is nothing unordinary about it, except that the useState is
            not from react. The implementation of this useState is as follows:
          </P>
          <Code>
            {"let state = null;\n" +
              "const useState = (initialState) => {\n" +
              "  if (state === null) {\n" +
              "    // set state initially, once\n" +
              "    state = initialState;\n" +
              "  }\n" +
              "  const setState = (newState) => {\n" +
              "    // set new value to state\n" +
              "    state = newState;\n" +
              "    // re-render the Component on every setState call\n" +
              '    render(<Component />, document.getElementById("root"));\n' +
              "  };\n" +
              "\n" +
              "  // return current state value\n" +
              "  return [state, setState];\n" +
              "};"}
          </Code>
          <P>
            As soon, as we call useState, react re-renders our component. This
            is not how react implements the useState, for sure. It should help
            to understand how react calls our component/function again as soon
            as we set new state and most importantly, that{" "}
            <b>we will get the new state on the next call.</b> As if we would
            define all our variables in the global scope.
          </P>
          <P>
            The context, the "space" between the component name and the return
            statement is ours. We can use its as we like, as if this a normal
            javascript function.
          </P>
          <Code>
            {"const Component = () => {\n" +
              "  // our space\n" +
              "  const [state, setState] = useState(1);\n" +
              "  // ...\n" +
              "  // .\n" +
              "  // . our space\n" +
              "  // .\n" +
              "  // ...\n" +
              '  console.log("here");\n' +
              "  // ...\n" +
              "  // .\n" +
              "  // . our space\n" +
              "  // .\n" +
              "  // ...\n" +
              '  return React.createElement("div", null, "Some");\n' +
              "};"}
          </Code>
          <P>
            The only rule we have to follow, is that we are not allowed to call
            hooks conditionally:
          </P>
          <Code>
            {"const Component = () => {\n" +
              "  const [state, setState] = useState();\n" +
              "  if(condition){\n" +
              "    const [otherState, setOther] = useState();\n" +
              "  }\n" +
              "  if(condition){\n" +
              "    useEffect(() => {\n" +
              "      console.log('here');\n" +
              "    }, [])\n" +
              "  }\n" +
              "  return <div>Some</div>\n" +
              "};"}
          </Code>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <video
              loop
              muted
              autoPlay
              src="https://media1.giphy.com/media/RHZtYfdXDL9Wqm5949/giphy360p.mp4?cid=790b761111a6898bf1576add44a3b3122f3591464130d5c2&rid=giphy360p.mp4&ct=v&cc=en"
            />
          </div>
          <P>
            The reason for this is, how react associates every hook with a
            component. If you call a "setState" function, react needs to know
            from which component it was called and re-render it.
          </P>
          <P>
            When the component mounts for the first time, react keeps track of
            how many hooks were called and associates those hooks with the
            current component. Association of hooks to a component happens on
            mount and de-association on unmount. If you call a hook
            conditionally react does not know to which component it belongs.
            This is a guaranteed bug.
          </P>
        </div>
      </Flex>
    </Container>
  );
};

export default App;
