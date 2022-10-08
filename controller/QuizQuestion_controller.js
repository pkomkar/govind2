const QuizQuestion = require("../model/QuizQuestion_model")
exports.CreateQuizQuestionDetails = async(req,res)=>{
    try {
        const result = await QuizQuestion.create({
            QuizQuestionId:Math.floor((Math.random()*100000)+1),
            QuizId:req.body.QuizId,
            QuizQuestion:req.body.QuizQuestion,
            Option1:req.body.Option1,
            Option2:req.body.Option2,
            Option3:req.body.Option3,
            Option4:req.body.Option4,
            CorrectAnswer:req.body.CorrectAnswer,
            
          })
        res.json({
            success:true,
            message:"Create QuizQuestion Details",
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
exports.getAllQuizQuestion = async(req,res)=>{
    try {
        const result = await QuizQuestion.find({QuizId:req.body.QuizId})
        res.json({
            count:result.length,
            success:true,
            message:"get QuizQuestion Details By QuizId",
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
exports.deleteQuizQuestionDetails = async(req,res)=>{
    try {
        const result = await QuizQuestion.findOneAndDelete({QuizQuestionId:req.params.QuizQuestionId})
        res.json({
            success:true,
            message:"Delete QuizQuestion Details",
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
exports.updateQuizQuestionrDetails = async(req,res)=>{
    try {
        const result = await QuizQuestion.findOneAndUpdate({QuizQuestionId:req.body.QuizQuestionId},req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update QuizQuestion Details",
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
exports.getSingleQuizQuestionDetails = async(req,res)=>{
    try {
        const result = await QuizQuestion.findOne({QuizQuestionId:req.params.QuizQuestionId})
        res.json({
            success:true,
            message:"get a Single QuizQuestion Details",
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