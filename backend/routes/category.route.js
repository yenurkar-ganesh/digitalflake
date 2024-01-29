const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  getACategory,
} = require("../controllers/category.controllers.js");

router.route("/").get(getCategories);
router.route("/").post(createCategory);
router.route("/:id").get(getACategory);

module.exports = router;
