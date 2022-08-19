import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import H1 from "../ui/H1/H1";
import { P } from "../ui/P";
import { Code } from "../ui/Code";

const useFetch = ({ get, onMount = true }) => {
  const mounted = useRef(true);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!onMount) return;
    get()
      .then((data) => {
        if (mounted.current) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (mounted.current) {
          setError(e);
          setLoading(false);
        }
      });

    return () => {
      mounted.current = false;
    };
  }, []);

  const refetch = useCallback(
    (...args) => {
      setLoading(true);
      get(...args)
        .then((data) => {
          if (mounted.current) {
            setLoading(false);
            setData(data);
          }
        })
        .catch((e) => {
          if (mounted.current) {
            setLoading(false);
            setError(e);
          }
        });
    },
    [get]
  );

  return { data, loading, error, refetch };
};

const Component = () => {
  const { data, loading, error, refetch } = useFetch({
    get: async ({ id }) => fetch(`api/users?id=${id}`, {}),
    onMount: false,
  });

  return (
    <div>
      {!loading ? (
        <div>
          <button
            onClick={() => {
              refetch({ id: 1 });
            }}
          >
            get user
          </button>
        </div>
      ) : null}
    </div>
  );
};

const FetchHook = () => {
  return (
    <Layout
      content={
        <div>
          <H1>Use Fetch Hook</H1>
          <P>
            Fetching data from an endpoint on mount is a long tradition in
            react. Most of the time it looks like this:
          </P>
          <Code>
            {"const Component = () => {\n" +
              "  const [data, setData] = useState(null);\n" +
              "  const [loading, setLoading] = useState(true);\n" +
              "  const [error, setError] = useState(null);\n" +
              "\n" +
              "  useEffect(() => {\n" +
              "    setLoading(true);\n" +
              '    fetch("api/data", {})\n' +
              "      .then((data) => {\n" +
              "        setData(data);\n" +
              "        setLoading(false);\n" +
              "      })\n" +
              "      .catch((e) => {\n" +
              "        setError(e);\n" +
              "      });\n" +
              "  }, []);\n" +
              "\n" +
              "  return <div>{!loading ? <div>{data}</div> : null}</div>;\n" +
              "};"}
          </Code>
          <P>
            We handle 3 states a once for one fetch operation: one for the data,
            one for the loading state and one for the error. Here we postpone
            rendering as long as the loading state is true.
          </P>
          <P>
            This pattern is often times repeated though out the application
            again and again. That should not be the case, especially because
            this pattern is very easy to abstract:
          </P>
          <Code>
            {"const Component = () => {\n" +
              '  const { data, loading, error } = useFetch(async () => fetch("api/data", {}));\n' +
              "\n" +
              "  return <div>{!loading ? <div>{data}</div> : null}</div>;\n" +
              "};"}
          </Code>
          <P>Look how tiny and cute this is!</P>
          <P>The implementation of the fetch hook is very simple:</P>
          <Code>
            {"const useFetch = (fetcher) => {\n" +
              "  const mounted = useRef(true);\n" +
              "\n" +
              "  const [data, setData] = useState(null);\n" +
              "  const [loading, setLoading] = useState(true);\n" +
              "  const [error, setError] = useState(null);\n" +
              "\n" +
              "  useEffect(() => {\n" +
              "    fetcher()\n" +
              "      .then((data) => {\n" +
              "        if (mounted.current) {\n" +
              "          setData(data);\n" +
              "          setLoading(false);\n" +
              "        }\n" +
              "      })\n" +
              "      .catch((e) => {\n" +
              "        if (mounted.current) {\n" +
              "          setError(e);\n" +
              "          setLoading(false);\n" +
              "        }\n" +
              "      });\n" +
              "\n" +
              "    return () => {\n" +
              "      mounted.current = false;\n" +
              "    };\n" +
              "  }, []);\n" +
              "\n" +
              "  return { data, loading, error };\n" +
              "};"}
          </Code>
          <P>
            With this we do not need to repeat ourself. All the necessary logic
            is hidden in the hook. We do not need to think about handling
            multiple states ourself.
          </P>
          <P>
            We can go one step further and pass more options to the hook. For
            example, we would like to decide, if we fetch on mount of not. And
            if not, we would like to trigger the fetch call ourself.
          </P>
          <Code highlight={[{ start: 29, end: 47 }]}>
            {"const useFetch = ({ get, onMount = true }) => {\n" +
              "  const mounted = useRef(true);\n" +
              "\n" +
              "  const [data, setData] = useState(null);\n" +
              "  const [loading, setLoading] = useState(true);\n" +
              "  const [error, setError] = useState(null);\n" +
              "\n" +
              "  useEffect(() => {\n" +
              "    if (!onMount) return;\n" +
              "    get()\n" +
              "      .then((data) => {\n" +
              "        if (mounted.current) {\n" +
              "          setData(data);\n" +
              "          setLoading(false);\n" +
              "        }\n" +
              "      })\n" +
              "      .catch((e) => {\n" +
              "        if (mounted.current) {\n" +
              "          setError(e);\n" +
              "          setLoading(false);\n" +
              "        }\n" +
              "      });\n" +
              "\n" +
              "    return () => {\n" +
              "      mounted.current = false;\n" +
              "    };\n" +
              "  }, []);\n" +
              "\n" +
              "  const refetch = useCallback(\n" +
              "    (...args) => {\n" +
              "      setLoading(true);\n" +
              "      get(...args)\n" +
              "        .then((data) => {\n" +
              "          if (mounted.current) {\n" +
              "            setLoading(false);\n" +
              "            setData(data);\n" +
              "          }\n" +
              "        })\n" +
              "        .catch((e) => {\n" +
              "          if (mounted.current) {\n" +
              "            setLoading(false);\n" +
              "            setError(e);\n" +
              "          }\n" +
              "        });\n" +
              "    },\n" +
              "    [get]\n" +
              "  );\n" +
              "\n" +
              "  return { data, loading, error, refetch };\n" +
              "};"}
          </Code>
          <P>
            The main change is the refetch function. We pass all arguments from
            the refetch to the get function. Effectively we predefine the API
            getter and invoke it later in time:
          </P>
          <Code
            highlight={[
              { start: 3, end: 3 },
              { start: 13, end: 13 },
            ]}
          >
            {"const Component = () => {\n" +
              "  const { data, loading, error, refetch } = useFetch({\n" +
              "    get: async ({ id }) => fetch(`api/users?id=${id}`, {}),\n" +
              "    onMount: false,\n" +
              "  });\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      {!loading ? (\n" +
              "        <div>\n" +
              "          <button\n" +
              "            onClick={() => {\n" +
              "              refetch({ id: 1 });\n" +
              "            }}\n" +
              "          >\n" +
              "            get user\n" +
              "          </button>\n" +
              "        </div>\n" +
              "      ) : null}\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <img
            src="https://media.giphy.com/media/WrJ8x0niiblWEoo7hE/giphy.gif"
            alt=""
          />
        </div>
      }
      navigation={<Navigation />}
    />
  );
};

export default FetchHook;
