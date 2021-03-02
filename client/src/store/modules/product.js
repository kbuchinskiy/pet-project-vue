import ProductService from '@/api/ProductService'

async function getProducts(queryParams) {
  return await ProductService.getProducts(
    queryParams.lastItemIndex,
    queryParams.amount
  )
}

export default {
  namespaced: true,
  state: {
    products: [],
    product: {}
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = state.products.concat(products)
    },
    SET_PRODUCT(state, product) {
      state.product = product
    }
  },
  actions: {
    async fetchProducts({ commit, state }, amount) {
      const products = await getProducts({
        amount,
        lastItemIndex: state.products.length
      })
      if (products && products.length) {
        commit('SET_PRODUCTS', products)
      }
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
