const Banner = require("../model/banner_model")
const BannerImage = require("../model/banner_image_model")

exports.CreateBannerDetails = async(req,res)=>{
    try {
        const result = await Banner.create({
            BannerId:Math.floor((Math.random()*100000)+1),
            BannerTitle:req.body.BannerTitle,
            file:req.body.file
          })
        res.json({
            success:true,
            message:"Create Banner Details",
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
exports.getAllBannerDetails = async(req,res)=>{
    try {
        const result = await Banner.aggregate([
            {
                $lookup:{
                    from:"bannerimages",
                    localField:"BannerId",
                    foreignField:"BannerId",
                    as:"BannerImage"
                }
            },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Banner Details",
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
exports.getAllBannerImageDetails = async(req,res)=>{
    try {
        const result = await BannerImage.find()
        res.json({
            count:result.length,
            success:true,
            message:"get Banner Image Details",
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
exports.deleteBannerDetails = async(req,res)=>{
    try {
        const result = await Banner.findOneAndDelete({BannerId:req.params.BannerId})
        res.json({
            success:true,
            message:"Delete Banner Details",
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
exports.updateBannerDetails = async(req,res)=>{
    try {
        const result = await Banner.findOneAndUpdate({BannerId:req.body.BannerId},{
            BannerId:req.body.BannerId,
            BannerTitle:req.body.BannerTitle,
            file:req.body.file,
        } , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Banner Details",
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
exports.getSingleBannerDetails = async(req,res)=>{
    try {
        const result = await Banner.findOne({BannerId:req.params.BannerId})
        res.json({
            success:true,
            message:"get a Single Banner Details",
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