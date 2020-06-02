function defineReactive(data, key, val) {
  observe(val)
  let dep = new Dep()
  Object.defineProperty(data, key, {
    get: function() {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return val
    },
    set: function(nVal) {
      if (val === nVal) {
        return
      }
      val = nVal
      console.log(`数据劫持set： ${val}`)
      dep.notify()
    }
  })
}

function observe(data) {
  if (!data || typeof data !== 'object') {
    return
  }

  Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key])
  })
}
