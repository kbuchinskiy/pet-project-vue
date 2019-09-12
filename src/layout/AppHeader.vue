<template>
  <header>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <button class="open-cart-btn" @click="toogleCartPopup"></button>
    <cart-popup :products="productsInCart" v-show="cartPopupVisibile"></cart-popup>
  </header>
</template>

<script>
import cartPopup from "@/components/cartPopup.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cartPopupVisibile: false
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
      this.cartPopupVisibile = !this.cartPopupVisibile;
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
  padding: 0 5%;
  border-bottom: 1px solid #000;
  background: #fff;

  .open-cart-btn {
    width: 40px;
    height: 40px;
  }
}
</style>

