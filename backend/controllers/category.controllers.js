// const category = require("../models/category.model.js");
const categorySchema = require("../models/category.model.js");

// GET || GET A CATEGORY
// @route /category
const getCategories = async (req, res) => {
  try {
    const findCategory = await categorySchema.find();

    if (!findCategory) {
      return res.status(404).json({ msg: "No Data Found!!" });
    }

    return res.status(200).json(findCategory);
  } catch (error) {
    console.error(`Error while getting data: ${error}`);
    return res.status(500).json("Server Error");
  }
};
// POST || Create New category
// @route /categories
const createCategory = async (req, res) => {
  try {
    const { id, name, description, status } = req.body;
    const newCategory = await categorySchema.create({
      id,
      name,
      description,
      status,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(`Error while creating the Category!! ${error}`);
    res.status(500).json(`Internal Server Error`);
  }
};

// GET || Get a Category
// @route  /category/:id
const getACategory = async (req, res) => {
  try {
    const findCategory = await categorySchema.findById({ _id: req.params.id });
    if (!findCategory) {
      res.status(404).json(`No Data Found!!`);
    }
    return res.status(200).json(findCategory);
  } catch (error) {
    console.log(`Error while getting data!! ${error} `);
    res.status(500).json("Server Error");
  }
};

// PUT || Update a Category
// @route /categories/:id
const updateCategory = async (req, res) => {
  try {
    const findCategory = await categorySchema.findById({ _id: req.params.id });
    if (!findCategory || findCategory.length === 0) {
      res.status(400).json({ msg: `No Data Found!!` });
    }

    const updatedData = await categorySchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedData) {
      throw new Error("Updating Failed!!!");
    }
    return res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE || Delete a Category
// @route /categories/:id
const deleteCategory = async (req, res) => {
  try {
    const findCategory = await categorySchema.findById({ _id: req.params.id });
    if (!findCategory || findCategory.length === 0) {
      res.status(400).json({ msg: `No Data Found!!` });
    }

    const deleteData = await categorySchema.findByIdAndDelete(
      req.params.id,
      req.body
    );
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(500).json(`Server Error! error`);
  }
};

module.exports = {
  getCategories,
  createCategory,
  getACategory,
  updateCategory,
  deleteCategory,
};
