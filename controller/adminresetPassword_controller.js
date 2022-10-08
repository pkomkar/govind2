const admin = require("../model/admin_model")
const bcrypt = require("bcryptjs")
exports.resetPasswordforAdmin  = async(req,res)=>{
    let  data = await admin.find({Email:req.body.Email});
    const responseType = {};
    if(data){
        let currentTime =new Date().getTime();
  let diff = data.expireIn - currentTime;
  if(diff <0){
     responseType.message= 'error'
     responseType.statusText ='Please Resend OTP'
  }else{
   let emailexit = await admin.findOne({Email:req.body.Email}) 
   const hash = await bcrypt.hashSync(req.body.Password)
   emailexit.Password = hash
   emailexit.save();
   responseType.message ='Your Password Changed Successfully' 
   responseType.statusText = 'Success'
  }
     }
     else{
         responseType.message= 'Invalid Otp'
         responseType.statusText ='Please Resend OTP'
  
     }
     
     res.json(responseType)
     
}