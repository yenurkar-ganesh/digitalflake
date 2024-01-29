const mongoose = require("mongoose");
const { connect } = require("http2");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://digitalFlake:digitalFlake@digitalflakecluster.8yht5er.mongodb.net"
    );
    console.log("DataBase Connect Successfully....");
  } catch (error) {
    console.log(`Error while connecting to database ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
