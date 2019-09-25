<template>
  <article class="product-item">
    <figure class="product-image">
      <router-link :to="{ path: 'product/' + product.id}">
        <img :src="product.image" alt="product image" />
      </router-link>
      <figcaption>
        <span class="product-title">{{ product.title }}</span>
        <span class="product-price">{{ product.price }} $</span>
      </figcaption>
    </figure>
    <section class="controls-container">
      <button class="remove-button" @click="removeProductItem(product.id)"></button>
      <p class="product-amount">{{ productInCartAmount }}</p>
      <button class="add-button" @click="addProductItem(product)"></button>
    </section>
  </article>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    product: Object
  },
  methods: {
    ...mapActions(["addProductItem", "removeProductItem"])
  },
  computed: {
    productInCartAmount() {
      return this.$store.getters.productInCartAmount(this.product.id);
    }
  }
};
</script>


<style lang="scss" scoped>
.product-item {
  width: 30%;
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
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 3px;
    }
  }
}

@media screen and (max-width: 800px) {
  .product-item {
    width: 48%;
    margin-bottom: 5%;
  }
}

@media screen and (max-width: 500px) {
  .product-item {
    width: 100%;
    margin-bottom: 7%;
  }
}
</style>
