```jsx
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

const useCount = () => {
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
  
  return [count, controller.add];
}


const Component = () => {
  const [count, add] = useCount();
  
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => add(1)}>Add</button>
      </div>
    </div>
  );
};
```