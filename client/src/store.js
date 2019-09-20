import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsInCart: []
  },
  mutations: {
    addProductItem: (state, productItemToAdd) => {
      let existedProduct = state.productsInCart.find(p => p.id === productItemToAdd.id);

      if (existedProduct) {
        existedProduct.amount++;
        existedProduct.totalPrice += productItemToAdd.price;
      } else {
        productItemToAdd = Object.assign({}, productItemToAdd);
        productItemToAdd.amount++;
        productItemToAdd.totalPrice += productItemToAdd.price;
        state.productsInCart.push(productItemToAdd);
      }

      localStorage.setItem('store', JSON.stringify(state));
    },
    removeProductItem: (state, productItemToRemoveId) => {
      let existedProductIndex = state.productsInCart.findIndex(p => p.id === productItemToRemoveId);

      if (existedProductIndex === -1) {
        return false;
      }
      const existedProduct = state.productsInCart[existedProductIndex];

      existedProduct.amount--;
      existedProduct.totalPrice -= existedProduct.price;

      if (existedProduct.amount === 0) {
        state.productsInCart.splice(existedProductIndex, 1);
      }

      localStorage.setItem('store', JSON.stringify(state));
    },
    removeProduct: (state, productId) => {
      state.productsInCart.splice(productId, 1);

      localStorage.setItem('store', JSON.stringify(state));
    },
    cleanCart(state) {
      state.productsInCart = [];

      localStorage.setItem('store', JSON.stringify(state));
    },
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem("store"))))
      }
    }
  },
  actions: {
    addProductItem: (context, payload) => {
      context.commit("addProductItem", payload)
    },
    removeProductItem: (context, payload) => {
      context.commit("removeProductItem", payload);
    },
    removeProduct: (context, payload) => {
      context.commit("removeProduct", payload);
    },
    cleanCart: (context, payload) => {
      context.commit("cleanCart", payload)
    }

  },
  getters: {
    productsInCart: state => state.productsInCart,
    productInCartAmount: state => productId => state.productsInCart.some(p => p.id === productId) ? state.productsInCart.find(p => p.id === productId).amount : 0
  }
})