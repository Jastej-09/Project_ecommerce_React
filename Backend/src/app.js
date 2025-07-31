const express = require("express")
const productRouter = require("./routes/product.router")
const indexRouter = require("./routes/index.router")
const userRouter = require("./routes/user.router")
const cartRouter = require("./routes/Cart.router")
const app = express()
const path = require("path")
const morgon = require("morgan")
const cors = require("cors")
const { log } = require("console")
require("dotenv").config()
app.use(morgon("dev"))


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : true}))




app.use("/", indexRouter) 
app.use("/users", userRouter)
app.use("/cart",cartRouter)
app.use("/products",productRouter)


module.exports = app