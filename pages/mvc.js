import React, { createContext, useContext, useEffect, useReducer } from "react";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import H1 from "../ui/H1/H1";
import { P } from "../ui/P";
import { Code } from "../ui/Code";
import Flex from "../ui/Flex/Flex";

class State {
  state = null;
  subscribers = [];

  constructor(initialState) {
    this.state = initialState;
    this.setState = this.setState.bind(this);
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe() {
    /**
     * TODO: implement
     */
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber(this.state);
    });
  }

  setState(stateOrReducer) {
    if (typeof stateOrReducer === "function") {
      this.state = stateOrReducer(this.state);
    } else {
      this.state = stateOrReducer;
    }
    this.notify();
  }

  getState() {
    return this.state;
  }
}

const counterState = new State(0);

// const Counter = () => {
//   const [, rerender] = useReducer(() => ({}), {});
//   /**
//    * Get value from the counter state
//    */
//   const counterValue = counterState.getState();
//
//   useEffect(() => {
//     /**
//      * We will be notified on every state change
//      */
//     counterState.subscribe(rerender);
//     return () => {
//       counterState.unsubscribe(rerender);
//     };
//   }, []);
//
//   return (
//     <div>
//       <button onClick={() => counterState.setState((value) => value - 1)}>
//         -
//       </button>
//       {counterValue}
//       <button onClick={() => counterState.setState((value) => value + 1)}>
//         +
//       </button>
//     </div>
//   );
// };

const useSubscription = (source) => {
  const [, rerender] = useReducer(() => ({}), {});
  /**
   * Get value from the counter state
   */
  const value = source.getState();

  useEffect(() => {
    /**
     * We will be notified on every state change
     */
    source.subscribe(rerender);
    return () => {
      source.unsubscribe(rerender);
    };
  }, []);

  return [value, source];
};

// const useCounter = () => useSubscription(counterState);

// const Counter = () => {
//   const [counterValue, setState] = useCounter();
//
//   return (
//     <div>
//       <button onClick={() => setState((value) => value - 1)}>-</button>
//       {counterValue}
//       <button onClick={() => setState((value) => value + 1)}>+</button>
//     </div>
//   );
// };

class Controller {
  state = null;
  constructor(stateInstance) {
    this.state = stateInstance;
    this.setState = this.setState.bind(this);
    this.getState = this.getState.bind(this);
  }

  subscribe(subscriber) {
    this.state.subscribe(subscriber);
  }

  unsubscribe() {
    this.state.unsubscribe();
  }

  getState() {
    return this.state.getState();
  }

  setState(stateOrReducer) {
    this.state.setState(stateOrReducer);
  }
}

class CounterController extends Controller {
  constructor(stateInstance) {
    super(stateInstance);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState((value) => value - 1);
  }

  increment() {
    this.setState((value) => value + 1);
  }
}

const counterController = new CounterController(counterState);

const Context = createContext({
  getState: () => 0,
  subscribe: () => {},
  unsubscribe: () => {},
});

const CounterProvider = Context.Provider;

const useCounter = () => {
  const counterControllerInstance = useContext(Context);
  return useSubscription(counterControllerInstance);
};

const Counter = () => {
  const [counterValue, { increment, decrement }] = useCounter();

  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      {counterValue}
      <button onClick={() => increment()}>+</button>
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider value={counterController}>
      <Counter />
    </CounterProvider>
  );
};

