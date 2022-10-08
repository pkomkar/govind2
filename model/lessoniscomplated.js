const mongoose = require("mongoose")

const lessoniscomplatedSchema = mongoose.Schema({
    lessionId:{
        type:Number,
    },
    UserId:{
        type:String,
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
Iscomplated:{
    type:Boolean,
    default:false
},
},{
timestamps:true
})
module.exports = mongoose.model("lessoniscomplated",lessoniscomplatedSchema)