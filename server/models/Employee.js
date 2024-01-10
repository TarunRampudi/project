const mongoose = require('mongoose')


const EmplyeeSchema =new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
})

const EmplyeeModel = mongoose.model("employees",EmplyeeSchema)
module.exports = EmplyeeModel