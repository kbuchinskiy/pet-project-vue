const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const generateServerData = require("./db/pseudoDataGenerator");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  setTimeout(next, 3000);
});
const products = require("./routes/api/products");
app.use("/api/products", products);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
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
  });
}
