const Country = require("../model/country_model")
exports.getStatebyCountry = async(req,res)=>{
    try {
        const result = await Country.aggregate([
            {
                $lookup:{
                    from:"states",
                    localField:"countryCode",
                    foreignField:"countryCode",
                    as:"State"
                }
            },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"All State with Country",
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