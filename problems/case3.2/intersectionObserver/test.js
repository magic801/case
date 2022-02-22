var zxxObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0.4) {
          entry.target.style.color = 'green'
        } else {
          // active()是一个自定义的高亮方法
          entry.target.style.color = 'red'
        }
    } else {
      entry.target.style.color = 'black'
    }
  })
})

document.querySelectorAll('h3').forEach(function (ele) {
  zxxObserver.observe(ele);
});
