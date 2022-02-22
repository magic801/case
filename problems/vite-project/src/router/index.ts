import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/helloWorld',
    component: () => import('../components/HelloWorld.vue')
  }, {
    path: '/jsBridge',
    component: () => import('../page/jsBridge.vue')
  }]
})
