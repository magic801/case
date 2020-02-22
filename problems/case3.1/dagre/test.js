let vm = new Vue({
  el: '#app',
  template: `
    <div>
      <div>
        <input
          v-for="item in breadList"
          type="button"
          :value="item.text" />
      </div>
      <svg id="svg-canvas" width=700 height=300
        @click="svgClick" />
      <ul
        v-show="menuVisible"
        class="menu"
        :style="{top: menuPos.top, left: menuPos.left}">
        <li>详情</li>
        <li @click="openNode">展开</li>
        <li>删除</li>
      </ul>
    </div>
  `,

  data () {
    return {
      menuPos: {
        top: 0,
        left: 0
      },

      breadList: [],

      menuVisible: false
    }
  },

  mounted() {
    this.initGraph()
  },

  methods: {
    initGraph () {
      var g = new dagreD3.graphlib.Graph()
        .setGraph({})
        .setDefaultEdgeLabel(function() {
            return {};
        });

      g.setNode(0, {
        label: "TOP",
        class: "type-TOP"
      });
      g.setNode(1, {
        label: "S",
        class: "type-S"
      });
      g.setNode(2, {
        label: "NP",
        class: "type-NP"
      });
      g.setNode(3, {
        label: "DT",
        class: "type-DT"
      });
      g.setNode(4, {
        label: "This",
        class: "type-TK"
      });
      g.setNode(5, {
        label: "VP",
        class: "type-VP"
      });
      g.setNode(6, {
        label: "VBZ",
        class: "type-VBZ"
      });
      g.setNode(7, {
        label: "is",
        class: "type-TK"
      });
      g.setNode(8, {
        label: "NP",
        class: "type-NP"
      });
      g.setNode(9, {
        label: "DT",
        class: "type-DT"
      });
      g.setNode(10, {
        label: "an",
        class: "type-TK"
      });
      g.setNode(11, {
        label: "NN",
        class: "type-NN"
      });
      g.setNode(12, {
        label: "example",
        class: "type-TK"
      });
      g.setNode(13, {
        label: ".",
        class: "type-."
      });
      g.setNode(14, {
        label: "sentence",
        class: "type-TK"
      });

      g.nodes().forEach(function(v) {
        var node = g.node(v);
        node.rx = node.ry = 15;
      });

      g.setEdge(3, 4);
      g.setEdge(2, 3);
      g.setEdge(1, 2);
      g.setEdge(6, 7);
      g.setEdge(5, 6);
      g.setEdge(9, 10);
      g.setEdge(8, 9);
      g.setEdge(11, 12);
      g.setEdge(8, 11);
      g.setEdge(5, 8);
      g.setEdge(1, 5);
      g.setEdge(13, 14);
      g.setEdge(1, 13);
      g.setEdge(0, 1)

      var render = new dagreD3.render();

      var svg = d3.select("svg")
      var svgGroup = svg.append("g")

      render(d3.select("svg g"), g);

      var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
      svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
      svg.attr("height", g.graph().height + 40);

      svg.on('click', (d,a, b,c) => {
        console.log(d)
      })
    },

    showMenu (e) {
      this.menuVisible = true
    },

    hideMenu () {
      this.menuVisible = false
    },

    openNode () {
      console.log('...')
    },

    svgClick (e) {
      if (e.target.tagName === 'rect' || e.target.tagName === 'tspan') {
        this.menuPos.top = e.pageY + 'px'
        this.menuPos.left = e.pageX + 'px'
        this.showMenu(e)
      } else {
        this.hideMenu()
      }
    }
  }
})
