import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app } = createApp()

    // router.push(context.url)

    resolve(app)

    // router.onReady(() => {
    //   const matchComponents = router.getMatchedComponents()
    //   if (!matchComponents.length) {
    //     return reject({
    //       code: 404
    //     })
    //   }
    //   resolve(app)
    // })
  })
}
