const express = require("express");
require("dotenv").config();

const agencyController = require("./src/controllers/agency")
const customerController = require("./src/controllers/customer")
const reviewController = require("./src/controllers/review")
const tripsController = require("./src/controllers/trip")
const seedController = require("./src/controllers/seed")
const AuthRouter = require('./src/controllers/user')
const app = express();
const PORT = process.env.PORT
//imports
const cors = require("cors")
const morgan = require("morgan")

//midleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/auth',AuthRouter)
app.use("/agency", agencyController)
app.use("/customer", customerController)
app.use("/review", reviewController)
app.use('/trip', tripsController)
app.use('/seed', seedController)
 
app.listen(PORT , ()=>{
  console.log(`Listening on port ${PORT}`)
});