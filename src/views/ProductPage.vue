<template>
  <div class="product-page">
    <!-- <h1>{{productData.title}}</h1>
    <img :src="productData.image" alt />
    <p>{{productData.price}}</p> -->
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
  beforeMount() {
    // this.productData = this.$route.params.data
  }
};
</script>


<style scoped>

</style>