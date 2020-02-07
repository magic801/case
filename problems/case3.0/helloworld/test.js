if (!window.getI18NString) {
    getI18NString = function(s) {
        return s;
    }
}

let graph = new Q.Graph('demon');

let hello = graph.createNode("Hello", -100, -50);
hello.image = Q.Graphs.server;

let h1 = graph.createNode('h1', -130, -10)
// h1.image = 'http://static-s.iqiyi.com/ext/common/lego/a813fb97d11b44d496b7251cd68f192d.jpeg'
h1.anchorPosition = Q.Position.LEFT_TOP
h1.rotate = Math.PI / 4
h1.parent = hello
h1.host = hello

let h2 = graph.createNode('h2', -80, -10)
h2.parent = hello
h2.setStyle(Q.Styles.BORDER, 1)
h2.setStyle(Q.Styles.BORDER_COLOR, '#aabbee')
h2.setStyle(Q.Styles.PADDING, 5)
h2.image = Q.Graphs.cloud

let qunee = graph.createNode("Qunee", 100, 50);
qunee.setStyle(Q.Styles.LABEL_OFFSET_Y, -10)
qunee.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP)
qunee.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM)
qunee.setStyle(Q.Styles.LABEL_BORDER, 1)
qunee.setStyle(Q.Styles.LABEL_POINTER, true)
qunee.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5))
qunee.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT, Q.Gradient.LINEAR_GRADIENT_VERTICAL)

let edge = graph.createEdge("Hello\nQunee", hello, qunee);

edge.setStyle(Q.Styles.LABEL_OFFSET_Y, -10);
edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
edge.setStyle(Q.Styles.LABEL_BORDER, 1);
edge.setStyle(Q.Styles.LABEL_POINTER, true);
edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT, Q.Gradient.LINEAR_GRADIENT_VERTICAL);

graph.createEdge(hello, qunee)
graph.createEdge(hello, qunee)
graph.createEdge('self', qunee, qunee)

graph.ondblclick = (evt) => {
	let node = graph.getElementByMouseEvent(evt)
	if (node) {
		let nname = prompt('new name:', '')
		if (nname) {
			node.name = nname
		}
	}
}
