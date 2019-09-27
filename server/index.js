const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const products = require("./routes/api/products");
app.use("/api/products", products);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

initServer();

async function initServer() {
  const pseudoData = generateServerData(21);

  await writeData(pseudoData);
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

function writeData(dataToWrite) {
  dataToWrite = JSON.stringify(dataToWrite);
  return new Promise((resolve, reject) => {
    fs.writeFile("server/db/products.json", dataToWrite, () => {
      try {
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  })
}

function generateServerData(productsAmount) {
  const productsArray = [];

  for (let i = 1; i < productsAmount + 1; i++) {
    let product = {};

    product.id = `prod${i}`;
    product.title = `Product ${i}`;
    product.image = "https://picsum.photos/300/300?image=0&&blur";
    product.price = Math.ceil(Math.random() * 1000);

    productsArray.push(product);
  }

  return productsArray;
}
