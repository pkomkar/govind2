const mongoose = require("mongoose")

const QuizSchema = mongoose.Schema({
    QuizId:{
        type:Number
    },
    CategoryId:{
        type:Number,
    },
    SubCategoryId:{
        type:Number,
    },
    CourseId:{
        type:Number,
    },
    QuizTimeDuration:{
        type:String
    },
    NoofQuizQuestion:{
        type:Number
    },
    QuizMarkingSchema:{
        type:Number
    },
    QuizTitle:{
        type:String,
    },
    QuizQuestionNo:{
     type:Number,
    },
   
},{
timestamps:true
})
module.exports = mongoose.model("Quiz",QuizSchema)