if (!window.getI18NString) {
    getI18NString = function(s) {
        return s
    }
}

let graph = new Q.Graph('demon')
graph.styles = graph.styles || {}
graph.styles[Q.Styles.ARROW_TO_STYLES] = {
	lineWidth: 1,
	lineJoin: 'round' || 'miter'
}

let createEdge = (from, to, type, lineWidth, color) => {
	let edge = graph.createEdge(`${from.name} -> ${to.name}`, from, to)
	edge.setStyle(Q.Styles.EDGE_COLOR, color || '#000')
	edge.edgeType = type || Q.Consts.EDGE_TYPE_DEFAULT
	return edge
}

let node1 = graph.createNode('001', -230, -150)
let node2 = graph.createNode('002', 200, -150)
let node3 = graph.createNode('003', -0, -0)
let node4 = graph.createNode('004', -200, 150)
let node5 = graph.createNode('005', 200, 150)
let node6 = graph.createNode('006', -350, 100)

let edge1 = createEdge(node3, node4, Q.Consts.EDGE_TYPE_ELBOW)
edge1.setStyle(Q.Styles.EDGE_LINE_DASH, [8, 4, 0.01, 4])
edge1.setStyle(Q.Styles.ARROW_TO, Q.Consts.SHAPE_TRIANGLE)
edge1.setStyle(Q.Styles.ARROW_FROM, Q.Consts.SHAPE_CIRCLE)

let offset = 0
let index = 0
let timer = setInterval(() => {
	offset += -1
	edge1.setStyle(Q.Styles.EDGE_LINE_DASH_OFFSET, offset)
	index++
	index %= 20
	edge1.setStyle(Q.Styles.ARROW_FROM_OFFSET, {
		x: 0.3 + 0.02 * (20 - index),
		y: -10
	})
}, 150)
