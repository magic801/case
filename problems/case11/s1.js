let quickSort = (array) => {
  let len = array.length
  if (len <= 1) {
    return array
  }

  let pos = Math.floor(len / 2)
  let it = +array.splice(pos, 1)[0]

  let left = []
  let right = []
  for (let i = 0; i < len - 1; i++) {
    let tmp = +array[i]
    if (tmp < it) {
      left.push(tmp)
    } else {
      right.push(tmp)
    }
  }

  return quickSort(left).concat([it]).concat(quickSort(right))
}

let labelLoop = () => {
  let a = 0
  loop:
  for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
      a++
      if (j === 5) {
        break loop;
      }
    }
  }
  console.log(a)
}

let testConsole = () => {
  let list = [{
    name: 'ahah',
    desc: 'like'
  }, {
    name: 'ahah3',
    desc: 'lik2'
  }, {
    name: 'ah2ah',
    desc: 'li5e'
  }]

  console.table(list)
}

let testEqual = () => {
  let a = {
    i: 1,
    valueOf: function () {
      return this.i++
    }
  }

  if (a == 1 && a == 2 && a == 3) {
    console.log('done.')
  }
}

let huiSf = (col = 4, row = 3) => {
  let total = col * row
  let count = 0

  let obj = new Array(row)
  for (let i=0; i<row; i++) {
    obj[i] = new Array(col)
  }

  let top, right, bottom, left;

  top = 0;
  bottom = row - 1;
  left = 0;
  right = col - 1;

  function lll () {
    for (let i = left; i <= right; i++) {
      obj[top][i] = ++count
      if (count >= total) {
        return
      }
    }

    top++

    for (let i = top; i <= bottom; i++) {
      obj[i][right] = ++count
      if (count >= total) {
        return
      }
    }

    right--

    for (let i = right; i >= left; i--) {
      obj[bottom][i] = ++count
      if (count >= total) {
        return
      }
    }

    bottom--

    for (let i = bottom; i >= top; i--) {
      obj[i][left] = ++count
      if (count >= total) {
        return
      }
    }

    left++

    lll()
  }

  lll()

  console.table(obj)
}

let gongSf = (col = 4, row = 3) => {
  let total = col * row
  let count = 0

  let obj = new Array(row)
  for (let i=0; i<row; i++) {
    obj[i] = new Array(col)
  }

  let top, right, bottom, left;

  top = 0;
  bottom = row - 1;
  left = 0;
  right = col - 1;

  function lll () {
    for (let i = left; i <= right; i++) {
      obj[top][i] = ++count
      if (count >= total) {
        return
      }
    }

    top++

    obj[top][right] = ++count
    if (count >= total) {
      return
    }

    right--

    for (let i = right; i >= left; i--) {
      obj[top][i] = ++count
      if (count >= total) {
        return
      }
    }

    top++
    right++

    lll()
  }

  lll()

  console.table(obj)
}


let tl = [8,1,3,10,11,12,13,14,4,2,6,15,7,16,5,9,17,24,18,19,20,21,22,23,31,25,26,27,28,29,30,5]
let zhaoChongFu = (list) => {
  let tmp = ''
  for (let i=1, len=list.length; i<len; i++) {
    tmp = list[0]
    list[0] = list[tmp]
    list[tmp] = tmp
  }

  console.log(list)
}

let zhaoZuiDa = (list) => {
  let len = list.length

  let l1 = [list[0]]
  for (let i=1; i<len; i++) {
    l1.push(Math.max(list[i], l1[i-1]))
  }

  let l2 = [list[len-1]]
  for (let i=len-2; i>=0; i--) {
    l2.unshift(Math.min(list[i], l2[0]))
  }

  console.log(l1)
  console.log(l2)
}

let pick01 = (weight = 6) => {
  let list01 = [{
    n: 'a',
    w: 2,
    v: 3
  },{
    n: 'b',
    w: 3,
    v: 4
  },{
    n: 'c',
    w: 4,
    v: 5
  },{
    n: 'd',
    w: 3,
    v: 3
  },{
    n: 'e',
    w: 4,
    v: 2
  }]

  let len = list01.length
  let obj = new Array(len)
  for (let i=0; i<len; i++) {
    obj[i] = new Array(weight+1)
  }

  let copyObj = (obj) => {
    return Object.assign({}, obj)
  }

  for (let i=0; i<len; i++) {
    for (let j=0; j<=weight; j++) {
      let tmp = list01[i]
      if (j<tmp.w) {
        obj[i][j] = i>0 ? copyObj(obj[i-1][j]) : {v:0, n:'',w:0}
      } else {
        if (i > 0) {
          if (obj[i-1][j].v >= (tmp.v + obj[i-1][j - tmp.w].v)) {
            obj[i][j] = copyObj(obj[i-1][j])
          } else {
            let t = obj[i-1][j - tmp.w]
            obj[i][j] = {
              n: tmp.n + t.n,
              v: tmp.v + t.v,
              w: tmp.w+ t.w
            }
          }
        } else {
          obj[i][j] = copyObj(tmp)
        }
        // obj[i][j] = i>0 ? Math.max(obj[i-1][j], tmp.v + obj[i-1][weight - tmp.w]) : copyObj(tmp)
      }
    }
  }

  console.table(obj)
}

let zjyo = () => {
  let list = [1,2,3,4,5,6,7,8]

  let left = 0, right = list.length - 1

  while (left < right) {
    if (isOS(list[left])) {
      if (isJS(list[right])) {
        swap(left, right)
        left++
      }
      right--
    } else if (isJS(list[right])) {
      if (isOS(list[left])) {
        swap(left, right)
        right--
      }
      left++
    } else {
      left++
      right--
    }
  }

  function isJS (num) {
    return num % 2 === 1
  }

  function isOS (num) {
    return num % 2 === 0
  }

  function swap (l, r) {
    let tmp = list[l]
    list[l] = list[r]
    list[r] = tmp
  }

  console.log(list)
}

// ran5 (1-5) => ran7 (1-7)
let ran7 = () => {
  let j0_1 = () => {
    let num = ran5()
    while (num > 4) {
      num = ran5()
    }
    return num % 2
  }

  let j0_7 = () => {
    let num = j0_1()
    return j0_1()<<2 + j0_1()<<1 + j0_1()
  }
}