function Command(worker) {
  this.execute = function () {
    const args = arguments;
    const self = this;
    return worker.call(self, ...args);
  };
}

export const createCommand = (worker) => {
  return (...args /* action */) => {
    return new Command((state) => worker(state, ...args));
  };
};

export default Command;
