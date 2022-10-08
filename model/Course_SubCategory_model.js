const mongoose = require("mongoose")

const CourseSubCategorySchema = mongoose.Schema({
    CategoryId:{
        type:Number,
    },
    SubCategoryId:{
        type:Number,
    },
    SubCategoryName:{
     type:String,
    },   
    SubCategoryStatus:{
        type:Boolean,
    },
},{
timestamps:true
})
module.exports = mongoose.model("CourseSubCategory",CourseSubCategorySchema)