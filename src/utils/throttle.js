export function throttle(callback, time) {
  let canExecute = true;
  return function (/* arguments */) {
    // this function will be called at max. every 1000ms, if called periodically
    const args = arguments;
    const self = this;

    const blockExecution = () => {
      canExecute = false; // block next execution for `${time}ms`
    };

    const releaseExecution = () => {
      console.timeEnd("Throttled for");
      canExecute = true;
    };

    const executeCallback = () => {
      // bind "this" and passed arguments to the callback
      console.time("Throttled for");
      callback.apply(self, args);
    };

    const makeExecutableAfter = (period) => {
      setTimeout(releaseExecution, period);
    };

    if (canExecute) {
      blockExecution();
      executeCallback();
      makeExecutableAfter(time);
    }
  };
}
