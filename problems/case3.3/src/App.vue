<template>
  <div id="app">
    <Preview
      :value="vueObj" />
    <input
      type="button"
      name=""
      value="click me."
      @click="changeTemplate">
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Preview from './ability/preview'

export default {
  name: 'App',

  components: {
    Preview
  },

  data() {
    return {
      vueObj: {}
    }
  },

  created() {
    let obj = this.getObj()
    this.vueObj = this.evalJS(obj.script)
    this.vueObj.template = obj.template
  },

  render(h) {
    return h(Preview, {
      props: {
        value: this.vueObj
      }
    })
  },

  methods: {
    evalJS(script) {
      let tmp = Babel.transform(script, {
        presets: ['es2015']
      }).code

      let scopeDecl = ''
      let funStr = `(function(exports){var module={};module.exports=exports;${scopeDecl};${tmp};return module.exports.__esModule?module.exports.default:module.exports;})({})`
      const result = new Function('__vuep', 'return ' + funStr)({})
      return result
    },

    getObj() {
      let template = `

          <div>
            <h1>{{ name }}</h1>
            <div v-for="item in features">{{ item }}</div>
          </div>

      `

      let script = `
        export default {
          data () {
            return {
              name: 'Vuep',
              features: [
                'S1',
                'B2',
                'S3',
                'C4',
                ${+new Date()}
              ]
            }
          },

          created() {
            let a = 5
            setTimeout(() => {
              console.log(a)
            }, 100)
          }
        }
      `

      return {
        template,
        script
      }
    },

    changeTemplate() {
      let obj = this.getObj()
      this.vueObj = this.evalJS(obj.script)
      this.vueObj.template = obj.template
    }
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
