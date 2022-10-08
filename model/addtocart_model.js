const mongoose = require("mongoose")

const AddtoCartSchema = mongoose.Schema({
    CartId:{
        type:Number
    },
    UserId:{
        type:String,
    },
    CourseId:{
        type:Number,
    },

   
},{
timestamps:true
})
module.exports = mongoose.model("addtocart",AddtoCartSchema)