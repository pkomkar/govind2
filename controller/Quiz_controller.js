const Quiz = require("../model/Quiz_model")
exports.AddQuizDetails = async(req,res)=>{
    try {
        const result = await Quiz.create({
            QuizId:Math.floor((Math.random()*100000)+1),
            CategoryId:req.body.CategoryId,
            SubCategoryId: req.body.SubCategoryId,
            CourseId:req.body.CourseId,
            QuizTimeDuration:req.body.QuizTimeDuration,
            NoofQuizQuestion:req.body.NoofQuizQuestion,
            QuizMarkingSchema:req.body.QuizMarkingSchema,
            QuizTitle:req.body.QuizTitle,
            QuizQuestionNo:req.body.QuizQuestionNo, 
          })
        res.json({
            success:true,
            message:"Add Quiz Details",
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
exports.getAllQuiz = async(req,res)=>{
    try {
        const result = await Quiz.aggregate([
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
                    from:"quizquestions",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"QuizQuestion"
                }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Quiz Details",
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
exports.deleteQuizDetails = async(req,res)=>{
    try {
        const result = await Quiz.findOneAndDelete({QuizId:req.params.QuizId})
        res.json({
            success:true,
            message:"Delete Quiz Details",
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
exports.updateQuizDetails = async(req,res)=>{
    try {
        const result = await Quiz.findOneAndUpdate({QuizId:req.body.QuizId},req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Quiz Details",
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
exports.getSingleQuizDetails = async(req,res)=>{
    try {
        const result = await Quiz.aggregate([
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
                    from:"quizquestions",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"QuizQuestion"
                }
            },
            {
                $match:{QuizId:req.body.QuizId}
            }
        ])
        res.json({
            success:true,
            message:"get a Single Quiz Details",
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
exports.getQuizDetailsbyCourseId = async(req,res)=>{
    try {
        const result = await Quiz.aggregate([
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
                    from:"quizquestions",
                    localField:"QuizId",
                    foreignField:"QuizId",
                    as:"QuizQuestion"
                }
            },
            {
                $match:{CourseId:req.body.CourseId}
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get a  Quiz Details by CourseId",
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