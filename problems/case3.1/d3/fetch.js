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
  },
  '102': {
    id: '1020',
    nodes: [{
      // id: '101',
      name: '2军'
    }, {
      id: '10201',
      name: '军旗'
    }, {
      id: '10202',
      name: '大炮'
    }, {
      id: '10203',
      name: '步兵'
    }],
    edges: [
      { source: 0, target: 1},
      { source: 0, target: 2},
      { source: 0, target: 3}
    ]
  },
  '103': {
    id: '1030',
    nodes: [{
      // id: '101',
      name: '3军'
    }, {
      id: '10301',
      name: '军旗'
    }, {
      id: '10302',
      name: '火箭兵'
    }, {
      id: '10303',
      name: '步兵'
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
  '201': {
    id: '2010',
    nodes: [{
      // id: '1',
      name: '1师'
    }, {
      id: '20101',
      name: '师长'
    }],
    edges: [
      { source: 0, target: 1}
    ]
  },
  '202': {
    id: '2020',
    nodes: [{
      // id: '1',
      name: '1师'
    }, {
      id: '20201',
      name: '师长'
    }],
    edges: [
      { source: 0, target: 1}
    ]
  },
  '203': {
    id: '2030',
    nodes: [{
      // id: '1',
      name: '3师'
    }, {
      id: '20301',
      name: '师长'
    }],
    edges: [
      { source: 0, target: 1}
    ]
  },
  '204': {
    id: '2040',
    nodes: [{
      // id: '1',
      name: '师'
    }, {
      id: '20401',
      name: '师长'
    }],
    edges: [
      { source: 0, target: 1}
    ]
  },
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