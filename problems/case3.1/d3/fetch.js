let ns = [
  { name: '军', id: '1' },
  { name: '师', id: '2' },
  { name: '旅', id: '3' },
  { name: '团', id: '4' },
  { name: '营', id: '5' },
]

let es = [
  { source: 0, target: 1},
  { source: 1, target: 2},
  { source: 2, target: 3},
  { source: 3, target: 4}
]

let map = {
  '1': {
    id: '10',
    nodes: [{
      // id: '1',
      name: '军'
    }, {
      id: '101',
      name: '1军'
    }, {
      id: '102',
      name: '2军'
    }, {
      id: '103',
      name: '3军'
    }],
    edges: [
      { source: 0, target: 1},
      { source: 0, target: 2},
      { source: 0, target: 3}
    ]
  },
  '2': {
    id: '20',
    nodes: [{
      // id: '1',
      name: '师'
    }, {
      id: '201',
      name: '1师'
    }, {
      id: '202',
      name: '2师'
    }, {
      id: '203',
      name: '3师'
    }, {
      id: '204',
      name: '4师'
    }],
    edges: [
      { source: 0, target: 1},
      { source: 0, target: 2},
      { source: 0, target: 3},
      { source: 0, target: 4}
    ]
  },
  '101': {
    id: '1010',
    nodes: [{
      // id: '101',
      name: '1军'
    }, {
      id: '10101',
      name: '军旗'
    }, {
      id: '10102',
      name: '大炮'
    }, {
      id: '10103',
      name: '步兵'
    }, {
      id: '10104',
      name: '骑兵'
    }],
    edges: [
      { source: 0, target: 1},
      { source: 0, target: 2},
      { source: 0, target: 3},
      { source: 0, target: 4}
    ]
  }
}

let getInfo = (node) => {
  return new Promise((resolve, reject) => {
    if (!node) {
      resolve({
        nodes: ns,
        edges: es
      })
    } else {
      if (map[node.id]) {
        resolve(map[node.id])
      } else {
        reject()
      }
    }
  })
}