<template>
  <div class="cart-popup opened">
    <section v-show="products.length" class="cart-body">
      <ul class="cart-list">
        <li v-for="product in products" :key="product.id">
          <div class="cart-item">
            <button class="icon-button delete-button" @click="removeProduct(product.id)"></button>
            <p class="cart-item-title">{{product.title}}</p>
            <div class="controls-container">
              <button class="icon-button remove-button" @click="removeProductItem(product.id)"></button>
              <p class="cart-item-amount">{{product.amount}}</p>
              <button class="icon-button add-button" @click="addProductItem(product)"></button>
            </div>
            <p class="cart-item-total-price">{{product.totalPrice}}</p>
          </div>
        </li>
      </ul>
      <button @click="cleanCart">Clear Cart</button>
    </section>
    <section v-show="!products.length" class="cart-alert">
      Cart is empty
    </section>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    props: {
      products: Array
    },
    methods: {
      ...mapActions(["addProductItem", "removeProductItem", "removeProduct", "cleanCart"])
    }
  };
</script>

<style scoped lang="scss">
  .cart-popup {
    position: absolute;
    top: 69px;
    left: auto;
    right: 5%;
    width: 600px;
    height: 460px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #000;

    .cart-body {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      align-items: flex-end;
      padding: 5%;

      button[data-action="clear-cart"] {
        margin-top: 45px;
      }

      .cart-list {
        overflow-y: auto;
        height: 330px;
        width: 100%;
        box-sizing: border-box;
        padding-right: 15px;

        .cart-item {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 10px 0;
          margin-bottom: 20px;
          border-bottom: 1px solid #999;

          &:last-child {
            margin-bottom: 0;
          }

          .delete-button {
            margin-right: 10px;

          }

          .cart-item-title {
            min-width: 270px;
          }

          .controls-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80px;

            border: 1px;
          }

          .cart-item-total-price {
            margin-left: auto;
          }
        }
      }
    }
  }
</style>