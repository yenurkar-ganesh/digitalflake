const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    id: {
      type: Number,
      // unique: true,
    },
    name: {
      type: String,
      required: [true, `Title of category is required!`],
    },
    description: {
      type: String,
      required: [true, `Description is required!`],
    },
    status: {
      type: Boolean,
    },
  },
  { timeStamps: true }
);

const category = mongoose.model("Category", categorySchema);
module.exports = category;
