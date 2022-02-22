// 自制JSON.strinify
function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]'
}

function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]'
}

function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]'
}

function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]'
}

function stringify (param) {
    let str = ''

    if (isObject(param)) {
        str += '{'
        for (let k in param) {
            str += `"${k}":${stringify(param[k])},`
        }
        str = str.substr(0, str.length - 1)
        str += '}'
    } else if (isArray(param)) {
        str += '['
        param.forEach(item => {
            str += `${stringify(item)},`
        })
        str = str.substr(0, str.length - 1)
        str += ']'
    } else if (isNumber(param)) {
        str += `${param}`
    } else {
        str += `"${param}"`
    }

    return str 
}
