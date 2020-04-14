function A() {
    this.name = "A";
    this.arr = new Array();
    this.put = function(para) {
        this.arr[this.arr.length] = para;
    }
}

function B() {
    this.name = "B";
    this.show = "";
}

var obj = new A();

var b = new B();
b.show = function() {
    alert("function 1");
}

var b2 = new B();
b2.show = function() {
    alert("function 2");
}

obj.put(b);
obj.put(b2);
console.log(serialize(obj, 'demon'))