const express =require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const CustomerModel = require('./models/pizzaModels')
//const Pizza = require('./models/pizzaModel')

const db = require("./db")
const app =express()
app.use(express.json())
app.use(cors())

//mongoose.connect("mongodb://127.0.0.1:27017/customer");

app.post('/register',(req,res)=>{
    CustomerModel.create(req.body)
    .then(customers =>res.json(customers))
    .catch(err =>res.json(err))
})


app.get("/getpizzas",(req,res)=>{
   Pizza.find({},(err , docs)=>{
     
    if(err){
        console.log(err);
    }
    else{
        console.log(docs);
    }
   })
});




app.listen(3001,() => {
    console.log("server is running")
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>'Server runnning on port ')