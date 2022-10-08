const Enrollment = require("../model/Enrollment_model")
exports.CreateEnrollmentDetails = async(req,res)=>{
    try {
        const result = await Enrollment.create({
            EnrollmentId:Math.floor((Math.random()*100000)+1),
            CourseId:req.body.CourseId,
            Date: req.body.Date,
            Status:req.body.Status,
            UserId:req.body.UserId,
            QuizId:req.body.QuizId,
            TotalAmount:req.body.TotalAmount,
            AmountPaid:req.body.AmountPaid
          })
        res.json({
            success:true,
            message:"Create Enrollment Details",
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
exports.getAllEnrollmentDetails = async(req,res)=>{
    try {
        const result = await Enrollment.aggregate([
            {
                $lookup:{
                    from:"quizzes",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"Quiz"
                },
             
            },
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
                    from:"users",
                    localField:"UserId",
                    foreignField:"UserId",
                    as:"User"
                },
             
            },
            
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Enrollment Details",
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
exports.deleteEnrollmentDetails = async(req,res)=>{
    try {
        const result = await Enrollment.findOneAndDelete({EnrollmentId:req.params.EnrollmentId})
        res.json({
            success:true,
            message:"Delete Enrollment Details",
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
exports.updateEnrollmentDetails = async(req,res)=>{
    try {
        const result = await Enrollment.findOneAndUpdate({EnrollmentId:req.body.EnrollmentId},req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Enrollment Details",
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
exports.getSingleEnrollmentDetails = async(req,res)=>{
    try {
        const result = await Enrollment.findOne({EnrollmentId:req.params.EnrollmentId})
        res.json({
            success:true,
            message:"get a Single Enrollment Details",
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
exports.getAllEnrollmentbyQuizAndUserId = async(req,res)=>{
    try {
        const result = await Enrollment.aggregate([
           
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
                    from:"quizzes",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"Quiz"
                },
             
            },
            {
                $match:
                 {
                    $and:[
                        {QuizId:req.body.QuizId},
                        {UserId:req.body.UserId}
                    ]
                   }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Enrollment Details by QuizId  and UserId",
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