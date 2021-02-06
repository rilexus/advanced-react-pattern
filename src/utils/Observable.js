class Observable {
  handle = null;
  constructor(handler) {
    this.handle = handler;
  }

  subscribe({ next, done }) {
    return this.handle({ next, done });
  }

  static pipe(...operations) {
    return operations.reduce((init, current) => current(init), this);
  }
}

function fromValue(value) {
  return (obs) =>
    new Observable(({ next }) => {
      next(value);
    });
}

function map(project) {
  return (obs) =>
    new Observable(({ next }) => {
      obs.subscribe({
        next: (val) => next(project(val)),
      });
    });
}

function tap(tapper) {
  return (obs) =>
    new Observable(({ next }) => {
      obs.subscribe({
        next: (val) => {
          tapper(val);
          next(val);
        },
      });
    });
}

function fromEvent(element, event) {
  return () => {
    return new Observable(({ next }) => {
      const handler = (e) => next(e);
      element.addEventListener(event, handler);

      return {
        unsubscribe: () => {
          element.removeEventListener(event, handler);
        },
      };
    });
  };
}

export { Observable, map, fromValue, tap, fromEvent };
