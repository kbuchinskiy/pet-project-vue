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
import { mapState } from 'vuex'

export default {
  components: {
    productItem
  },

  computed: {
    ...mapState('product', ['products', 'noNewProductsToLoad']),
    ...mapState(['loading'])
  },
  methods: {
    async fetchProducts(amount) {
      this.$store.commit('SET_LOADING_STATUS', true)
      await this.$store.dispatch('product/fetchProducts', amount)
      this.$store.commit('SET_LOADING_STATUS', false)
    },
    async onUserScroll() {
      if (this.noNewProductsToLoad) {
        return
      }
      const isUserScrolledBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 1

      if (isUserScrolledBottom) {
        if (!this.loading) {
          await this.fetchProducts(3)
        }
      }
    }
  },
  async created() {
    if (!this.products.length) {
      await this.fetchProducts(6)
    }

    window.addEventListener('scroll', this.onUserScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onUserScroll)
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
