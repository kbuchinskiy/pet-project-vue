<template>
  <article class="product-item">
    <figure class="product-image">
      <img :src="image" alt="product image">
      <figcaption>
        <span class="product-title">{{ title }}</span>
        <span class="product-price">{{ price }} $</span>
      </figcaption>
    </figure>
    <section class="controls-container">
      <button @click="addItem"></button>
      <p class="product-amount">0</p>
      <button @click="removeItem"></button>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    price: Number,
    image: String
  },
  methods: {
    addItem () {
      alert('add item');
    },
    removeItem () {
      alert('remove item');
    }
  }
}
</script>


<style lang="scss" scoped>
.product-item {
  overflow: hidden;
  flex: 0 0 auto;
  width: 21%;
  margin: 0 2% 5%;
  box-shadow: 2px 2px 2px 2px rgba($color: #000000, $alpha: 0.3);

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
    }
  }
}
</style>
