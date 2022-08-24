import React, { useEffect, useState } from "react";
import { Code } from "../ui/Code";
import Container from "../ui/Container/Container";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import ArticlePage from "../components/ArticlePage/ArticlePage";
import StansArticle from "../components/StansArticle/StansArticle";
import { P } from "../ui/P";

class State {
  subscribers = [];
  constructor(state) {
    this.state = state;
  }

  subscribe(subscriber) {
    if (typeof subscriber !== "function") return;
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber(this.state);
    });
  }

  setState(newState) {
    this.state = newState;
    this.notify();
  }

  getState() {
    return this.state;
  }
}

class Controller extends State {
  constructor() {
    super(0);
  }

  add(value) {
    this.setState(this.getState() + value);
  }
}

const controller = new Controller();

const Component = () => {
  const count = controller.getState();
  const [, setFlag] = useState(true);

  useEffect(() => {
    const handler = () => {
      setFlag((toggle) => !toggle);
    };
    controller.subscribe(handler);
    return () => {
      controller.unsubscribe(handler);
    };
  }, []);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => controller.add(1)}>Add</button>
      </div>
    </div>
  );
};

let state = 0;

const setState = (newState, callback) => {
  state = newState;
  callback(state);
};

const getState = () => {
  return state;
};

const increment = (callback) => {
  setState(getState() + 1, callback);
};

const useCounter = () => {
  const [, setFlag] = useState(false);

  const rerender = () => {
    setFlag((s) => !s);
  };

  return [
    getState(),
    () => {
      increment(() => {
        rerender();
      });
    },
  ];
};

const C = () => {
  const [value, increment] = useCounter();
  return (
    <div>
      {value}
      <button
        onClick={() => {
          increment();
        }}
      >
        increment
      </button>
    </div>
  );
};

