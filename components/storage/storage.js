import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function createStorage({ name, initialState, reducer }) {
  let subscribers = [];

  const setStorage = (value) => {
    try {
      window.localStorage.setItem(name, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  const getStorage = () => {
    try {
      // @ts-ignore
      return JSON.parse(window.localStorage.getItem(name));
    } catch (e) {
      console.error(e);
    }
  };

  if (!getStorage()) {
    // set initial value to storage if not present
    setStorage(initialState);
  }

  function callSubscribers(storage) {
    subscribers.forEach((sub) => sub(storage));
  }

  function emit(event) {
    const newState = reducer(getStorage(), event);
    setStorage(newState);
    callSubscribers(newState);
  }

  function subscribe(subscriber) {
    subscribers.push(subscriber);
  }

  function unsubscribe(subscriber) {
    subscribers = subscribers.filter((sub) => sub !== subscriber);
  }

  return {
    emit,
    subscribe,
    unsubscribe,
    getStorage,
  };
}

const StorageContext = createContext({});
const StorageProvider = ({ storage, children }) => {
  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
};

const useStorageContext = () => useContext(StorageContext);

function useStorage(selector) {
  const selectorRef = useRef(selector);
  useEffect(() => {
    selectorRef.current = selector;
  }, [selector]);

  const [_flag, _setFlag] = useState(false);
  const storage = useStorageContext();

  useEffect(() => {
    const handle = () => _setFlag((f) => !f);
    //@ts-ignore
    storage.subscribe(handle);
    return () => {
      //@ts-ignore
      storage.unsubscribe(handle);
    };
  }, []);

  //@ts-ignore
  return useMemo(() => selectorRef.current(storage.getStorage()), [_flag]);
}

const useEmit = () => {
  const storage = useStorageContext();

  //@ts-ignore
  return storage.emit;
};

const connectStorage = (mapStorageToProps, mapEmitToProps) => {
  return (WrappedComponent) => {
    return function Wrapper(props) {
      const [_flag, _setFlag] = useState(false);
      const storage = useStorageContext();

      useEffect(() => {
        const handle = () => _setFlag((f) => !f);
        // @ts-ignore
        storage.subscribe(handle);
        return () => {
          // @ts-ignore
          storage.unsubscribe(handle);
        };
      }, []);

      const mappedStorage = useMemo(
        // @ts-ignore
        () => mapStorageToProps(storage.getStorage()),
        [_flag]
      );
      // @ts-ignore
      const mappedEmit = useMemo(() => mapEmitToProps(storage.emit), [_flag]);

      return <WrappedComponent {...props} {...mappedEmit} {...mappedStorage} />;
    };
  };
};

const withStorage = (storage, WrappedComponent) => {
  return function Wrapper(props) {
    return (
      <StorageProvider storage={storage}>
        <WrappedComponent {...props} />
      </StorageProvider>
    );
  };
};

export {
  createStorage,
  StorageProvider,
  useStorage,
  withStorage,
  connectStorage,
  useEmit,
};
