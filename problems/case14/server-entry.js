import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, store, App } = createApp()

    let list = []
    let components = App.components
    for (let key in components) {
        if (components.hasOwnProperty(key)) {
            let component = components[key]
            if (component.asyncData) {
                list.push(component.asyncData({
                    store
                }))
            }
        }
    }

    return Promise.all(list).then((res) => {
        context.state = store.state
        console.log('all promise return.')
        resolve(app)
    })
  })
}
