<template>
  <header>
    <fa-button
        v-if="$route.path !== '/'"
        @click="$router.back()"
        icon="arrow-left"
        class="back-button"
    />
    <fa-button
        @click="toogleCartPopup"
        :icon="cartPopupOpened ? 'times' : 'shopping-cart'"
        class="toggle-cart-btn"
    />
    <cart-popup
        :products="productsInCart"
        :opened="cartPopupOpened"
        @closeCartPopup="cartPopupOpened = false"
    ></cart-popup>
  </header>
</template>

<script>
  import cartPopup from "@/components/cartPopup.vue";
  import faButton from "@/components/faButton.vue";
  import {mapGetters} from "vuex";

  export default {
    components: {
      cartPopup,
      faButton
    },
    data() {
      return {
        cartPopupOpened: false
      };
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
    border-bottom: 2px solid #555;
    background: #fff;

    .toggle-cart-btn {
      width: 40px;
      height: 40px;
      border-radius: 3px;
      font-size: 20px;
      border: unset;
    }

    .back-button {
      height: 40px;
      margin-right: auto;
      font-size: 1.2em;
    }
  }
</style>

