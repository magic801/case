/// <reference path="ts2.ts" />

enum Color {
  Red,
  Green
}

let a = identity([Color.Red])

console.log(a)

let nae: string | number = String('tom')
nae.split('')
// nae = 3
nae.length

let uns: void = undefined

let ssd: any = undefined
ssd.join1()

let nul
nul = 3
nul = 's'

interface Person {
  name: string,
  age?: number,
  [s1: string]: string | number
}

let tom: Person = {
  name: 'dss',
  like: 'as'
}

let al: number[] = [1,2,3]
let bl: Array<number> = [3,3,3,3]


interface StringArray {
  [index: number]: string
}

let fiboans: StringArray = ['1','2','3']

let xx = function (x: number, y: number): number {
  return x + y
}

xx(2, 3)

function gets (something: string | number): number {
  // return (<string>something).length
  return (something as string).length
}

type nn = number | string

function tst (a: nn) {
  console.log(a)
}

tst('ddd')

let tom2: [string, number]
tom2 = ['d', 2]
console.log(tom2)
tom2.push(3)

enum Days {Sun, Mon, Tue, Wed, Thu, Fri}
const enum CDays {Sun, Mon, Tue, Wed, Thu, Fri}

console.log(CDays.Mon)

class Assp {
  public name
  private age

  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

let assp = new Assp('as', 13)
assp.age
assp.name