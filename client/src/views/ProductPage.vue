<template>
  <div class="product-page-view">
    <vue-progress-bar></vue-progress-bar>
    <div class="product-page">
      <h1 class="title">{{ product.title }}</h1>
      <img class="main-image" :src="product.image" alt />
      <p class="price">
        Price: <b>{{ product.price }}</b>
      </p>
      <button class="order-button" @click="addProductItem(product)">
        add to cart
      </button>
      <p v-show="productInCartAmount(product.id)">
        In cart: {{ productInCartAmount(product.id) }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'product-view',
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  computed: mapGetters('cart', ['productInCartAmount']),
  methods: {
    ...mapActions('cart', ['addProductItem'])
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

.order-button {
  margin: 2em 0;
  font-weight: 600;
  border: 1px solid #555;
  padding: 10px;
}
</style>
