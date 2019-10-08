var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var letter = new Validation.LettersOnlyValidator();
console.log(letter.isAcceptable('nihao.'));
/// <reference path="ts2.ts" />
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
function sayGreet(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'w',
    lastName: 'mm',
    color: Color.Green,
    ha: 3
};
var obj = {
    a: 3,
    b: 5,
    c: 9
};
var a = obj.a, other = __rest(obj, ["a"]);
var zv = new Validation.ZipCodeValidator();
console.log(zv.isAcceptable('nihao.'));
