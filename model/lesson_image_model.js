const mongoose = require("mongoose")

const lessonSchema = mongoose.Schema({
    lessonImageId:{type:Number,},
    lessionId:{
        type:Number,
    },
    file:{
        type:String,
        
    },
},{
timestamps:true
})
module.exports = mongoose.model("lessonImage",lessonSchema)