const score = require("../model/score_model")
exports.CreateScoreDetails = async(req,res)=>{
    try {
        const result = await score.create({
            UserId:req.body.UserId,
            CourseId:req.body.CourseId,
            CategoryId:req.body.CategoryId,
            SubCategoryId:req.body.SubCategoryId,
            QuizId:req.body.QuizId,
            TotalQuestion:req.body.TotalQuestion,
            TotalCorrectAnswer:req.body.TotalCorrectAnswer,
            TotalWorngAnswer:req.body.TotalWorngAnswer,

        })
        res.json({
            success:true,
            message:"Create score Details",
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
exports.getAllscore = async(req,res)=>{
    try {
        const result = await score.aggregate([
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
                    from:"quizzes",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"Quiz"
                }
            },

        ])
        res.json({
            count:result.length,
            success:true,
            message:"get score Details",
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
exports.getAllscorebyQuiz = async(req,res)=>{
    try {
        const result = await score.aggregate([
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
                    from:"quizzes",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"Quiz"
                }
            },
            {
                $match:{QuizId:req.body.QuizId}
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get score Details by QuizId ",
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
exports.getAllscorebyQuizAndUserId = async(req,res)=>{
    try {
        const result = await score.aggregate([
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
                    from:"quizzes",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"Quiz"
                }
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
            message:"get score Details by QuizId  and UserId",
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

