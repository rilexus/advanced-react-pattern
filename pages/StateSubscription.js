import React, { useEffect, useState } from "react";
import { Code } from "../ui/Code";
import Container from "../ui/Container/Container";

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

const StateSubscription = () => {
  return (
    <Container>
      <h1>State Subscription</h1>
      <Component />
      <Code>
        {"const Component = () => {\n" +
          "  const count = controller.getState();\n" +
          "  const [, setFlag] = useState(true);\n" +
          "\n" +
          "  useEffect(() => {\n" +
          "    const handler = () => {\n" +
          "      setFlag((toggle) => !toggle);\n" +
          "    };\n" +
          "    controller.subscribe(handler);\n" +
          "    return () => {\n" +
          "      controller.unsubscribe(handler);\n" +
          "    };\n" +
          "  }, []);\n" +
          "  return (\n" +
          "    <div>\n" +
          "      <div>{count}</div>\n" +
          "      <div>\n" +
          "        <button onClick={() => controller.add(1)}>Add</button>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
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
          "class Controller extends State {\n" +
          "  constructor() {\n" +
          "    super(0);\n" +
          "  }\n" +
          "\n" +
          "  add(value) {\n" +
          "    this.setState(this.getState() + value);\n" +
          "  }\n" +
          "}"}
      </Code>
      <Code>
        {"const useCount = () => {\n" +
          "  const count = controller.getState();\n" +
          "  const [, setFlag] = useState(true);\n" +
          "\n" +
          "  useEffect(() => {\n" +
          "    const handler = () => {\n" +
          "      setFlag((toggle) => !toggle);\n" +
          "    };\n" +
          "    controller.subscribe(handler);\n" +
          "    return () => {\n" +
          "      controller.unsubscribe(handler);\n" +
          "    };\n" +
          "  }, []);\n" +
          "  \n" +
          "  return [count, controller.add];\n" +
          "}"}
      </Code>
      <Code>
        {"const Component = () => {\n" +
          "  const [count, add] = useCount();\n" +
          "  \n" +
          "  return (\n" +
          "    <div>\n" +
          "      <div>{count}</div>\n" +
          "      <div>\n" +
          "        <button onClick={() => add(1)}>Add</button>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "  );\n" +
          "};"}
      </Code>
    </Container>
  );
};

export default StateSubscription;
