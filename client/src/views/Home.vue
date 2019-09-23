<template>
  <div class="product-list">
    <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
    ></product-item>
  </div>
</template>

<script>
  import productItem from "@/components/productItem.vue";
  import ProductsService from "../productsService"

  export default {
    components: {
      productItem
    },
    data() {
      return {
        products: []
      };
    },
    methods: {
      async initData() {
        this.products = await ProductsService.getProducts()
      }
    },
    created() {
      this.initData()
    }
  };
</script>

<style lang="scss" scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 4% 2% 0;
    margin-top: 70px;
  }
</style>

