const lession = require("../model/lession_model")
exports.CreatelessionDetails = async(req,res)=>{
    try {
        const result = await lession.create({
            lessionId:Math.floor((Math.random()*100000)+1),
            CourseId:req.body.CourseId,
            CategoryId:req.body.CategoryId,
            SubCategoryId:req.body.SubCategoryId,
            lessionNo:req.body.lessionNo,
            lessionName:req.body.lessionName,
            Iscomplated:req.body.Iscomplated
          })
        res.json({
            success:true,
            message:"Create lession Details",
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
exports.getAlllessionDetails = async(req,res)=>{
    try {
        const result = await lession.aggregate([
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
                    from:"lessonimages",
                    localField:"lessionId",
                    foreignField:"lessionId",
                    as:"lessionImage"
                }
            },
            
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get lession Details",
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
exports.deletelessionDetails = async(req,res)=>{
    try {
        const result = await lession.findOneAndDelete({lessionId:req.params.lessionId})
        res.json({
            success:true,
            message:"Delete lession Details",
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
exports.updatelessionDetails = async(req,res)=>{
    try {
        const result = await lession.findOneAndUpdate({lessionId:req.body.lessionId}, {
            lessionId:req.body.lessionId,
            CourseId:req.body.CourseId,
            CategoryId:req.body.CategoryId,
            SubCategoryId:req.body.SubCategoryId,
            lessionNo:req.body.lessionNo,
            lessionName:req.body.lessionName,
            Iscomplated:req.body.Iscomplated


        }, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update lession Details",
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
exports.getSinglelessionDetails = async(req,res)=>{
    try {
        const result = await lession.findOne({lessionId:req.params.lessionId})
        res.json({
            success:true,
            message:"get a Single lession Details",
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
exports.getAlllessionDetailsbyCourse = async(req,res)=>{
    try {
        const result = await lession. aggregate([
            {
                $lookup:{
                    from:"lessonimages",
                    localField:"lessionId",
                    foreignField:"lessionId",
                    as:"lessionImage"
                }
            },
            {
                $match:{CourseId:req.body.CourseId}
            }
        ])
        
        res.json({
            count:result.length,
            success:true,
            message:"get All lession Details by Course",
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
