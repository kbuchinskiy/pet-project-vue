import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
import router from './router'
import store from '@/store/index'

Vue.config.productionTip = false

const vueProgressBarOptions = {
  color: '#333',
  failedColor: 'red',
  height: '3px'
}

Vue.use(VueProgressBar, vueProgressBarOptions)

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('cart/INIT_STORE')
  }
}).$mount('#app')
