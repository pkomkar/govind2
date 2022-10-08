const mongoose = require("mongoose")
const reviewSchema = mongoose.Schema({
    ReviewId:{
        type:Number,
    },
    UserId:{
        type:String,
    },
   ratingNo:{
    type:Number,
   },
   CourseId:{
    type:Number,
},
Comment:{
    type:String,
}
},{
timestamps:true
})
module.exports = mongoose.model("review",reviewSchema)