const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require('body-parser')
const { createUser, loginUser,loginAdmin, createAdmin } = require('./controller/userController')
const { questionData, saveTest } = require('./controller/testController')
require('dotenv').config()




/*

*   Middlewares : Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. They are the functions that are invoked by the Express. js routing layer.
*   CORS        : Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resource.
*   Body Parser : body-parser is essential for handling incoming data in a variety of formats, such as JSON, URL-encoded form data, and raw or text data. It transforms this data into a readable format under req.body for easier processing in your application.
*   Mongoose    : The Mongoose module is one of Node.js’s most potent external modules. To transfer the code and its representation from MongoDB to the Node.js server, Mongoose is a MongoDB ODM (Object Database Modelling) tool.

*/


const app = express()



// Middlewares
app.use(cors());
app.use(bodyParser.json());


// Database connecton using mongoose
const uri = process.env.MONGO_URI;
const DBConnect = () => {
    mongoose.connect(uri)
    .then(console.log("Database Connected"))
    .catch(er => console.log("Error While Connecting to database and the Error is : " + er))
}


//Get Routes
app.get("/", (req, res) => {
    res.send("Server is Running")
})


app.get("/data/test", questionData)

//Post Routes
app.post("/user/register", createUser)
app.post("/admin/register", createAdmin)
app.post("/admin/login", loginAdmin)
app.post("/user/login", loginUser)
app.post("/test/result", saveTest)

//Listen
const PORT = 8080
app.listen(PORT, () =>{
    console.log(`Server is Listening on http://localhost:${PORT}`)
})

DBConnect();