function setLocalStorageRecord(itemToStore) {
  localStorage.setItem('cartProducts', JSON.stringify(itemToStore))
}

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    ADD_PRODUCT_ITEM: (state, productItemToAdd) => {
      let existedProduct = state.products.find(
        p => p.id === productItemToAdd.id
      )

      if (existedProduct) {
        existedProduct.amount++
        existedProduct.totalPrice += productItemToAdd.price
      } else {
        productItemToAdd.amount = 1
        productItemToAdd.totalPrice = productItemToAdd.price
        productItemToAdd = Object.assign({}, productItemToAdd)
        state.products.push(productItemToAdd)
      }

      setLocalStorageRecord(state.products)
    },
    REMOVE_PRODUCT_ITEM: (state, productItemToRemoveId) => {
      let existedProductIndex = state.products.findIndex(
        p => p.id === productItemToRemoveId
      )

      if (existedProductIndex === -1) {
        return
      }

      const existedProduct = state.products[existedProductIndex]

      existedProduct.amount--
      existedProduct.totalPrice -= existedProduct.price

      if (existedProduct.amount === 0) {
        state.products.splice(existedProductIndex, 1)
      }

      setLocalStorageRecord(state.products)
    },
    REMOVE_PRODUCT: (state, productId) => {
      state.products.splice(productId, 1)

      setLocalStorageRecord(state.products)
    },
    CLEAN_CART(state) {
      state.products = []
      setLocalStorageRecord(state.products)
    },
    INIT_STORE(state) {
      if (localStorage.getItem('cartProducts')) {
        state.products = JSON.parse(localStorage.getItem('cartProducts'))
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
    cleanCart: ({ commit }) => {
      commit('CLEAN_CART')
    }
  },
  getters: {
    products: state => state.products,
    productInCartAmount: state => productId => {
      if (state.products.some(p => p.id === productId)) {
        return state.products.find(p => p.id === productId).amount
      } else {
        return 0
      }
    }
  }
}
