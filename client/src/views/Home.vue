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
    created() {

      this.products = ProductsService.getProducts().then((data) => {

      this.products = data;
      });
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

