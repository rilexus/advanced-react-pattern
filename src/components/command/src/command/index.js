function Command(worker) {
  this.execute = function(){
    const args = arguments
    const self = this
    return worker.call(self, ...args)
  }
}

export default Command