var util = require('util')
var EventEmitter = require('events').EventEmitter

var emit1 = new EventEmitter()

class MusicPlayer extends EventEmitter {
  constructor() {
    super()
  }
}

var player = new MusicPlayer()

player.on('es', (e) => {
  console.log(e)
})

player.on('es', (e) => {
  console.log(e)
})

player.emit('es', 33)

console.log(player.listeners('es'))
