import ProductService from '@/api/ProductService'

export default {
  namespaced: true,
  state: {
    products: [],
    product: {}
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await ProductService.getProducts()
      commit('SET_PRODUCTS', products)
      return products
    },
    async fetchProduct({ commit, getters }, id) {
      const product =
        getters.getProductById(id) || (await ProductService.getProductById(id))

      commit('SET_PRODUCT', product)
      return product
    }
  },
  getters: {
    getProductById: state => id =>
      state.products.find(product => product.id === id)
  }
}
