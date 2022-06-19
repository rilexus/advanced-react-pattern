import React, { useEffect, useState } from "react";
import { Code } from "../ui/Code";
import Waterfall from "../components/Prefetch/Waterfall";
import ParallelFetch from "../components/Prefetch/PrallelFetch";
import { P } from "../ui/P";
import fetchData from "../components/Prefetch/fetchData";
import H1 from "../ui/H1/H1";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";

const Component = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch as soon as component mounts
    fetchData().then((d) => {
      setData(d);
    });
  }, []);

  return data && <div>children</div>;
};

const Prefetch = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <main>
          <article>
            <div>
              <H1>Prefetch</H1>
              <P>Fetching data in React usually looks like this:</P>
              <figure>
                <Code>
                  {"const Component = () => {\n" +
                    "  const [data, setData] = useState(null);\n" +
                    "\n" +
                    "  useEffect(() => {\n" +
                    "    // fetch as soon as component mounts\n" +
                    "    fetchData().then((d) => {\n" +
                    "      setData(d);\n" +
                    "    });\n" +
                    "  }, []);\n" +
                    "\n" +
                    "  return data && <div>children</div>;\n" +
                    "};"}
                </Code>
              </figure>
              <P>
                You fetch as soon as the component mounts. While the data is on
                the way, you postpone the rendering of children. This way of
                getting data does not do any harm in the majority of cases. It
                has one fault tho. Its the fetching on mount. To make make case
                clear, Ill provide couple of examples.
              </P>
              <P>ADD TEXT</P>
              <figure>
                <Code>
                  {"const Component = () => {\n" +
                    "  return (\n" +
                    "    <div>\n" +
                    "      <ComponentA>\n" +
                    "        <ComponentB>\n" +
                    "          <ComponentC>\n" +
                    "            <ComponentD />\n" +
                    "          </ComponentC>\n" +
                    "        </ComponentB>\n" +
                    "      </ComponentA>\n" +
                    "    </div>\n" +
                    "  );\n" +
                    "};"}
                </Code>
              </figure>
              <figure>
                <Waterfall />
              </figure>
              <P>
                One thing they have certainly in common. They render its
                children as soon as the data is available. The difference is
                that the sequence example fetches, as the naming suggest, in
                sequence: on mount, while the parallel example fetches all
                needed data parallel, even before react starts rendering
                anything.
              </P>
              <P>
                The implementation of the sequence components looks like this:
              </P>
              <figure>
                <Code>
                  {"const ComponentA = ({ children }) => {\n" +
                    "  const [data, setData] = useState(null);\n" +
                    "\n" +
                    "  useEffect(() => {\n" +
                    "    fetchData().then((d) => {\n" +
                    "      setData(d);\n" +
                    "    });\n" +
                    "  }, []);\n" +
                    "\n" +
                    "  return (\n" +
                    "    <div\n" +
                    "      style={{\n" +
                    '        height: "34rem",\n' +
                    '        border: "1px solid black",\n' +
                    "      }}\n" +
                    "    >\n" +
                    "      <div>Component A</div>\n" +
                    "      <div>Data: {data && JSON.stringify(data)}</div>\n" +
                    '      <div style={{ padding: "3rem" }}>\n' +
                    "        {!data ? <div>Loading...</div> : <div>{children}</div>}\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  );\n" +
                    "};"}
                </Code>
              </figure>
              <P>
                And the implementation of the parallel component looks like
                this:
              </P>
              <figure>
                <Code>
                  {"const useData = prefetch(\n" +
                    "  async () => fetchData()\n" +
                    ");\n" +
                    "\n" +
                    "const ComponentA = ({ children }) => {\n" +
                    "  const [data] = useData();\n" +
                    "\n" +
                    "  return (\n" +
                    "    <div\n" +
                    "      style={{\n" +
                    '        height: "34rem",\n' +
                    '        border: "1px solid black",\n' +
                    "      }}\n" +
                    "    >\n" +
                    "      <div>Component A</div>\n" +
                    "      <div>Data: {data && JSON.stringify(data)}</div>\n" +
                    '      <div style={{ padding: "3rem" }}>\n' +
                    "        {!data ? <div>Loading...</div> : <div>{children}</div>}\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  );\n" +
                    "};"}
                </Code>
              </figure>
              <P>
                If we run them side by side, the difference is pretty clear.
              </P>
            </div>

            <figure>
              <figcaption>Sequence fetch (Waterfall)</figcaption>
              <Waterfall />
            </figure>
            <figure>
              <figcaption>Parallel Fetch</figcaption>
              <ParallelFetch />
            </figure>
            <P>
              The parallel fetching is always faster. If you need to fetch data
              on mount, I would suggest you not to do that. Prefetch the data
              and rerender as soon as data is available.
            </P>
            <P>
              A simple implementation of the &quot;prefetch&quot; function is
              below. Error handling is omitted here.
            </P>
            <figure>
              <Code>
                {"function prefetch(resolver) {\n" +
                  '  const ERROR = "error";\n' +
                  '  const RESOLVED = "resolved";\n' +
                  '  const FETCHING = "fetching";\n' +
                  "\n" +
                  "  let status = FETCHING; // initial status\n" +
                  "  let result = null;\n" +
                  "  let error = null;\n" +
                  "\n" +
                  "  const promised = resolver();\n" +
                  "  // subscribe to the promise as soon as this function is called\n" +
                  "  promised.then(\n" +
                  "    (_data) => {\n" +
                  "      status = RESOLVED;\n" +
                  "      result = _data;\n" +
                  "    },\n" +
                  "    (_error) => {\n" +
                  "      status = ERROR;\n" +
                  "      error = _error;\n" +
                  "    }\n" +
                  "  );\n" +
                  "\n" +
                  "  return () => {\n" +
                  "    // return a hook function\n" +
                  "    const rerender = useRerender();\n" +
                  "\n" +
                  "    useEffect(() => {\n" +
                  "      if (status === FETCHING) {\n" +
                  "        // if this hook renders before the promise is resolved\n" +
                  "        promised.then(() => {\n" +
                  "          // await the result, rerender the component\n" +
                  "          rerender();\n" +
                  "        });\n" +
                  "      }\n" +
                  "    }, []);\n" +
                  "\n" +
                  "    return [result, error];\n" +
                  "  };\n" +
                  "}"}
              </Code>
            </figure>
          </article>
        </main>
      }
    ></Layout>
  );
};

export default Prefetch;
