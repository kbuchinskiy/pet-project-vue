import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
        id: "prod1",
        title: "Product 1",
        price: 250,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod2",
        title: "Product 2",
        price: 150,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod3",
        title: "Product 3",
        price: 250,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod4",
        title: "Product 4",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod5",
        title: "Product 5",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod6",
        title: "Product 6",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod7",
        title: "Product 7",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod8",
        title: "Product 8",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod9",
        title: "Product 9",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      },
      {
        id: "prod10",
        title: "Product 10",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
      }
    ]
  },
  mutations: {
    addProductItem: (state, productId) => {
      const productToAdd = state.products.find(p => p.id === productId);
      if (!productToAdd.inCart) {
        productToAdd.inCart = true;
      }
      productToAdd.amount++;
      productToAdd.totalPrice+=productToAdd.price;
    },
    removeProductItem: (state, productId) => {
      const productToRemove = state.products.find(p => p.id === productId);
      if (!productToRemove || !productToRemove.inCart) {
        return;
      }

      productToRemove.amount--;
      productToRemove.totalPrice -= productToRemove.price;

      if (productToRemove.amount === 0) {
        productToRemove.inCart = false;
      }
    },
    removeProduct: (state, productId) => {
      const productToRemove = state.products.find(p => p.id === productId);
      if (!productToRemove) {
        return;
      }

      productToRemove.amount = 0;
      productToRemove.inCart = false;

    },
    cleanCart(state) {
      state.products.forEach(p => {
        if (p.inCart) {
          p.inCart = false;
          p.amount = 0;
        }
      });
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
    productsInStock: state => state.products,
    productsInCart: state => state.products.filter(p => p.inCart),
  }
})