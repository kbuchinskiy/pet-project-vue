<template>
  <div class="cart-popup" v-show="opened" :class="{empty: isEmpty}">
    <section v-show="!isEmpty" class="cart-body">
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
      <button class="clean-button" @click="cleanCart">Clear Cart</button>
    </section>
    <section v-show="isEmpty" class="cart-alert">
      Your cart is empty
    </section>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    props: {
      products: Array,
      opened: Boolean,
    },
    computed: {
      isEmpty() {
        return !this.products.length;
      }
    },
    methods: {
      ...mapActions(["addProductItem", "removeProductItem", "removeProduct"]),
      cleanCart() {
        this.$store.dispatch("cleanCart");
        setTimeout(() => {
          //refactor to dispatch to parent
          this.opened = false;
        }, 1000)
      }
    }
  };
</script>

<style scoped lang="scss">
  .cart-popup {
    position: absolute;
    top: 69px;
    left: auto;
    right: 2%;
    width: 600px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #000;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 3px;

    .cart-alert {
      padding: 5% 0;
      text-align: center;
      font-size: 20px;
    }

    .cart-body {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      align-items: flex-end;
      padding: 5%;

      .clean-button {
        padding: 1% 2%;
        background: brown;
        color: aliceblue;
      }

      .cart-list {
        overflow-y: auto;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 30px;

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
            background: brown;
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

  @media screen and (max-width: 800px) {
    .cart-popup {
      width: 100%;
      right: 0;
      border-left: unset;
      border-right: unset;
      border-top: unset;
    }
  }
</style>
