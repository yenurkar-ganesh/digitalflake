const product = require("../models/products.model.js");

// get products
const getProduct = async (req, res) => {
  try {
    const findProduct = await product.find();
    if (!findProduct) {
      res.status(404).json({ msg: `No Data Found!!` });
    }
    return res.status(200).json(findProduct);
  } catch (error) {
    console.log(`Error while getting data!! ${error} `);
    res.status(500).json("Server Error");
  }
};

// create a product
const createProduct = async (req, res) => {
  try {
    const { id, name, mrp, category, packSize, status } = req.body;
    const newProduct = await product.create({
      id,
      name,
      mrp,
      packSize,
      category,
      status,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(`Error while creating the Product!! ${error}`);
    res.status(500).json(`Internal Server Error`);
  }
};

// get a product
const getAProduct = async (req, res) => {
  try {
    const findProduct = await product.findById({ _id: req.params.id });
    if (!findProduct) {
      res.status(404).json(`No Data Found!!`);
    }
    return res.status(200).json(findProduct);
  } catch (error) {
    console.log(`Error while getting data!! ${error} `);
    res.status(500).json("Server Error");
  }
};

// update a product
const updateProduct = async (req, res) => {
  try {
    const findProduct = await product.findById({ _id: req.params.id });
    if (!findProduct || findProduct.length === 0) {
      res.status(400).json({ msg: `No Data Found!!` });
    }

    const updatedData = await product.findByIdAndUpdate(
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

// delete  a product
const deleteProduct = async (req, res) => {
  try {
    const findProduct = await product.findById({ _id: req.params.id });
    if (!findProduct || findProduct.length === 0) {
      res.status(400).json({ msg: `No Data Found!!` });
    }

    const deleteData = await product.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(500).json(`Server Error! error`);
  }
};

module.exports = {
  getProduct,
  createProduct,
  getAProduct,
  updateProduct,
  deleteProduct,
};