const StateSubscription = () => {
  return (
    <div>
      <StansArticle
        title={"State Subscription"}
        inLanguage={"English"}
        dateCreated={"August 10, 2022"}
        datePublished={"August 24, 2022"}
        content={
          <div>
            <P>
              The &ldquo;useState&ldquo; and &ldquo;useReducer&ldquo; are not
              the only means to hold state in react. You can offload the state
              and the corresponding logic to other entities in the application.
            </P>
            <P>You can see the most obvious example of this right below.</P>
            <Code highlight={[{ start: 1, end: 14 }]}>
              {"let state = 0;\n" +
                "\n" +
                "const setState = (newState, callback) => {\n" +
                "  state = newState;\n" +
                "  callback(state);\n" +
                "};\n" +
                "\n" +
                "const getState = () => {\n" +
                "  return state;\n" +
                "};\n" +
                "\n" +
                "const increment = (callback) => {\n" +
                "  setState(getState() + 1, callback);\n" +
                "};\n" +
                "\n" +
                "const Component = () => {\n" +
                "  const [, setFlag] = useState(false);\n" +
                "\n" +
                "  const rerender = () => {\n" +
                "    setFlag((s) => !s);\n" +
                "  };\n" +
                "\n" +
                "  return (\n" +
                "    <div>\n" +
                "      {getState()}\n" +
                "      <button\n" +
                "        onClick={() => {\n" +
                "          increment(() => {\n" +
                "            rerender();\n" +
                "          });\n" +
                "        }}\n" +
                "      >\n" +
                "        increment\n" +
                "      </button>\n" +
                "    </div>\n" +
                "  );\n" +
                "};"}
            </Code>
            <P>
              Simply setting variables which are outside the react component,
              will not trigger a re-render. We need to notify components, so
              they can rerender. You need to pay attention to the
              &ldquo;rerender&ldquo; function and the passed callback to the
              &ldquo;increment&ldquo; function. As soon as we set a new state,
              we call the callback and flip a state.
            </P>

            <Code
              highlight={[
                { start: 17, end: 17 },
                { start: 20, end: 20 },
                { start: 29, end: 29 },
              ]}
            >
              {"let state = 0;\n" +
                "\n" +
                "const setState = (newState, callback) => {\n" +
                "  state = newState;\n" +
                "  callback(state);\n" +
                "};\n" +
                "\n" +
                "const getState = () => {\n" +
                "  return state;\n" +
                "};\n" +
                "\n" +
                "const increment = (callback) => {\n" +
                "  setState(getState() + 1, callback);\n" +
                "};\n" +
                "\n" +
                "const Component = () => {\n" +
                "  const [, setFlag] = useState(false);\n" +
                "\n" +
                "  const rerender = () => {\n" +
                "    setFlag((s) => !s);\n" +
                "  };\n" +
                "\n" +
                "  return (\n" +
                "    <div>\n" +
                "      {getState()}\n" +
                "      <button\n" +
                "        onClick={() => {\n" +
                "          increment(() => {\n" +
                "            rerender();\n" +
                "          });\n" +
                "        }}\n" +
                "      >\n" +
                "        increment\n" +
                "      </button>\n" +
                "    </div>\n" +
                "  );\n" +
                "};"}
            </Code>
            <P>This look ugly. We can improve on it.</P>
            <Code
              highlight={[
                { start: 16, end: 31 },
                { start: 34, end: 34 },
              ]}
            >
              {"let state = 0;\n" +
                "\n" +
                "const setState = (newState, callback) => {\n" +
                "  state = newState;\n" +
                "  callback(state);\n" +
                "};\n" +
                "\n" +
                "const getState = () => {\n" +
                "  return state;\n" +
                "};\n" +
                "\n" +
                "const increment = (callback) => {\n" +
                "  setState(getState() + 1, callback);\n" +
                "};\n" +
                "\n" +
                "const useCounter = () => {\n" +
                "  const [, setFlag] = useState(false);\n" +
                "\n" +
                "  const rerender = () => {\n" +
                "    setFlag((s) => !s);\n" +
                "  };\n" +
                "\n" +
                "  return [\n" +
                "    getState(),\n" +
                "    () => {\n" +
                "      increment(() => {\n" +
                "        rerender();\n" +
                "      });\n" +
                "    },\n" +
                "  ];\n" +
                "};\n" +
                "\n" +
                "const C = () => {\n" +
                "  const [value, increment] = useCounter();\n" +
                "  return (\n" +
                "    <div>\n" +
                "      {value}\n" +
                "      <button\n" +
                "        onClick={() => {\n" +
                "          increment();\n" +
                "        }}\n" +
                "      >\n" +
                "        increment\n" +
                "      </button>\n" +
                "    </div>\n" +
                "  );\n" +
                "};"}
            </Code>
            <P>
              All I did, was wrapping the re-rendering part in to a hook. Now
              from the &ldquo;Component&ldquo; perspective, it does not know how
              the state and the increment logic is implemented. The
              &ldquo;useCounter&ldquo; hook could even talk with an endpoint, if
              needed. The &ldquo;Component&ldquo; is totally unaware about
              anything.
            </P>
            <P>
              A more sophisticated implementation of the same behavior is below.
            </P>
            <Code>
              {"class State {\n" +
                "  subscribers = [];\n" +
                "  constructor(state) {\n" +
                "    this.state = state;\n" +
                "  }\n" +
                "\n" +
                "  subscribe(subscriber) {\n" +
                '    if (typeof subscriber !== "function") return;\n' +
                "    this.subscribers.push(subscriber);\n" +
                "  }\n" +
                "\n" +
                "  unsubscribe(subscriber) {\n" +
                "    this.subscribers = this.subscribers.filter((s) => s !== subscriber);\n" +
                "  }\n" +
                "\n" +
                "  notify() {\n" +
                "    this.subscribers.forEach((subscriber) => {\n" +
                "      subscriber(this.state);\n" +
                "    });\n" +
                "  }\n" +
                "\n" +
                "  setState(newState) {\n" +
                "    this.state = newState;\n" +
                "    this.notify();\n" +
                "  }\n" +
                "\n" +
                "  getState() {\n" +
                "    return this.state;\n" +
                "  }\n" +
                "}\n" +
                "\n" +
                "\n" +
                "\n" +
                "class Counter extends State {\n" +
                "  constructor() {\n" +
                "    super(0);\n" +
                "  }\n" +
                "\n" +
                "  increment(value) {\n" +
                "    this.setState(this.getState() + 1);\n" +
                "  }\n" +
                "}"}
            </Code>

            <Code>
              {" const counter = new Counter();\n" +
                "\n" +
                " const useCounter = () => {\n" +
                "  const count = counter.getState();\n" +
                "  const [, setFlag] = useState(true);\n" +
                "\n" +
                "  useEffect(() => {\n" +
                "    const handler = () => {\n" +
                "      setFlag((toggle) => !toggle);\n" +
                "    };\n" +
                "    counter.subscribe(handler);\n" +
                "    return () => {\n" +
                "      counter.unsubscribe(handler);\n" +
                "    };\n" +
                "  }, []);\n" +
                "  \n" +
                "  return [count, controller.increment];\n" +
                "}"}
            </Code>
            <Code>
              {"const Component = () => {\n" +
                "  const [count, increment] = useCounter();\n" +
                "  \n" +
                "  return (\n" +
                "    <div>\n" +
                "      <div>{count}</div>\n" +
                "      <div>\n" +
                "        <button onClick={() => increment()}>Add</button>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  );\n" +
                "};"}
            </Code>
            <P>
              This is huge! The implication of this is that we can synchronize
              any class with react components. We can move all the domain logic
              out of component. This way we handle react as it was intended: a
              UI library.
            </P>
            <div>
              <b>Try it out</b>
              <Component />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default StateSubscription;
