import React, { useEffect, useState } from "react";
import { Code } from "../ui/Code";
import Waterfall from "../components/Prefetch/Waterfall";
import ParallelFetch from "../components/Prefetch/PrallelFetch";
import { P } from "../ui/P";
import fetchData from "../components/Prefetch/fetchData";
import H1 from "../ui/H1/H1";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import {
  Article,
  Name,
  ArticleBody,
  Author,
  CopyrightHolder,
} from "@react-microdata/article";

import { Email, Name as PersonName } from "@react-microdata/person";
import Flex from "../ui/Flex/Flex";
import MyArticle from "../components/my-article";

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
          <MyArticle
            keywords={
              "react, react patterns, frontend, development, prefetch pattern, loading optimisation"
            }
            title={
              <Name>
                <H1>Prefetch</H1>
              </Name>
            }
            body={
              <div>
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
                  You fetch as soon as the component mounts. While the data is
                  on the way, you postpone the rendering of children. This way
                  of getting data does not do any harm in the majority of cases
                  but it has one fault tho. To make my case clear, Ill provide
                  couple of examples.
                </P>
                <P>
                  In a big react application you will unavoidably end up with a
                  nested structure like this:
                </P>
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
                <P>
                  If you fetch data on mount as in the first example, you will
                  end up with a fetch watterfall: a component starts fetching
                  only when the previous component has finished. This has a
                  devastating effect on the user experience. The application
                  feels slow and dull. Just reload this page and take a look at
                  the next example.
                </P>
                <P>
                  There is another way to fetch data. Start fetching as soon as
                  javascript hits the browser. And as soon as the data is
                  available, rerender.
                </P>
                <P>
                  Reload the page couple of times and take a look at the next
                  demo.
                </P>
                <figure>
                  <figcaption>Sequence fetch (Waterfall)</figcaption>
                  <Waterfall />
                </figure>
                <figure>
                  <figcaption>Parallel Fetch</figcaption>
                  <ParallelFetch />
                </figure>
                <P>
                  If we run them side by side, the difference is pretty clear.
                  The response time for both, parallel and sequential fetching
                  is set to be random between 1000ms and 3000ms. Parallel
                  fetching finishes always first.
                </P>
                <P>Parallel fetching could look like this:</P>
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
                  A simple implementation of the &quot;prefetch&quot; function
                  is below. Error handling is omitted here.
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
              </div>
            }
          />
        </main>
      }
    />
  );
};

export default Prefetch;
