import axios from "axios";

const url = "http://localhost:3000/api/products";

export default class ProductsService {
    static getProducts() {
        return new Promise(async (res, rej) => {
            try {
                const result = await axios.get(url);
                const data = result.data;
                res(data);
            } catch (err) {
                rej(err);
            }
        })
    }
}