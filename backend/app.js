// console.log("digitalFlake");

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./connection/connect");
const PORT = process.env.PORT || 3100;
require("dotenv").config();

// connection to Database
connectDB();

// middlewares
app.use(express.json());
app.use("/categories", require("./routes/category.route.js"));

app.listen(PORT, () => {
  console.log(`Server running on Port http://localhost:${PORT} `);
});
