if (!window.getI18NString) {
    getI18NString = function(s) {
        return s
    }
}

let graph = new Q.Graph('demon')

let group = graph.createGroup()
let node1 = null
for (let i=0; i<4; i++) {
	node1 = graph.createNode(`node${i+1}`)
	node1.size = {
		width: 16
	}
	node1.parent = group
}

let group2 = graph.createGroup()
group2.setStyle(Q.Styles.GROUP_BACKGROUND_COLOR, 'transparent')
group2.setStyle(Q.Styles.GROUP_STROKE_STYLE, '#e6e6e6')
let node2 = null
for (let i=0; i<3; i++) {
	node2 = graph.createNode(`node${i+1}`)
	node2.setStyle(Q.Styles.LABEL_COLOR, '#e6e6e6')
	node2.size = {
		width: 20
	}
	node2.parent = group2
}

let layouter = new Q.SpringLayouter(graph, 200)
// layouter.repulsion = 90
// layouter.attractive = 0.1
// layouter.elastic = 5
// layouter.start(() => {
// 	let edge = graph.createEdge(node1, node2)
// 	edge.setStyle(Q.Styles.EDGE_COLOR, '#80ccff')
// 	edge.setStyle(Q.Styles.EDGE_LINE_DASH, [10, 5])
// 	edge.setStyle(Q.Styles.ARROW_TO_SIZE, 4)
// 	edge.setStyle(Q.Styles.EDGE_WIDTH, 0.4)
// 	// graph.zoomToOverview(true)

// 	let i = 0
//   setInterval(() => {
//     i -= 2
//     i %= 15
//     edge.setStyle(Q.Styles.EDGE_LINE_DASH_OFFSET, i)
//   }, 150)
// })

layouter.start(() => {
	let edge = graph.createEdge(node1, node2)
	edge.setStyle(Q.Styles.EDGE_COLOR, '#80ccff')
	edge.setStyle(Q.Styles.EDGE_LINE_DASH, [10, 5])
	edge.setStyle(Q.Styles.ARROW_TO_SIZE, 4)
	edge.setStyle(Q.Styles.EDGE_WIDTH, 0.4)
	// graph.zoomToOverview(true)
})

setTimeout(() => {
	// let i = 0
	// setInterval(() => {
	//   i -= 2
	//   i %= 15
	//   edge.setStyle(Q.Styles.EDGE_LINE_DASH_OFFSET, i)
	// }, 150)
	layouter.stop()
  layouter.doLayout()
}, 5500)

// let createNode = (name, from) => {
// 	let node = graph.createNode(name)
// 	node.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 30, 30)
// 	if (from) {
// 		graph.createEdge(from, node)
// 		graph.createEdge(from, node)
// 	}
// 	return node
// }

// let biggest = createNode('root')
// biggest.parentChildrenDirection = Q.Consts.DIRECTION_BOTTOM
// let i = 0
// while (i++ < 3) {
// 	let tmp = createNode(`n${i}`, biggest)
// 	// tmp.parentChildrenDirection = Q.Consts.DIRECTION_RIGHT
// 	for (let j=0; j<4; j++) {
// 		createNode(`n${i}-${j}`, tmp)
// 	}
// }

// let layouter = new Q.TreeLayouter(graph)
// layouter.layoutType = Q.Consts.LAYOUT_TYPE_EVEN_HORIZONTAL
// layouter.doLayout({
// 	callback: () => {
// 		// graph.zoomToOverview()
// 	}
// })

// let layouter = new Q.BalloonLayouter(graph)
// layouter.radiusMoe = Q.Consts.RADIUS_MODE_UNIFORM
// layouter.radius = 100
// layouter.doLayout()
