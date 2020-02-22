let width = document.body.clientWidth, height = document.body.clientHeight
let demon = d3.select('#demon')
let svg = demon
    .append('svg')
    .attr('height', height)
    .attr('width', width)
let tabCon = d3.select('#tabs')

var colorScale = d3.scaleOrdinal()
  .domain(d3.range(5))
  .range(d3.schemeCategory10)

let tabs = {}
let currIndex = 1

let removeTabAndTable = () => {
  let id = `tab${currIndex}`
  if (tabs[id]) {
    let i = currIndex
    while (tabs[`tab${i}`]) {
      tabs[`tab${i}`].title.remove()
      tabs[`tab${i}`].content.remove()
      i++
    }
  }
}

let draw = (table, nodes, edges) => {
  let forceSimulateion = d3.forceSimulation(nodes)
    .force('link', d3.forceLink())
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))
    .on('tick', ticked)
    .stop()

  // forceSimulateion
  forceSimulateion.force('link')
    .links(edges)
    .distance(() => {
      return 200
    })
    .iterations(10)

  let links = table.append('g')
    .selectAll('.link')
    .data(edges)
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('stroke-dasharray', '13 7')
    .attr('stroke-dashoffset', '5')
    .attr('stroke', '#217EF25f')
    // .attr('stroke', "url(#orange_red)")
    // .attr('stroke-width', "10")
    // .attr('fill', '#aaa')

  let texts = table.selectAll('.d3node')
    .data(nodes)
    .enter()
    .append('g')
    .attr('transform', (d) => {
      return `translate(${d.x}, ${d.y})`
    })
    .attr('class', 'd3node')

  texts.append('rect')
    .attr('width', 6)
    .attr('height', 10)
    .attr('y', -10)
    .style('fill', (d, i) => colorScale(i))
  texts.append('text')
    .attr('x', 7)
    .attr('y', 0)
    // .attr('dy', 10)
    .text((d) => {
      return d.name
    })
  texts.on('click', (d) => {
    getInfo(d).then(({ nodes, edges }) => {
      removeTabAndTable()
      let tab = addTab()
      draw(tab, nodes, edges)
    })
  })

  d3.timeout(() => {
    for (let i = 0, n = Math.ceil(Math.log(forceSimulateion.alphaMin()) / Math.log(1 - forceSimulateion.alphaDecay()));
      i < n;
      i += 1
    ) {
      forceSimulateion.tick();
      ticked();
    }
  })

  // let time = 0
  function ticked() {
    // if (forceSimulateion.alpha() <= 0.05) {
      // console.log(time++ + ' times')
      links
        .attr('d', d => {
          // console.log(d)
          return `M${d.source.x} ${d.source.y} Q ${(d.source.x + d.target.x)/2} ${(d.target.y + d.source.y)/2 - 80} ${d.target.x} ${d.target.y}`
        })
        
      texts.attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")"
      })
    //   forceSimulateion.stop()
    // }
  }
}

let hideAllTabButOne = (id) => {
  for (let k in tabs) {
    tabs[k].content.attr('class', 'hide')
  }

  tabs[id].content.attr('class', '')
}

let addTab = () => {
  let gg = svg.append('g').attr('transform', 'translate(60, 60)')
  let id = `tab${currIndex}`

  let group = tabCon.append('g')
    .attr('dindex', currIndex)
    .attr('transform', `translate(${45 * currIndex}, 35)`)
    .on('click', (a, b, c, d) => {
      hideAllTabButOne(id)
      currIndex = +c[0].getAttribute('dindex') + 1
    })

  group
    .append('circle')
    .attr('r', 10)
    .attr('fill', () => {
      return colorScale(currIndex)
    })

  group
    .append('text')
    .attr('x', -4)
    .attr('y', 6)
    .text(currIndex)

  currIndex++

  tabs[id] = {
    title: group,
    content: gg
  }
  hideAllTabButOne(id)

  return gg
}

getInfo().then(({ nodes, edges }) => {
  let tab = addTab()
  draw(tab, nodes, edges)
})
