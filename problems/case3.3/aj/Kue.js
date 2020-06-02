function Kue(data, el, exp) {
  this.data = data
  observe(data)
  el.innerHTML = this.data[exp]
  new Watcher(this, exp, (val) => {
    el.innerHTML = val
  })

  return this
}
