const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase Connect Successfully....");
  } catch (error) {
    console.log(`Error while connecting to database ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
