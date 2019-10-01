<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
  import AppHeader from '@/layout/AppHeader.vue'

  export default {
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
</style>

<style lang="scss" scoped>
  main {
    padding: calc(70px + 3%) 3%;
  }
</style>
