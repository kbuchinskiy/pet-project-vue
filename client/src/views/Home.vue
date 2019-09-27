<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <div v-show="!isLoading" class="product-list">
      <product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
      ></product-item>
    </div>
  </div>
</template>

<script>
  import productItem from "@/components/productItem.vue";
  import Products from "../api/products"
  import progress from "../mixins/progress";

  export default {
    components: {
      productItem
    },
    mixins: [progress],
    data() {
      return {
        products: [],
        isLoading: false,
      };
    },
    methods: {
      async initData() {
        this.isLoading = true;
        await setTimeout(async () => {
          this.products = await Products.getProducts();
          this.isLoading = false;
        }, 1000);
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
  }
</style>

