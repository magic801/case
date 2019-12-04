let canvas = document.getElementById('mycan')

let stage = new createjs.Stage(canvas)
createjs.Touch.enable(stage)

let state = {
  rotate: false
}

let rect = new createjs.Shape()
rect.graphics.beginFill('#ccc').drawRect(0,0,40,40)
rect.regX = rect.regY = 20
rect.x = rect.y = 100

stage.addChild(rect)
stage.update()

createjs.Ticker.setFPS(60)
createjs.Ticker.addEventListener('tick', () => {
  if (stage.rotate) {
    rect.rotation++
    stage.update()
  }
})

rect.on('mousedown', (e) => {
  stage.rotate = !stage.rotate
  console.log('mousedown')
}, true)

stage.on('stagemousemove', (e) => {
  rect.x = e.stageX
  rect.y = e.stageY
  stage.update()
})

stage.on('stagemousedown', (e) => {
  // rect.x = e.stageX
  // rect.y = e.stageY
  // stage.update()
  console.log('stagemousedown')
}, true)