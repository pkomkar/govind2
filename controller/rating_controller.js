const rating = require("../model/rating_model")
exports.getAllrating = async(req,res)=>{
    try {
        const result = await rating.find()
        res.json({
            count:result.length,
            success:true,
            message:"get rating Details",
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