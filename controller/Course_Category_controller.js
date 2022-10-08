const CourseCategory = require("../model/Course_Category_model")
exports.CreateCourseCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseCategory.create({
            CategoryId:Math.floor((Math.random()*100000)+1),
            CategoryName:req.body.CategoryName,
            CategoryStatus:req.body.CategoryStatus,
            
          })
        res.json({
            success:true,
            message:"Create Course Category Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
exports.getAllCourseCategory = async(req,res)=>{
    try {
        const result = await CourseCategory.find()
        res.json({
            count:result.length,
            success:true,
            message:"get Course Category Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.deleteCourseCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseCategory.findOneAndDelete({CategoryId:req.params.CategoryId})
        res.json({
            success:true,
            message:"Delete Course Category Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateCourseCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseCategory.findOneAndUpdate({CategoryId:req.body.CategoryId},req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Course Category Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}
exports.getSingleCourseCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseCategory.findOne({CategoryId:req.params.CategoryId})
        res.json({
            success:true,
            message:"get a Single CourseCategory Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}