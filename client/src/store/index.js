import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart'
import product from '@/store/modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    product
  },
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING_STATUS(state, payload) {
      state.loading = payload
    }
  }
})
