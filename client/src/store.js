import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function setLocalStorageRecord(stateObj) {
  localStorage.setItem('state', JSON.stringify(stateObj))
}

export default new Vuex.Store({
  state: {
    productsInCart: []
  },
  mutations: {
    ADD_PRODUCT_ITEM: (state, productItemToAdd) => {
      let existedProduct = state.productsInCart.find(
        p => p.id === productItemToAdd.id
      )

      if (existedProduct) {
        existedProduct.amount++
        existedProduct.totalPrice += productItemToAdd.price
      } else {
        productItemToAdd.amount = 1
        productItemToAdd.totalPrice = productItemToAdd.price
        productItemToAdd = Object.assign({}, productItemToAdd)
        state.productsInCart.push(productItemToAdd)
      }

      setLocalStorageRecord(state)
    },
    REMOVE_PRODUCT_ITEM: (state, productItemToRemoveId) => {
      let existedProductIndex = state.productsInCart.findIndex(
        p => p.id === productItemToRemoveId
      )

      if (existedProductIndex === -1) {
        return
      }

      const existedProduct = state.productsInCart[existedProductIndex]

      existedProduct.amount--
      existedProduct.totalPrice -= existedProduct.price

      if (existedProduct.amount === 0) {
        state.productsInCart.splice(existedProductIndex, 1)
      }

      setLocalStorageRecord(state)
    },
    REMOVE_PRODUCT: (state, productId) => {
      state.productsInCart.splice(productId, 1)

      setLocalStorageRecord(state)
    },
    CLEAN_CART(state) {
      state.productsInCart = []
      setLocalStorageRecord(state)
    },
    INIT_STORE(state) {
      if (localStorage.getItem('state')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('state')))
        )
      }
    }
  },
  actions: {
    addProductItem: ({ commit }, payload) => {
      commit('ADD_PRODUCT_ITEM', payload)
    },
    removeProductItem: ({ commit }, payload) => {
      commit('REMOVE_PRODUCT_ITEM', payload)
    },
    removeProduct: ({ commit }, payload) => {
      commit('REMOVE_PRODUCT', payload)
    },
    cleanCart: ({ commit }, payload) => {
      commit('CLEAN_CART', payload)
    }
  },
  getters: {
    productsInCart: state => state.productsInCart,
    productInCartAmount: state => productId => {
      if (state.productsInCart.some(p => p.id === productId)) {
        return state.productsInCart.find(p => p.id === productId).amount
      } else {
        return 0
      }
    }
  }
})
