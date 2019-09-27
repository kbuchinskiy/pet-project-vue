<template>
  <header>
    <button v-if="$route.path.match(/product\//)" @click="$router.back()" class="back-button">Back</button>
    <button @click="toogleCartPopup" :class="{active: cartPopupOpened}" class="open-cart-btn"></button>
    <cart-popup
      :products="productsInCart"
      :opened="cartPopupOpened"
      @closeCartPopup="cartPopupOpened = false"
    ></cart-popup>
  </header>
</template>

<script>
import cartPopup from "@/components/cartPopup.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cartPopupOpened: false
    };
  },
  components: {
    cartPopup
  },
  computed: {
    ...mapGetters(["productsInCart"])
  },
  methods: {
    toogleCartPopup() {
      this.cartPopupOpened = !this.cartPopupOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 2%;
  border-bottom: 1px solid #000;
  background: #fff;

  .open-cart-btn {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    font-size: 20px;
    
    background: url("../assets/images/cart_icon.png") center/cover no-repeat;
  }

  .open-cart-btn.active {
    background: url("../assets/images/close_button.png") center/100% no-repeat;
  }

  .back-button {
    height: 40px;
    box-sizing: border-box;
    padding: 0 2%;
    margin-right: auto;

    border: 1px solid #000;
    border-radius: 3px;
  }
}
</style>

