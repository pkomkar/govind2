const mongoose = require("mongoose")

const QuizQuestionSchema = mongoose.Schema({
    QuizQuestionId:{
        type:Number
    },
    QuizId:{
        type:Number
    },
    QuizQuestion:{
        type:String,
      
    },
    Option1:{
        type:String, 
    },
    Option2:{
        type:String, 
    },
    Option3:{
        type:String, 
    },
    Option4:{
        type:String, 
    },
    CorrectAnswer:{
        type:String,
    }
},{
timestamps:true
})
module.exports = mongoose.model("QuizQuestion",QuizQuestionSchema)