const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  getAProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers.js");

router.route("/").get(getProduct);
router.route("/").post(createProduct);
router.route("/:id").get(getAProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
