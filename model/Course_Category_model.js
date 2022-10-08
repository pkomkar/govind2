const mongoose = require("mongoose")

const CourseCategorySchema = mongoose.Schema({
    CategoryId:{
        type:Number,
    },
    CategoryName:{
     type:String,
    },   
    CategoryStatus:{
        type:Boolean,
    },
},{
timestamps:true
})
module.exports = mongoose.model("CourseCategory",CourseCategorySchema)