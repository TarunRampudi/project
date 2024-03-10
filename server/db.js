const { Mongoose, default: mongoose } = require("mongoose");

var mongoURL = 'mongodb+srv://admin:admin@cluster0.hm21zhk.mongodb.net/mern-pizza'

//mongoose.connect(mongoURL,{useUnifiedTopology:true})
//mongoose.connect(mongoURL,{useUnifiedToPology:true , useUrlParser:true})
mongoose.connect(mongoURL)
var db =mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Sucessfull');
})


db.on('error',()=>{
    console.log('Mongo DB Connection Failed');
})

module.exports=mongoose