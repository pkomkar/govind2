const CourseSubCategory = require("../model/Course_SubCategory_model")
exports.CreateCourseSubCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseSubCategory.create({
            SubCategoryId:Math.floor((Math.random()*100000)+1),
            CategoryId:req.body.CategoryId,
            SubCategoryName:req.body.SubCategoryName,
            SubCategoryStatus:req.body.SubCategoryStatus,
            
          })
        res.json({
            success:true,
            message:"Create Course  SubCategory Details",
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
exports.getAllCourseSubCategory = async(req,res)=>{
    try {
        const result = await CourseSubCategory.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Course SubCategory Details",
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
exports.deleteCourseSubCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseSubCategory.findOneAndDelete({SubCategoryId:req.params.SubCategoryId})
        res.json({
            success:true,
            message:"Delete Course SubCategory Details",
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
exports.updateCourseSubCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseSubCategory.findOneAndUpdate({SubCategoryId:req.body.SubCategoryId},req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Course SubCategory Details",
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
exports.getSingleCourseSubCategoryDetails = async(req,res)=>{
    try {
        const result = await CourseSubCategory.findOne({SubCategoryId:req.params.SubCategoryId})
        res.json({
            success:true,
            message:"get a Single CourseSubCategory Details",
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