if (!window.getI18NString) {
    getI18NString = function(s) {
        return s
    }
}

let graph = new Q.Graph('demon')

// let group = graph.createGroup()

// for (let i=0; i<10; i++) {
// 	let tmp = graph.createNode(`node${i+1}`)
// 	tmp.size = {
// 		width: 16
// 	}
// 	tmp.parent = group
// }

// let group2 = graph.createGroup()

// for (let i=0; i<10; i++) {
// 	let tmp = graph.createNode(`node${i+1}`)
// 	tmp.size = {
// 		width: 16
// 	}
// 	tmp.parent = group2
// }

// let layouter = new Q.SpringLayouter(graph)
// layouter.attractive = 0.5
// layouter.start()

let createNode = (name, from) => {
	let node = graph.createNode(name)
	node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 30, 30)
	if (from) {
		graph.createEdge(from, node)
		graph.createEdge(from, node)
	}
	return node
}

let biggest = createNode('root')
biggest.parentChildrenDirection = Q.Consts.DIRECTION_BOTTOM
let i = 0
while (i++ < 3) {
	let tmp = createNode(`n${i}`, biggest)
	// tmp.parentChildrenDirection = Q.Consts.DIRECTION_RIGHT
	for (let j=0; j<4; j++) {
		createNode(`n${i}-${j}`, tmp)
	}
}

// let layouter = new Q.TreeLayouter(graph)
// layouter.layoutType = Q.Consts.LAYOUT_TYPE_EVEN_HORIZONTAL
// layouter.doLayout({
// 	callback: () => {
// 		// graph.zoomToOverview()
// 	}
// })

let layouter = new Q.BalloonLayouter(graph)
layouter.radiusMoe = Q.Consts.RADIUS_MODE_UNIFORM
layouter.radius = 100
layouter.doLayout()
