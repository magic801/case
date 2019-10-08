/// <reference path="ts2.ts" />

enum Color {
  Red,
  Green
}

interface Person {
  firstName: string
  lastName: string
  color: Color
}

function sayGreet (person: Person) {
    return `hello, ${person.firstName} ${person.lastName}`
}

let user = {
  firstName: 'w',
  lastName: 'mm',
  color: Color.Green,
  ha: 3
}


let obj = {
  a: 3,
  b: 5,
  c: 9
}

let {a, ...other} = obj

let zv = new Validation.ZipCodeValidator()
console.log(zv.isAcceptable('nihao.'))
