const sMap = {
  resolve: 'resolve',
  reject: 'reject',
  pending: 'pending'
}

function SbPromise (exector) {
  let self = this

  this.value = undefined
  this.state = sMap.pending

  this.resolveList = []
  this.rejectList = []

  function resolve (val) {
    self.value = val
    self.state = sMap.resolve

    self.resolveNext()
  }

  exector(resolve)
}

SbPromise.prototype.resolveNext = function () {
  if (this.resolveList.length > 0) {
    this.resolveList.shift()()
  }
}

SbPromise.prototype.then = function (success, fail) {
  if (this.state === sMap.pending) {
    return new SbPromise((resolve, reject) => {
      this.resolveList.push(() => {
        let result = success(this.value)
        if (result instanceof SbPromise) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      })
    })
  }

  if (this.state === sMap.resolve) {
    return new SbPromise((resolve, reject) => {
      let result = success(this.value)
      if (result instanceof SbPromise) {
        result.then(resolve, reject)
      } else {
        resolve(result)
      }
    })
  }
}

SbPromise.race = function (list) {
  return new SbPromise((resolve, reject) =>{
    list.forEach(pro => {
      pro.then((data) => {
        resolve(data)
      })
    })
  })
}
