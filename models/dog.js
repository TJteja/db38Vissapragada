const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({  breed: String,  price: Number,  color: String }) 
 
module.exports = mongoose.model("dog", dogSchema) 
