const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    CourseImageId:{type:Number,},
    CourseId:{
        type:Number,
    },
    file:{
        type:String,
        
    },
},{
timestamps:true
})
module.exports = mongoose.model("CourseImage",CourseSchema)