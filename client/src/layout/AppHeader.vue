<template>
  <header>
    <fa-button
      v-if="$route.name !== 'home'"
      @click="onBackButtonClick"
      icon="arrow-left"
      class="back-button"
    />
    <fa-button
      @click.native.stop="toogleCartPopup"
      :icon="isCartPopupOpened ? 'times' : 'shopping-cart'"
      class="toggle-cart-btn"
    />
    <cart-popup :products="products"></cart-popup>
  </header>
</template>

<script>
import cartPopup from '@/components/cartPopup.vue'
import faButton from '@/components/faButton.vue'
import { mapState } from 'vuex'

export default {
  components: {
    cartPopup,
    faButton
  },
  computed: {
    ...mapState('cart', ['products', 'isCartPopupOpened'])
  },
  methods: {
    toogleCartPopup() {
      this.$store.state.cart.isCartPopupOpened = !this.$store.state.cart
        .isCartPopupOpened
    },
    onBackButtonClick() {
      this.$router.back()
      this.$store.state.cart.isCartPopupOpened = false
    }
  }
}
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
