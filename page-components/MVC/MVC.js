import React, { createContext, useContext, useEffect, useReducer } from "react";

class EventEmitter {
  listeners = new Map();

  constructor() {
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);

    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.emit = this.emit.bind(this);
  }

  on(event, handler) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [handler]);
    } else {
      this.listeners.set(event, [...this.listeners.get(event), handler]);
    }
  }

  addEventListener(event, handler) {
    this.on(event, handler);
  }

  removeEventListener(event, handler) {
    this.on(event, handler);
  }

  getListeners(eventName) {
    if (!!eventName) {
      return [...this.listeners.entries()].filter(
        ([name]) => name === eventName
      );
    }
    return [...this.listeners.entries()];
  }

  off(event, handler) {
    if (!this.listeners.has(event)) {
      return;
    }
    this.listeners.set(
      event,
      this.listeners.get(event).filter((h) => h !== handler)
    );
  }

  emit(event, ...data) {
    if (!this.listeners.has(event)) {
      return;
    }
    this.listeners.get(event).forEach((h) => {
      if (typeof h === "function") {
        h(...data);
      }
    });
  }
}

const NEW_STATE_ACTION_TYPE = "new-state";
class State extends EventEmitter {
  state = null;

  constructor() {
    super();
    this.setState = this.setState.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.getState = this.getState.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.notify = this.notify.bind(this);
    this.setIn = this.setIn.bind(this);

    this.setToObject = this.setToObject.bind(this);
  }

  subscribe(handler) {
    this.on(NEW_STATE_ACTION_TYPE, handler);
  }

  unsubscribe(handler) {
    this.off(NEW_STATE_ACTION_TYPE, handler);
  }

  getState() {
    return this.state;
  }

  getSnapshot() {
    return this.getState();
  }

  notify() {
    return this.emit(NEW_STATE_ACTION_TYPE, this.getState());
  }

  setState(newState) {
    if (typeof newState === "function") {
      this.state = newState(this.getState());
    } else {
      this.state = newState;
    }

    this.notify();

    return this.state;
  }

  /**
   *
   * @param {Object} obj
   * @param {Array<string>}keys
   * @param {Any} value
   * @returns {(*&{[p: number]: *})|*}
   */
  setToObject(obj, keys, value) {
    if (keys.length === 1) {
      obj[keys[0]] = value;
      return obj;
    }

    const [key, ...rest] = keys;

    return { ...obj, [key]: this.setToObject(obj[key], rest, value) };
  }

  setIn(path, value) {
    const keys = path.split(".");
    this.setState((state) => this.setToObject(state, keys, value));
  }
}

class Controller {
  /**
   * Decorate the State instance.
   * @type {State}
   */
  state = null;

  constructor(state) {
    this.state = state; // instanceof State;
  }

  subscribe(handler) {
    this.state.subscribe(handler);
  }

  unsubscribe(handler) {
    this.state.unsubscribe(handler);
  }

  setState(...args) {
    return this.state.setState(...args);
  }

  getState() {
    return this.state.getState();
  }

  getSnapshot() {
    return this.getState();
  }

  emit(...args) {
    return this.state.emit(...args);
  }

  notify() {
    this.state.notify();
  }
}

/**
 * Subscribe to a State. Trigger rerender if state changes.
 * @param {State} source
 * @returns {[any,State]}
 */
const useSubscription = (source) => {
  const [, rerender] = useReducer(() => ({}), {});

  useEffect(() => {
    const handler = () => {
      rerender();
    };

    source.subscribe(handler);
    return () => {
      source.unsubscribe(handler);
    };
  }, [source]);

  return [source.getSnapshot(), source];
};

class UsersState extends State {
  constructor() {
    super();
    this.state = [];
  }

  addUsers(users) {
    return this.setState((state) => [...state, ...users]);
  }

  setUsers(users) {
    return this.setState(users);
  }

  getUsers(users) {
    return this.getState();
  }
}

/**
 * Abstract the endpoint. Bind endpoint to a specific scope.
 */
class UsersService {
  #client = null;

  constructor(client) {
    this.#client = client;
  }

  users(filter) {
    return this.#client.request("/users", filter);
  }
}

class UsersController extends Controller {
  #usersService = null;

  /**
   *
   * @param {UsersState} usersState
   * @param usersService
   */
  constructor(usersState, usersService) {
    super(usersState);
    this.#usersService = usersService;

    this.getUser = this.getUser.bind(this);
  }

  async getUser({ id }) {
    /**
     * @type {Array<{firstName: string, secondName: string, id: string}>}
     */
    const users = await this.#usersService.users({ id: { eq: id } });
    this.state.setUsers(users);
  }
}

class Client {
  #fetch = null;

  constructor(options) {
    this.#fetch = options.fetch;
    this.request = this.request.bind(this);
  }

  async request(url, data) {
    const res = await this.#fetch(url, data);
    return res.json();
  }
}

const client = new Client({
  /* add other options here */
  fetch: (url, data) => {
    // Add headers here
    return fetch(url, data);
  },
});

const usersState = new UsersState();
const usersService = new UsersService(client);
const usersController = new UsersController(
  // any state can be passed, which respects the usersState interface
  usersState,
  // any service can be passed, which respects the usersService interface
  usersService
  /* other dependencies */
  /* ... */
);

const UsersControllerContext = createContext({});
const UsersControllerProvider = UsersControllerContext.Provider;
UsersControllerProvider.displayName = "UsersControllerProvider";

const useUsersController = () => {
  const controller = useContext(UsersControllerContext);
  return useSubscription(controller);
};

const useUsersState = () => useSubscription(usersState);

const Users = () => {
  // const users = useUsersState()
  const [users, { getUser }] = useUsersController();
  return (
    <div>
      {users.map(({ firstName, id }) => {
        return <div key={id}>{firstName}</div>;
      })}
    </div>
  );
};

const Mvc = () => {
  return (
    <div>
      <UsersControllerProvider
        value={
          // mocked usersController can be provided for testing
          usersController
        }
      >
        <Users />
      </UsersControllerProvider>
    </div>
  );
};

export default Mvc;
