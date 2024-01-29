const category = require("../models/category.model.js");
const categorySchema = require("../models/category.model.js");

// GET || GET A CATEGORY
// @route /category
const getCategories = async (req, res) => {
  try {
    const findCategory = await categorySchema.find();

    if (!findCategory) {
      res.status(404).json({ msg: `No Data Found!!` });
    }
    return res.status(200).json(findCategory);
  } catch (error) {
    console.log(`Error while getting data!! ${error} `);
    res.status(404).json("Server Error");
  }
};

// POST || Create New category
// @route /categories
const createCategory = async (req, res) => {
  try {
    const { id, name, description, status } = req.body;
    const newCategory = await categorySchema.create(req.body);
    if (!name || !description || status) {
      res.status(400).json(`All Fields are mandatory!!`);
    }
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(`Error while creating the Category!! ${error}`);
    res.status(500).json(`Internal Server Error`);
  }
};

// GET || Get a Category
// @route  /category/id
const getACategory = async (req, res) => {
  try {
    const findCategory = categorySchema.findById({ _id: req.params.id });
    if (!findCategory || findCategory.length === 0) {
      res.status(404).json({ msg: `No Data Found!!` });
    }
  } catch (error) {
    console.log(`Error while getting data!! ${error} `);
    res.status(404).json("Server Error");
  }
};

module.exports = { getCategories, createCategory, getACategory };
