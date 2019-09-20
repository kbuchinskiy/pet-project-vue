<template>
  <div class="product-page">
    <!-- <h1>{{productData.title}}</h1>
    <img :src="productData.image" alt />
    <p>{{productData.price}}</p>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: {}
    };
  },
  methods: {},
  created() {
    // this.productData = this.$route.query.data
  }
};
</script>


<style scoped>
</style>