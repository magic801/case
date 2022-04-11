<template>
  <div>
    <div
      :key="index"
      v-for="item,index in list"
    >
      <input type="checkbox" />
      <p>{{ item.name }}</p>
    </div>

    <input type="button" @click="handleDelete" value="delete" />
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      list: []
    }
  },

  created() {
    this.list = [{
      id: 1,
      name: 'haha1'
    }, {
      id: 2,
      name: 'haha2'
    }, {
      id: 3,
      name: 'haha3'
    }, ]
  },

  methods: {
    handleDelete() {
      this.list.shift()
    }
  }
}
</script>
