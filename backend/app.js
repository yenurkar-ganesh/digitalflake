const express = require("express");
const app = express();
// const connectDB = require("./connection/connect.js");
const PORT = process.env.PORT || 3100;
const cors = require("cors");
const connectDB = require("./connection/connect.js");

// connection to Database
connectDB();

// middlewares
app.use(express.json());
require("dotenv").config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// route
app.use("/categories", require("./routes/category.route.js"));
app.use("/products", require("./routes/product.route.js"));

app.listen(PORT, () => {
  console.log(`Server running on Port http://localhost:${PORT} `);
});
