const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://zubiyanshaikh:Zubiyan%40123@cluster0.fsovat3.mongodb.net/IMS";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
