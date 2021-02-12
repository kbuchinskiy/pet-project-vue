<template>
  <div class="product-page-view">
    <vue-progress-bar></vue-progress-bar>
    <div class="product-page">
      <div v-show="!isLoading">
        <h1 class="title">{{ productData.title }}</h1>
        <img class="main-image" :src="productData.image" alt />
        <p class="price">
          Price: <b>{{ productData.price }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '../api/ProductService'
import progress from '../mixins/progress'

export default {
  mixins: [progress],
  data() {
    return {
      isLoading: false,
      productData: {}
    }
  },
  methods: {
    async initData() {
      this.isLoading = true
      await setTimeout(async () => {
        this.productData = await ProductService.getProductById(
          this.$route.params.id
        )
        this.isLoading = false
      }, 1000)
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style scoped lang="scss">
.product-page {
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  font-size: 50px;
  margin: 0.5em 0;
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
