import axios from "axios";

const url = "/api/products";

export default class ProductsService {
  static getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(url);
        const data = result.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    })
  }

  static getProductById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(`${url}/${id}`);
        const data = result.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    })
  }
}