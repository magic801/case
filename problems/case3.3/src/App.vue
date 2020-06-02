<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    let script = `
      export default {
        data () {
          return {
            name: 'Vuep',
            features: [
              'Single File Component',
              'Babel for ES6/JSX/UMD/CommonJS',
              'Scoped style',
              'Customizable JavaScript scope'
            ]
          }
        }
      }
    `
    console.log(Babel)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
