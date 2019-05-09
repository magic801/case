import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getData () {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'shuai',
      age: '19'
    })
  })
}

export function createStore () {
  return new Vuex.Store({
    state: {
      data: {}
    },

    actions: {
      getInfo ({ commit }, opts) {
        console.log('interface:   getInfo')
        getData().then(data => {
          commit('setInfo', data)
        })
      }
    },

    mutations: {
      setInfo (state, {name, age}) {
        Vue.set(state, 'name', name)
        Vue.set(state, 'age', age)
      }
    }
  })
}
