if (window.DeviceMotionEvent) {
  let count = 0
  let ltime = +new Date()
  let lo = {
    x: 0,
    y: 0,
    z: 0
  }
  window.addEventListener('devicemotion', (e) => {
    let acceleration = e.accelerationIncludingGravity
    let curr = +new Date()
    if ( curr > ltime + 500) {
      ltime = curr
      let dx = (acceleration.x - lo.x)
      let dy = (acceleration.y - lo.y)
      let dz = (acceleration.z - lo.z)
      if (dx > 1 || dy > 1 || dz > 1) {
        document.getElementById('test').innerHTML = (acceleration.x - lo.x) + ' -- ' + (acceleration.y - lo.y) + ' -- ' + (acceleration.z - lo.z)  
      }
      
    }
    Object.assign(lo, acceleration)
  }, false)
}