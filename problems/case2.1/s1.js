
let now = Date.now();
//需要插入的容器
let ul = document.getElementById('container');
// 插入十万条数据
let total = 10000;
// 一次插入 20 条
let once = 20;
//总页数
let page = total/once
//每条记录的索引
let index = 0;
//循环加载数据
function loop(curTotal,curIndex){
    if(curTotal <= 0){
        return false;
    }
    //每页多少条
    let pageCount = Math.min(curTotal , once);
    // setTimeout(()=>{
    //     for(let i = 0; i < pageCount; i++){
    //         let li = document.createElement('li');
    //         li.innerText = curIndex + i + ' : ' + ~~(Math.random() * total)
    //         ul.appendChild(li)
    //     }
    //     loop(curTotal - pageCount,curIndex + pageCount)
    // },0)
    

    window.requestAnimationFrame(function(){
        for(let i = 0; i < pageCount; i++){
            let li = document.createElement('li');
            li.innerText = curIndex + i + ' : ' + ~~(Math.random() * total)
            ul.appendChild(li)
        }
        loop(curTotal - pageCount,curIndex + pageCount)
    })
}
loop(total,index);

console.log('JS运行时间：',Date.now() - now);
setTimeout(()=>{
  console.log('总运行时间：',Date.now() - now);
},0)
