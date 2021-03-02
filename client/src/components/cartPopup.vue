<template>
  <div
    class="cart-popup"
    v-show="isCartPopupOpened"
    @click.stop
    :class="{ empty: isEmpty }"
  >
    <section v-show="!isEmpty" class="cart-body">
      <ul class="cart-list">
        <li v-for="product in products" :key="product.id">
          <div class="cart-item">
            <faButton
              class="icon-button delete-button"
              @click="removeProduct(product.id)"
              icon="trash"
            />
            <router-link
              :to="{ path: 'product/' + product.id }"
              class="cart-item-title"
            >
              {{ product.title }}
            </router-link>
            <div class="controls-container">
              <faButton
                class="icon-button remove-button"
                @click="removeProductItem(product.id)"
                icon="minus"
              />
              <p class="cart-item-amount">{{ product.amount }}</p>
              <faButton
                class="icon-button add-button"
                @click="addProductItem(product)"
                icon="plus"
              />
            </div>
            <p class="cart-item-total-price">{{ product.totalPrice }}</p>
          </div>
        </li>
      </ul>
      <footer>
        <button class="clean-button" @click="cleanCart">Clean</button>
        <p>
          Total: <strong>{{ productsInCartTotal }}</strong>
        </p>
      </footer>
    </section>
    <section v-show="isEmpty" class="cart-alert">
      Your cart is empty
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import faButton from '@/components/faButton.vue'
export default {
  components: {
    faButton
  },
  props: {
    products: Array
  },
  computed: {
    isEmpty() {
      return !this.products.length
    },
    ...mapGetters('cart', ['productsInCartTotal']),
    ...mapState('cart', ['isCartPopupOpened'])
  },
  methods: {
    ...mapActions('cart', [
      'addProductItem',
      'removeProductItem',
      'removeProduct'
    ]),
    cleanCart() {
      this.$store.dispatch('cart/cleanCart')
      setTimeout(() => {
        //refactor to dispatch to parent
        // this.$emit('closeCartPopup')
      }, 1000)
    }
  },
  created() {
    window.addEventListener('click', () => {
      this.$store.state.cart.isCartPopupOpened = false
    })
  }
}
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
  border-bottom-left-radius: 3px;
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
    padding: 5%;
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .clean-button {
        padding: 1.5% 2.5%;
        border-radius: 3px;
        background: #333;
        color: aliceblue;
      }
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

        .cart-item-title {
          color: #000;
          text-decoration: unset;
        }

        .delete-button {
          margin-right: 10px;
        }

        .controls-container {
          display: flex;
          justify-content: space-between;
          align-items: center;

          width: 80px;
          margin-left: auto;
          margin-right: 40px;
          border: 1px;
        }

        .cart-item-total-price {
          min-width: 40px;
          text-align: center;
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
    border-radius: 0;
  }
}
</style>
