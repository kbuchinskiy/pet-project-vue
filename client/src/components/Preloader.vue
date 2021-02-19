<template>
  <div class="preloader">
    <div class="bar" :class="{ loading: loading }"></div>
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
  top: 0;
  left: 0;

  z-index: 999;
}

.bar {
  width: 100vw;
  height: 2px;
}

.loading {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #52b5ee, #fff, #52b5ee);
  background-size: 400% 400%;

  animation: gradient 3s linear infinite;
}

@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0% 0;
  }
}
</style>
