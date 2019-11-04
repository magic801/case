/// <reference path="ts2.ts" />
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
var a = identity([Color.Red]);
console.log(a);
