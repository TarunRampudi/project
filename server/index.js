const express =require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const CustomerModel = require('./models/customer')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/customer");

app.post('/register',(req,res)=>{
    CustomerModel.create(req.body)
    .then(customers =>res.json(customers))
    .catch(err =>res.json(err))
})

app.listen(3001,() => {
    console.log("server is running")
})