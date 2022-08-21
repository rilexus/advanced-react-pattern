import React, { createContext, useContext, useEffect, useState } from "react";
import Code from "../ui/Code/Code";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import { P } from "../ui/P";

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const onClick = () => setOn((oldOn) => !oldOn);

  return children({ on, onClick });
};

// const Component = () => {
//   return (
//     <div>
//       <Toggle default={true}>
//         {({ on, onClick }) => {
//           return <button onClick={onClick}>{on ? "On" : "Off"}</button>;
//         }}
//       </Toggle>
//     </div>
//   );
// };

const func = ({ render }) => {
  const getValue = () => 41;

  return render({ getValue });
};

const renderToString = ({ getValue }) => {
  return `${getValue() + 1}`;
};

const renderToHTML = ({ getValue }) => {
  return `<div>${getValue() + 1}</div>`;
};

const result1 = func({ render: renderToString });

const result2 = func({ render: renderToHTML });

// const User = ({ render }) => {
//   const [state, setState] = useState({});
//   useEffect(() => {
//     fetchUserData().then((data) => setState(data));
//   }, []);
//
//   return render(state);
// };
//
// const Component = () => {
//   const renderTable = (user) => {
//     return (
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Surname</th>
//           {/* TODO: add more th elements here*/}
//         </tr>
//         <tr>
//           <td>{user.name}</td>
//           <td>{user.surname}</td>
//         </tr>
//       </table>
//     );
//   };
//   const renderToCard = (user) => {
//     return (
//       <div className={"card"}>
//         <div>{user.name}</div>
//         <div>{user.surname}</div>
//       </div>
//     );
//   };
//   return <User render={renderTable} />;
// };

const TabsContext = createContext(["", () => {}]);
const useTabsContext = () => useContext(TabsContext);

const Tabs = ({ children, initialTab }) => {
  const state = useState(initialTab);
  return <TabsContext.Provider value={state}>{children}</TabsContext.Provider>;
};

const TabsButton = ({ children }) => {
  const [, setActiveTab] = useTabsContext();
  return children(setActiveTab);
};

const TabView = ({ children, id }) => {
  const [activeTab] = useTabsContext();

  return id === activeTab ? children : null;
};

const Component = () => {
  return (
    <Tabs initialTab={"firstTab"}>
      <div>
        <TabsButton>
          {(activate) => {
            return (
              <div>
                <button onClick={() => activate("firstTab")}>First Tab</button>
              </div>
            );
          }}
        </TabsButton>
        <TabsButton>
          {(activate) => {
            return (
              <div>
                <button onClick={() => activate("secondTab")}>
                  Second Tab
                </button>
              </div>
            );
          }}
        </TabsButton>
      </div>
      <div>
        <TabView id={"firstView"}>First View</TabView>
        <TabView id={"secondView"}>Second View</TabView>
      </div>
    </Tabs>
  );
};

