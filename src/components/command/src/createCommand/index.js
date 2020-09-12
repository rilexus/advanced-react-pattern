import Command from "../command";

function createCommand(worker){
  return function() {
    const args1 = arguments
    return new Command(function() {
      const self = this
      const args2 = arguments
      return worker.call(self, ...args2, ...args1)
    })
  }
}
export default createCommand
