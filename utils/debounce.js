export function debounce(callback, time) {
  let timeoutID = -1;

  // this function will be called, if the delta(t) between executions is >= 350ms
  return function () {
    const functionContext = this;
    const functionArguments = arguments;

    const abortExecution = () => {
      clearTimeout(timeoutID);
    };

    const executeCallback = () => {
      abortExecution();
      callback.apply(functionContext, functionArguments);
    };

    const delayExecution = (duration) => {
      timeoutID = setTimeout(executeCallback, duration);
    };

    abortExecution();
    delayExecution(time);
  };
}