const RenderProps = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <div>
          <main>
            <article>
              <h1>Render Props</h1>
              <P>
                <i>
                  After this article you will understand what a render prop is,
                  how and when to use it.
                </i>
              </P>
              <P>Take a look at the example. What does the function return?</P>
              <Code>
                {"const func = (call) => {\n" +
                  "  return call();\n" +
                  "};\n" +
                  "\n" +
                  "const result = func(() => 42);\n" +
                  "console.log(result);"}
              </Code>
              <P>In case you do not know, the result is 42.</P>
              <P>How about this code? What is the result?</P>
              <Code>
                {"const func = ({ call }) => {\n" +
                  "  return call();\n" +
                  "};\n" +
                  "\n" +
                  "const result = func({ call: () => 42 });\n" +
                  "console.log(result);"}
              </Code>
              <P>
                The result is the same. The difference between this and the
                previous example is how the function &quot;call&quot; is passed.
                In the first example I pass a function as the first argument. In
                the second example, I pass an object with the property
                &quot;call&quot;, which is a function.
              </P>
              <P>What is the result in this example?</P>
              <Code>
                {"const func = ({ call }) => {\n" +
                  "  return call(41);\n" +
                  "};\n" +
                  "\n" +
                  "const result = func({ call: (number) => number + 1 });\n" +
                  "console.log(result);"}
              </Code>
              <P>
                The result is 42, still. Now instead of the &quot;call&quot;
                function returning a value 42, I pass a number to the function
                from within the &quot;func&quot; function.
              </P>
              <P>For the next example, I refactor the code.</P>
              <Code>
                {"const func = ({ call }) => {\n" +
                  "  return call(41);\n" +
                  "};\n" +
                  "\n" +
                  "const call = (number) => {\n" +
                  "  return number + 1;\n" +
                  "};\n" +
                  "\n" +
                  "const result = func({ call });\n" +
                  "console.log(result);"}
              </Code>
              <P>What is the result of the next example?</P>
              <Code>
                {"const func = ({ call }) => {\n" +
                  "  const getNumber = () => 41;\n" +
                  "  \n" +
                  "  return call({getNumber});\n" +
                  "};\n" +
                  "\n" +
                  "const call = ({getNumber}) => {\n" +
                  "  return getNumber() + 1;\n" +
                  "};\n" +
                  "\n" +
                  "const result = func({ call });\n" +
                  "console.log(result);"}
              </Code>
              <P>
                This time instead of passing the number directly, I pass a
                function, which returns the number. The result is 42.
              </P>
              <P>
                Why all this? Ill rename some functions to make the purpose a
                little more clear.
              </P>
              <Code>
                {"const func = ({ render }) => {\n" +
                  "  const getValue = () => 41;\n" +
                  "\n" +
                  "  return render({ getValue });\n" +
                  "};\n" +
                  "\n" +
                  "const renderToString = ({ getValue }) => {\n" +
                  "  return `${getValue() + 1}`;\n" +
                  "};\n" +
                  "\n" +
                  "const renderToHTML = ({ getValue }) => {\n" +
                  "  return `<div>${getValue() + 1}</div>`;\n" +
                  "};\n" +
                  "\n" +
                  "const result1 = func({ render: renderToString });\n" +
                  "console.log(result1);\n" +
                  "\n" +
                  "const result2 = func({ render: renderToHTML });\n" +
                  "console.log(result2);"}
              </Code>
              <P>
                As you can see, one function returns a string, the other returns
                HTML. The results are different while the &quot;func&quot;
                function is the same. The &quot;func&quot; function contains
                data and logic and does not care about how the data is rendered.
                This is the job of the &quot;renderToString&quot; and the
                &quot;renderToHTML&quot; function.
              </P>
              <P>
                How does this transfers to the react you might ask. Next
                example.
              </P>
              <Code>
                {"const User = ({ render }) => {\n" +
                  "  const [state, setState] = useState({});\n" +
                  "  useEffect(() => {\n" +
                  "    fetchUserData().then((data) => setState(data));\n" +
                  "  }, []);\n" +
                  "\n" +
                  "  return render(state);\n" +
                  "};\n" +
                  "\n" +
                  "const Component = () => {\n" +
                  "  const renderTable = (user) => {\n" +
                  "    return (\n" +
                  "      <table>\n" +
                  "        <tr>\n" +
                  "          <th>Name</th>\n" +
                  "          <th>Surname</th>\n" +
                  "          {/* TODO: add more th elements here*/}\n" +
                  "        </tr>\n" +
                  "        <tr>\n" +
                  "          <td>{user.name}</td>\n" +
                  "          <td>{user.surname}</td>\n" +
                  "        </tr>\n" +
                  "      </table>\n" +
                  "    );\n" +
                  "  };\n" +
                  "  const renderToCard = (user) => {\n" +
                  "    return (\n" +
                  '      <div className={"card"}>\n' +
                  "        <div>{user.name}</div>\n" +
                  "        <div>{user.surname}</div>\n" +
                  "      </div>\n" +
                  "    );\n" +
                  "  };\n" +
                  "  return <User render={renderTable} />;\n" +
                  "};"}
              </Code>
              <P>
                The &quot;User&quot; component looks similar to the
                &quot;func&quot; function. It gets a function &quot;render&quot;
                as a prop, passes data to it and returns whatever the
                &quot;render&quot; function returns. It does not care how the
                data is rendered. It is simply a container for data and logic.
              </P>
              <P>
                One concrete and good example of this pattern is the
                &quot;Tabs&quot; component.
              </P>
              <Code>
                {'const TabsContext = createContext(["", () => {}]);\n' +
                  "const useTabsContext = () => useContext(TabsContext);\n" +
                  "\n" +
                  "const Tabs = ({ children, initialTab }) => {\n" +
                  "  const state = useState(initialTab);\n" +
                  "  return <TabsContext.Provider value={state}>{children}</TabsContext.Provider>;\n" +
                  "};\n" +
                  "\n" +
                  "const TabsButton = ({ children }) => {\n" +
                  "  const [, setActiveTab] = useTabsContext();\n" +
                  "  return children(setActiveTab);\n" +
                  "};\n" +
                  "\n" +
                  "const TabView = ({ children, id }) => {\n" +
                  "  const [activeTab] = useTabsContext();\n" +
                  "\n" +
                  "  return id === activeTab ? children : null;\n" +
                  "};\n" +
                  "\n" +
                  "const Component = () => {\n" +
                  "  return (\n" +
                  '    <Tabs initialTab={"firstTab"}>\n' +
                  "      <div>\n" +
                  "        <TabsButton>\n" +
                  "          {(activate) => {\n" +
                  "            return (\n" +
                  "              <div>\n" +
                  '                <button onClick={() => activate("firstTab")}>First Tab</button>\n' +
                  "              </div>\n" +
                  "            );\n" +
                  "          }}\n" +
                  "        </TabsButton>\n" +
                  "        <TabsButton>\n" +
                  "          {(activate) => {\n" +
                  "            return (\n" +
                  "              <div>\n" +
                  '                <button onClick={() => activate("secondTab")}>\n' +
                  "                  Second Tab\n" +
                  "                </button>\n" +
                  "              </div>\n" +
                  "            );\n" +
                  "          }}\n" +
                  "        </TabsButton>\n" +
                  "      </div>\n" +
                  "      <div>\n" +
                  '        <TabView id={"firstView"}>First View</TabView>\n' +
                  '        <TabView id={"secondView"}>Second View</TabView>\n' +
                  "      </div>\n" +
                  "    </Tabs>\n" +
                  "  );\n" +
                  "};"}
              </Code>
              <P>
                Its up to the programmer to decide how to render the tab button.
                If you would like encapsulate logic and delegate the UI, the
                render props pattern can be the way to go. Although you should
                consider using a custom hook.
              </P>
            </article>
          </main>
        </div>
      }
    ></Layout>
  );
};

export default RenderProps;
