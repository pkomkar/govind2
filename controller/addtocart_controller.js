const addtocart = require("../model/addtocart_model")
exports.CreateaddtoCartDetails = async(req,res)=>{
    try {
        const cart =await addtocart.findOne({CourseId:req.body.CourseId})
        if(cart){
            return res.status(400).json({error:"Course Id Not Found"})
        }
    else{
        const result = await addtocart.create({
            CartId:Math.floor((Math.random()*100000)+1),
            UserId:req.body.UserId,
            CourseId:req.body.CourseId
        })
        res.json({
            success:true,
            message:"Create Cart Details",
            data:result
        })
    }
        
       
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
    exports.getAllCart = async (req, res) => {
        try {
          const result=await addtocart.aggregate([
            {
                $lookup:{
                    from:'courses',
                    localField:'CourseId',
                    foreignField:'CourseId',
                    as:"Course"
                }
            },
            {
              $lookup:{
                  from:'users',
                  localField:'UserId',
                  foreignField:'UserId',
                  as:"User"
              }
          },
          
          ])
          res.status(200).json({
            count:result.length,
            success: true,
            message: "Get all Cart Successfully",
            data: result,
          });
        } catch (error) {
          res.status(404).json({
            success: false,
            message: `Unable to Get all Cart Successfully ${error}`,
            data: null,
          });
        }
      };
      exports.deleteCartDetails = async (req, res) => {
        try {
          const data = await addtocart.findOneAndDelete({CartId:req.params.CartId});
           
          res.status(200).json({
            success: true,
            message: "Delete Successfullly",
            data: null,
          });
        } catch (error) {
          res.status(404).json({
            success: false,
            message: `Unable to delete Cart ${error}`,
            data: null,
          });
        }
      };
      exports.updateCartDetails = async (req, res) => {
        try {
          const isId = await addtocart.findOneAndUpdate({CartId:req.body.CartId});
          if (!isId) {
            res.status(404).json({
              success: false,
              message: `Invalid ID ${error}`,
              data: null,
            });
          }
          const data = await addtocart.findOneAndUpdate({CartId:req.body.CartId}, req.body, {
            new: true,
            runValidators: true,
          });
          res.status(200).json({
            success: true,
            message: "Update Successfullly",
            data: data,
          });
        } catch (error) {
          res.status(404).json({
            success: false,
            message: `Unable to update Cart ${error}`,
            data: null,
          });
        }
      };
      
