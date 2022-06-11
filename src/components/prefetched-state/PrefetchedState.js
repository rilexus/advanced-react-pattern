import React from "react";
import { createFetchedState } from "../../utils/createPrefetchedState";
import { Code } from "../../ui/Code";
import Container from "../../ui/Container/Container";

const fetchUsers = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      // return data after 1 sec
      resolve({ data: [{ name: 1 }, { name: 2 }] });
    }, 2000)
  );

const useFetchedUsers = createFetchedState(
  async () => fetchUsers() /* start fetching users before react kicks in */
);

const Users = () => {
  const [users, error] = useFetchedUsers();
  const hasUsers = !!users;
  return (
    <div>
      {!hasUsers ? (
        <div>Fetching Users ...</div>
      ) : (
        <div>
          Data:
          {JSON.stringify(users)}
        </div>
      )}
    </div>
  );
};

const PrefetchedState = () => {
  return (
    <Container>
      <h1>Prefetched State</h1>
      <Users />
      <Code>
        {"const fetchUsers = () =>\n" +
          "  new Promise((resolve, reject) =>\n" +
          "    setTimeout(() => {\n" +
          "      // return data after 1 sec\n" +
          "      resolve({ data: [{ name: 1 }, { name: 2 }] });\n" +
          "    }, 2000)\n" +
          "  );\n" +
          "\n" +
          "const useFetchedUsers = createFetchedState(\n" +
          "  async () => fetchUsers() /* start fetching users before react kicks in */\n" +
          ");\n" +
          "\n" +
          "const Users = () => {\n" +
          "  const [users, error] = useFetchedUsers();\n" +
          "  const hasUsers = !!users;\n" +
          "  return (\n" +
          "    <div>\n" +
          "      {!hasUsers ? (\n" +
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
        {"function createFetchedState(resolver) {\n" +
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
    </Container>
  );
};

export { PrefetchedState };