const Mvc = () => {
  return (
    <Layout
      navigation={<Navigation />}
      content={
        <main>
          <H1>Model View Controller</H1>
          <P>
            Every React developer should be aware of one important thing. That
            is that React is a library for building user interfaces. That is its
            primary purpose and concern. It is not advisable to treat React as
            something different than that.
          </P>
          <P>
            Theoretically its is possible to write a complex application using
            only React and its concepts. To do that, we would need to locate the
            business logic in components and context providers. As someone who
            migrated multiple applications from one stack to another and
            modernized project by moving it from legacy libraries to React, I
            would strongly advice against doing that. Unless you do not not plan
            to maintain the application over multiple years, never mind, go
            ahead.
          </P>
          <P>
            Through the painful past experiences, I have learned that business
            logic should be located somewhere else other then in React
            components. React should be treated as the View in MCV Pattern. The
            Model (state), Controllers and the View should be separated from
            each other and communicate only through hard defined interfaces. The
            View acts as the representational layer and should be synchronized
            with the rest.
          </P>
          <P>
            By using the the Observer pattern it is reasonably easy to
            synchronize React with a Model or a Controller. Take a look at the
            following code.
          </P>
          <Code
            highlight={[
              { start: 42, end: 42 },
              { start: 46, end: 46 },
              { start: 52, end: 52 },
              { start: 63, end: 63 },
            ]}
          >
            {"class State {\n" +
              "  state = null;\n" +
              "  subscribers = [];\n" +
              "\n" +
              "  constructor(initialState) {\n" +
              "    this.state = initialState;\n" +
              "    this.setState = this.setState.bind(this);\n" +
              "  }\n" +
              "\n" +
              "  subscribe(subscriber) {\n" +
              "    this.subscribers.push(subscriber);\n" +
              "  }\n" +
              "\n" +
              "  unsubscribe() {\n" +
              "    /**\n" +
              "     * TODO: implement\n" +
              "     */\n" +
              "  }\n" +
              "\n" +
              "  notify() {\n" +
              "    this.subscribers.forEach((subscriber) => {\n" +
              "      subscriber(this.state);\n" +
              "    });\n" +
              "  }\n" +
              "\n" +
              "  setState(stateOrReducer) {\n" +
              '    if (typeof stateOrReducer === "function") {\n' +
              "      this.state = stateOrReducer(this.state);\n" +
              "    } else {\n" +
              "      this.state = stateOrReducer;\n" +
              "    }\n" +
              "    this.notify();\n" +
              "  }\n" +
              "\n" +
              "  getState() {\n" +
              "    return this.state;\n" +
              "  }\n" +
              "}\n" +
              "\n" +
              "const counterState = new State(0);\n" +
              "\n" +
              "const Counter = () => {\n" +
              "  const [, rerender] = useReducer(() => ({}), {});\n" +
              "  /**\n" +
              "   * Get value from the counter state\n" +
              "   */\n" +
              "  const counterValue = counterState.getState();\n" +
              "\n" +
              "  useEffect(() => {\n" +
              "    /**\n" +
              "     * We will be notified on every state change\n" +
              "     */\n" +
              "    counterState.subscribe(rerender);\n" +
              "    return () => {\n" +
              "      counterState.unsubscribe(rerender);\n" +
              "    };\n" +
              "  }, []);\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={() => counterState.setState((value) => value - 1)}>\n" +
              "        -\n" +
              "      </button>\n" +
              "      {counterValue}\n" +
              "      <button onClick={() => counterState.setState((value) => value + 1)}>\n" +
              "        +\n" +
              "      </button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>Here is the working example.</P>
          <Flex justify={"center"}>
            <div>
              <div>Counter</div>
              <App />
            </div>
          </Flex>
          <P>We can abstract the subscription in to a hook.</P>
          <Code>
            {"const useSubscription = (source) => {\n" +
              "  const [, rerender] = useReducer(() => ({}), {});\n" +
              "  /**\n" +
              "   * Get value from the counter state\n" +
              "   */\n" +
              "  const value = source.getState();\n" +
              "\n" +
              "  useEffect(() => {\n" +
              "    /**\n" +
              "     * We will be notified on every state change\n" +
              "     */\n" +
              "    source.subscribe(rerender);\n" +
              "    return () => {\n" +
              "      source.unsubscribe(rerender);\n" +
              "    };\n" +
              "  }, []);\n" +
              "\n" +
              "  return [value, source];\n" +
              "};\n" +
              "\n" +
              "const useCounter = () => useSubscription(counterState);\n" +
              "\n" +
              "const Counter = () => {\n" +
              "  const [counterValue, counter] = useCounter();\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={() => counter.setState((value) => value - 1)}>-</button>\n" +
              "      {counterValue}\n" +
              "      <button onClick={() => counter.setState((value) => value + 1)}>+</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            The Model (state) is outside of React now. At the moment business
            logic is still written in to the component. Im talking about the
            increment and decrement buttons. We can create a dedicated
            controller class which is responsible for handling the logic.
          </P>
          <Code
            highlight={[
              { start: 33, end: 35 },
              { start: 37, end: 39 },
              { start: 42, end: 43 },
              { start: 46, end: 46 },
            ]}
          >
            {"class Controller {\n" +
              "  state = null;\n" +
              "  constructor(stateInstance) {\n" +
              "    this.state = stateInstance;\n" +
              "    this.setState = this.setState.bind(this);\n" +
              "    this.getState = this.getState.bind(this);\n" +
              "  }\n" +
              "\n" +
              "  subscribe(subscriber) {\n" +
              "    this.state.subscribe(subscriber);\n" +
              "  }\n" +
              "\n" +
              "  unsubscribe() {\n" +
              "    this.state.unsubscribe();\n" +
              "  }\n" +
              "\n" +
              "  getState() {\n" +
              "    return this.state.getState();\n" +
              "  }\n" +
              "\n" +
              "  setState(stateOrReducer) {\n" +
              "    this.state.setState(stateOrReducer);\n" +
              "  }\n" +
              "}\n" +
              "\n" +
              "class CounterController extends Controller {\n" +
              "  constructor(stateInstance) {\n" +
              "    super(stateInstance);\n" +
              "    this.increment = this.increment.bind(this);\n" +
              "    this.decrement = this.decrement.bind(this);\n" +
              "  }\n" +
              "\n" +
              "  decrement() {\n" +
              "    this.setState((value) => value - 1);\n" +
              "  }\n" +
              "\n" +
              "  increment() {\n" +
              "    this.setState((value) => value + 1);\n" +
              "  }\n" +
              "}\n" +
              "\n" +
              "const counterController = new CounterController(counterState);\n" +
              "const useCounter = () => useSubscription(counterController);\n" +
              "\n" +
              "const Counter = () => {\n" +
              "  const [counterValue, { increment, decrement }] = useCounter();\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={() => decrement()}>-</button>\n" +
              "      {counterValue}\n" +
              "      <button onClick={() => increment()}>+</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>
            I hide the model from the component altogether and delegate the
            handling of incrementing and decrementing of the state to the
            controller class. I would point you attention to the fact that the
            counterState is passed as dependency and is therefor
            interchangeable. The CounterController can accept all kinds of other
            dependencies. For example I could pass a service which saves the
            counter values to a server. Or I could pass other controllers, if
            needed.
          </P>
          <P>
            If we provide the controller though the context, we could pass a
            mocked version of it for testing purposes.
          </P>
          <Code
            highlight={[
              { start: 9, end: 12 },
              { start: 28, end: 30 },
            ]}
          >
            {"const Context = createContext({\n" +
              "  getState: () => 0,\n" +
              "  subscribe: () => {},\n" +
              "  unsubscribe: () => {},\n" +
              "});\n" +
              "\n" +
              "const CounterProvider = Context.Provider;\n" +
              "\n" +
              "const useCounter = () => {\n" +
              "  const counterControllerInstance = useContext(Context);\n" +
              "  return useSubscription(counterControllerInstance);\n" +
              "};\n" +
              "\n" +
              "const Counter = () => {\n" +
              "  const [counterValue, { increment, decrement }] = useCounter();\n" +
              "\n" +
              "  return (\n" +
              "    <div>\n" +
              "      <button onClick={() => decrement()}>-</button>\n" +
              "      {counterValue}\n" +
              "      <button onClick={() => increment()}>+</button>\n" +
              "    </div>\n" +
              "  );\n" +
              "};\n" +
              "\n" +
              "const App = () => {\n" +
              "  return (\n" +
              "    <CounterProvider value={counterController}>\n" +
              "      <Counter />\n" +
              "    </CounterProvider>\n" +
              "  );\n" +
              "};"}
          </Code>
          <P>Pretty power full pattern!</P>
        </main>
      }
    />
  );
};

export default Mvc;
