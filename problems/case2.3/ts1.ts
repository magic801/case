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
