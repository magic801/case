<template>
  <h1>{{ msg }}</h1>

  <p>hahah1</p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit1
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

debugger

console.log(__API__)

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
