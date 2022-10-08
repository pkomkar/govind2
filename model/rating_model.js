const mongoose = require("mongoose")
const ratingSchema = mongoose.Schema({
   ratingNo:{
    type:Number,
   },
   ratingName:{
    type:String,
   }
  
},{
timestamps:true
})
module.exports = mongoose.model("rating",ratingSchema)