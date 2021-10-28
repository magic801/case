// setImmediate(function(){
//   console.log(1);
// },0);
// setTimeout(function(){
//   console.log(2);
// },0);
// new Promise(function(resolve){
//   console.log(3);
//   resolve();
//   console.log(4);
// }).then(function(){
//   console.log(5);
// });
// console.log(6);
// process.nextTick(function(){
//   console.log(7);
// });
// console.log(8);

// console.time('time1')
// setImmediate(function () {
//   console.log('setImmediate'); 
// });
// setTimeout(function() {
//   console.log('setTimeout'); 
// }, 213)
// console.timeEnd('time1')
// console.log('正常执行');

import { counter, incCounter } from './t1'

console.log(counter)
console.log(incCounter())
console.log(counter)
