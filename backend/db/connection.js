///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();

/////////////////////////////////////
// MONGOOSE CONNECTION
/////////////////////////////////////

const mongoose = require("mongoose");
const config = { 
  useUnifiedTopology: true,
  useNewUrlParser: true ,
  useFindAndModify:false,
};
const DB = mongoose.connection;

mongoose.connect(process.env.MONGODBURI, config);

DB.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;