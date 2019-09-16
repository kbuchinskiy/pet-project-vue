import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsInCart: []
  },
  mutations: {
    addProductItem: (state, productItemToAdd) => {
      let existedProduct = state.productsInCart.find(product => product.id === productItemToAdd.id);
      if (existedProduct) {
        existedProduct.amount++;
        existedProduct.totalPrice += productItemToAdd.price;
      } else {
        productItemToAdd = Object.assign({}, productItemToAdd);
        productItemToAdd.amount++;
        productItemToAdd.totalPrice += productItemToAdd.price;
        state.productsInCart.push(productItemToAdd);
      }
    },
    removeProductItem: (state, productItemToRemoveId) => {
      let existedProductIndex = state.productsInCart.findIndex(product => product.id === productItemToRemoveId);
      if (existedProductIndex === -1) {
        return false;
      }
      const existedProduct = state.productsInCart[existedProductIndex];

      existedProduct.amount--;
      existedProduct.totalPrice -= existedProduct.price;

      if (existedProduct.amount === 0) {
        state.productsInCart.splice(existedProductIndex, 1);
      }
    },
    removeProduct: (state, productId) => {
      state.productsInCart.splice(productId, 1);
    },
    cleanCart(state) {
      state.productsInCart = [];
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
  }
})