const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    CourseId:{
        type:Number,
    },
    UserId:{
        type:String,
    },
    CategoryId:{
        type:Number,
    },
    SubCategoryId:{
        type:Number,
    },
    CourseName:{
     type:String,
    },   
    CourseDuration:{
        type:String,
    },
    WhatWeCover:{
        type:String,
    },
    CoursePrice:{
        type:Number,
    },
    NoofLession:{
        type:Number
    },
    AuthorName:{
        type:String
    },
    levelofCourse:{
        type:String
    },

},{
timestamps:true
})
module.exports = mongoose.model("Course",CourseSchema)