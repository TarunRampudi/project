const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({

    name : {type:String, require},
    varients :[],
    prices:[],
    category :{type:String,require},
    image:{type:String,require},
    decription:{type:String,require},
} ,{
    timestamps:true,
})


const pizzaModel = mongoose.model('Pizzas',pizzaSchema)

module.exports = pizzaModel