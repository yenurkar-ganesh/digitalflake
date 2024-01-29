const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  getACategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controllers.js");

router.route("/").get(getCategories);
router.route("/").post(createCategory);
router.route("/:id").get(getACategory);
router.route("/:id").put(updateCategory);
router.route("/:id").delete(deleteCategory);

module.exports = router;
