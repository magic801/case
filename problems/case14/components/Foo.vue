<template>
  <div>
    <p>{{ $store.state.name }}</p>
  </div>
</template>

<script>
export default {
  asyncData ({ store }) {
    return store.dispatch('getInfo')
  },

  created () {
    console.log('foo created')
  },

  mounted () {
    console.log('foo mounted')
  }
}
</script>