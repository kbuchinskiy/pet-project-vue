<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <div class="product-list">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></product-item>
    </div>
  </div>
</template>

<script>
import productItem from '@/components/productItem.vue'

export default {
  components: {
    productItem
  },
  props: {
    products: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
