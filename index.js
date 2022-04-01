require("dotenv").config();
var cors = require('cors')
const express = require('express');
const connect = require('./confiq/db')
const app = express();
const path = require('path')

//const passport = require("./confiq/google-oauth");

app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json());
app.use(cors())
const userController = require('./controllers/usercontroller')
//const productController = require('./controllers/product.controller')
//const cataController = require('./controllers/category.controller')

app.use("", userController)



app.listen(8888, '0.0.0.0', async () => {
    await connect();
    console.log("listen on port 8888")
})