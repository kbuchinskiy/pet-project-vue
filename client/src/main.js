import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar';
import router from './router'
import store from './store'

Vue.config.productionTip = false;

const vueProgressBarOptions = {
  color: 'rgb(2, 117, 216)',
  failedColor: 'red',
  height: '4px',
  position: "relative"
};

Vue.use(VueProgressBar, vueProgressBarOptions);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
}).$mount('#app');
