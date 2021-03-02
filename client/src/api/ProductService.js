import axios from 'axios/index'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: false // This is the default
})

export default class ProductsService {
  static async getProducts(lastItemIndex = 0, amount = 3) {
    try {
      const result = await apiClient.get(`/products`, {
        params: {
          lastItemIndex,
          amount
        }
      })
      return result.data
    } catch (err) {
      console.error(err)
    }
  }

  static async getProductById(id) {
    try {
      const result = await apiClient.get(`products/${id}`)
      return result.data
    } catch (err) {
      console.error(err)
    }
  }
}
