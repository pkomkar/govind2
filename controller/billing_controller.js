const billing = require("../model/billing_model")
exports.CreatebillingDetails = async(req,res)=>{
    try {
        const result = await billing.create({
            BillinId:Math.floor((Math.random()*100000)+1),
            CountryId:req.body.CountryId,
            StateId:req.body.StateId,
            UserId:req.body.UserId,
            OrderId:req.body.OrderId
          })
        res.json({
            success:true,
            message:"Create Billing Details",
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
exports.getAllbilling = async(req,res)=>{
    try {
        const result = await billing.aggregate([
            {
                $lookup:{
                    from:"countries",
                    localField:"CountryId",
                    foreignField:"CountryId",
                    as:"Country"
                }
            },
            {
                $lookup:{
                    from:"states",
                    localField:"StateId",
                    foreignField:"StateId",
                    as:"State"
                }
            },
            {
                $lookup:{
                    from:"orders",
                    localField:"OrderId",
                    foreignField:"OrderId",
                    as:"Order"
                }
            },

        ])
        res.json({
            count:result.length,
            success:true,
            message:"get billing Details",
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
exports.deletebillingDetails = async(req,res)=>{
    try {
        const result = await billing.findOneAndDelete({BillinId:req.params.BillinId})
        res.json({
            success:true,
            message:"Delete billing Details",
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