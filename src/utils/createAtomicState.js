import { useEffect, useMemo, useState } from "react";

class Store {
  state = null;
  subscribers = [];

  constructor(initialState) {
    this.state = initialState;
  }
  subscribe(c) {
    this.subscribers.push(c);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = newState;
    this.subscribers.forEach((subscriber) => {
      if (typeof subscriber === "function") {
        subscriber(newState);
      }
    });
  }
}

const createStore = (initialState) => new Store(initialState);

function createAtomicState(initialValue, reducers = {}) {
  let subscriptionState = createStore(initialValue);

  function useStateHook() {
    const [_, setState] = /* rerender component */ useState(false);

    useEffect(() => {
      const handler = (/* state */) =>
        setState((v) => !v /* rerender component */);
      subscriptionState.subscribe(handler);
      return () => subscriptionState.unsubscribe(handler);
    }, []);

    const set = (stateReducer) => {
      const oldState = subscriptionState.getState();
      const newState = stateReducer(oldState);
      subscriptionState.setState(newState);
    };

    const actions = useMemo(
      () =>
        Object.entries(reducers).reduce(
          (acc, [name, reducer]) => ({
            ...acc,
            [name]: (value) => set((prevState) => reducer(prevState, value)),
          }),
          {}
        ),
      []
    );

    return [subscriptionState.getState(), actions];
  }

  return useStateHook;
}

export { createAtomicState };
