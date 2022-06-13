const express = require('express')
const app = express();
const mongoose = require('mongoose')
const{ UserRouter } = require("./router/userRouter")
require('dotenv/config')

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (error, client) => {
        if(error) {
            return console.log(error)
        }
        console.log("connected to database")
    }
)

app.use(express.json())

app.use("/auth", UserRouter)
app.use("/", (req, resp) => {
    resp.send("backend working")
})

module.exports = app;