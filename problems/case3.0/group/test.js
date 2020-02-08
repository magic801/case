if (!window.getI18NString) {
    getI18NString = function(s) {
        return s
    }
}

let graph = new Q.Graph('demon')
// graph.originAtCenter = false
graph.navigationType = Q.Consts.NAVIGATION_BUTTON
graph.styles = graph.styles || {}
graph.styles[Q.Styles.LABEL_COLOR] = 'green'

let hello = graph.createNode("Hello", -100, -50)
let qunee = graph.createNode("Qunee", 100, 50)

let edge1 = graph.createEdge(hello, qunee)
edge1.setStyle(Q.Styles.EDGE_COLOR, '#EEBBAA')
edge1.edgeType = Q.Consts.EDGE_TYPE_HORIZONTAL_VERTICAL
let label = new Q.LabelUI()
label.position = Q.Position.CENTER_TOP
label.anchorPosition = Q.Position.CENTER_BOTTOM
label.border = 1
label.showPointer = true
label.padding = new Q.Insets(2, 5)
label.offsetY = -10
label.fontSize = 16
label.backgroundColor = '#ccc'
edge1.addUI(label, [{
	property: 'demon',
	propertyType: Q.Consts.PROPERTY_TYPE_CLIENT,
	bindingProperty: 'data'
}])
edge1.set('demon', 'klsl')

let edge2 = graph.createEdge("Hello\nQunee", hello, qunee)
edge2.setStyle(Q.Styles.EDGE_WIDTH, 2)
edge2.setStyle(Q.Styles.EDGE_COLOR, '#AABBEE')
edge2.setStyle(Q.Styles.EDGE_LINE_DASH, [4, 4, 0.01, 1])
edge2.edgeType = Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL

let group = graph.createGroup()
group.groupType = Q.Consts.GROUP_TYPE_ELLIPSE
group.setStyle(Q.Styles.GROUP_BACKGROUND_COLOR, '#ffffcc')
group.setStyle(Q.Styles.GROUP_BACKGROUND_GRADIENT, Q.Gradient.LINEAR_GRADIENT_HORIZONTAL)
// group.groupImage = Q.Graphs.cloud
group.addChild(hello)
group.addChild(qunee)

let net = graph.createNode('双击进入子网')
net.image = Q.Graphs.subnetwork
net.enableSubNetwork = true

group.parent = net

graph.onPropertyChange('currentSubNetwork', () => {
	graph.html.style.backgroundColor = graph.currentSubNetwork === net ? '#eee' : '#fff'
})

// let bus = new Q.Bus()
// graph.addElement(bus)
// bus.moveTo(-100, 140)
// bus.lineTo(100, 140)
// bus.setStyle(Q.Styles.SHAPE_STROKE, 10)

// let bedge = graph.createEdge(bus, group)
// bedge.angle = Math.PI * 0.3

// graph.onclick = (evt) => {
// 	let p = graph.globalToLocal(evt)
// 	let l = graph.toLogical(p.x, p.y)
// 	Q.log(`${p.x} ${p.y}    ${l.x} ${l.y}`)
// }

// graph.ondrag = (evt) => {
// 	let p = graph.globalToLocal(evt)
// 	let l = graph.toLogical(p.x, p.y)
// 	Q.log(`${p.x} ${p.y}    ${l.x} ${l.y}`)
// }

graph.addCustomInteraction({
	onmousemove: (evt, graph) => {
		let ui = graph.getUIByMouseEvent(evt)
		if (ui) {
			graph.cursor = 'pointer'
		} else {
			graph.cursor = null
		}
	}
})

graph.onkeydown = (evt) => {
	if (evt.keyCode !== 70) {
		let info = graph.exportImage(1)
		if (info && info.data) {
			let doc = window.open().document
			doc.title = 'export image'
			let img = doc.createElement('img')
			img.src = info.data
			doc.body.appendChild(img)
		}
		return
	}

	let ghStyle = graph.html.style
	if (!graph.oldCSS || ghStyle.position !== 'fixed') {
		graph.oldCSS = {
			position: ghStyle.position,
			width: ghStyle.width,
			height: ghStyle.height,
			left: ghStyle.left,
			top: ghStyle.top
		}

		ghStyle.position = 'fixed'
		ghStyle.width = window.innerWidth + 'px'
		ghStyle.height = window.innerHeight + 'px'
		ghStyle.left = '110px'
		ghStyle.top = '110px'
		ghStyle.zIndex = 1000
	} else {
		ghStyle.position = graph.oldCSS.position
		ghStyle.width = graph.oldCSS.width
		ghStyle.height = graph.oldCSS.height
		ghStyle.left = graph.oldCSS.left
		ghStyle.top = graph.oldCSS.top
		ghStyle.zIndex = graph.oldCSS.zIndex
	}

	graph.updateViewport()
}

graph.isMovable = (item) => {
	Q.log(item.name)
	return item.name && item.name === '双击进入子网'
}
