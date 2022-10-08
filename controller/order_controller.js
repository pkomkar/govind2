const order = require("../model/order_model")
exports.CreateOrderDetails = async(req,res)=>{
    try {
            const result = await order.create({
                CourseId:req.body.CourseId,
                OrderId:Math.floor((Math.random()*100000)+1),
                Total:req.body.Total
            })
            res.json({
                success:true,
                message:"Create Order Details",
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
exports.getorderbyCourse = async(req,res)=>{
    try {
        const result = await order.aggregate([
            {
                $lookup:{
                    from:"courses",
                    localField:"CourseId",
                    foreignField:"CourseId",
                    as:"Course"
                },
             
            },
           
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Order by CourseId Successfully ",
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