<template>
  <div class="product-page">
    <div v-show="!loading">
      <h1 class="title">{{productData.title}}</h1>
      <img class="main-image" :src="productData.image" alt/>
      <p class="price">Price: <b>{{productData.price}}</b></p>
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
        }, 1000)

      }
    },
    created() {
      this.initData();
    }
  };
</script>


<style scoped lang="scss">
  .product-page {
    padding-top: 70px;
    max-width: 1000px;
    margin: 3% auto 0;
  }

  .title {
    font-size: 50px;
    margin-bottom: .5em;
  }

  .main-image {
    margin-bottom: 1em;
  }

  .price {
    b {
      font-weight: bold;
    }
  }

</style>