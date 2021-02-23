<template>
  <div>
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

  .product-item {
    width: 23%;
    margin-bottom: 5vh;
  }

  @media screen and (max-width: 1300px) {
    .product-item {
      width: 30%;
    }
  }

  @media screen and (max-width: 800px) {
    .product-item {
      width: 48%;
    }
  }

  @media screen and (max-width: 500px) {
    .product-item {
      width: 100%;
    }
  }
}
</style>
