const mongoose = require("mongoose")

const ScoreSchema = mongoose.Schema({
    UserId:{
        type:String,
    },
    CourseId:{
        type:Number,
    },
    CategoryId:{
        type:Number
    } ,  
    SubCategoryId:{
        type:Number,
    },
       QuizId:{
        type:Number,
    },
    TotalQuestion:{
        type:Number,
    },
    TotalCorrectAnswer:{
        type:Number
    },
    TotalWorngAnswer:{
        type:Number
    }
},{
timestamps:true
})
module.exports = mongoose.model("Score",ScoreSchema)