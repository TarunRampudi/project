const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
})

const CustomerModel = mongoose.model("customers",CustomerSchema)
module.export = CustomerModel