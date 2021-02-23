<template>
  <article class="product-item">
    <figure class="product-image">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <img :src="product.image" alt="product image" />
      </router-link>
      <figcaption>
        <span class="product-title">{{ product.title }}</span>
        <span class="product-price">{{ product.price }} $</span>
      </figcaption>
    </figure>
    <section class="controls-container">
      <fa-button
        @click="removeProductItem(product.id)"
        icon="minus"
        class="remove-button"
      />
      <p class="product-amount">
        {{ specificProductInCartAmount(product.id) }}
      </p>
      <fa-button
        @click="addProductItem(product)"
        icon="plus"
        class="add-button"
      />
    </section>
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import faButton from '@/components/faButton.vue'

export default {
  components: {
    faButton
  },
  props: {
    product: Object
  },
  methods: {
    ...mapActions('cart', ['addProductItem', 'removeProductItem'])
  },
  computed: mapGetters('cart', ['specificProductInCartAmount'])
}
</script>

<style lang="scss" scoped>
.product-item {
  width: 300px;
  margin-bottom: 5%;
  overflow: hidden;
  box-shadow: 2px 2px 2px 2px rgba($color: #000000, $alpha: 0.3);
  border-radius: 3px;

  .product-image {
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    figcaption {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      padding: 3% 5%;
      background: rgba($color: #a3a3a3, $alpha: 0.5);

      .product-title,
      .product-price {
        font-size: 20px;
      }
    }
  }

  .controls-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 5%;

    .product-amount {
      font-size: 20px;
      font-weight: 600;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 3px;
    }
  }
}

</style>
