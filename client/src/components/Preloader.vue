<template>
  <div class="preloader">
    <p v-show="loading">loading...</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['loading'])
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  right: 5px;
  bottom: 5px;

  z-index: 999;
  p {
    opacity: 0.8;
    font-size: 1vw;
    animation: 1s linear infinite blinking;
  }
}

@keyframes blinking {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
