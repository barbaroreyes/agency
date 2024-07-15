const express = require("express");
require("dotenv").config();

const agencyController = require("./controllers/agency")
const customerController = require("./controllers/customer")
const reviewController = require("./controllers/review")
const tripsController = require("./controllers/trip")
const seedController = require("./controllers/seed")
const AuthRouter = require('./controllers/user')
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
 
