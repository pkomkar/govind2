const review = require("../model/review_model")
exports.CreatereviewDetails = async(req,res)=>{
    try {
        const result = await review.create({
            ReviewId:Math.floor((Math.random()*100000)+1),
            UserId:req.body.UserId,
            ratingNo:req.body.ratingNo,
            CourseId:req.body.CourseId,
            Comment:req.body.Comment
        })
        res.json({
            success:true,
            message:"Create Review Details",
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
exports.getAllReview = async(req,res)=>{
    try {
        const result = await review.aggregate([
            {
                $lookup:{
                    from:"courses",
                    localField:"CourseId",
                    foreignField:"CourseId",
                    as:"Course"
                },
             
            },
            {
                $lookup:{
                    from:"ratings",
                    localField:"ratingNo",
                    foreignField:"ratingNo",
                    as:"Rating"
                },
             
            },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Review Successfully ",
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
exports.deleteReviewDetails = async(req,res)=>{
    try {
        const result = await review.findOneAndDelete({ReviewId:req.params.ReviewId})
        res.json({
            success:true,
            message:"Delete Review Details",
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
exports.getReviewbyCourse = async(req,res)=>{
    try {
        const result = await review.aggregate([
            {
                $lookup:{
                    from:"courses",
                    localField:"CourseId",
                    foreignField:"CourseId",
                    as:"Course"
                },
             
            },
            {
                $lookup:{
                    from:"ratings",
                    localField:"ratingNo",
                    foreignField:"ratingNo",
                    as:"Rating"
                },
             
            },
            {
                $match:{CourseId:req.body.CourseId}
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Review by CourseId Successfully ",
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