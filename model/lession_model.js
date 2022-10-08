const mongoose = require("mongoose")

const LessionSchema = mongoose.Schema({
    lessionId:{
        type:Number
    },
    CourseId:{
        type:Number,
    },
    CategoryId:{
        type:Number,
    },
    SubCategoryId:{
        type:Number,
    },
    lessionNo:{
     type:Number,
    },   
    lessionName:{
        type:String,
    },
    Iscomplated:{
        type:Boolean,
        default:false
    },
},{
timestamps:true
})
module.exports = mongoose.model("Lession",LessionSchema)