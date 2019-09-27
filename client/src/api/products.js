import axios from "axios/index";

const URL = "/api/products";

export default class Products {
  static getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(URL);
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
        const result = await axios.get(`${URL}/${id}`);
        const data = result.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    })
  }
}
