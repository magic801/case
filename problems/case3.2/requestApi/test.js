const start = +new Date()

requestAnimationFrame(() => {
    console.log(`requestAnimationFrame: ${+new Date() - start}`)
})

requestIdleCallback(() => {
    console.log(`requestIdleCallback: ${+new Date() - start}`)
})
