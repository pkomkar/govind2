const mongoose = require("mongoose")

const EnrollmentSchema = mongoose.Schema({
    Date:{
        type:String,
    },
    EnrollmentId:{
        type:String,
    },
    CourseId:{
        type:Number,
    }, 

    UserId:{
        type:String,
    },
    Status:{
        type:Boolean
    },
    QuizId:{
        type:Number
    },
    TotalAmount:{
        type:Number,
    },
    AmountPaid:{
        type:Number,
    }
},{
timestamps:true
})
module.exports = mongoose.model("Enrollment",EnrollmentSchema)