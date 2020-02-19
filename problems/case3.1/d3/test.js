let width = 400, height = 400
let svg = d3.select('body')
  .append('svg')
  .attr('height', height)
  .attr('width', width)
let gg = svg.append('g').attr('transform', 'translate(60, 60)')

var colorScale = d3.scaleOrdinal()
  .domain(d3.range(5))
  .range(d3.schemeCategory10)

let demo1 = () => {
  let list = [2, 4, 6, 5.5, 7]

  d3.select('body')
    .selectAll('p')
    .data(list)
    .text((d) => {
      return d
    })

  let linear = d3.scaleLinear()
    .domain([0, d3.max(list)])
    .range([0, 300])

  let axis = d3.axisBottom().scale(linear).ticks(7)

  let svg = d3.select('body')
    .append('svg')
    .attr('height', 300)
    .attr('width', 300)

  svg
    .selectAll('rect')
    .data(list)
    .enter()
    .append('rect')
    .attr('x', 10)
    .attr('y', (d, i) => {
      return i * 25 + i * 5
    })
    .attr('height', 25)
    .attr('width', (d) => {
      return linear(d)
    })
    .attr('fill', 'steelblue')

  svg
    .append('g')
    .attr('class', 'axis')
    .attr("transform","translate(20,150)")
    .call(axis)

  let circle = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 220)
    .attr('r', 45)
    .style('fill', 'green')

  // circle.transition()
  //   .duration(2000)
  //   .ease(d3.easeBounceIn)
  //   .style('fill', 'red')
  //   .attr('r', 20)
  //   .attr('cx', 160)

  circle.on('click', (d, i) => {
    console.log('click')
    console.log(`${d}  ${i}`)
  }).on('mouseover', () => {
    circle
      .transition()
      .duration(500)
      .style('fill', 'red')
  }).on('mouseout', () => {
    circle
      .transition()
      .duration(500)
      .style('fill', 'green')
  })
}

let demo2 = () => {
  let gg = svg
    .append('g')
    .attr("transform","translate("+60+","+60+")")
    
  let list = [1, 2, 3, 4, 5]

  let colorScale = d3.scaleOrdinal()
    .domain(d3.range(list.length))
    .range(d3.schemeCategory10)

  let pie = d3.pie()
  let pieData = pie(list)
  let arc = d3.arc().innerRadius(0).outerRadius(100)

  let gs = gg
    .selectAll('g')
    .data(pieData)
    .enter()
    .append('g')
    .attr("transform","translate("+300/2+","+300/2+")")

  gs.append('path')
    .attr('d', (d) => {
      return arc(d)
    })
    .attr('fill', (d, i) => {
      return colorScale(i)
    })
}

let demo3 = () => {
  let nodes = [
    { name: '上海' },
    { name: '天津' },
    { name: '大连' },
    { name: '北京' },
    { name: '武汉' },
  ]

  let edges = [
    { source: 0, target: 3},
    { source: 2, target: 3},
    { source: 3, target: 1}
  ]

  let forceSimulateion = d3.forceSimulation()
    .force('link', d3.forceLink())
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter())

  forceSimulateion.nodes(nodes).on("tick",ticked)
  forceSimulateion.force('link')
    .links(edges)
    .distance(() => {
      return 200
    })
  forceSimulateion.force('center')
    .x(width / 2)
    .y(height / 2)

  let links = gg.append('g')
    .selectAll('line')
    .data(edges)
    .enter()
    .append('line')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

  let texts = gg.selectAll('.circleText')
    .data(nodes)
    .enter()
    .append('g')
    .attr('transform', (d) => {
      return `translate(${d.x}, ${d.y})`
    })

  texts.append('circle')
    .attr('r', 10)
    .attr('fill', (d, i) => {
      return colorScale(i)
    })
  texts.append('text')
    .attr('x', -10)
    .attr('y', -20)
    .attr('dy', 10)
    .text((d) => {
      return d.name
    })

  function ticked() {
    links
      .attr("x1",function(d){return d.source.x;})
      .attr("y1",function(d){return d.source.y;})
      .attr("x2",function(d){return d.target.x;})
      .attr("y2",function(d){return d.target.y;});
      
    // linksText
    //   .attr("x", function(d) {
    //     return (d.source.x+d.target.x)/2;
    //   })
    //   .attr("y", function(d) {
    //     return (d.source.y + d.target.y)/2;
    //   })
      
    texts.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")"
    })
  }
}

demo3()
