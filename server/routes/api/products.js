const express = require("express");
const data = require("../../db/products");

const router = express.Router();

// get products
router.get("/", (req, res) => {
  const lastItemIndex = parseInt(req.query.lastItemIndex);
  const amount = parseInt(req.query.amount);
  const products = data.slice(lastItemIndex, lastItemIndex + amount);
  res.end(JSON.stringify(products));
});

// get one product by products
router.get("/:id", (req, res) => {
  const product = data.find((p) => p.id === req.params.id);
  res.end(JSON.stringify(product));
});

module.exports = router;
