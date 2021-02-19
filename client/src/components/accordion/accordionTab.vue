<template>
  <div class="accordion-tab">
    <div @click="toggleTab" class="tab-header">{{ title }}</div>
    <div v-show="opened" class="tab-body">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },

  data() {
    return {}
  },
  methods: {
    toggleTab() {
      this.$emit('toggled')
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion-tab {
  .tab-header {
    padding: 5px;
    border: 1px solid #555;
  }
  .tab-body {
    padding: 5px;
    min-height: 70px;
    background-color: rgb(228, 226, 226);
  }
}
</style>
