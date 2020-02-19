var dataFlow = [{
    id: 0,
    label: '事项受理',
    status: 'success',
    target: 1,
    back_target: null
}, {
    id: 1,
    label: '初审',
    status: 'success',
    target: 2,
    back_target: null
}, {
    id: 2,
    label: '初审回复',
    status: 'success',
    target: 3,
    back_target: null
}, {
    id: 3,
    label: '事情打回',
    status: 'fail',
    target: 4,
    back_target: 1
}, {
    id: 4,
    label: '事项办结',
    status: 'current',
    target: null,
    back_target: null
}, {
    id: 5,
    label: '候审补正',
    status: 'done',
    target: null,
    back_target: null
}]
// Create the input graph
var g = new dagreD3.graphlib.Graph()
    .setGraph({})
    .setDefaultEdgeLabel(function() {
        return {};
    });

dataFlow && dataFlow.map((item, i) => {
    g.setNode(item.id, {
        label: item.label,
        class: "type-" + item.status,
        // id: "status" + i
    });
    // Set up edges, no special attributes.
    if (item.target && !item.back_target) {
        g.setEdge(item.id, item.target, {})
    } else if (item.back_target) {
        console.log(1111111)
        g.setEdge(item.id, item.target, {})
        g.setEdge(item.id, item.back_target, {})
    }
})

g.nodes().forEach(function(v) {
    var node = g.node(v);
    // Round the corners of the nodes
    node.rx = node.ry = 5;
});

// Create the renderer
var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select("svg"),
    svgGroup = svg.append("g");

// Run the renderer. This is what draws the final graph.
render(d3.select("svg g"), g);

var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
svg.attr("height", g.graph().height + 40)