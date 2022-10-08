const Course = require("../model/Course_model")
exports.CreateCourseDetails = async(req,res)=>{
    try {
        const result = await Course.create({
            CourseId:Math.floor((Math.random()*100000)+1),
            CategoryId:req.body.CategoryId,
            SubCategoryId:req.body.SubCategoryId,
            CourseName:req.body.CourseName,
            CourseDuration:req.body.CourseDuration,
            WhatWeCover:req.body.WhatWeCover,
            CoursePrice:req.body.CoursePrice,
            NoofLession:req.body.NoofLession,
            AuthorName:req.body.AuthorName,
            levelofCourse:req.body.levelofCourse,
          })
        res.json({
            success:true,
            message:"Create Course  Details",
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
exports.getAllCourseDetails = async(req,res)=>{
    try {
        const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },
            {
                $lookup:{
                    from:"courseimages",
                    localField:"CourseId",
                    foreignField:"CourseId",
                    as:"CourseImage"
                }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Course  Details",
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
exports.deleteCourseDetails = async(req,res)=>{
    try {
        const result = await Course.findOneAndDelete({CourseId:req.params.CourseId})
        res.json({
            success:true,
            message:"Delete Course  Details",
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
exports.updateCourseDetails = async(req,res)=>{
    try {
        const result = await Course.findOneAndUpdate({CourseId:req.body.CourseId},{
            CourseId:req.body.CourseId,
            CategoryId:req.body.CategoryId,
            SubCategoryId:req.body.SubCategoryId,
            CourseName:req.body.CourseName,
            CourseDuration:req.body.CourseDuration,
            WhatWeCover:req.body.WhatWeCover,
            CoursePrice:req.body.CoursePrice,
            NoofLession:req.body.NoofLession,
            AuthorName:req.body.AuthorName,
            levelofCourse:req.body.levelofCourse,
        },{
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Course  Details",
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
exports.getSingleCourseDetails = async(req,res)=>{
    try {
        const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },
            {
                $lookup:{
                    from:"courseimages",
                    localField:"CourseId",
                    foreignField:"CourseId",
                    as:"CourseImage"
                }
            },
            {
                $match:{CourseId:req.body.CourseId}
            }
        ])
      
        res.json({
            success:true,
            message:"get a Single Course Details",
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
exports.getCourseDetailsByCourseName = async(req,res)=>{
    try {
        const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },
            {
          $match:{CourseName:req.body.CourseName}
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Course  Details",
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
exports.getCourseDetailsByCategoryName = async(req,res)=>{
    try {
        const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },
            {
          $match:{"Category.CategoryName":req.body.CategoryName}
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Course  Details by Category Name",
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
exports.SaveCourseforLater = async(req,res)=>{
    try {
        const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },
          
        ])
        res.json({
            count:result.length,
            success:true,
            message:"Save Course for Later",
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
exports.InprogressApi = async(req,res)=>{
    try {
        const lesson = await Course.findOne({NoofLession})
        if(lesson){ 
            const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"Inprogress Api",
            data:result
        })}
       
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.DoneCourseApi = async(req,res)=>{
    try {
        const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },      
        ])
        res.json({
            count:result.length,
            success:true,
            message:"Done Course Successfully",
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
exports.getCategorybylowestCoursePrice = async(req,res)=>{
    try {
        const result = await Course.aggregate([
            {
                $lookup:{
                    from:"coursecategories",
                    localField:"CategoryId",
                    foreignField:"CategoryId",
                    as:"Category"
                }
            },
            {
                $lookup:{
                    from:"coursesubcategories",
                    localField:"SubCategoryId",
                    foreignField:"SubCategoryId",
                    as:"SubCategory"
                }
            },
            {
                $match:{CategoryId:req.body.CategoryId}
            }      
        ]).sort({CoursePrice:1})
        res.json({
            count:result.length,
            success:true,
            message:"  get Category by lowest Course Price ",
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
