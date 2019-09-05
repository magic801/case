function Event() {
  this._callbacks = {}
}

Event.prototype.on = function (name, fn) {
  this._callbacks = this._callbacks || {}

  if (!this._callbacks[name]) {
    this._callbacks[name] = []
  }
  this._callbacks[name].push(fn)
}

Event.prototype.once = function (name, fn) {
  this._callbacks = this._callbacks || {}

  if (!this._callbacks[name]) {
    this._callbacks[name] = []
  }

  let tmp = () => {
    this.off(name, tmp)
    fn.apply(this, arguments)
  }
  this._callbacks[name].push(tmp)
}

Event.prototype.off = function (name, fn) {
  if (!arguments.length) {
    this._callbacks = {}
    return this
  }

  let list = this._callbacks[name]
  if (!list) {
    return this
  }

  if (arguments.length === 1) {
    delete this._callbacks[name]
  }

  for (let i=0, len=list.length; i<len; i++) {
    let tmp = list[i]
    if (tmp === fn) {
      list.splice(i, 1)
      break
    }
  }

  return this
}

Event.prototype.trigger = function (name) {
  this._callbacks = this._callbacks || {}

  let argv = [].slice.call(arguments, 1)
  let list = this._callbacks[name]

  if (!list) {
    return this
  }

  for (let i=0, len=list.length; i<len; i++) {
    let tmp = list[i]
    tmp.apply(this, argv)
  }
}
