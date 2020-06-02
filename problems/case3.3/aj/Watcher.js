function Watcher(vm, exp, cb) {
  this.vm = vm
  this.exp = exp
  this.cb = cb
  this.value = this.get()
}
Watcher.prototype.update = function() {
  this.run()
}
Watcher.prototype.run = function() {
  let val = this.vm.data[this.exp]
  let oldVal = this.value
  if (val !== oldVal) {
    this.value = val
    this.cb.call(this.vm, val, oldVal)
  }
}
Watcher.prototype.get = function() {
  Dep.target = this
  let val = this.vm.data[this.exp]
  Dep.target = null
  return val
}



function Dep() {
  this.subs = []
}
Dep.prototype.addSub = function(sub) {
  this.subs.push(sub)
}
Dep.prototype.notify = function() {
  this.subs.forEach((sub) => {
    sub.update()
  })
}
Dep.target = null
