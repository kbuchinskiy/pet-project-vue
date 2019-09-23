<template>
  <div class="product-page">
    <div v-show="!loading">
      <h1>{{productData.title}}</h1>
      <img :src="productData.image" alt/>
      <p>{{productData.price}}</p>
    </div>
    <div v-show="loading">
      Loading...
    </div>
  </div>
</template>

<script>
  import ProductsService from "../productsService";

  export default {
    data() {
      return {
        loading: false,
        productData: {}
      };
    },
    methods: {
      async initData() {
        this.loading = true;
        await setTimeout(async () => {
          this.productData = await ProductsService.getProductById(this.$route.params.id);
          this.loading = false;
        }, 3000)

      }
    },
    created() {
      this.initData();
    }
  };
</script>


<style scoped>
  .product-page {
    padding-top: 70px;
  }
</style>