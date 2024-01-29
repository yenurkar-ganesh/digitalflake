const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: "String",
      required: [true, `Name of the product is required!`],
    },
    packSize: {
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    mrp: {
      type: Number,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", ProductSchema);
module.exports = Products;
