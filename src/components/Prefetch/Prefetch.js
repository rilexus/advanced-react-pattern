import React, { useEffect, useState } from "react";
import { Code } from "../../ui/Code";
import Container from "../../ui/Container/Container";
import Waterfall from "./Waterfall";
import ParallelFetch from "./PrallelFetch";
import H2 from "../../ui/H2/H2";
import { P } from "../../ui/P";
import fetchData from "./fetchData";

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
    <Container>
      <main>
        <article>
          <h1>Prefetch</h1>

          <div>
            <H2>Fetch on mount</H2>
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
          </div>

          <P>
            Every fetch call has a random response time between 1000 and 3000ms.
          </P>
          <div>
            <H2>Sequence fetch (Waterfall)</H2>
            <p>Fetch data in sequence.</p>
            <Waterfall />
          </div>
          <div>
            <H2>Parallel Fetch</H2>
            <P>Fetch all data in parallel, before react starts rendering.</P>
            <ParallelFetch />
          </div>
          <P>
            If you need to fetch data on mount, I would suggest you not to do
            that. Prefetch the data and rerender as soon as data is available.
          </P>

          <Code>
            {"const fetchData = () =>\n" +
              "  new Promise((resolve, reject) =>\n" +
              "    setTimeout(() => {\n" +
              "      // return data after delay\n" +
              "      resolve({ data: [{ name: 1 }, { name: 2 }] });\n" +
              "    }, 2000)\n" +
              "  );\n" +
              "\n" +
              "const useData = prefetch(\n" +
              "  async () => fetchData() /* start fetching users before react kicks in */\n" +
              ");\n" +
              "\n" +
              "const Component = () => {\n" +
              "  const [data, error] = useData();\n" +
              "  const hasData = !!data;\n" +
              "  return (\n" +
              "    <div>\n" +
              "      {!hasData ? (\n" +
              "        <div>Fetching Users ...</div>\n" +
              "      ) : (\n" +
              "        <div>\n" +
              "          Data:\n" +
              "          {JSON.stringify(users)}\n" +
              "        </div>\n" +
              "      )}\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
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
        </article>
      </main>
    </Container>
  );
};

export { Prefetch };
