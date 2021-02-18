import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('cart/INIT_STORE')
  }
}).$mount('#app')
