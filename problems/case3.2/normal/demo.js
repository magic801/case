function Foo() {
    this.name = 'foo'
    return 3
}

console.log(new Foo())

function _new(construct, ...argvs) {
    var child = {}
    child.__proto__ = construct.prototype
    var result = construct.call(child, ...argvs)
    if (typeof result === 'object') {
        return result
    } else {
        return child
    }
}

console.log(a.b)

