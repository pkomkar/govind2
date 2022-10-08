const user = require("../model/user_model")
const bcrypt = require('bcryptjs')
exports.CreateUserDetails = async(req,res)=>{
    try {
        const result = await user.create({
            UserId:Math.floor((Math.random()*100000)+1),
            userName:req.body.userName,
            Email: req.body.Email,
            Password:bcrypt.hashSync(req.body.Password,10),
            Mobile:req.body.Mobile,
            AccountStatus:req.body.AccountStatus,
            DOB:req.body.dob,
            Gender:req.body.Gender
            
          })
        res.json({
            success:true,
            message:"Create User Details",
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
exports.getAllUser = async(req,res)=>{
    try {
        const result = await user.find()
        res.json({
            count:result.length,
            success:true,
            message:"get User Details",
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
exports.deleteUserDetails = async(req,res)=>{
    try {
        const result = await user.findOneAndDelete({UserId:req.params.UserId})
        res.json({
            success:true,
            message:"Delete User Details",
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
exports.updateUserDetails = async(req,res)=>{
    try {
        const result = await user.findOneAndUpdate({UserId:req.body.UserId},{
            UserId:req.body.UserId,
            userName:req.body.userName,
            Email: req.body.Email,
            Password:req.body.Password,
            Mobile:req.body.Mobile,
            AccountStatus:req.body.AccountStatus,
            DOB:req.body.dob,
            Gender:req.body.Gender
        } , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update User Details",
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
exports.getSingleUserDetails = async(req,res)=>{
    try {
        const result = await user.findOne({UserId:req.params.UserId})
        res.json({
            success:true,
            message:"get a Single User Details",
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
exports.deleteAlluser =async(req,res)=>{
try {
    const result = await  user.deleteMany()
res.json({success:"deleteAll User"})
} catch (error) {
    res.json({success:" Something Went worng"})
    
}
}